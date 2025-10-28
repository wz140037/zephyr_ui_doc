<!--
 * new page
 * @author: wzzz
 * @since: 2025-10-28
 * demo.vue
-->
<script setup lang="ts">
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
import { ref } from 'vue';

const formData = ref({
  username: '',
  password: ''
})

</script>

<template>
  <div class="demo-container">
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
  </div>
</template>

<style lang="scss" scoped>
.demo-container{
  padding: 20px 10px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
}
</style>