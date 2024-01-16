<template>
  <el-table-column
    v-for="column in columnList"
    :key="column.label + column.prop"
    v-bind="column"
  >
    <template v-if="column.children && column.children.length >0">
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
</script>
<style scoped lang='scss'>
</style>