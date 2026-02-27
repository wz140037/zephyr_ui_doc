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
    label: '名称',
    prop: 'name',
    flexGrow: 1
  },
  {
    label: '详情',
    prop: 'description',
    flexGrow: 1
  },
  {
    label: '类型',
    prop: 'type',
    type: 'tag',
    flexGrow: 1,
  },
] as unknown as Column[]

const data = [
  {
    name: 'setDefaultValues',
    description: '设置默认值',
    type: 'Function',
    tip: '(values: Record<string, any>) => void'
  },
  {
    name: 'getValues',
    description: '获取当前表单数据',
    type: 'Function',
    tip: '() => Record<string, any>'
  },
  {
    name: 'formInstances',
    description: '表单项组件实例',
    type: 'Record<string, any>',
  },
]

</script>

<template>
  <ZephyrPropTable :columns="columns" :data="data"></ZephyrPropTable>
</template>

<style lang="scss" scoped></style>
