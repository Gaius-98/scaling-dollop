<template>
  <div class="chart_config">
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
        <el-button
          type="primary"
          @click="onSave"
        >
          保存
        </el-button>
      </div>
    </div>
    <div
      v-loading.fullscreen="loading"
      class="chart_container"
    >
      <div class="chart_option">
        <div class="chart_option_attr">
          <ev-title>
            图表配置
          </ev-title>
          <ev-chart-attr
            :level="0"
            :form-template="formTemplate"
          >
          </ev-chart-attr>
        </div>
        <div class="chart_option_prew">
          <ev-title>
            配置明细
          </ev-title>
          <ev-code
            v-model:code="jsonOption"
            disabled
            style="width:100%;height:100%"
          >
          </ev-code>
        </div>
      </div>
      <div class="chart_req">
        <div class="chart_req_form">
          <ev-title>
            请求数据
          </ev-title>
          <ev-req
            v-model:req-form="reqForm"
            @get-req-data="onHandleData"
          >
          </ev-req>
        </div>
        
        <div class="chart_req_data">
          <ev-title>
            数据预览
          </ev-title>
          <ev-code
            v-model:code="reqDataJson"
            style="width:100%;height:100%"
            disabled
          >
          </ev-code>
        </div>
      </div>
      <div class="chart_handle">
        <div class="chart_data_handle">
          <ev-title>
            数据处理
            <template #opt>
              <el-button @click="onHandleDataToOption">
                执行
              </el-button>
            </template>
          </ev-title>
          <ev-code
            v-model:code="handleStr"
            style="width:100%;height:100%"
          >
          </ev-code>
        </div>
        <div class="chart_preview">
          <ev-title>
            图表预览
          </ev-title>
          <ev-chart
            style="width:100%;height:100%"
            :option="option"
          >
          </ev-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ElMessage } from 'element-plus'
import { reactive, toRefs, ref, provide, watch } from 'vue'
import api from '../service/api'
import { formatDefaultOption } from '../utils/format'
import { flat, unflat } from '@/utils/func'
import EvChartAttr from '@/components/EvChartAttr/EvChartAttr.vue'
import * as echarts from 'echarts'
import axios from 'axios'

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
  reqOption: '',
  handleDatajs: '',
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
    Object.assign(reqForm, JSON.parse(data.reqOption))
    handleStr.value = data.handleDatajs
    axios({
      ...reqForm,
    }).then(res => {
      Object.assign(reqData, res)
      onHandleDataToOption()
      jsonOption.value = JSON.stringify(option, null, 4)
      Object.assign(formTemplate, formatDefaultOption(template, option))
      Object.assign(flatOption, flat(option))
      loading.value = false
    })
  })
}

const onSave = () => {
  chartFormData.option = jsonOption.value
  chartFormData.reqOption = JSON.stringify(reqForm)
  chartFormData.handleDatajs = handleStr.value
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
  if (handleStr.value) {
    onHandleDataToOption()
  }
  jsonOption.value = JSON.stringify(option, null, 4)
})

const reqForm = reactive<COMMON.reqForm>(
  { url: 'http://jsonplaceholder.typicode.com/comments',
    method: 'get',
    params: {
      postId: '1',
    },
    data: {

    } },
)
const reqDataJson = ref('')
const reqData = reactive<COMMON.obj>({})
const onHandleData = (data:COMMON.obj) => {
  Object.assign(reqData, data)
  reqDataJson.value = JSON.stringify(data, null, 4)
}
const handleStr = ref('')
const onHandleDataToOption = () => {
  eval(handleStr.value)
}
</script>
<style scoped lang='scss'>
.chart_config{
  background: var(--ev-border);
}
.chart_header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 60px;
  margin-bottom: 2px;
  background: var(--ev-col-bg-color);
}
.chart_container{
  display: flex;
  height: calc(100% - 60px);
  .chart_option{
    width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin:0 2px;
    background: var(--ev-col-bg-color);
    .chart_option_attr{
      width: 500px;
      height: 600px;
      overflow-y: auto;
      margin-bottom: 2px;
    }
    .chart_option_prew{
      height:400px;
    }
  }
  .chart_req{
    width: 600px;
    height: 100%;
    margin-right: 2px;
    background: var(--ev-col-bg-color);
    .chart_req_form{
      height: 400px;
      overflow: auto;
    }
    .chart_req_data{
      height: 600px;
    }
  }
  
  .chart_handle{
    width: calc(100% - 1100px);
    background: var(--ev-col-bg-color);
    .chart_data_handle{
      height: 600px;
    }
    .chart_preview{
      height: 400px;
    }
  }
  
}
</style>