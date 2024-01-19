<template>
  <ev-form
    ref="evFrom"
    v-model:form-data="formData"
    v-ev-loading="loading"
    :form-config="formConfig"
    :disabled="disabled"
  >
  </ev-form>
</template>

<script lang='ts' setup name="EvFormId">
import { reactive, toRefs, ref, watch } from 'vue'
import api from '@/views/Form/service/api'
import { ElMessage } from 'element-plus'

interface Props {
    id:number,
    formData:{
        [key:string]:any
    },
    disabled:boolean
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
})
const { id, formData } = toRefs(props)
const formConfig = reactive({
  list: [],
})
const evFrom = ref()
const loading = ref(true)
watch(id, () => {
  loading.value = true
  api.getDetail({ id: id.value }).then(res => {
    const { code, data, msg } = res
    loading.value = false
    if (code == 0) {
      Object.assign(formConfig, data)
    } else {
      ElMessage.error(msg)
    }
  })
}, {
  immediate: true,
})
const getFormData = () => formData
defineExpose({ getFormData })
</script>
<style scoped lang='scss'>
</style>