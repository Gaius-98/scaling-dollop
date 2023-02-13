<template>
  <el-form-item
    prop="prop.placeholder"
    label="占位提示"
  >
    <el-input v-model="curFormItem.prop.placeholder">
    </el-input>
  </el-form-item>
  <el-form-item
    prop="prop.step"
    label="步长"
  >
    <el-input-number v-model="curFormItem.prop.step">
    </el-input-number>
  </el-form-item>
  <el-form-item
    prop="prop.min"
    label="最小值"
  >
    <el-input-number v-model="curFormItem.prop.min">
    </el-input-number>
  </el-form-item>
  <el-form-item
    prop="prop.max"
    label="最大值"
  >
    <el-input-number v-model="curFormItem.prop.max">
    </el-input-number>
  </el-form-item>
  <el-form-item
    prop="prop.controlsPosition"
    label="位置"
  >
    <el-select
      v-model="curFormItem.prop.controlsPosition"
      clearable
    >
      <el-option
        v-for="item in position"
        :key="item.value"
        :value="item.value"
        :label="item.label"
      >
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'

const store = useFormDesignStore()
const { curFormItem } = storeToRefs(store)
const position = reactive([
  {
    value: 'right',
    label: 'right',
  },
])
</script>
<style scoped lang='scss'>
</style>