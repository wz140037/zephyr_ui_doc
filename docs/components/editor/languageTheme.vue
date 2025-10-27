<!--
 * new page
 * @author: wzzz
 * @since: 2025-10-23
 * langueTheme.vue
-->
<script setup lang="ts">
import { BundledLanguage, BundledTheme } from 'shiki'
// import { ZephyrEditor } from '@zephyr_zz/zephyr-ui'
import { nextTick, ref, useTemplateRef, watch } from 'vue';
import { ElSelect } from 'element-plus';

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

const editorRef = useTemplateRef('zephyrEditorRe2')
let editor: any | null = null
const language = ref('javascript')
const theme = ref('github-dark')
const languageOptions = [
  {
    label: 'javascript',
    value: 'javascript'
  },
  {
    label: 'typescript',
    value: 'typescript'
  },
  {
    label: 'json',
    value: 'json'
  },
  {
    label: 'html',
    value: 'html'
  },
  {
    label: 'css',
    value: 'css'
  },
] as { label: BundledLanguage, value: BundledLanguage }[]

const themeOptions = [
  {
    label: 'github-dark',
    value: 'github-dark'
  },
  {
    label: 'github-light',
    value: 'github-light'
  },
  {
    label: 'vs-dark',
    value: 'vs-dark'
  },
  {
    label: 'vs-light',
    value: 'vs-light'
  }
] as { label: BundledTheme, value: BundledTheme }[]

// 编辑器load-ZzEditorLoadEvent
const handleEditorLoad = (e: any) => {
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

</script>

<template>
  <div class="language-theme_container">
    <!-- 语言、主题选择 -->
    <div class="language-theme_form">
      <ElSelect v-model="language" :options="languageOptions" placeholder="请选择语言" />
      <ElSelect v-model="theme" :options="themeOptions" placeholder="请选择主题" />
    </div>
    <div class="editor-container">
      <ZephyrEditor @load="handleEditorLoad($event)" ref="zephyrEditorRe2" v-model="code" :options="options">
      </ZephyrEditor>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.language-theme_container {
  padding: 10px;
  border: 1px solid #ccc;

  .language-theme_form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    >*+* {
      margin-left: 10px;
    }
  }

  .editor-container {
    width: 100%;
    height: 400px;
  }
}
</style>