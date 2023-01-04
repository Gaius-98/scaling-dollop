<template>
  <el-form
    :model="formProp"
    label-position="top"
    size="small"
  >
    <el-form-item
      prop="size"
      label="大小"
    >
      <el-radio-group
        v-model="formProp.size"
        label="size control"
      >
        <el-radio-button label="large">large</el-radio-button>
        <el-radio-button label="default">default</el-radio-button>
        <el-radio-button label="small">small</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      prop="labelPosition"
      label="表单域标签的位置"
    >
      <el-radio-group
        v-model="formProp.labelPosition"
        label="position control"
      >
        <el-radio-button label="left">Left</el-radio-button>
        <el-radio-button label="right">Right</el-radio-button>
        <el-radio-button label="top">Top</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      prop="labelWidth"
      label="表单域标签宽度"
    >
      <el-input-number
        v-model="formProp.labelWidth"
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
const { formProp } = storeToRefs(store)
</script>

<style scoped lang='scss'>
</style>