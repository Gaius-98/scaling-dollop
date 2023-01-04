<template>
  <el-form-item
    prop="prop.placeholder"
    label="占位提示"
  >
    <el-input v-model="curFormItem.prop.placeholder">
    </el-input>
  </el-form-item>
  <el-form-item
    prop="prop.clearable"
    label="是否可清空"
  >
    <el-switch
      v-model="curFormItem.prop.clearable"
    >
    </el-switch>
  </el-form-item>
  <el-form-item
    prop="prop.showPassword"
    label="密码框"
  >
    <el-switch
      v-model="curFormItem.prop.showPassword"
    >
    </el-switch>
  </el-form-item>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'

const store = useFormDesignStore()
const { curFormItem } = storeToRefs(store)
</script>
<style scoped lang='scss'>
</style>