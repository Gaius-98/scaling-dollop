<template>
  <el-card v-bind="$attrs">
    <drop-comp
      v-model:list="card.list"
      style="min-height: 40px;"
    >
    </drop-comp>
  </el-card>
</template>

<script lang='ts' setup name="dropCard">
import dropComp from './dropComp.vue'
import { reactive, toRefs, ref, PropType, computed } from 'vue'

const props = defineProps({
  card: {
    type: Object as PropType<COMMON.obj>,
    required: true,
  },
})
const { card } = toRefs(props)
</script>
<style scoped lang='scss'>
:deep(.el-card__header){
  padding: 5px;
}
:deep(.el-card__body){
  padding: 5px;
}
</style>