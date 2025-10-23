<!--
 * new page
 * @author: wzzz
 * @since: 2025-10-23
 * base.vue
-->
<script setup lang="ts">
// import { ZephyrEditor } from '@zephyr_zz/zephyr-ui'
import { ref } from 'vue';

const code = ref('import { ref } from "vue";\n\nconst count = ref(0);\n\nfunction increment() {\n  count.value++;\n}')

const options = {
  language: 'javascript',
  theme: 'github-dark',
  automaticLayout: true,
  scrollBeyondLastLine: false,
  minimap: { // 关闭小地图
    enabled: false,
  },
  fontSize: 14,
  wordWrap: 'off', // 自动换行
} as any

</script>

<template>
  <div class="container">
    <ZephyrEditor v-model="code" :options="options"></ZephyrEditor>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
}
</style>