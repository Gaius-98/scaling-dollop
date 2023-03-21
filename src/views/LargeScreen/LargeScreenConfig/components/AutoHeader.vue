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
      <el-col :span="6">
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
          label="宽(px)"
        >
          <el-input-number
            v-model="formData.width"
            :readonly="false"
            :disabled="false"
            :step="10"
            :min="0"
            :max="1920"
            placeholder="输入提示"
            controls-position="right"
          >
          </el-input-number>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item
          prop="height"
          label="高(px)"
        >
          <el-input-number
            v-model="formData.height"
            :readonly="false"
            :disabled="false"
            :step="10"
            :min="0"
            :max="1080"
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

const formRef = ref<FormInstance>()
const formData = reactive<COMMON.obj>({})
  
const rules = reactive<COMMON.obj>({ name: [{
  required: true,
  trigger: 'blur',
        
}],
width: [{
  required: true,
  trigger: 'change',
        
}],
height: [{
  required: true,
  trigger: 'change',
        
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
