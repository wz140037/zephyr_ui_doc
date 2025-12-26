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

<style lang="scss" scoped>
.select-demo_base {
  width: 100%;

  .user-item {
    display: flex;

    >* {
      border: 1px solid #ccc;
      padding: 5px;
    }
  }

  .user-item_name {
    display: inline-block;
    width: 200px;
  }

  .user-department_text {
    user-select: none;
    align-items: center;
    background-color: var(--el-fill-color-blank);
    border-radius: var(--el-border-radius-base);
    box-shadow: 0 0 0 1px var(--el-border-color) inset;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    gap: 6px;
    line-height: 24px;
    min-height: 32px;
    padding: 4px 12px;
    position: relative;
    text-align: left;
    transform: translateZ(0);
    transition: var(--el-transition-duration);
  }

  .user-item_department {
    flex: 1;
    overflow: hidden;
  }

  .text {
    display: inline-block;
    flex: 1;
  }
}
</style>