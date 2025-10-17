<!-- docs/components/ButtonDemo.vue -->
<script setup lang="ts">
import { ZzButton } from '@zephyr_zz/zephyr-ui';
// 
</script>

<template>
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <ZzButton>默认按钮</ZzButton>
    <ZzButton type="primary">主要按钮</ZzButton>
    <ZzButton type="success">成功按钮</ZzButton>
    <ZzButton type="warning">警告按钮</ZzButton>
    <ZzButton type="danger">危险按钮</ZzButton>
    <ZzButton type="info">信息按钮</ZzButton>
  </div>
</template>
