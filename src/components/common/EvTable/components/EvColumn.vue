<template>
  <el-table-column
    v-for="column in columnList"
    :key="column.label + column.prop"
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
    <template v-if="column.children && column.children.length >0">
      <!-- {{ column.children }} -->
      <EvColumn
        :column-list="column.children"
      >
      </EvColumn>
    </template>
  </el-table-column>
</template>

<script lang='ts' setup name="EvColumn">
import { reactive, toRefs, ref } from 'vue'

interface columns{
  label:string,
  prop:string,
  width?:string|number,
  fixed?:string|boolean,
  sortable?:string|boolean,
  align?:string,
  slot?:string,
  type?:'selection' | 'index' | 'expand' | null,
  children?:columns[]
}
interface Props {
    columnList:columns[]
}
const props = withDefaults(defineProps<Props>(), {})
const { columnList } = toRefs(props)
console.log(columnList)
</script>
<style scoped lang='scss'>
</style>