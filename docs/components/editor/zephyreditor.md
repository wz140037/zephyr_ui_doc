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
  import PropsTableVue from './propsTable.vue';
</script>

<ClientOnly>
<BaseDemo></BaseDemo>
</ClientOnly>

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

<ClientOnly>
<LanguageThemeDemo></LanguageThemeDemo>
</ClientOnly>

```vue
<script setup lang="ts">
// ...其他代码...
const editorRef = useTemplateRef('zephyrEditorRef')
let editor: monaco.editor.IStandaloneCodeEditor | null = null
const language = ref('javascript')
const theme = ref('github-dark')

// 编辑器load
const handleEditorLoad = (e: ZzEditorLoadEvent) => {
  if (e.state === 'success') {
    editor = e.editor
  }
}

// 切换主题、语言
const themeLanguageToggle = () => {
  if (!editor) return
  nextTick(() => {
    editor.updateOptions({
      language: language.value,
      theme: theme.value
    } as any)
  })
}

watch(() => [language.value, theme.value], themeLanguageToggle)

// ...其他代码...

<ZephyrEditor 
  @load="handleEditorLoad($event)" 
  ref="zephyrEditorRe2" 
  v-model="code" 
  :options="options" 
/>

// ...其他代码...

```

### 注册提示词
---

<ClientOnly>
<RegisterCompletionProviderDemo></RegisterCompletionProviderDemo>
</ClientOnly>

```vue
<script setup lang="ts">
// ...其他代码...
const editorRef = useTemplateRef('zephyrEditorRef')
const handleEditorLoad = (e: ZzEditorLoadEvent) => {
  if (e.state === 'success' && editorRef.value) {
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
  }
}

// ...其他代码...

</script>
```
## ZephyrEditor API

### ZephyrEditor Props
---

<PropsTableVue></PropsTableVue>

### ZephyrEditor Exposes
---

| 属性名 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| `registerCompletionItemProvider` | `(languageSelector: monaco.languages.LanguageSelector, provider: monaco.languages.CompletionItemProvider) => void` | `-` | 注册代码补全提示器，为指定语言添加智能提示。 |
