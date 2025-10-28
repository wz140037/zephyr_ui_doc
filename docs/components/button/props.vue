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
    name: 'type',
    type: 'string',
    default: 'default',
    desc: '按钮类型'
  },
  {
    name: 'size',
    type: 'string',
    default: 'medium',
    desc: '按钮尺寸'
  },
  {
    name: 'shape',
    type: 'string',
    default: 'square',
    desc: '按钮形状'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    desc: '是否禁用按钮'
  },
]

</script>

<template>
  <ZephyrPropTable :columns="columns" :data="data"></ZephyrPropTable>
</template>

<style lang="scss" scoped></style>
