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
    name: 'is',
    type: 'string|Function|Record<string, any>|undefined',
    default: '-',
    desc: '容器组件'
  },
  {
    name: 'isProps',
    type: 'Record<string, any>|undefined',
    default: '-',
    desc: '容器组件的props'
  },
  {
    name: 'show',
    type: 'boolean',
    default: 'false',
    desc: '是否开启'
  },
]

</script>

<template>
  <ZephyrPropTable :columns="columns" :data="data"></ZephyrPropTable>
</template>

<style lang="scss" scoped></style>
