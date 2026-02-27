<script lang="ts" setup>
import { ElInput } from 'element-plus'
import { ZephyrForm } from '@zephyr_zz/zephyr-ui'
import { markRaw } from 'vue';

const formItems = [
  {
    prop: 'username',
    label: '用户名',
    is: markRaw(ElInput),
    attr: {
      placeholder: '请输入用户名',
      rules: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
      ]
    }
  },
  // 密码
  {
    prop: 'password',
    label: '密码',
    is: markRaw(ElInput),
    attr: {
      placeholder: '请输入密码',
      type:'password',
    }
  },
]

</script>

<template>
  <ZephyrForm :formItems="formItems"></ZephyrForm>
</template>