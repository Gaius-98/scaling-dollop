<template>
  <el-form
    :model="saveForm.formProp"
  >
    <el-form-item
      prop="size"
      label="大小"
    >
      <el-radio-group
        v-model="saveForm.formProp.size"
        label="size control"
      >
        <el-radio label="large">large</el-radio>
        <el-radio label="default">default</el-radio>
        <el-radio label="small">small</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      prop="labelPosition"
      label="表单域标签的位置"
    >
      <el-radio-group
        v-model="saveForm.formProp.labelPosition"
        label="position control"
      >
        <el-radio label="left">Left</el-radio>
        <el-radio label="right">Right</el-radio>
        <el-radio label="top">Top</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      prop="labelWidth"
      label="表单域标签宽度"
    >
      <el-input-number
        v-model="saveForm.formProp.labelWidth"
        :step="1"
        :min="0"
      >
      </el-input-number>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup name="FormAttr">
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'

const store = useFormDesignStore()
const { saveForm } = storeToRefs(store)
</script>

<style scoped lang='scss'>
</style>