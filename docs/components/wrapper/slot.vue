<!--
 * new page
 * @author: wzzz
 * @since: 2025-11-07
 * slot.vue
-->
<script setup lang="ts">
import { ElTooltip, ElButton } from 'element-plus'

</script>

<template>
  <div class="wrapper-demo_slot">
    <ZephyrWrapper :is="ElTooltip" :show="true" :is-props="{ trigger: 'click' }">
      <template #content>
        <div>
          我是tooltip内容！！！！
        </div>
      </template>
      <ElButton>点击我</ElButton>
    </ZephyrWrapper>
  </div>
</template>

<style lang="scss">
.wrapper-demo_slot {
  padding: 10px;
  width: 100%;
}
</style>