<template>
  <div
    v-loading.fullscreen="loading"
    class="chart_config"
  >
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
      class="chart_container"
    >
      <div class="chart_option">
        <el-tabs
          v-model="activeName"
        >
          <el-tab-pane
            label="图表配置"
            name="attr"
          >
            <div class="chart_option_attr">
              <ev-chart-attr
                :level="0"
                :form-template="formTemplate"
              >
              </ev-chart-attr>
            </div>
          </el-tab-pane>
          <el-tab-pane
            label="配置明细"
            name="json"
          >
            <div class="chart_option_json">
              <ev-code
                v-model:code="jsonOption"
                disabled
                style="width:100%;height:100%"
              >
              </ev-code>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="chart_req">
        <div class="chart_req_form">
          <ev-title>
            请求数据
          </ev-title>
          <ev-req
            v-model:req-form="chartFormData.reqOption"
            style="width:100%;height:calc(100% - 30px)"
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
            style="width:100%;height:calc(100% - 30px)"
            disabled
          >
          </ev-code>
        </div>
        <div class="chart_req_var">
          <ev-title>
            参数设置
          </ev-title>
          <div style="height:200px;overflow-y: auto;">
            <ev-var
              v-model:data="chartFormData.variable"
              style="width:100%"
              @update:data="(val:any)=>{chartFormData.variable = val}"
            >
            </ev-var>
          </div>
        </div>
      </div>
      <div class="chart_handle">
        <div class="chart_data_handle">
          <ev-title>
            数据处理
            <template #opt>
              <el-button @click="onHandleDataToOption">
                生成图表
              </el-button>
            </template>
          </ev-title>
          <ev-code
            v-model:code="chartFormData.handleDatajs"
            style="width:100%;height:calc(100% - 30px)"
          >
          </ev-code>
        </div>
        <div class="chart_preview">
          <ev-title>
            图表预览
          </ev-title>
          <ev-chart
            style="width:100%;height:calc(100% - 30px)"
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
  option: {},
  img: '',
  chartId: '',
  chartType: '',
  id: 0,
  time: '',
  creator: '',
  reqOption: { url: 'http://jsonplaceholder.typicode.com/comments',
    method: 'get',
    params: {
      postId: '1',
    },
    data: {

    } },
  handleDatajs: `
  //--------------接口获取的数据---------------
  console.log(reqData)
  //---------------图表option-------------------
  console.log(option)
  `,
  variable: {},
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
    Object.assign(option, chartFormData.option)
    axios({
      ...chartFormData.reqOption,
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
  chartFormData.option = option
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
  if (chartFormData.handleDatajs) {
    onHandleDataToOption()
  }
  jsonOption.value = JSON.stringify(option, null, 4)
})

const activeName = ref('attr')

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
const onHandleDataToOption = () => {
  eval(chartFormData.handleDatajs)
}

const variable = reactive({})
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
  height: calc(100vh - 142px);
  .chart_option{
    box-sizing: border-box;
    width: 500px;
    height: 100%;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    justify-content: space-around;
    margin:0 2px;
    padding: 5px 10px;
    background: var(--ev-col-bg-color);
    .chart_option_attr{
      height: 700px;
      overflow-y: auto;
    }
    .chart_option_json{
      height: 700px;
      overflow-y: auto;
    }
  }
  .chart_req{
    width: 600px;
    height: 100%;
    margin-right: 2px;
    background: var(--ev-col-bg-color);
    .chart_req_form{
      height: 300px;
    }
    .chart_req_data{
      height: 250px;
    }
    .chart_req_var{
      height: calc(100% - 700px);
    }
  }
  
  .chart_handle{
    width: calc(100% - 1100px);
    background: var(--ev-col-bg-color);
    .chart_data_handle{
      height: 330px;
    }
    .chart_preview{
      height: calc(100% - 390px);
    }
  }
  
}
</style>