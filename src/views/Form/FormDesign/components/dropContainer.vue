<template>
  <div class="container">
    <el-form
      v-bind="saveForm.formProp"
      style="width:100%;height:100%"
    >
      <drop-comp
        v-model:list="saveForm.list"
      >
      </drop-comp>
    </el-form>
  </div>
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
.container{
  flex: 1;
}
</style>