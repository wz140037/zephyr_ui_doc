<!--
 * new page
 * @author: wzzz
 * @since: 2025-10-23
 * langueTheme.vue
-->
<script setup lang="ts">
import { language as sqlLanguage } from './sql.js'
// import { ZephyrEditor } from '@zephyr_zz/zephyr-ui'
import { onMounted, ref, useTemplateRef } from 'vue';

// sql样例
const code = ref(`
-- 查询示例：从用户表中获取基本信息
SELECT 
  id,
  username,
  email,
  created_at
FROM 
  users
WHERE 
  status = 'active'
ORDER BY 
  created_at DESC
LIMIT 10;
`)

const options = {
  language: 'sql',
  theme: 'github-dark',
  automaticLayout: true,
  scrollBeyondLastLine: false,
  minimap: { // 关闭小地图
    enabled: false,
  },
  fontSize: 14,
  wordWrap: 'off', // 自动换行
} as any

const editorRef = useTemplateRef('zephyrEditorRef3')

onMounted(() => {
  // 注册代码提示（sql版本）
  if (editorRef.value) {
    setTimeout(() => {
      editorRef.value.registerCompletionItemProvider('sql', {
        provideCompletionItems: function () {
          const suggestions = [] as any
          sqlLanguage.keywords.forEach(item => {
            suggestions.push({
              label: item,
              // monaco.languages.CompletionItemKind.Keyword === 17
              kind: 17,
              insertText: item,
            })
          })
          sqlLanguage.operators.forEach(item => {
            suggestions.push({
              label: item,
              // monaco.languages.CompletionItemKind.Operator === 11
              kind: 11,
              insertText: item,
            })
          })
          sqlLanguage.builtinFunctions.forEach(item => {
            suggestions.push({
              label: item,
              // monaco.languages.CompletionItemKind.Function === 1
              kind: 1,
              insertText: item,
            })
          })
          sqlLanguage.builtinVariables.forEach(item => {
            suggestions.push({
              label: item,
              // monaco.languages.CompletionItemKind.Variable === 4
              kind: 4,
              insertText: item,
            })
          })
          return {
            suggestions: suggestions,
          }
        },
      })
    }, 3000);
  }
})

</script>

<template>
  <div class="demo-container">
    <div class="editor-container">
      <ZephyrEditor ref="zephyrEditorRef3" v-model="code" :options="options"></ZephyrEditor>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo-container {
  padding: 10px;
  border: 1px solid #ccc;

  .editor-container {
    width: 100%;
    height: 400px;
  }
}
</style>