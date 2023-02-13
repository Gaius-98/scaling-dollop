<template>
  <el-form-item
    prop="prop.placeholder"
    label="占位提示"
  >
    <el-input v-model="curFormItem.prop.placeholder">
    </el-input>
  </el-form-item>
  <el-form-item
    v-if="curFormItem.type == 'component'"
    prop="prop.valueFormat"
    label="值格式"
  >
    <el-input v-model="curFormItem.prop.valueFormat">
    </el-input>
  </el-form-item>
  <el-form-item
    prop="prop.type"
    label="日期类型"
  >
    <el-select
      v-model="curFormItem.prop.type"
    >
      <el-option
        v-for="item in dateType"
        :key="item.value"
        :value="item.value"
        :label="item.label"
      >
      </el-option>
    </el-select>
  </el-form-item>
  <el-form-item
    prop="prop.format"
    label="展示格式"
  >
    <el-input v-model="curFormItem.prop.format">
    </el-input>
  </el-form-item>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'

const store = useFormDesignStore()
const { curFormItem } = storeToRefs(store)
const dateType = reactive([
  {
    label: 'year',
    value: 'year',
  },
  {
    label: 'month',
    value: 'month',
  },
  {
    label: 'date',
    value: 'date',
  },
  {
    label: 'dates',
    value: 'dates',
  },
  {
    label: 'datetime',
    value: 'datetime',
  },
  {
    label: 'week',
    value: 'week',
  },
  {
    label: 'datetimerange',
    value: 'datetimerange',
  },
  {
    label: 'daterange',
    value: 'daterange',
  },
  {
    label: 'monthrange',
    value: 'monthrange',
  },
])
</script>
<style scoped lang='scss'>
</style>