<template>
  <el-form-item
    prop="prop.cols"
    label="栅格布局"
  >
    <ev-opt-table
      :data="curFormItem.prop.cols"
      :column-config="columnConfig"
    >
    </ev-opt-table>
  </el-form-item>
  <el-form-item
    prop="prop.gutter"
    label="栅格间隔"
  >
    <el-input-number
      v-model="curFormItem.prop.gutter"
    >
    </el-input-number>
  </el-form-item>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'

const store = useFormDesignStore()
const { curFormItem } = storeToRefs(store)
const columnConfig = reactive<COMMON.columnConfig[]>([
  {
    field: 'span',
    label: '栅格占据的列数',
  }, 
])
</script>
<style scoped lang='scss'>
</style>