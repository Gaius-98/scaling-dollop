<template>
  <el-form-item
    prop="prop.header"
    label="卡片名称"
  >
    <el-input v-model="curFormItem.prop.header">
    </el-input>
  </el-form-item>
  <el-form-item
    prop="prop.shadow"
    label="阴影显示时机"
  >
    <el-select v-model="curFormItem.prop.shadow">
      <el-option
        v-for="item in shadowOption"
        :key="item.value"
        :value="item.value"
        :label="item.label"
      >
        {{ item.label }}
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'

const store = useFormDesignStore()
const { curFormItem } = storeToRefs(store)
const shadowOption = ref([
  {
    label: 'always',
    value: 'always',
  },
  {
    label: 'never',
    value: 'never',
  },
  {
    label: 'hover',
    value: 'hover',
  },
])
</script>
<style scoped lang='scss'>
</style>