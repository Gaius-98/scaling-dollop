<template>
  <div class="form-list">
    <div class="opt">
      <el-row>
        <el-col
          :offset="22"
          :span="2"
        >
          <el-button
            type="primary"
            @click="onAdd"
          >
            新增
          </el-button>
        </el-col>
      </el-row>
    </div>
    <div class="filter">
      <el-row align="middle">
        <el-col :span="4">
          表单名称
        </el-col>
        <el-col
          :span="4"
          :offset="1"
        >
          <el-input
            v-model="pageCfg.keyword"
          >
          </el-input>
        </el-col>
        <el-col
          :span="4"
          :offset="10"
        >
          <el-button @click="getList">
            搜索
          </el-button>
        </el-col>
      </el-row>
    </div>
    <div class="main">
      <ev-table 
        :data="tableData"
        :table-config="config"
        :pag-config="pageCfg"
        @on-page-change="getList"
      >   
        <template #opt="scope">
          <el-link
            type="primary"
            @click="onView(scope)"
          >
            预览
          </el-link>
          <el-divider direction="vertical" />
          <el-link
            type="primary"
            @click="onEdit(scope)"
          >
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
        </template>
      </ev-table>
    </div>
  </div>
</template>

<script lang='ts' setup name="formList">
import { reactive, toRefs, ref, onMounted } from 'vue'
import api from '@/views/Form/service/api'
import { useGuDialog } from 'gaius-utils'
import EvForm from '@/components/common/EvForm/EvForm.vue'
import _ from 'lodash'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const tableData = ref<formConfig[]>([])
const config = ref({
  columns: [
    {
      label: '表单id',
      prop: 'id',
    },
    {
      label: '表单名称',
      prop: 'name',     
    },
  ],
  opt: {
    label: '操作',
    width: 200,
    fixed: 'right',
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
  api.getList(pageCfg.value)
  .then(res => {
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

const onView = (scope:COMMON.columnScope) => {
  const form = _.cloneDeep(scope.row)
  form.list = JSON.parse(form.list)
  form.formProp = JSON.parse(form.formProp)
  const viewDialog = useGuDialog({
    title: form.name,
    content: EvForm,
    componentProps: {
      formConfig: form,
    },
  })
  viewDialog.open()
}
const router = useRouter()
const onAdd = () => {
  router.push({
    name: 'formDesign',
    query: {
      type: 'add',
    },
  })
}
const onEdit = (scope:COMMON.columnScope) => {
  router.push({
    name: 'formDesign',
    query: {
      id: scope.row.id,  
      type: 'edit',   
    },
  })
}
const onDel = (scope:COMMON.columnScope) => {
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
    margin: 10px;
    .filter{

    }
    .main{
        width: 100%;
    }
}

</style>