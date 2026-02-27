<script lang="ts" setup>
import { ElInput,ElSwitch } from 'element-plus'
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
  // 是否感兴趣：是-继续填写联系方式，否-不填写联系方式
  {
    prop: '',
    label: '是否感兴趣',
    children:[
      {
        prop: 'isInterest',
        is: markRaw(ElSwitch),
        attr: {
          placeholder: '请输入是否感兴趣',
          rules: [
            { required: true, message: '请输入是否感兴趣', trigger: 'blur' }
          ]
        }
      },
      {
        prop: 'contact',
        label: '联系方式',
        is: markRaw(ElInput),
        attr: (formData)=>{
          return {
          placeholder: '请输入联系方式',
          hidden: !formData.isInterest,
          rules: [
            { required: true, message: '请输入联系方式', trigger: 'blur' }
          ]
          }
        }
      }
    ]
  }
]

</script>

<template>
  <ZephyrForm :formItems="formItems"></ZephyrForm>
</template>