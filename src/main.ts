import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import autoImport from '@/plugins/autoImport'
import router from './router'
import 'element-plus/es/components/message/style/css'
import 'normalize.css'

createApp(App).use(createPinia()).use(autoImport).use(router)
.mount('#app')
