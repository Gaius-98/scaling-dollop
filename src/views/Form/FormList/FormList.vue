<template>
  <div class="form-list">
    <div class="filter">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-form-item label="表单名称">
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
        :height="750"
        @on-page-change="getList"
      >   
        <template #formImg="scope">
          <el-image 
            :src="scope.row.img"
            style="width:120px;height:84px"
            :preview-src-list="[scope.row.img]"
            :preview-teleported="true"
          >
          </el-image>
        </template>
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

            <el-dropdown @command="handleCommand(scope,$event)">
              <el-link
                type="primary"
              >
                <i class="iconfont icon-daochu"></i>
                导出
              </el-link>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="json">json</el-dropdown-item>
                  <el-dropdown-item command="vue3">vue3</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <!-- <el-link
            type="primary"
            @click="onExport(scope,'json')"
          >
            导出JSON
          </el-link>
          <el-divider direction="vertical" />
          <el-link
            type="primary"
            @click="onExport(scope,'vue2')"
          >
            导出VUE2文件
          </el-link>
          <el-divider direction="vertical" />
          <el-link
            type="primary"
            @click="onExport(scope,'vue3')"
          >
            导出VUE3文件
          </el-link> -->
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
import api from '@/views/Form/service/api'
import { useGuDialog } from 'gaius-utils'
import EvForm from '@/components/common/EvForm/EvForm.vue'
import _ from 'lodash'
import { Plus, Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { downloadFile } from '@/utils/func'

 enum downType {
  vue2='vue2',
  vue3='vue3',
  json='json'
}
const loading = ref(true)
const tableData = ref<formConfig[]>([])
const config = ref({
  columns: [
    {
      label: '表单id',
      prop: 'id',
    },
    {
      label: '表单缩略图',
      prop: 'img',
      slot: 'formImg',

    },
    {
      label: '表单名称',
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
  viewDialog.open(viewDialog.destroyed)
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

const onExport = async (scope:COMMON.columnScope, type:keyof typeof downType) => {
  let form = {
    formProp: JSON.parse(scope.row.formProp),
    list: JSON.parse(scope.row.list),
    name: scope.row.name,
    id: scope.row.id,
  }
  if (type == 'json') {
    downloadFile(JSON.stringify(form, null, 4), scope.row.name) 
  } else {
    api.downloadForm({
      config: form,
    }).then(res => {
      const { code, data, msg } = res
      if (code == 0) {
        downloadFile(data, scope.row.name, 'vue')
      }
    })
  }
}
const handleCommand = (scope:COMMON.columnScope, command:keyof typeof downType) => {
  onExport(scope, command)
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
    .main{
        width: 100%;
        .opt-container{
          display: flex;
          align-items: center;
        }
    }
}

</style>