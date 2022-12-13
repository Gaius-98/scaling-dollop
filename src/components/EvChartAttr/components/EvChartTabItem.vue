<template>
  <div v-if="templateOption.children">
    <ev-chart-tabs
      v-if="templateOption.tabs"
      :template-option="templateOption"
    >
    </ev-chart-tabs>
    <template
      v-for="(templateItem,index) in templateOption.children"
      v-else
      :key="index"
    >
      <ev-chart-item
        :template-option="templateItem"
        :level="level+1"
      />
    </template>
  </div>
  <div v-else>
    <ev-chart-form-item :template-option="templateOption"></ev-chart-form-item>
  </div>
</template>

<script lang='ts' setup name="EvChartTabItem">
import { reactive, toRefs, ref, computed } from 'vue'
import EvChartFormItem from './EvChartFormItem.vue'
import EvChartTabs from './EvChartTabs.vue'

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
const { templateOption, level } = toRefs(props)

let activeNames = ref('')
const paddingStep = 30
const padding = computed(() => level.value * paddingStep + 'px')
</script>
<style scoped lang='scss'>
.ev-chart-col{
  margin-left: v-bind(padding);
  margin-bottom: 10px;
  box-shadow: 1px 2px 2px var(--ev-box-shadow-color);
  .el-collapse{
    border: none;
  }
  .ev-chart-col-children{
    :deep(.el-collapse-item__header){
      height: 30px;
      line-height: 30px;
    }
  }
  :deep(.el-collapse-item__header){
    border: none;
    background: var(--ev-col-bg-color);
    padding-left: 15px;
  }
  :deep(.el-collapse-item__content){
    padding-left:15px;
  }
}
</style>