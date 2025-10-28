# ZephyrForm 表单

## 简介
如果可以，我想和你。

## 基本用法
<script setup lang="ts">
  import demo from './demo.vue'
</script>

<demo></demo>

```vue
<script setup lang="ts">
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
import { ref } from 'vue';

const formData = ref({
  username: '',
  password: ''
})

</script>

<template>
  <ElForm>
    <ElFormItem label="用户名">
      <ElInput v-model="formData.username" />
    </ElFormItem>
    <ElFormItem label="密码">
      <ElInput v-model="formData.password" type="password" show-password />
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary">提交</ElButton>
    </ElFormItem>
  </ElForm>
</template>

<style lang="scss" scoped></style>

```