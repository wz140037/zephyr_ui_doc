<!--
 * new page
 * @author: wzzz
 * @since: 2025-11-07
 * base.vue
-->
<script setup lang="ts">
import { ElScrollbar } from 'element-plus'

</script>

<template>
  <div class="wrapper-demo_base">
    <ZephyrWrapper :is="ElScrollbar" :show="true" :is-props="{ height: '300px' }">
      <p v-for="(item, index) in 100" :key="index">
        {{ '数据' + item }}
      </p>
    </ZephyrWrapper>
  </div>
</template>

<style lang="scss">
.wrapper-demo_base {
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
}
</style>