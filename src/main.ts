import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import autoImport from '@/plugins/autoImport'
import router from './router'

createApp(App).use(createPinia()).use(autoImport).use(router)
.mount('#app')
