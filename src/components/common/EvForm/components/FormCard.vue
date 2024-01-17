<template>
  <el-card v-bind="$attrs">
    <form-comp
      :list="card.list"
      :data="data"
    >
    </form-comp>
  </el-card>
</template>

<script lang='ts' setup name="formCard">
import FormComp from './FormComp.vue'
import { reactive, toRefs, ref, PropType } from 'vue'

const props = defineProps({
  card: {
    type: Object as PropType<COMMON.obj>,
    required: true,
  },
  data: {
    type: Object as PropType<COMMON.obj>,
    required: true,
  },
})
const { card, data } = toRefs(props)
</script>
<style scoped lang='scss'>
.col{
  min-height: 40px;
}
</style>