<template>
  <el-form
    ref="formRef"
    size="default"
    label-position="left"
    label-width="120"
    :model="formData"
    :rules="rules"
  >
    <el-row :gutter="0">
      <el-col :span="12">
        <el-form-item
          prop="name"
          label="大屏名称"
        >
          <el-input
            v-model="formData.name"
            placeholder="请输入大屏名称"
            :readonly="false"
            :disabled="false"
            :clearable="true"
            :show-password="false"
          >
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item
          prop="width"
          label="宽度(px)"
        >
          <el-input-number
            v-model="formData.width"
            :readonly="false"
            :disabled="false"
            :step="1"
            :min="0"
            :max="3000"
            placeholder="请输入大屏宽度"
            controls-position="right"
          >
          </el-input-number>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item
          prop="height"
          label="高度(px)"
        >
          <el-input-number
            v-model="formData.height"
            :readonly="false"
            :disabled="false"
            :step="1"
            :min="0"
            :max="3000"
            placeholder="输入提示"
            controls-position="right"
          >
          </el-input-number>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, PropType } from 'vue'
import type { FormInstance } from 'element-plus'

  interface obj {
    [key:string]:any
  }
const formRef = ref<FormInstance>()
const formData = reactive<obj>({})
  
const rules = reactive<obj>({ name: [{
  required: true,
  trigger: 'blur',
  message: '请输入大屏名称',
        
}],
width: [{
  required: true,
  trigger: 'blur',
  message: '请输入正确的大屏宽度',
        
}],
height: [{
  required: true,
  trigger: 'blur',
  message: '请输入正确的大屏高度',
        
}] })
const getFormData = () => formData
  
const resetForm = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
}
defineExpose({ getFormData, resetForm })
</script>
  <style scoped lang='scss'>
  </style>
