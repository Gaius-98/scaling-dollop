<template>
  <div
    v-if="globalCfg.filter.show"
    class="filter"
    :style="{
      height:filterExpandStatus ? '40px':'auto'
    }"
  >
    <div class="form">
      <ev-form-id
        v-if="globalCfg.filter.id"
        :id="globalCfg.filter.id"
        :form-data="filterData"
      >
      </ev-form-id>
    </div>
    <div
      class="expand iconfont "
      :class="filterExpandStatus ? 'icon-order-descending':'icon-order-ascending'"
      @click="onClickFilterIcon"
    >
    </div>
    <div class="btn">
      <el-button @click="onChangeParams">
        搜索
      </el-button>
    </div>
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
    @on-page-change="onChangeParams"
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
</template>

<script lang='ts' setup name="EvAutoTable">
import { useGuDialog } from 'gaius-utils'
import useParamsPool from '@/hooks/useParamsPool'
import { reactive, toRefs, ref, Prop } from 'vue'
import { getData } from '@/utils/func'
import EvFormId from '@/views/Table/TableDesign/components/EvFormId.vue'

interface Props {
    dataSetting:reqSetting|COMMON.obj,
    globalCfg:TableGlobalCfg|COMMON.obj,
    tableConfig:COMMON.TableCfg|COMMON.obj
}
const props = defineProps<Props>()
const { globalCfg, dataSetting, tableConfig } = toRefs(props)
const loading = ref(false)
const tableData = ref<COMMON.obj[]>([])
const filterData = reactive({})

const getTableData = async () => {
  loading.value = true
  const data = await getData(dataSetting.value as reqSetting)
  tableData.value = data as COMMON.obj[]
  loading.value = false
}
getTableData()
const { setParams } = useParamsPool()
const onChangeParams = () => {
  setParams({
    ...globalCfg.value.pagConfig,
    ...filterData,
  })
  getTableData()
}
const addData = reactive({})
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
    let formData = dialogRes.data.getFormData()
    setParams({
      formData: {
        ...formData.value,
      },
    })
    getData(globalCfg.value.add.reqSetting as reqSetting).then(() => {
      getTableData()
      dialog.destroyed()
    })
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
    let formData = dialogRes.data.getFormData()
    setParams({
      formData: {
        ...formData.value,
      },
    })
    getData(globalCfg.value.edit.reqSetting as reqSetting).then(() => {
      getTableData()
      dialog.destroyed()
    })
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
  dialog.open(() => {
    dialog.destroyed()
  })
}
const onDelete = (scope:any) => {
  setParams({
    formData: {
      ...scope.row,
    },
  })
  getData(globalCfg.value.delete.reqSetting as reqSetting).then(() => {
    getTableData()
  })
}
const filterExpandStatus = ref(false)
const onClickFilterIcon = () => {
  filterExpandStatus.value = !filterExpandStatus.value
}
</script>
<style scoped lang='scss'>
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
</style>