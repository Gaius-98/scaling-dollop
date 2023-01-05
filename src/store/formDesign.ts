import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useFormDesignStore = defineStore('formDesignStore', () => {
  const formData = reactive<COMMON.obj>({})
  const curFormItem = reactive<COMMON.obj>({})
  const saveForm = reactive<COMMON.obj>({
    list: [],
    formProp: {
      size: 'default',
      labelPosition: 'top',
      labelWidth: 120,
    },
    name: '',
  })
  const onClickFormItem = (element:COMMON.obj) => {
    Object.assign(curFormItem, element)
  }
  const init = () => {
    Object.assign(saveForm, {
      list: [],
      formProp: {
        size: 'default',
        labelPosition: 'top',
        labelWidth: 120,
      },
      name: '',
    })
    Object.assign(formData, {})
    Object.assign(curFormItem, {})
  }
  const setForm = (form:COMMON.obj) => {
    Object.assign(saveForm, form)
  }
  return { formData, curFormItem, saveForm, onClickFormItem, init, setForm }
})