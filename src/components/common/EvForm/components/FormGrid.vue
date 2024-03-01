<template>
  <el-row v-bind="$attrs">
    <el-col
      v-for="item in cols"
      :key="item.key"
      :span="Number(item.span)"
      class="col"
    >
      <form-comp
        :list="item.list"
        :data="data"
      >
      </form-comp>
    </el-col>
  </el-row>
</template>

<script lang='ts' setup name="formGrid">
import FormComp from './FormComp.vue'
import { reactive, toRefs, ref, PropType } from 'vue'

const props = defineProps({
  cols: {
    type: Array as PropType<COMMON.Obj[]>,
    required: true,
  },
  data: {
    type: Object as PropType<COMMON.Obj>,
    required: true,
  },
})
const { cols, data } = toRefs(props)
</script>
<style scoped lang='scss'>
.col{
  min-height: 40px;
}
</style>