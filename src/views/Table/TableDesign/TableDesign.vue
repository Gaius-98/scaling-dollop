<template>
  <div
    v-ev-loading="evLoaindg"
    class="table-design"
  >
    <div class="table-data">
      <div class="table-column-design">
        <ev-title>
          列配置
        </ev-title>
        <div
          class="tree-btn"
          @click="onAddField"
        >
          <i class="iconfont icon-a-xinzengtianjia"></i>
          新增字段
        </div>
        <el-tree 
          :allow-drop="true"
          :allow-drag="true"
          :data="tableConfig.columns"
          draggable
          node-key="prop"
          :highlight-current="true"
          :check-on-click-node="true"
          @node-click="onClickTableHeader"
        >
        </el-tree>
      </div>
      <div class="table-column-cfg">
        <ev-title style="margin-top: 20px;">
          当前列配置
        </ev-title>
        <table-cfg
          :cfg="curTableColumn"
        ></table-cfg>
      </div>
    </div>
    <div class="table-container">
      <div class="table-container-header f-rb">
        <el-button
          type="primary"
          @click="openDataSource"
        >
          数据源配置
        </el-button>
        <div class="f-ra">
          <span style="width: 100px;">
            列表名称
          </span>
          <el-input
            v-model="TableName"
            style="width:200px"
          >
          </el-input>
        </div>
        <el-button @click="onSave">
          保存
        </el-button>
      </div>
      <ev-title>
        预览区域  <span style="font-size: 10px;color: #ccc;">(注：只展示前10条数据)</span>
      </ev-title>
      <ev-auto-table
        :global-cfg="globalCfg"
        :data-setting="dataSetting"
        :table-config="tableConfig"
      >
      </ev-auto-table>
    </div>
    <div class="table-cfg">
      <ev-title>
        全局配置
      </ev-title>
      <global-cfg
        :cfg="globalCfg"
      >
      </global-cfg>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { useGuDialog } from 'gaius-utils'
import TableField from '@/views/Table/TableDesign/dialog/TableField.vue'
import TableCfg from '@/views/Table/TableDesign/components/TableCfg.vue'
import GlobalCfg from './components/GlobalCfg.vue'
import { Plus, Delete } from '@element-plus/icons-vue'
import EvDataSource from '@/components/common/EvDataSource/EvDataSource.vue'
import { getData } from '@/utils/func'
import { ElMessage } from 'element-plus'
import EvAutoTable from '@/components/common/EvAutoTable/EvAutoTable.vue'
import api from '../service/api'
import { useRoute } from 'vue-router'

const id = ref()
const route = useRoute()
const evLoaindg = ref(false)
const getTableDetail = () => {
  evLoaindg.value = true
  api.getDetail({ id: id.value })
  .then(res => {
    const { code, data, msg } = res
    if (code == 0) {
      Object.assign(tableConfig, data.tableCfg)
      dataSetting.value = data.dataSetting
      globalCfg.value = data.globalCfg
      TableName.value = data.name
    }
    evLoaindg.value = false
  })
}
if (route.query.id) {
  id.value = route.query.id
  getTableDetail()
}
const curTableColumn = ref<COMMON.commonColumnConfig>({
  label: '',
  prop: '',
})
const activeColumn = ref('')
const tableConfig = reactive<COMMON.TableCfg>(
  {
    columns: [
      {
        label: '字典类型',
        prop: 'dictType',
      },
      {
        label: '字典类型翻译',
        prop: 'dictTypeChdesc',
      },
      {
        label: '字典值',
        prop: 'value',
      },
      {
        label: '字典翻译',
        prop: 'label',
      },
      {
        label: '排序号',
        prop: 'orderNum',
      },
      {
        label: '描述',
        prop: 'description',
      },
    ],
    opt: {
      show: false,
    },
  },

)
const dataSetting = ref<getDataCfg>({
  type: 'dev',
  data: [],
  reqType: 'post',
  params: `return {
        pageNumber:params.pageNumber || 1,
        pageSize:params.pageSize || 10,
        keyword:params.keyword || ''
      }`,
  handleFunc: 'return resData.data.data.rows',
  interfaceUrl: 'http://123.57.2.173:3000/sys/dict/list',
})

