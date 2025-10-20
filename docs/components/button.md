# ZzButton 按钮

念念不忘，必有回响。

## 安装 & 引入

```bash
npm install zephyr-ui
// 按需引入
import { ZzButton } from '@zephyr_zz/zephyr-ui';
```

## 代码演示

### 基础用法
<script setup lang="ts">
  import { ZzButton } from '@zephyr_zz/zephyr-ui';
</script>
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
<ZzButton disabled>默认按钮</ZzButton>

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

### Props

----

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | _string_ | `default` |
| size | 按钮尺寸 | _string_ | `medium` |
| shape | 按钮形状 | _string_ | `square` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| icon | 左侧图标名称或图片链接 | _string_ | - |
| icon-position | 图标位置 | _string_ | `left` |

<style>
.container {
    >*+* {
      margin-left: 10px;
    }
}
</style>