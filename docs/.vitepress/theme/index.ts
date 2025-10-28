import DefaultTheme from 'vitepress/theme'
import './custom.css'
import 'element-plus/dist/index.css'

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    if (typeof window !== 'undefined') {
      // 使用动态 import 并放到浏览器环境执行
      import('@zephyr_zz/zephyr-ui').then(({ ZephyrEditor, ZzButton }) => {
        app.component('ZephyrEditor', ZephyrEditor)
        app.component('ZzButton', ZzButton)
      })
    }
  }
}