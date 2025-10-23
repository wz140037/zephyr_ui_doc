# ZephyrEditor 编辑器

## 简介

写你所写，想你所想。

## 使用方法

### 基础用法
---
<script setup lang="ts">
  import BaseDemo from './base.vue';
  import LanguageThemeDemo from './LanguageTheme.vue';
  import RegisterCompletionProviderDemo from './registerCompletionProvider.vue';
</script>

<BaseDemo></BaseDemo>

```vue
<script setup lang="ts">
import { ZephyrEditor } from '@zephyr_zz/zephyr-ui'
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
```

### 主题、语言切换
---
<LanguageThemeDemo></LanguageThemeDemo>

```vue
<script setup lang="ts">
// ...其他代码...
const editorRef = useTemplateRef('zephyrEditorRef')
let editor: monaco.editor.IStandaloneCodeEditor | null = null
const language = ref('javascript')
const theme = ref('github-dark')

// 切换主题、语言
const themeLanguageToggle = () => {
  if (!editor) {
    editor = editorRef.value?.getEditor()!
  }
  nextTick(() => {
    editor?.updateOptions({
      language: language.value,
      theme: theme.value
    } as any)
  })
}

watch(()=>[language.value, theme.value], themeLanguageToggle)

// ...其他代码...

```

### 注册提示词
---

<RegisterCompletionProviderDemo></RegisterCompletionProviderDemo>

```vue
<script setup lang="ts">
// ...其他代码...
const editorRef = useTemplateRef('zephyrEditorRef')

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
              kind: monaco.languages.CompletionItemKind.Keyword,
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

// ...其他代码...

</script>
```
## ZephyrEditor API

### ZephyrEditor Props
---
| 属性名 | 类型 | 默认值 | 说明 |
| :----: | :----: | :----: | :----: |
| `modelValue` | `string` | - | 编辑器内容 |
| `options` | `object` | `monaco.editor.IStandaloneEditorConstructionOptions` | 编辑器配置项 |

### ZephyrEditor Exposes
---

| 属性名 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| `getText` | `() => string` | `-` | 获取当前编辑器的文本内容。 |
| `getEditor` | `() => monaco.editor.IStandaloneCodeEditor \| null` | `-` | 获取编辑器实例 |
| `registerCompletionItemProvider` | `(languageSelector: monaco.languages.LanguageSelector, provider: monaco.languages.CompletionItemProvider) => void` | `-` | 注册代码补全提示器，为指定语言添加智能提示。 |
| `getHighlighter` | `() => Highlighter \| null` | `-` | 获取 Shiki 高亮器实例，可用于动态注册语言或主题。 |
