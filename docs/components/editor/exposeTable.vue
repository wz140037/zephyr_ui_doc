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
    name: 'registerCompletionItemProvider',
    description: '注册一个代码补全项提供者',
    type: 'Function',
    tip: '(language: string, provider: CompletionItemProvider) => void'
  },
]

</script>

<template>
  <ZephyrPropTable :columns="columns" :data="data"></ZephyrPropTable>
</template>

<style lang="scss" scoped></style>
