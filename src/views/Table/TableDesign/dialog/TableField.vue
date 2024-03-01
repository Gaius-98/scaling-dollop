<template>
  <el-form
    ref="formRef"
    label-position="left"
    label-width="80"
    :model="formData"
    :rules="rules"
  >
    <el-form-item
      prop="prop"
      label="字段名"
    >
      <el-input
        v-model="formData.prop"
        placeholder="请输入字段名"
        :readonly="false"
        :disabled="false"
        :clearable="true"
        :show-password="false"
      >
      </el-input>
    </el-form-item>
    <el-form-item
      prop="label"
      label="列名"
    >
      <el-input
        v-model="formData.label"
        placeholder="请输入列名"
        :readonly="false"
        :disabled="false"
        :clearable="true"
        :show-password="false"
      >
      </el-input>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, PropType } from 'vue'
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()
const formData = reactive<COMMON.Obj>({})
  
const rules = reactive<COMMON.Obj>({ prop: [{
  required: true,
  trigger: 'blur',
  message: '字段名不能为空',
        
}],
label: [{
  required: true,
  trigger: 'blur',
  message: '列名不能为空',
        
}] })
const getFormData = () => formData
const getFormValidate = () => new Promise((resolve, reject) => {
  formRef.value?.validate((valid, fields) => {
    resolve({ valid, fields })
  })
})
const resetForm = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
}
defineExpose({ getFormData, resetForm, getFormValidate })
</script>
<style scoped lang='scss'>
</style>