const tableData = ref([])
const globalCfg = ref<TableGlobalCfg>({
  pagConfig: {
    show: false,
    pageSize: 10,
    total: 100,
    pageNumber: 1,
  },
  add: {
    show: true,
    id: 20,
    reqSetting: {
      interfaceUrl: 'http://123.57.2.173:3000/sys/dict/save',
      reqType: 'post',
      params: `return {
        dictType:params.formData.dictType,
        dictTypeChdesc:params.formData.dictTypeChdesc,
        value:params.formData.value,
        orderNum:params.formData.orderNum,
        label:params.formData.label,
        description:params.formData.description
      }`,
      handleFunc: 'return resData',
    },
  },
  edit: {
    show: true,
    id: 20,
    reqSetting: {
      interfaceUrl: 'http://123.57.2.173:3000/sys/dict/update',
      reqType: 'post',
      params: `return {
        dictType:params.formData.dictType,
        dictTypeChdesc:params.formData.dictTypeChdesc,
        value:params.formData.value,
        orderNum:params.formData.orderNum,
        label:params.formData.label,
        description:params.formData.description,
        id:params.formData.id
      }`,
      handleFunc: 'return resData',
    },
  },
  delete: {
    show: false,
    reqSetting: {
      interfaceUrl: 'http://123.57.2.173:3000/sys/dict/delete',
      reqType: 'post',
      params: `return {
        id:params.formData.id
      }`,
      handleFunc: 'return resData',
    },
  },
  view: {
    show: false,
    id: 32,
  },
  filter: {
    show: false,
    id: 33,
  },
})
const TableName = ref('')
const onClickTableHeader = (info:COMMON.commonColumnConfig) => {
  const { prop: property } = info
  activeColumn.value = property
  curTableColumn.value = info as COMMON.commonColumnConfig
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
    if (res.type == 'ok') {
      const { valid } = await res.data.getFormValidate()
      const columnData = res.data.getFormData()
      if (valid) {
        tableConfig.columns.push({
          label: columnData.label,
          prop: columnData.prop,
        })
        addFieldDialog.destroyed()
      }
    }
  })
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
    if (type == 'ok') {
      dataSetting.value = data.data
    }
    handleData()
    dataSourceDialog.destroyed()
  })
}
watchEffect(() => {
  if (globalCfg.value.edit.show || globalCfg.value.delete.show || globalCfg.value.view.show) {
    tableConfig.opt.show = true
  } else {
    tableConfig.opt.show = false
  }
})
const onSave = () => {
  let saveApi = api.save
  if (id.value) {
    saveApi = api.update
  }
  saveApi({
    id: id.value,
    name: TableName.value,
    globalCfg: globalCfg.value,
    dataSetting: dataSetting.value,
    tableCfg: tableConfig,
  }).then(res => {
    const { code, data, msg } = res
    if (code == 0) {
      ElMessage.success('保存成功')
    }
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
    .table-column-design{
      height: 400px;
      overflow-y: auto;
      overflow-x: hidden;
      .tree-btn{
        color: var(--ev-active-color);
        font-size: 12px;
        cursor: pointer;
        margin: 10px;
        i{
          font-size: 12px;
        }
      }
    }
    .table-column-cfg{
      height: calc(100% - 440px);
      margin-top: 20px;
      overflow-y: auto;
    }
  }
  .table-container{
    flex: 1;
    max-width: calc(100% - 640px);
    padding: 0 20px;
    .filter{
      display: flex;
      align-items: flex-start;
      overflow: hidden;
      .form{
        flex: 8;
      }
      .expand{
        width: 16px;
        height: 16px;
        margin-top:8px;
        cursor: pointer;
      }
      .button{
        flex: 2;
      }
    }
  }
  .table-cfg{
    width: 300px;
    height:100%;
    overflow-y: auto;
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