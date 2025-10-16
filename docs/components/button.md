# Button 按钮

按钮用于触发操作，比如提交表单、跳转页面或触发自定义事件。

---

## 何时使用

- 提交表单
- 弹出对话框
- 触发自定义事件

---

## 安装 & 引入

```bash
npm install zephyr-ui

---
import { Button } from 'zephyr-ui';
```

---

## 代码演示

### 基础用法

```vue
<template>
  <div>
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="info">信息按钮</Button>
  </div>
</template>
```

### 禁用状态

```vue
<template>
  <div>
    <Button disabled>默认按钮</Button>
    <Button type="primary" disabled>主要按钮</Button>
    <Button type="success" disabled>成功按钮</Button>
    <Button type="warning" disabled>警告按钮</Button>
    <Button type="danger" disabled>危险按钮</Button>
    <Button type="info" disabled>信息按钮</Button>
  </div>
</template>
```

### 按钮形状

```vue
<template>
  <div>
    <Button shape="circle">圆形按钮</Button>
    <Button shape="round">圆角按钮</Button>
  </div>
</template>
```