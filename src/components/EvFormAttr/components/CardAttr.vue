<template>
  <el-form-item
    prop="prop.header"
    label="卡片名称"
  >
    <el-input v-model="curFormItem.prop.header">
    </el-input>
  </el-form-item>
</template>

<script lang='ts' setup>
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'

const store = useFormDesignStore()
const { curFormItem } = storeToRefs(store)
</script>
<style scoped lang='scss'>
</style>