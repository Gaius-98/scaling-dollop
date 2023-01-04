<template>
  <el-form-item
    prop="prop.activeText"
    label="打开时的文字描述"
  >
    <el-input
      v-model="curFormItem.prop.activeText"
    >
    </el-input>
  </el-form-item>
  <el-form-item
    prop="prop.inactiveText"
    label="关闭时的文字描述"
  >
    <el-input
      v-model="curFormItem.prop.inactiveText"
    >
    </el-input>
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