import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useSysStore = defineStore('sysStore', () => {
  const theme = ref<string>('dark')
  const sysConfig = reactive<sysConfig>({
    sysName: '',
    sysLoginBackground: '',
    sysLogo: '',
  })
  return { theme, sysConfig }
})