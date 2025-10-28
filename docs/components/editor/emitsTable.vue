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
    label: '事件名',
    prop: 'name',
    flexGrow: 1
  },
  {
    label: '说明',
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
    name: 'update:modelValue',
    description: '编辑器内容变化时触发',
    type: 'Function',
    tip: '(v：string) => void'
  },
]

</script>

<template>
  <ZephyrPropTable :columns="columns" :data="data"></ZephyrPropTable>
</template>

<style lang="scss" scoped></style>
