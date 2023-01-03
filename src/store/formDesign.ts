import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useFormDesignStore = defineStore('formDesignStore', () => {
  const list = ref<COMMON.obj[]>([])
  const formData = reactive<COMMON.obj>({})
  const curFormItem = reactive<COMMON.obj>({})
  const onClickFormItem = (element:COMMON.obj) => {
    Object.assign(curFormItem, element)
  }
  const onClickRemove = (element:COMMON.obj) => {
    const idx = list.value.findIndex(formItem => formItem.compId == element.compId)
    list.value.splice(idx, 1)
  }
  return { list, formData, curFormItem, onClickFormItem, onClickRemove }
})