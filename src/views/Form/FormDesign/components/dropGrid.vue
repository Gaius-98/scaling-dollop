<template>
  <el-row
    v-bind="$attrs"
    class="drop-row"
  >
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
    type: Array as PropType<COMMON.Obj[]>,
    required: true,
  },
})
const { cols } = toRefs(props)
</script>
<style scoped lang='scss'>
.drop-row{
  border: 1px dashed var(--ev-active-tint-color);
  .col{
    border-right:  1px dashed var(--ev-active-tint-color);
  }
  .col:nth-last-child(1){
    min-height: 40px;
    border-right:none ;
  }

}

</style>