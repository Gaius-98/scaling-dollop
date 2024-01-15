<template>
  <el-form
    ref="formRef"
    size="default"
    label-position="left"
    label-width="120"
    :model="formData"
    :rules="rules"
  >
    <el-collapse>
      <el-collapse-item 
        title="分页配置"
        name="分页配置"
      >
        <el-form-item
          prop="pagConfig.show"
          label="开启分页"
        >
          <el-switch
            v-model="formData.pagConfig.show"
            :disabled="false"
            active-text=""
            inactive-text=""
          >
          </el-switch>
        </el-form-item>
      
        <el-form-item
          prop="pagConfig.pageSize"
          label="默认展示行数"
        >
          <el-input-number
            v-model="formData.pagConfig.pageSize"
            :readonly="false"
            :disabled="false"
            :step="1"
            :min="0"
            :max="100"
            placeholder="输入提示"
            controls-position="right"
          >
          </el-input-number>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
    
    <el-collapse>
      <el-collapse-item 
        title="新增配置"
        name="新增配置"
      >
        <el-form-item
          prop="add.show"
          label="开启新增功能"
        >
          <el-switch
            v-model="formData.add.show"
            :disabled="false"
            active-text=""
            inactive-text=""
          >
          </el-switch>
        </el-form-item>
  
        <el-form-item
          prop="add.id"
          label="表单ID"
        >
          <el-input
            v-model="formData.add.id"
            placeholder="输入提示"
            :readonly="false"
            :disabled="false"
            :clearable="true"
            :show-password="false"
          >
          </el-input>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
    
    <el-collapse>
      <el-collapse-item 
        title="编辑配置"
        name="编辑配置"
      >
        <el-form-item
          prop="edit.show"
          label="开启编辑功能"
        >
          <el-switch
            v-model="formData.edit.show"
            :disabled="false"
            active-text=""
            inactive-text=""
          >
          </el-switch>
        </el-form-item>
      
        <el-form-item
          prop="edit.id"
          label="表单ID"
        >
          <el-input
            v-model="formData.edit.id"
            placeholder="输入提示"
            :readonly="false"
            :disabled="false"
            :clearable="true"
            :show-password="false"
          >
          </el-input>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
  </el-form>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, PropType } from 'vue'
import type { FormInstance } from 'element-plus'

interface obj {
  [key:string]:any
}
interface Props {
  cfg:COMMON.obj
}
const props = withDefaults(defineProps<Props>(), {
  cfg: () => ({
    label: '',
    prop: '',
  }),
})

const formRef = ref<FormInstance>()
const { cfg: formData } = toRefs(props)
  
const rules = reactive<obj>({})
const getFormData = () => formData
  
const resetForm = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
}
defineExpose({ getFormData, resetForm })
</script>
  <style scoped lang='scss'>
  </style>
