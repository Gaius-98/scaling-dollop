<template>
  <el-pagination
    v-bind="$attrs"
    v-model:current-page="pagConfig.pageNumber"
    v-model:page-size="pagConfig.pageSize"
    :page-sizes="pagConfig.pageSizes || [10,20,30]"
    :total="pagConfig.total"
    layout="total, sizes, prev, pager, next, jumper"
    @size-change="handlePaging"
    @current-change="handlePaging"
  />
</template>

<script lang='ts' setup name="EvPager">
import { reactive, toRefs, ref, PropType } from 'vue'

interface pagConfig {
  total:number,
  pageSize:number,
  pageNumber:number,
  pageSizes?:number[],
  [key:string]:any,
}
defineProps({
  pagConfig: {
    type: Object as PropType<pagConfig>,
    default: () => ({
            
    }),
    required: true,
  },
})
const emit = defineEmits(['onPageChange'])
const handlePaging = () => {
  emit('onPageChange')
}
</script>
<style scoped lang='scss'>
</style>