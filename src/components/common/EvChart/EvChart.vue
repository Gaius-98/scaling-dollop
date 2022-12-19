<template>
  <div
    ref="evChart"
    class="ev-chart"
  >
  </div>
</template>

<script lang='ts' setup name="EvChart">
import { init, EChartsType } from 'echarts'
import { getChart } from '@/api/common'
import { reactive, toRefs, ref, onMounted, watch } from 'vue'
import axios from 'axios'
import { json } from 'stream/consumers'

const props = defineProps({
  chartId: {
    type: String,
    default: '',
  },
  option: {
    type: Object,
    default: null,
  },
})
const { chartId, option } = toRefs(props)
const chartOption = reactive({})
if (chartId.value) {
  getChart({ chartId: chartId.value })
  .then(res => {
    const { data } = res
    const req = JSON.parse(data.reqOption)
    axios({
      ...req,
    }).then(res => {
      const reqData = res
      const option = JSON.parse(data.option)
      eval(data.handleDatajs)
      Object.assign(chartOption, option)
      initEchart()
    })
  })
} else {
  Object.assign(chartOption, option.value)
}
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

</script>
<style scoped lang='scss'>
.ev-chart{
  width: 100%;
  height: 100%;
}
</style>