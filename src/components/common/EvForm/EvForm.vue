<template>
  <el-form
    v-bind="formConfig.formProp"
    ref="formRef"
    :model="formData"
  >
    <form-comp
      :list="formConfig.list"
      :data="formData"
    >
    </form-comp>
  </el-form>
</template>

<script lang='ts' setup name="EvForm">
import { reactive, toRefs, ref, PropType } from 'vue'
import FormComp from './components/FormComp.vue'
import type { FormInstance } from 'element-plus'

const props = defineProps({
  formConfig: {
    type: Object as PropType<COMMON.obj>,
    required: true,
  },
  formData: {
    type: Object as PropType<COMMON.obj>,
    required: false,
    default: () => ({}),
  },
})
const formRef = ref<FormInstance>()
const { formConfig, formData } = toRefs(props)
const getFormData = () => formData
const resetForm = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
}
defineExpose({ getFormData, resetForm })
</script>
<style scoped lang='scss'>
</style>