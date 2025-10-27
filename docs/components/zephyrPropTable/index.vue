<!--
 * new page
 * @author: wzzz
 * @since: 2025-10-27
 * index.vue
-->
<script setup lang="ts">
import { Column, ElTable, ElTableColumn } from 'element-plus'
import { PropType } from 'vue';

defineProps({
  columns: {
    type: Array as PropType<Column[]>,
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  }
})

</script>

<template>
  <ElTable class="table_container" :data="data" stripe>
    <ElTableColumn v-for="column in columns" :key="column.prop" v-bind="column">
      <!-- 处理插槽 -->
      <template v-if="column.slot" #default="scope">
        <slot :name="column.slot" :row="scope.row" :column="column" :index="scope.$index"></slot>
      </template>
    </ElTableColumn>
  </ElTable>
</template>

<style lang="scss" scoped>
.table_container{
  width: 100%;
}
</style>