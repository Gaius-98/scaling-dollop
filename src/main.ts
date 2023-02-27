import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import autoImport from '@/plugins/autoImport'
import router from './router'
import 'element-plus/es/components/message/style/css'
import 'normalize.css'
import '@/assets/iconfont/iconfont.css'
import '@/styles/theme.css'
import '@/styles/common/layout.css'
import 'github-markdown-css'

createApp(App).use(createPinia()).use(autoImport).use(router)
.mount('#app')
