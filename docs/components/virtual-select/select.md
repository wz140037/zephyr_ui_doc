# VirtualSelect 的一些实践

## 简介
你看不到的，都藏在了细节里。

## 场景描述
我们简单的假设用户有姓名、部门两个信息字段，其中部门数据来自于系统的部门列表，这数据量将会非常的大，如果直接渲染到页面上，将会导致页面的卡顿甚至内存卡爆。接下来，看我们是如何解决这一问题的。 

### 方案实践
---
<script setup lang="ts">
  import BaseDemo from './base.vue';
</script>

<ClientOnly>
<BaseDemo></BaseDemo>
</ClientOnly>

```vue
<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { ElSelectV2, ElIcon } from 'element-plus'
import type { ElSelectV2 as ElSelectV2Type } from 'element-plus'
import { nextTick, ref, useTemplateRef, watch } from 'vue'

type ElSelectV2Instance = InstanceType<typeof ElSelectV2Type> | null

// 模拟100000条数据的options
const options = Array.from({ length: 100000 }, (_, i) => {
  // 生成唯一的id
  const id = Date.now().toString(36) + Math.random().toString(36).substr(2, 5) + i.toString(36)
  return {
    value: id,
    label: `部门 ${i + 1}`
  }
})

// 组件创建时应该创建一个用于存储options的map
const optionsMap = new Map(options.map(option => [option.value, option.label]))
const userData = ref([
  {
    name: '张三',
    department: options[31].value
  },
  {
    name: '李四',
    department: options[107].value
  },
  {
    name: '王五',
    department: options[412].value
  },
  {
    name: '赵六',
    department: options[212].value
  },
  {
    name: '钱七',
    department: options[700].value
  },
])

const activeIndex = ref<number | null>(null)
const select = useTemplateRef<ElSelectV2Instance>('selectRef')
const handleClick = (index: number) => {
  activeIndex.value = index
}

watch(() => activeIndex.value, async (v) => {
  if (v || v === 0) {
    await nextTick()
    const root = select.value?.[0]?.$el
    const input = root?.querySelector('input') as HTMLElement | null
    if (input) {
      input.focus()
      input.click()
    }
  }
}, { immediate: true, deep: true })

</script>

<template>
  <div class="select-demo_base">
    <div v-for="(item, index) in userData" :key="index" class="user-item">
      <span class="user-item_name">{{ item.name }}</span>
      <div class="user-item_department">
        <div @click="handleClick(index)" v-if="activeIndex !== index" class="user-department_text">
          <span class="text">{{ optionsMap.get(item.department) }}</span>
          <ElIcon>
            <ArrowDown />
          </ElIcon>
        </div>
        <ElSelectV2 v-if="activeIndex === index" :options="options" v-model="item.department" ref="selectRef">
        </ElSelectV2>
      </div>
    </div>
  </div>
</template>

...其它代码

```