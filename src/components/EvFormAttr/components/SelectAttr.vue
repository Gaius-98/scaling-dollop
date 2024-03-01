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
    <el-switch v-model="curFormItem.prop.clearable">
    </el-switch>
  </el-form-item>
  <el-form-item
    prop="prop.filterable"
    label="是否可搜索"
  >
    <el-switch
      v-model="curFormItem.prop.filterable"
    >
    </el-switch>
  </el-form-item>
  <el-form-item
    prop="prop.options"
    label="下拉框数据"
  >
    <ev-opt-table
      :data="curFormItem.prop.options"
      :column-config="columnConfig"
    >
    </ev-opt-table>
  </el-form-item>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'

const store = useFormDesignStore()
const { curFormItem } = storeToRefs(store)
const columnConfig = reactive<COMMON.ColumnConfig[]>([
  {
    field: 'label',
    label: '展示值',
  }, {
    field: 'value',
    label: '实际值',
  },
])
</script>
<style scoped lang='scss'>
</style>