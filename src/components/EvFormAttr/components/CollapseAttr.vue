<template>
  <el-form-item
    prop="prop.title"
    label="折叠面板名称"
  >
    <el-input v-model="curFormItem.prop.title">
    </el-input>
  </el-form-item>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'

const store = useFormDesignStore()
const { curFormItem } = storeToRefs(store)

</script>
<style scoped lang='scss'>
</style>