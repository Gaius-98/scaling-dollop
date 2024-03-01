<template>
  <div class="form-list">
    <div class="filter">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-form-item label="列表名称">
            <el-input
              v-model="pageCfg.keyword"
              clearable
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col
          :span="4"
        >
          <el-form-item>
            <el-button
              :icon="Search"
              @click="getList"
            >
              搜索
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col
          :span="4"
          :offset="20"
        >
          <el-button
            :icon="Plus"
            type="primary"
            @click="onAdd"
          >
            新增
          </el-button>
        </el-col>
      </el-row>
    </div>
    <div
      v-ev-loading="loading"
      class="main"
    >
      <ev-table 
        :data="tableData"
        :table-config="config"
        :pag-config="pageCfg"
        :height="700"
        @on-page-change="getList"
      >   
        <template #opt="scope">
          <div class="opt-container">
            <el-link
              type="primary"
              @click="onView(scope)"
            >
              <i class="iconfont icon-photo"></i>
              预览
            </el-link>
            <el-divider direction="vertical" />
            <el-link
              type="primary"
              @click="onEdit(scope)"
            >
              <i class="iconfont icon-bianji"></i>
              编辑
            </el-link>
            <el-divider direction="vertical" />
            <el-popconfirm
              title="确定要删除吗?"
              confirm-button-text="确认"
              cancel-button-text="取消"
              @confirm="onDel(scope)"
            >
              <template #reference>
                <el-link
                  type="danger"
                >
                  删除
                </el-link>
              </template>
            </el-popconfirm>
          </div>
        </template>
      </ev-table>
    </div>
  </div>
</template>
  
<script lang='ts' setup name="formList">
import { reactive, toRefs, ref, onMounted } from 'vue'
import api from '../service/api'
import _ from 'lodash'
import { Plus, Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const loading = ref(true)
const tableData = ref<TableSaveCfg[]>([])
const config = ref({
  columns: [
    {
      label: '列表id',
      prop: 'id',
    },
    {
      label: '列表名称',
      prop: 'name',   
    },
  ],
  opt: {
    label: '操作',
    width: 300,
    fixed: 'right',
    show: true,
  },
})
const pageCfg = ref({
  show: true,
  pageNumber: 1,
  pageSize: 10,
  keyword: '',
  total: 0,
  pageSizes: [10, 20, 30],
})
const getList = () => {
  loading.value = true
  api.getList(pageCfg.value)
  .then(res => {
    loading.value = false
    const { code, data, msg } = res
    if (code == 0) {
      tableData.value = data.rows
      pageCfg.value.total = data.count
    }
  })
}
onMounted(() => {
  getList()
})
  
const router = useRouter()
const onView = (scope:COMMON.ColumnScope) => {
  router.push({
    name: 'tablePre',
    query: {
      id: scope.row.id,
    },
  })
}
const onAdd = () => {
  router.push({
    name: 'tableDesign',
    query: {
      type: 'add',
    },
  })
}
const onEdit = (scope:COMMON.ColumnScope) => {
  router.push({
    name: 'tableDesign',
    query: {
      id: scope.row.id,  
      type: 'edit',   
    },
  })
}
  
const onDel = (scope:COMMON.ColumnScope) => {
  api.deleteForm({
    id: scope.row.id,
  }).then(res => {
    const { code, msg } = res
    if (code == 0) {
      ElMessage.success(msg)
      getList()
    }
  })
}
</script>
  <style scoped lang='scss'>
  .form-list{
      .main{
          width: 100%;
          .opt-container{
            display: flex;
            align-items: center;
          }
      }
  }
  
  </style>