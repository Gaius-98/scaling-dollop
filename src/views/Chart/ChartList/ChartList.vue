<template>
  <div class="chart-header">
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
      <el-button
        type="primary"
        @click="onAdd"
      >
        创建图表
      </el-button>
    </div>
  </div>
  <div
    v-loading="loading"
    class="chart-data-container"
  >
    <div
      v-for="item in dataList"
      :key="item.id"
      class="chart"
    >
      <div class="chart-title">
        <span class="chart-title-name">
          {{ item.chartName }}
        </span>
        <span class="chart-title-creator">
          创建人:{{ item.creator }}
        </span>
      </div>
      <div class="chart-opt-btns">
        <div class="btns">
          <el-button
            type="primary"
            :icon="Edit"
            circle
            title="编辑"
            @click="onEdit(item)"
          />
          <el-button
            type="success"
            :icon="View"
            circle
            title="查看"
            @click="onView(item)"
          />
          <el-button
            v-copy="item.chartId"
            :icon="DocumentCopy"
            circle
            title="复制"
            @click="onClone(item)"
          />
          <el-button
            type="danger"
            :icon="Delete"
            circle
            title="删除"
            @click="onDelete(item)"
          />
        </div>
      </div>
      <img
        style="width:100%;height:calc(100% - 40px)"
        :src="item.img"
        :alt="item.chartName"
      >
    </div>
  </div>
  <el-pagination
    v-model:current-page="params.pageNumber"
    v-model:page-size="params.pageSize"
    background
    layout="sizes, prev, pager, next"
    :total="total"
    style="width:90%;margin: 0 5%"
    :page-sizes="[12, 24, 36, 60]"
    @current-change="getList"
    @size-change="getList"
  />
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
        <div class="chart-item-title">{{ item.label }}</div>
        <img
          :src="getImgUrl(item.value)"
          :alt="item.label"
          class="chart-item-img"
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
  View,
  DocumentCopy,
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const router = useRouter()
const dialogShowAdd = ref(false)
const list = reactive<sysDict[]>([
  
])
const dataList = ref<saveChart[]>([])
const params = reactive({
  keyword: '',
  pageNumber: 1,
  pageSize: 12,
})
const total = ref(0)
const loading = ref(true)
const onSearch = () => {
  params.pageNumber = 1
  getList()
}
const getList = () => {
  loading.value = true
  api.getChartList(params)
  .then(res => {
    const { data } = res
    dataList.value = data.data
    total.value = data.pagination.total
    loading.value = false
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

const onDelete = (chart:saveChart) => {
  api.delete({
    chartId: chart.chartId,
  }).then(res => {
    ElMessage.success('删除成功')
    getList()
  })
}

const onClone = (chart:saveChart) => {
  console.log(navigator.clipboard)
  navigator.clipboard.writeText(chart.chartId).then((res) => {
    console.log(res)
    ElMessage.success('复制图表id成功')
  })
  .catch(() => {
    ElMessage.success('复制失败')
  })
}
</script>
<style scoped lang='scss'>
.chart-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:40px;
  margin: 5px 0 ;
  padding: 0 15px;
  border-bottom: 2px solid var(--ev-border);
  .chart-search{
      cursor: pointer;
  }
}
.chart-data-container{
  display: grid;
  grid-template-columns:repeat(4,1fr);
  grid-template-rows: repeat(3,1fr);
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  place-items:center center;
  width: 100%;
  height: 760px;
  margin-bottom: 10px;
  overflow-y: auto;
  .chart{
    position: relative;
    width: 460px;
    height: 240px;
    border-radius: 2px;
    border: 1px solid var(--ev-border);
    overflow: hidden;
    cursor: pointer;
    .chart-title{
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;
      color:var(--ev-bg-color);
      text-align: center;
      padding: 10px 5px;
      background-color: var(--ev-active-shallow-color);
      .chart-title-name{
        font-size: 16px;
      }
      .chart-title-creator{
        justify-self: flex-end;
        color:var(--ev-active-color);
        font-size: 12px;
      }
    }
    &:hover{
      .chart-opt-btns{
        position: absolute;
        display: flex;
        width: 100%;
        height: calc(100% - 40px);
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
    border: 2px solid var(--ev-active-shallow-color);
    border-radius: 3px;
    width: 300px;
    height: 220px;
    margin: 5px 10px;
    cursor: pointer;
    .chart-item-title{
      text-align: center;
      color:var(--ev-active-color);
      font-size: 18px;
      font-weight: 700;
      background: var(--ev-tint-color);
    }
    .chart-item-img{
      position:absolute;
      top:30px;
      left:0;
      width: calc(100% - 20px);
      height: calc(100% - 50px);
      padding:10px;
    }
    &.selected{
      border: 2px solid var(--ev-active-color);
      background:var(--ev-active-shallow-color) ;
      .chart-item-title{
        color:var(--ev-text-color);
        background:var(--ev-active-shallow-color) ;
      }
    }
  }
}
</style>