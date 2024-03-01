<template>
  <el-form-item
    prop="prop.border"
    label="是否显示边框"
  >
    <el-switch v-model="curFormItem.prop.border">
    </el-switch>
  </el-form-item>
  <el-form-item
    prop="prop.options"
    label="多选框数据"
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