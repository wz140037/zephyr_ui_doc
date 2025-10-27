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
    name: 'modelValue',
    type: 'string',
    default: '-',
    desc: '绑定的值'
  },
  {
    name: 'placeholder',
    type: 'string',
    default: '请输入内容',
    desc: '占位符'
  },
  {
    name: 'readonly',
    type: 'boolean',
    default: 'false',
    desc: '是否只读'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    desc: '是否禁用',
  },
]

</script>

<template>
  <ZephyrPropTable :columns="columns" :data="data"></ZephyrPropTable>
</template>

<style lang="scss" scoped></style>
