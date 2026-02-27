<!--
 * new page
 * @author: wzzz
 * @since: 2025-10-27
 * index.vue
-->
<script setup lang="ts">
import 'element-plus/dist/index.css'

import { useData } from 'vitepress'
import { Column, ElTable, ElTableColumn, ElTag, ElTooltip, ElIcon } from 'element-plus'
import { computed, PropType, watch } from 'vue';
import { Warning } from '@element-plus/icons-vue';
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

const vitepressP = useData()
const effect = computed(() => vitepressP.isDark.value ? 'dark' : 'light')

</script>

<template>
  <ElTable class="zephyr_table table_container" :data="data">
    <ElTableColumn v-for="column in columns" :key="column.prop" v-bind="column">
      <template v-if="column.type === 'tag'" #default="{ row }">
        <div class="tag_container">
          <ElTag>{{ row[column.prop] }}</ElTag>
          <ElTooltip v-if="row['tip']" :effect="effect" popper-class="zephyr_tooltip" trigger="click">
            <template #content>
              <div class="tooltip_content" :class="{ 'is-dark': effect === 'dark' }">
                {{ row['tip'] }}
              </div>
            </template>
            <ElIcon>
              <Warning />
            </ElIcon>
          </ElTooltip>
        </div>
      </template>
      <!-- 类型列，根据|分割，使用tag展示 -->
      <template v-if="column.type === 'type'" #default="{ row }">
        <ElTooltip trigger="click" :effect="effect" popper-class="zephyr_tooltip">
          <template #content>
            <div class="column_type">
              <ElTag v-for="item in row[column.prop].split(column['split'] || '|')" :key="item" type="primary">
                {{ item }}
              </ElTag>
            </div>
          </template>
          <ElIcon>
            <Warning />
          </ElIcon>
        </ElTooltip>
      </template>
    </ElTableColumn>
  </ElTable>
</template>

<style lang="scss" scoped>
.el-table.zephyr_table {
  .tag_container {
    display: flex;
    align-items: center;

    >*+* {
      margin-left: 5px;
    }
  }
}
</style>
<style lang="scss">
.el-popper.zephyr_tooltip {
  padding: 5px 10px;

  .tooltip_content {
    padding: 2px 8px;
    border-radius: 4px;
    color: #0c61c9;
    background-color: #f5f7fa;
  }

  .tooltip_content.is-dark {
    color: #409eff;
    background-color: rgba(64, 158, 255, .1);
  }

  .column_type {
    display: flex;
    width: 100%;
    overflow: hidden;
    flex-wrap: wrap;
    align-items: center;

    >*+* {
      margin-left: 5px;
    }
  }
}
</style>