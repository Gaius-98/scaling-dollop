import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useSysStore = defineStore('sysStore', () => {
  const theme = ref<string>('light')
  const sysConfig = reactive<sysConfig>({
    sysName: '',
    sysLoginBackground: '',
    sysLogo: '',
  })
  return { theme, sysConfig }
})