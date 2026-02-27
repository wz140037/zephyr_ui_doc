<!--
 * new page
 * @author: wzzz
 * @since: 2025-10-27
 * propsTable.vue
-->
<script setup lang="ts">
import ZephyrPropTable from '../zephyrPropTable/index.vue'

import { Column } from 'element-plus';

const columns = [
  {
    label: '属性名',
    prop: 'name',
    flexGrow: 1
  },
  {
    label: '类型',
    prop: 'type',
    type: 'type',
    split: '-',
    flexGrow: 1
  },
  {
    label: '默认值',
    prop: 'default',
    flexGrow: 1
  },
  {
    label: '说明',
    prop: 'desc',
    width: 300,
    fixed: 'right',
    flexGrow: 1
  },
] as Column[]

const data = [
  {
    name: 'form-items',
    type: `{
  prop: string
  label?: string
  is?: Component
  attr?: Record<string, any> | AttrFunction
  children?: ZephyrFormSchema[]
  [key: string]: any
  }[] - AttrFunction:(formData: any) => Record<string, any>`,
    default: '[]',
    desc: '渲染表单项内容'
  },
  {
    name: 'rules',
    type: 'Object',
    default: '{}',
    desc: '表单验证规则'
  },
  {
    name: 'virtual',
    type: 'boolean',
    default: 'false',
    desc: '使用虚拟化'
  },
  {
    name: 'layout',
    type: 'horizontal | vertical',
    default: 'vertical',
    desc: '表单项label布局'
  },
]

</script>

<template>
  <ZephyrPropTable :columns="columns" :data="data"></ZephyrPropTable>
</template>

<style lang="scss" scoped></style>
