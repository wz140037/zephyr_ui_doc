import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/zephyr_ui_doc/',
  title: 'Zephyr UI',
  description: '轻量、高效的前端组件库文档',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/zephyr_ui_doc/image/logo.svg' }],
  ],
  themeConfig: {
    logo: '/image/logo.svg',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com/wz140037/zephyr_ui_doc' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '快速上手',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '开始使用', link: '/guide/getting-started' },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Form 表单', link: '/components/form' },
          ],
        },
      ],
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wz140037/zephyr_ui_doc' },
    ],
  },
})
