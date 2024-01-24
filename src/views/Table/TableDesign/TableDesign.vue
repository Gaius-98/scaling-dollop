<template>
  <div class="table-design">
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
      <el-button
        type="primary"
        @click="openDataSource"
      >
        数据源配置
      </el-button>
      <ev-title>
        预览区域  <span style="font-size: 10px;color: #ccc;">(注：只展示前10条数据)</span>
      </ev-title>
      <div
        v-if="globalCfg.filter.show"
        class="filter"
      >
        <ev-form-id
          :id="globalCfg.filter.id"
          :form-data="filterData"
        >
        </ev-form-id>
      </div>
      <div
        class="btns"
        style="margin-bottom: 20px;"
      >
        <el-button
          v-if="globalCfg.add.show"
          type="primary"
          @click="onOpenAddDialog"
        >
          新增
        </el-button>
      </div>
      <ev-table 
        ref="table"
        :data="tableData"
        :table-config="tableConfig"
        :pag-config="globalCfg.pagConfig"
        border
        height="620"
        :loading="loading"
      >
        <template #opt="scope"> 
          <el-link
            v-if="globalCfg.edit.show"
            type="primary"
            style="margin-left: 10px;"
            @click="onEdit(scope)"
          >
            <i class="iconfont icon-bianji"></i>
            编辑
          </el-link>
          <el-link
            v-if="globalCfg.view.show"
            type="success"
            style="margin-left: 10px;"
            @click="onView(scope)"
          >
            <i class="iconfont icon-keshihua"></i>
            查看
          </el-link>
          <el-popconfirm
            title="确定要删除吗?"
            confirm-button-text="确认"
            cancel-button-text="取消"
            @confirm="onDelete(scope)"
          >
            <template #reference>
              <el-link
                v-if="globalCfg.delete.show"
                type="danger"
                style="margin-left: 10px;"
              >
                <i class="iconfont icon-a-shanchulajitong"></i>
                删除
              </el-link>
            </template>
          </el-popconfirm>
        </template>
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
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, watchEffect } from 'vue'
import draggable from 'vuedraggable'
import { useGuDialog } from 'gaius-utils'
import TableField from '@/views/Table/TableDesign/dialog/TableField.vue'
import TableCfg from '@/views/Table/TableDesign/components/TableCfg.vue'
import GlobalCfg from './components/GlobalCfg.vue'
import { Plus, Delete } from '@element-plus/icons-vue'
import EvDataSource from '@/components/common/EvDataSource/EvDataSource.vue'
import { getData } from '@/utils/func'
import formApi from '@/views/Form/service/api'
import { ElMessage } from 'element-plus'
import EvForm from '@/components/common/EvForm/EvForm.vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import EvFormId from './components/EvFormId.vue'

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
    opt: {
      show: false,
    },
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
  params: '',
  handleFunc: 'return resData',
  interfaceUrl: 'http://xxxx',
})
const table = ref()
const tableData = ref([])
const filterData = reactive({})
const addData = reactive({})
const globalCfg = ref({
  pagConfig: {
    show: false,
    pageSize: 10,
    total: 10,
  },
  add: {
    show: false,
    id: 32,
  },
  edit: {
    show: false,
    id: 32,
  },
  delete: {
    show: false,
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
handleData()
const onOpenAddDialog = () => {
  const dialog = useGuDialog({
    title: '新增',
    content: EvFormId,
    componentProps: {
      id: globalCfg.value.add.id,
      formData: addData,
    },
  })
  dialog.open((dialogRes:any) => {
    console.log(dialogRes.data.getFormData())
    dialog.destroyed()
  })
}
const onEdit = (scope:any) => {
  const dialog = useGuDialog({
    title: '编辑',
    content: EvFormId,
    componentProps: {
      id: globalCfg.value.edit.id,
      formData: scope.row,
    },
  })
  dialog.open((dialogRes:any) => {
    console.log(dialogRes.data.getFormData())
    dialog.destroyed()
  })
}
const onView = (scope:any) => {
  const dialog = useGuDialog({
    title: '查看',
    content: EvFormId,
    componentProps: {
      id: globalCfg.value.view.id,
      formData: scope.row,
      disabled: true,
    },
  })
  dialog.open((dialogRes:any) => {
    console.log(dialogRes.data.getFormData())
    dialog.destroyed()
  })
}
const onDelete = (scope:any) => {
  console.log(scope)
}
watchEffect(() => {
  if (globalCfg.value.edit.show || globalCfg.value.delete.show || globalCfg.value.view.show) {
    tableConfig.opt.show = true
  } else {
    tableConfig.opt.show = false
  }
})

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
      height: 40px;
      overflow: auto;
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