import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSysStore = defineStore('sysStore', () => {
  const theme = ref<string>('dark')
  return { theme }
})