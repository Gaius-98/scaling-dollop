<template>
  <el-form v-bind="saveForm.formProp">
    <drop-comp
      v-model:list="saveForm.list"
      style="height:600px;width: 800px;"
    >
    </drop-comp>
  </el-form>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import dropComp from './dropComp.vue'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'

const store = useFormDesignStore()
const { saveForm } = storeToRefs(store)

</script>
<style scoped lang='scss'>

</style>