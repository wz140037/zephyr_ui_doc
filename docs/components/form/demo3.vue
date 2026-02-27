<script lang="ts" setup>
import { ElInput } from 'element-plus'
import { Radio } from 'ant-design-vue'
import { ZephyrForm } from '@zephyr_zz/zephyr-ui'
import { markRaw } from 'vue';

const formItems = [
  {
    prop: '',
    label: '评分方式',
    children: [
      {
        prop: 'scoringMethod',
        is: markRaw(Radio.Group),
        attr: (formData) => {
          return {
            value:formData.scoringMethod,
            'onUpdate:value': (val: string) => {
              formData.scoringMethod = val
            },
            placeholder: '请选择',
            options: [
              {
                label: '综合评估法',
                value: '1'
              },
              {
                label: '经评审的最低价法',
                value: '2'
              },
              {
                label: '无',
                value: '3'
              }
            ],
            rules: [
              { required: true, message: '请输入是否感兴趣', trigger: 'blur' }
            ],
          }
        }
      },
      {
        prop: 'remark',
        label: '说明',
        is: markRaw(ElInput),
        attr: (formData) => {
          return {
            placeholder: '请输入',
            hidden: formData.scoringMethod !== '3',
            rules: [
              { required: true, message: '请输入', trigger: 'blur' }
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