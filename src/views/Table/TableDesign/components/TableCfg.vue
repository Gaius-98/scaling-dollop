<template>
  <el-form
    ref="formRef"
    size="default"
    label-position="left"
    label-width="120"
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
    
    <el-form-item
      prop="width"
      label="宽度"
    >
      <el-input
        v-model="formData.width"
        placeholder="请输入宽度"
        :readonly="false"
        :disabled="false"
        :clearable="true"
        :show-password="false"
      >
      </el-input>
    </el-form-item>
    
    <el-form-item
      prop="fixed"
      label="固定列"
    >
      <el-select
        v-model="formData.fixed"
        placeholder=""
        :readonly="false"
        :disabled="false"
        :filterable="false"
        :clearable="true"
      >
        <el-option 
          v-for="item in optionsFixed"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        >
        </el-option>
      </el-select>
    </el-form-item>
    
    <el-form-item
      prop="sortable"
      label="是否可排序"
    >
      <el-switch
        v-model="formData.sortable"
        :disabled="false"
        active-text="可排序"
        inactive-text="不可排序"
      >
      </el-switch>
    </el-form-item>
  
    <el-form-item
      prop="align"
      label="文字对齐方式"
    >
      <el-select
        v-model="formData.align"
        placeholder=""
        :readonly="false"
        :disabled="false"
        :filterable="false"
        :clearable="false"
      >
        <el-option 
          v-for="item in optionsAlign"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        >
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, PropType } from 'vue'
import type { FormInstance } from 'element-plus'

interface Props {
  cfg:COMMON.commonColumnConfig
}
const props = withDefaults(defineProps<Props>(), {
  cfg: () => ({
    label: '',
    prop: '',
  }),
})
interface obj {
  [key:string]:any
}
const formRef = ref<FormInstance>()
const { cfg: formData } = toRefs(props)
  
const rules = reactive<obj>({})
const getFormData = () => formData
  
const optionsFixed = reactive([
  {
    label: '左',
    value: 'left',
  },
      
  {
    label: '右',
    value: 'right',
  },
])
    
const optionsAlign = reactive([
  {
    label: '左对齐',
    value: 'left',
  },
      
  {
    label: '右对齐',
    value: 'right',
  },
      
  {
    label: '居中',
    value: 'center',
  },
])
    
const resetForm = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
}
defineExpose({ getFormData, resetForm })
</script>
  <style scoped lang='scss'>
  </style>
