<template>
  <el-form
    :model="formData"
    label-width="120px"
    label-position="left"
  >
    <template v-for="templateItem in formTemplate">
      <EvChartItem
        :template-option="templateItem"
        :level="0"
      >
      </EvChartItem>
    </template>
  </el-form>
</template>

<script lang='ts' setup name="EvChartAttr">
import { reactive, toRefs, ref } from 'vue'
import EvChartItem from './components/EvChartItem.vue'

const props = defineProps({
  formTemplate: {
    type: Object,
    default: () => {},
  },
})
const formData = reactive({})
</script>
<style scoped lang='scss'>
</style>