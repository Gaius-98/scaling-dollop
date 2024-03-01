<template>
  <el-form
    v-bind="formConfig.formProp"
    ref="formRef"
    :model="formData"
    :disabled="disabled"
  >
    <form-comp
      :list="formConfig.list"
      :data="formData"
    >
    </form-comp>
  </el-form>
</template>

<script lang='ts' setup name="EvForm">
import { reactive, toRefs, ref, PropType, computed } from 'vue'
import FormComp from './components/FormComp.vue'
import type { FormInstance } from 'element-plus'

const props = defineProps({
  formConfig: {
    type: Object as PropType<COMMON.Obj>,
    required: true,
  },
  formData: {
    type: Object as PropType<COMMON.Obj>,
    required: false,
    default: () => ({}),
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
})
const formRef = ref<FormInstance>()
const { formConfig, formData, disabled } = toRefs(props)
const getFormData = () => formData
const resetForm = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
}
defineExpose({ getFormData, resetForm })
</script>
<style scoped lang='scss'>
</style>