import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useFormDesignStore = defineStore('formDesignStore', () => {
  const formData = reactive<COMMON.obj>({})
  const curFormItem = reactive<formComp|COMMON.obj>({

  })
  const saveForm = reactive<formConfig>({
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
      id: '',
    })
    Object.assign(formData, {})
    Object.assign(curFormItem, {})
  }
  const setForm = (form:formConfig) => {
    Object.assign(saveForm, form)
  }
  return { formData, curFormItem, saveForm, onClickFormItem, init, setForm }
})