<template>
  <div class="table-design">
    <div class="table-container">
      <el-button
        type="primary"
        @click="openDataSource"
      >
        数据源配置
      </el-button>
      <el-button
        type="primary"
        :icon="Plus"
        @click="onAddField"
      >
        新增字段
      </el-button>
      <ev-title>
        配置列
      </ev-title>
      <draggable
        v-model="tableConfig.columns"
        item-key="prop"
        class="table-header"
      >
        <template #item="{element}">
          <el-dropdown
            trigger="contextmenu"
            @command="onChangeByCommand"
          >
            <div
              class="header-cell"
              :class="activeColumn == element.prop? 'cur-column' :''"
              :style="{
                width:element.width ? element.width + 'px' :'auto' 
              }"
              @click="onClickTableHeader(element.prop)"
            >
              {{ element.label }}
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  command="delete"
                  :field="element.prop"
                >
                  删除
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </draggable>
      <ev-title>
        预览区域  <span style="font-size: 10px;color: #ccc;">(注：只展示前10条数据)</span>
      </ev-title>
      <ev-table 
        ref="table"
        :data="tableData"
        :table-config="tableConfig"
        border
        height="750"
        :loading="loading"
      >
      </ev-table>
    </div>
    <div class="table-cfg">
      <ev-title>
        全局配置
      </ev-title>
      <global-cfg
        :cfg="globalCfg"
      >
      </global-cfg>
      <ev-title style="margin-top: 20px;">
        当前列配置
      </ev-title>
      <table-cfg
        :cfg="curTableColumn"
      ></table-cfg>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import draggable from 'vuedraggable'
import { useGuDialog } from 'gaius-utils'
import TableField from '@/views/Table/TableDesign/dialog/TableField.vue'
import TableCfg from '@/views/Table/TableDesign/components/TableCfg.vue'
import GlobalCfg from './components/GlobalCfg.vue'
import { Plus, Delete } from '@element-plus/icons-vue'
import EvDataSource from '@/components/common/EvDataSource/EvDataSource.vue'
import { getData } from '@/utils/func'

const curTableColumn = ref<COMMON.commonColumnConfig>({
  label: '',
  prop: '',
})
const activeColumn = ref('')
const tableConfig = reactive(
  {
    columns: [
      {
        label: '日期',
        prop: 'date',
      },
      {
        label: '姓名',
        prop: 'name',
      },
      {
        label: '地址',
        prop: 'address',
      },
    ],
  },

)
const dataSetting = ref<getDataCfg>({
  type: 'static',
  data: [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄',
  }],
  reqType: 'get',
  params: {},
  handleFunc: 'return resData',
  interfaceUrl: 'http://xxxx',
})
const table = ref()
const tableData = ref([])
const globalCfg = ref({
  pagConfig: {
    show: false,
    pageSize: 10,
  },
  add: {
    show: false,
    id: '',
  },
  edit: {
    show: false,
    id: '',
  },
})
const onClickTableHeader = (property:string) => {
  activeColumn.value = property

  curTableColumn.value = tableConfig.columns.find(e => (e.prop == property)) as COMMON.commonColumnConfig
}
const addFieldDialog = useGuDialog({
  title: '新增列表字段',
  content: TableField,
  componentProps: {},
  width: 400,
  height: 200,

})
const onAddField = () => {
  addFieldDialog.open(async (res:any) => {
    const { valid } = await res.data.getFormValidate()
    const columnData = res.data.getFormData()
    if (valid) {
      tableConfig.columns.push({
        label: columnData.label,
        prop: columnData.prop,
      })
      addFieldDialog.destroyed()
    }
  })
}
const onChangeByCommand = (command:string, node:any) => {
  const prop = node.attrs.field
  const idx = tableConfig.columns.findIndex(e => (e.prop == prop))
  if (idx != -1) {
    tableConfig.columns.splice(idx, 1)
  }
}

const loading = ref(false)
const handleData = async () => {
  loading.value = true
  const data = await getData(dataSetting.value)
  tableData.value = data.slice(0, 9)
  loading.value = false
}
const openDataSource = () => {
  const dataSourceDialog = useGuDialog({
    title: '数据源配置',
    content: EvDataSource,
    height: 820,
    componentProps: {
      data: dataSetting.value,
    },
  })
  dataSourceDialog.open(({ type, data }:{type:string, data:any}) => {
    console.log(type, data, data.data)
    if (type == 'ok') {
      dataSetting.value = data.data
    }
    handleData()
    dataSourceDialog.destroyed()
  })
}
</script>
<style scoped lang='scss'>
.table-design{
  width: 100%;
  height: 100%;
  display: flex;
  .table-data{
    width: 300px;
  }
  .table-container{
    flex: 1;
    padding: 0 20px;
  }
  .table-cfg{
    width: 300px;
  }
}

.table-header{
    width: 100%;
    display: flex;
    align-items: center;
    height: 30px;
    overflow-x:auto ;
}
.header-cell{
    flex: 1;
    color: #909399;
    font-weight: bold;
    font-size: 14px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    line-height: 30px;
    height: 30px;
    padding: 0 12px;
    border: 1px solid #ebeef5;
    cursor: pointer;
    
    &.cur-column{
        border: 1px solid var(--ev-active-color);
    }
}
:deep(.el-dropdown){
    flex: 1;
  }
</style>