<template>
  <div
    ref="evChart"
    class="ev-chart"
  >
  </div>
</template>
  
<script lang='ts' setup name="EvChart">
import { init, EChartsType } from 'echarts'
import { reactive, toRefs, ref, onMounted, watch } from 'vue'

export interface Props {
    option:COMMON.obj
  }
const props = withDefaults(defineProps<Props>(), {
  option: () => ({}),
})
  
const loading = ref(true)
const { option } = toRefs(props)
const chartOption = reactive<COMMON.obj>({})

Object.assign(chartOption, option.value)
const evChart = ref()
let evChartInstance:EChartsType
const timer = ref(0)
const initEchart = () => {
  if (evChartInstance) {
    evChartInstance.clear()
    evChartInstance.setOption(chartOption)
  } else if (evChart.value) {
    evChartInstance = init(evChart.value)
    evChartInstance.setOption(chartOption)
  }
  loading.value = false
}
const rsOb = new ResizeObserver((e => {
  if (timer.value) clearTimeout(timer.value)
  timer.value = window.setTimeout(() => {
    try {
      evChartInstance.resize()
    } catch (error) {
      console.warn(`chart重新设置大小失败,失败原因：${error}`)
    }
  }, 50)
}))
onMounted(() => {
  initEchart()
  rsOb.observe(evChart.value)
})
  
watch(option, () => {
  Object.assign(chartOption, option.value)
  initEchart()
}, { deep: true })

const emits = defineEmits([''])
</script>
  <style scoped lang='scss'>
  .ev-chart{
    width: 100%;
    height: 100%;
  }
  </style>