# ZephyrWrapper 包裹器

## 简介

一眼朝如青丝，暮成雪。

## 使用方法

### 基础用法
---
<script setup lang="ts">
  import BaseDemo from './base.vue';
  import EnableDemo from './enable.vue';
  import SlotDemo from './slot.vue';
  import HFunctionDemo from './hFunc.vue';
  import PropsTableVue from './propsTable.vue';
</script>

<ClientOnly>
<BaseDemo></BaseDemo>
</ClientOnly>

```vue
<script setup lang="ts">
import { ZephyrWrapper } from '@zephyr_zz/zephyr-ui'
import { ElScrollbar } from 'element-plus'

</script>

<template>
  <div class="wrapper-demo_base">
    <ZephyrWrapper :is="ElScrollbar" :show="true" :is-props="{ height: '300px' }">
      <p v-for="(item, index) in 100" :key="index">
        {{ '数据' + item }}
      </p>
    </ZephyrWrapper>
  </div>
</template>

<style lang="scss">
.wrapper-demo_base {
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
}
</style>
```

### 开启和关闭
---
<ClientOnly>
<EnableDemo></EnableDemo>
</ClientOnly>

```vue
<script setup lang="ts">

... 其它代码 ...
const isOpen = ref(true)

</script>

<template>
  <div class="wrapper-demo">
    <p>
      是否开启：
      <ElSwitch v-model="isOpen" />
    </p>
    <div class="wrapper-demo_base">
      <ZephyrWrapper :is="ElScrollbar" :show="isOpen" :is-props="{ height:'300px'}">
        <p v-for="(item, index) in 100" :key="index">
          {{ '数据' + item }}
        </p>
      </ZephyrWrapper>
    </div>
  </div>
</template>

... 其它代码 ...

```

### 使用插槽
---
<ClientOnly>
<SlotDemo></SlotDemo>
</ClientOnly>

```vue
... 其它代码 ...

<template>
  <div class="wrapper-demo_slot">
    <ZephyrWrapper :is="ElTooltip" :show="true" :is-props="{ trigger: 'click' }">
      <template #content>
        <div>
          我是tooltip内容！！！！
        </div>
      </template>
      <ElButton>点击我</ElButton>
    </ZephyrWrapper>
  </div>
</template>

... 其它代码 ...

```

### 使用h函数
---
<ClientOnly>
<HFunctionDemo></HFunctionDemo>
</ClientOnly>

```vue
<script setup lang="ts">
... 其它代码 ...
import { h } from 'vue';

const is = h(ElTooltip, { trigger: 'click' }, {
  default: () => h(ElButton, '点击我'),
  content: () => h('div', '我是tooltip内容')
})

</script>

<template>
  <div class="wrapper-demo_hfunc">
    <ZephyrWrapper :is="is" :show="true">
    </ZephyrWrapper>
  </div>
</template>

... 其它代码 ...

```

## ZephyrWrapper API

### ZephyrWrapper Props
---

<PropsTableVue></PropsTableVue>