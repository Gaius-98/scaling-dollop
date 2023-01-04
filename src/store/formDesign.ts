import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useFormDesignStore = defineStore('formDesignStore', () => {
  const list = ref<COMMON.obj[]>([])
  const formData = reactive<COMMON.obj>({})
  const curFormItem = reactive<COMMON.obj>({})
  const formProp = reactive<COMMON.obj>({})
  const onClickFormItem = (element:COMMON.obj) => {
    Object.assign(curFormItem, element)
  }
  const init = () => {
    list.value = []
    Object.assign(formData, {})
    Object.assign(curFormItem, {})
  }
  return { list, formData, curFormItem, formProp, onClickFormItem, init }
})