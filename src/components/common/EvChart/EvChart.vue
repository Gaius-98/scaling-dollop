<template>
  <div
    ref="evChart"
    v-loading="loading"
    class="ev-chart"
  >
  </div>
</template>

<script lang='ts' setup name="EvChart">
import { init, EChartsType } from 'echarts'
import { getChart } from '@/api/common'
import { reactive, toRefs, ref, onMounted, watch } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

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
const loading = ref(true)
const route = useRoute()
const { chartId, option } = toRefs(props)
const chartOption = reactive<COMMON.obj>({})
const req = reactive<COMMON.reqForm>({
  url: '',
  method: 'get',
  params: {

  },
  data: {

  },
})
const oldParams = reactive<COMMON.obj>({})
const variable = reactive<COMMON.obj>({})
const handleDatajs = ref('')
if (chartId.value) {
  loading.value = true
  getChart({ chartId: chartId.value })
  .then(res => {
    const { data } = res
    Object.assign(req, data.reqOption)
    if (req.method == 'get') {
      Object.assign(oldParams, req.params)
    } else {
      Object.assign(oldParams, req.data)
    }
    Object.assign(variable, data.variable)
    axios({
      ...req,
    }).then(reqData => {
      const option = data.option
      handleDatajs.value = data.handleDatajs
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
  window.addEventListener('hashchange', () => {
    let url = window.location.href
    if (url.includes('?')) {
      let urlStr = url.split('?')[1]
      const urlSearchParams = new URLSearchParams(urlStr)
      const query = Object.fromEntries(urlSearchParams.entries())
      handleUrl(query)
    }
  })
})

watch(option, () => {
  Object.assign(chartOption, option.value)
  initEchart()
}, { deep: true })

watch(route, () => {
  const { query } = route
  handleUrl(query)
}, { deep: true })

const handleUrl = (query:COMMON.obj) => {
  const variableNames:any[] = [] 
  Object.keys(variable).forEach(key => {
    variableNames.push({
      realParamsName: key,
      alias: variable[key] || key,
    })
  })
  variableNames.forEach(params => {
    if (query[params.alias]) {
      if (req.method == 'get') {
        req.params[params.realParamsName] = query[params.alias]
      } else {
        req.data[params.realParamsName] = query[params.alias]
      }
    }
  })
  handleVar()
}
const handleVar = () => {
  loading.value = true
  axios({
    ...req,
  }).then(reqData => {
    const option = chartOption
    eval(handleDatajs.value)
    Object.assign(chartOption, option)
    initEchart()
  })
}
</script>
<style scoped lang='scss'>
.ev-chart{
  width: 100%;
  height: 100%;
}
</style>