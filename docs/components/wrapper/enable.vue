<!--
 * new page
 * @author: wzzz
 * @since: 2025-11-07
 * base.vue
-->
<script setup lang="ts">
import { ZephyrWrapper } from '@zephyr_zz/zephyr-ui'
import { ElScrollbar,ElSwitch } from 'element-plus'
import { ref } from 'vue';

const isOpen = ref(true)

</script>

<template>
  <div class="wrapper-demo">
    <p>
      是否开启：
      <ElSwitch v-model="isOpen" />
    </p>
    <div class="wrapper-demo_enable">
      <ZephyrWrapper :is="ElScrollbar" :show="isOpen" :is-props="{ height:'300px'}">
        <p v-for="(item, index) in 100" :key="index">
          {{ '数据' + item }}
        </p>
      </ZephyrWrapper>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper-demo_enable {
  padding: 10px;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border: 1px solid #ccc;
  overflow: hidden;
}
</style>