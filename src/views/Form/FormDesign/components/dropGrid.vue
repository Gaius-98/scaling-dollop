<template>
  <el-row v-bind="$attrs">
    <el-col
      v-for="item in cols"
      :key="item.key"
      :span="Number(item.span)"
      class="col"
    >
      <drop-comp v-model:list="item.list">
      </drop-comp>
    </el-col>
  </el-row>
</template>

<script lang='ts' setup name="dropGrid">
import dropComp from './dropComp.vue'
import { reactive, toRefs, ref, PropType } from 'vue'

const props = defineProps({
  cols: {
    type: Array as PropType<COMMON.obj[]>,
    required: true,
  },
})
const { cols } = toRefs(props)
</script>
<style scoped lang='scss'>
.col{
  min-height: 80px;
  border-right:1px dashed var(--ev-active-shallow-color) ;
}
</style>