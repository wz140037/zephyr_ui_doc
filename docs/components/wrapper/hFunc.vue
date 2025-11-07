<!--
 * new page
 * @author: wzzz
 * @since: 2025-11-07
 * slot.vue
-->
<script setup lang="ts">
import { ElTooltip, ElButton } from 'element-plus'
import { h } from 'vue';

const is = h(ElTooltip, { trigger: 'click' }, {
  default: () => h(ElButton, '点击我'),
  content: () => h('div', '我是tooltip内容')
})

</script>

<template>
  <div class="wrapper-demo_hfunc">
    <ZephyrWrapper :is="is" :show="true">
    </ZephyrWrapper>
  </div>
</template>

<style lang="scss">
.wrapper-demo_hfunc {
  padding: 10px;
  width: 100%;
}
</style>