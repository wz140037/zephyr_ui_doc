# ZzButton 按钮

## 简介
念念不忘，必有回响。

## 安装 & 引入

```bash
npm install zephyr-ui
// 按需引入
import { ZzButton } from '@zephyr_zz/zephyr-ui';
```

## 代码演示

<script setup lang="ts">
// 引入md中所需要用到的vue文件
import PropsTableVue from './props.vue'
import { ElButton } from 'element-plus'
</script>

### 基础用法
----
<ZzButton>默认按钮</ZzButton>

```vue
<script setup lang="ts">
import { ZzButton } from '@zephyr_zz/zephyr-ui';
</script>

<template>
  <div class="container">
    <ZzButton>默认按钮</ZzButton>
  </div>
</template>
```

### 禁用状态
----

<ElButton type='primary' size='large' disabled>默认按钮</ElButton>

```vue
<template>
  <div class="container">
    <ZzButton disabled>默认按钮</ZzButton>
  </div>
</template>
```
### 按钮类型
----

<div class="container">
  <ZzButton>默认按钮</ZzButton>
  <ZzButton :style="{marginLeft: '10px'}" type="success">成功按钮</ZzButton>
  <ZzButton :style="{marginLeft: '10px'}" type="warning">警告按钮</ZzButton>
</div>

```vue
<script setup lang="ts">
  import { ZzButton } from '@zephyr_zz/zephyr-ui';
</script>
<template>
  <div class="container">
    <ZzButton>默认按钮</ZzButton>
    <ZzButton type="success">成功按钮</ZzButton>
    <ZzButton type="warning">警告按钮</ZzButton>
  </div>
</template>
```

## ZephyrButton API

### ZephyrButton Props

----

<PropsTableVue></PropsTableVue>

<style>
.container {
    >*+* {
      margin-left: 10px;
    }
}
</style>