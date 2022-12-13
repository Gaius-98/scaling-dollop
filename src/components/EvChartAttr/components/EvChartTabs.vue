<template>
  <el-tabs v-model="activeName">
    <el-tab-pane
      v-for="(item,idx) in templateOption.children"
      :label="item.name.ui.value || '系列'+(idx+1)"
      :name="item.name.ui.value ||'系列'+(idx+1)"
    >
      <ev-chart-tab-item
        :template-option="{children:item}"
        :level="level+1"
      />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang='ts' setup name="EvChartTabs">
import EvChartTabItem from './EvChartTabItem.vue'
import { reactive, toRefs, ref } from 'vue'

const props = defineProps({
  templateOption: {
    type: Object,
    require: true,
    default: () => {},
  },
  level: {
    type: Number,
    default: 0,
  },
})
const activeName = ref('')

const { templateOption } = toRefs(props)
activeName.value = templateOption.value.children[0].name.ui.value || '系列' + 1
</script>
<style scoped lang='scss'>
</style>