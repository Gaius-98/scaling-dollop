<template>
  <el-table
    class="ev-table"
    v-bind="$attrs"
    :data="data"
  >
    <el-table-column
      v-for="column in tableConfig.columns"
      :prop="column.prop"
      :label="column.label"
      :sortable="column.sortable"
      :width="column.width"
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
    </el-table-column>
    <el-table-column
      v-if="tableConfig.opt"
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
    @on-page-change="handlePaging"
  >
  </ev-pager>
</template>

<script lang='ts' setup name="EvTable">
import { reactive, toRefs, ref, PropType } from 'vue'

interface tableData {
  [key: string]: any
}
interface columns{
  label:string,
  prop:string,
  width?:string|number,
  fixed?:string|boolean,
  sortable?:string|boolean,
  align?:string,
  slot?:string,
  type?:'selection' | 'index' | 'expand' | null
}
interface tableConfig {
  columns:columns[],
  opt?:{
    fixed?:string|boolean,
    width?:string|number,
    label?:string,
  }
}
interface pagConfig {
  total:number,
  pageSize:number,
  pageNumber:number,
  pageSizes?:number[],
  [key:string]:any,
  show:boolean
}
defineProps({
  data: {
    type: Array as PropType<tableData[]>,
    require: true,
    default: () => ([]),
  },
  tableConfig: {
    type: Object as PropType<tableConfig>,
    require: true,
    default: () => ({
      columns: [],
    }),
  },
  pagConfig: {
    type: Object as PropType<pagConfig>,
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