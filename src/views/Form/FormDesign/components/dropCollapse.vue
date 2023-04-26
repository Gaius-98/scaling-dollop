<template>
  <el-collapse v-bind="$attrs">
    <el-collapse-item
      :title="title"
      :name="title"
    >
      <drop-comp
        v-model:list="collapse.list"
        style="min-height: 40px;"
      >
      </drop-comp>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang='ts' setup name="dropCard">
import dropComp from './dropComp.vue'
import { reactive, toRefs, ref, PropType, computed } from 'vue'

const props = defineProps({
  collapse: {
    type: Object as PropType<COMMON.obj>,
    required: true,
  },
  title: {
    type: String,
    required: true,
    default: '标题',
  },
})
const { collapse, title } = toRefs(props)
</script>
<style scoped lang='scss'>
:deep(.el-card__header){
  padding: 5px;
}
:deep(.el-card__body){
  padding: 5px;
}
</style>