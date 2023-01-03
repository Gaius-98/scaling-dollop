import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useFormDesignStore = defineStore('formDesignStore', () => {
  const list = ref<COMMON.obj[]>([])
  const formData = reactive<COMMON.obj>({})
  const curFormItem = reactive<COMMON.obj>({})
  const onClickFormItem = (element:COMMON.obj) => {
    Object.assign(curFormItem, element)
  }
  
  return { list, formData, curFormItem, onClickFormItem }
})