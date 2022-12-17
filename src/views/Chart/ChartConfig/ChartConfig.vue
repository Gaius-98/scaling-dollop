<template>
  <div
    class="chart_header"
  >
    <div>
      图表名称 
      <el-input
        v-model="chartFormData.chartName"
        style="width:200px"
      >
      </el-input>
    </div>
    <div class="op">
      <el-button @click="onSave">
        保存
      </el-button>
    </div>
  </div>
  <div
    v-loading.fullscreen="loading"
    class="chart_container"
  >
    <div class="chart_option">
      <el-card
        class="chart_config"
        header="图表配置"
      >  
        <ev-chart-attr
          :level="0"
          :form-template="formTemplate"
        >
        </ev-chart-attr>
      </el-card>
      <el-card
        class="chart_json"
        header="配置预览"
      >
        <ev-code
          v-model:code="jsonOption"
          disabled
          style="width:100%;height:400px"
        >
        </ev-code>
      </el-card>
    </div>
    <div class="chart_req">
      <el-card header="数据请求">
        <ev-req
          v-model:req-form="reqForm"
          @getReqData="onHandleData"
        >
        </ev-req>
      </el-card>
      <el-card header="数据预览">
        <ev-code
          v-model:code="reqDataJson"
          disabled
          style="width:100%;height:400px"
        >
        </ev-code>
      </el-card>
    </div>
    <el-card
      class="chart_preview"
      header="图表预览"
    >
      <ev-chart
        style="width:100%;height:100%"
        :option="option"
      >
      </ev-chart>
    </el-card>
  </div>
</template>

<script lang='ts' setup>
import { ElMessage } from 'element-plus'
import { reactive, toRefs, ref, provide, watch } from 'vue'
import api from '../service/api'
import { formatDefaultOption, formatSeries } from '../utils/format'
import { flat, unflat } from '@/utils/func'
import EvChartAttr from '@/components/EvChartAttr/EvChartAttr.vue'
import * as echarts from 'echarts'

const props = defineProps({
  opType: {
    type: String,
    default: 'add',
  },
  chartType: {
    type: String,
    default: 'line',
  },
  chartId: {
    type: String,
    default: '',
  },
})
const chartFormData = reactive<saveChart>({
  chartName: '',
  option: '',
  img: '',
  chartId: '',
  chartType: '',
  id: 0,
  time: '',
  creator: '',
})
const loading = ref(true)
const { opType, chartType, chartId } = toRefs(props)
const option = reactive({ title: { color: '#ccc' } })
const flatOption = reactive({})
const formTemplate = reactive({})
const jsonOption = ref('')

if (opType.value == 'add') {
  loading.value = true
  /* @vite-ignore */
  const { default: data } = await import(`../../../assets/chart/defaultOptions/${chartType.value}.ts`)
  /* @vite-ignore */
  const { default: template } = await import(`../../../assets/chart/formTemplate/${chartType.value}.ts`)
  Object.assign(option, data)
  jsonOption.value = JSON.stringify(option, null, 4)
  Object.assign(formTemplate, formatDefaultOption(template, option))
  Object.assign(flatOption, flat(option))
  chartFormData.chartType = chartType.value
  loading.value = false
} else {
  loading.value = true
  /* @vite-ignore */
  const { default: template } = await import(`../../../assets/chart/formTemplate/${chartType.value}.ts`)
  api.getChart({ chartId: chartId.value })
  .then(res => {
    const { data } = res
    Object.assign(chartFormData, data)
    Object.assign(option, JSON.parse(data.option))
    jsonOption.value = JSON.stringify(option, null, 4)
    Object.assign(formTemplate, formatDefaultOption(template, option))
    Object.assign(flatOption, flat(option))
    loading.value = false
  })
}

const onSave = () => {
  chartFormData.option = jsonOption.value
  let img
  if (document.querySelector('.ev-chart')) {
    img = echarts.getInstanceByDom(
          document.querySelector('.ev-chart') as HTMLElement,
    )?.getDataURL({ type: 'png' })
  }
  chartFormData.img = img || ''
  if (opType.value == 'add') {
    delete (chartFormData.id)
    delete (chartFormData.time)
    api.save(chartFormData)
    .then(res => {
      const { code } = res
      if (code == 0) {
        ElMessage.success('保存成功')
      } 
    })
  } else {
    api.update(chartFormData)
    .then(res => {
      const { code } = res
      if (code == 0) {
        ElMessage.success('保存成功')
      }
    })
  }
}
 
provide('chartOpt', flatOption)
watch(flatOption, () => {
  Object.assign(option, unflat(flatOption))
  jsonOption.value = JSON.stringify(option, null, 4)
})

const reqForm = reactive<COMMON.reqForm>({ url: '123',
  method: 'get',
  params: {
    name: '123',
    test: 'test',
  },
  data: {

  } })
const reqDataJson = ref('')
const reqData = reactive<COMMON.obj>({})
const onHandleData = (data:COMMON.obj) => {
  Object.assign(reqData, data)
  reqDataJson.value = JSON.stringify(data, null, 4)
}
</script>
<style scoped lang='scss'>
.chart_header{
  display: flex;
  height: 60px;
}
.chart_container{
  display: flex;
  height: calc(100% - 60px);
  .chart_option{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .chart_config{
      width:400px;
      height: 400px;
      overflow-y: auto;
    }
    .chart_json{
      width:400px;
      height: 400px;
    }
  }
  .chart_req{
    width: 400px;
    height: 100%;
  }
  
  .chart_preview{
    flex:1
  }
  
}
</style>