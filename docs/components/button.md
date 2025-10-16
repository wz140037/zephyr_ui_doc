# ZzButton 按钮

按钮用于触发操作，比如提交表单、跳转页面或触发自定义事件。

## 何时使用

- 提交表单
- 弹出对话框
- 触发自定义事件


## 安装 & 引入

```bash
npm install zephyr-ui

import { ZzButton } from '@zephyr_zz/zephyr-ui';
```

## 代码演示

### 基础用法

```vue
<script setup lang="ts">
import { ZzButton } from '@zephyr_zz/zephyr-ui';
</script>

<template>
  <div>
    <ZzButton>默认按钮</ZzButton>
    <ZzButton type="primary">主要按钮</ZzButton>
    <ZzButton type="success">成功按钮</ZzButton>
    <ZzButton type="warning">警告按钮</ZzButton>
    <ZzButton type="danger">危险按钮</ZzButton>
    <ZzButton type="info">信息按钮</ZzButton>
  </div>
</template>
```

### 禁用状态

```vue
<template>
  <div>
    <ZzButton disabled>默认按钮</ZzButton>
    <ZzButton type="primary" disabled>主要按钮</ZzButton>
    <ZzButton type="success" disabled>成功按钮</ZzButton>
    <ZzButton type="warning" disabled>警告按钮</ZzButton>
    <ZzButton type="danger" disabled>危险按钮</ZzButton>
    <ZzButton type="info" disabled>信息按钮</ZzButton>
  </div>
</template>
```

### 按钮形状

```vue
<template>
  <div>
    <ZzButton shape="circle">圆形按钮</ZzButton>
    <ZzButton shape="round">圆角按钮</ZzButton>
  </div>
</template>
```