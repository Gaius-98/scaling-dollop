<template>
  <el-card>
    <template #header>
      <div class="chart-header">
        <span>图表</span>
        <el-input
          v-model="params.keyword"
          placeholder="请输入图表名称进行查询"
          clearable
          style="width:280px"
          @clear="getList"
        >
          <template #append>
            <div
              class="iconfont icon-search chart-search"
              @click="onSearch"
            ></div>
          </template>
        </el-input>
        <div class="chart-opts">
          <el-button @click="onAdd">
            新增
          </el-button>
        </div>
      </div>
    </template>
    <div class="chart-data-container">
      <div
        v-for="item in dataList"
        :key="item.id"
        class="chart"
      >
        <div class="chart-title">
          {{ item.chartName }}
          <span>
            (创建人:{{ item.creator }})
          </span>
        </div>
        <div class="chart-opt-btns">
          <div class="btns">
            <el-button
              type="primary"
              :icon="Edit"
              circle
              @click="onEdit(item)"
            />
            <el-button
              type="success"
              :icon="View"
              circle
              @click="onView(item)"
            />
            <el-button
              type="warning"
              :icon="Star"
              circle
            />
            <el-button
              type="danger"
              :icon="Delete"
              circle
            />
          </div>
        </div>
        <img
          style="width:100%;height:calc(100% - 20px)"
          :src="item.img"
          :alt="item.chartName"
        >
      </div>
    </div>
  </el-card>
  
  <el-dialog
    v-model="dialogShowAdd"
    title="新增可视化"
    width="60%"
  >
    <div class="chart-container">
      <div
        v-for="item in list"
        :key="item.id"
        class="chart-item"
        :class="isSelect?.id == item.id ? 'selected' :''"
        @click="onSelect(item)"
      >
        <span>{{ item.label }}</span>
        <img
          :src="getImgUrl(item.value)"
          alt="item.label"
          style="position:absolute;top:0;left:0;width: calc(100% - 20px);height: calc(100% - 20px);padding:10px"
        >
      </div>
    </div>
    <template #footer>
      <el-button @click="onConfirm">
        确定
      </el-button>
    </template>
  </el-dialog>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
import { getDict } from '@/api/common'
import { useRouter } from 'vue-router'
import api from '../service/api'
import {
  Delete,
  Edit,
  Star,
  View,
} from '@element-plus/icons-vue'

const router = useRouter()
const dialogShowAdd = ref(false)
const list = reactive<sysDict[]>([
  
])
const dataList = reactive<saveChart[]>([])
const params = reactive({
  keyword: '',
  pageNumber: 1,
  pageSize: 10,
})

const onSearch = () => {
  params.pageNumber = 1
  getList()
}
const getList = () => {
  api.getChartList(params)
  .then(res => {
    const { data } = res
    Object.assign(dataList, data.data)
  })
}
getList()
const isSelect = reactive<sysDict|COMMON.obj>({})
getDict('chartType')
.then(res => {
  const { data } = res
  Object.assign(list, data)
})
const onSelect = (item:sysDict) => {
  Object.assign(isSelect, item)
}
const getImgUrl = (name:string|number) => {
  const url = new URL(`../../../assets/images/chart/${name}.png`, import.meta.url)
  return url.toString()
}
const onAdd = () => {
  Object.assign(isSelect, {})
  dialogShowAdd.value = true
}
const onConfirm = () => {
  dialogShowAdd.value = false
  const url = router.resolve({
    name: 'chartConfig',
    query: {
      chartType: isSelect.value,
      opType: 'add',
    },
  })
  window.open(url.href, '_blank')
}
const onEdit = (chart:saveChart) => {
  const url = router.resolve({
    name: 'chartConfig',
    query: {
      opType: 'edit',
      chartId: chart.chartId,
      chartType: chart.chartType,
    },
  })
  window.open(url.href, '_blank')
}

const onView = (chart:saveChart) => {
  const url = router.resolve({
    path: `/view/chartView/${chart.chartId}`,
  })
  window.open(url.href, '_blank')
}
</script>
<style scoped lang='scss'>
.chart-header{
  display: flex;
  justify-content: space-between;
  .chart-search{
      cursor: pointer;
  }
}
.chart-data-container{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 600px;
  .chart{
    position: relative;
    width: 300px;
    height: 220px;
    margin: 5px 10px;
    border-radius: 10px;
    border: 1px solid var(--ev-box-shadow-color);
    overflow: hidden;
    cursor: pointer;
    .chart-title{
      font-weight: 600;
      color:var(--ev-bg-color);
      padding: 2px 5px;
      border-bottom:1px solid var(--ev-box-shadow-color) ;
      text-align: center;
      span{
        color:var(--ev-box-shadow-color);
        font-size: 12px;
      }
    }
    &:hover{
      .chart-opt-btns{
        position: absolute;
        display: flex;
        width: 100%;
        height: calc(100% - 20px);
        z-index: 99;
        background: var(--ev-tint-color);
        .btns{
          display: flex;
          width: 100%;
          height: 26px;
          align-self:center;
          justify-content: space-around;
        }
      }
    }
    .chart-opt-btns{
      display: none;
    }
  }
}
.chart-container{
  display: flex;
  width: 100%;
  height: 500px;
  overflow-y: auto;
  flex-wrap: wrap;
  justify-content: flex-start;
  .chart-item{
    box-sizing: border-box;
    position: relative;
    padding: 10px;
    border: 2px solid var(--ev-box-shadow-color);
    border-radius: 10px;
    width: 300px;
    height: 220px;
    margin: 5px 10px;
    cursor: pointer;
    &.selected{
      border: 2px solid var(--ev-active-color);
    }
  }
}
</style>