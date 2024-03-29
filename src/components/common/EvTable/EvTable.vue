<template>
  <el-table
    class="ev-table"
    v-bind="$attrs"
    :data="data"
  >
    <el-table-column
      v-for="column in tableConfig.columns"
      :key="column.label + column.prop"
      v-bind="column"
    >
      <template
        v-if="column.slot"
        #default="scope"
      >
        <slot
          :name="column.slot" 
          :row="scope.row"
        ></slot>
      </template>
      <template v-if="column.children&& column.children.length > 0 ">
        <ev-column 
          v-if="column.children && column.children.length > 0"
          :column-list="column.children"
        >
        </ev-column>
      </template>
    </el-table-column>
    <el-table-column
      v-if="tableConfig.opt.show"
      :fixed="tableConfig.opt.fixed"
      :width="tableConfig.opt.width || 200"
      :label="tableConfig.opt.label || '操作'"
    >
      <template #default="scope">
        <slot
          name="opt"    
          :row="scope.row"
        ></slot>
      </template>
    </el-table-column>
  </el-table>
  <ev-pager
    v-if="pagConfig.show"
    :pag-config="pagConfig"
    style="margin-top: 5px;"
    @on-page-change="handlePaging"
  >
  </ev-pager>
</template>

<script lang='ts' setup name="EvTable">
import { reactive, toRefs, ref, PropType } from 'vue'
import EvColumn from './components/EvColumn.vue'

interface TableData {
  [key: string]: any
}
interface Columns{
  label:string,
  prop:string,
  width?:string|number,
  fixed?:string|boolean,
  sortable?:string|boolean,
  align?:string,
  slot?:string,
  type?:'selection' | 'index' | 'expand' | null,
  children?:Columns[]
}
interface TableConfig {
  columns:Columns[],
  opt:{
    fixed?:string|boolean,
    width?:string|number,
    label?:string,
    show?:boolean
  }
}
interface PagConfig {
  total:number,
  pageSize:number,
  pageNumber:number,
  pageSizes?:number[],
  [key:string]:any,
  show:boolean
}
defineProps({
  data: {
    type: Array as PropType<TableData[]>,
    require: true,
    default: () => ([]),
  },
  tableConfig: {
    type: Object as PropType<TableConfig>,
    require: true,
    default: () => ({
      columns: [],
    }),
  },
  pagConfig: {
    type: Object as PropType<PagConfig>,
    default: () => ({
      show: false,
    }),
  },
})
const emit = defineEmits(['onPageChange'])
const handlePaging = () => {
  emit('onPageChange')
}
</script>
<style scoped lang='scss'>
.ev-table{
  width: 100%;
  height: 100%;
}
</style>