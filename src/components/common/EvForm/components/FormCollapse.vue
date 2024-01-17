<template>
  <el-collapse v-bind="$attrs">
    <el-collapse-item
      :title="title"
      :name="title"
    >
      <form-comp
        :list="collapse.list"
        :data="data"
      >
      </form-comp>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang='ts' setup name="formCard">
import FormComp from './FormComp.vue'
import { reactive, toRefs, ref, PropType } from 'vue'

const props = defineProps({
  collapse: {
    type: Object as PropType<COMMON.obj>,
    required: true,
  },
  data: {
    type: Object as PropType<COMMON.obj>,
    required: true,
  },
  title: {
    type: String,
  },
})
const { collapse, data, title } = toRefs(props)
</script>
<style scoped lang='scss'>
.col{
  min-height: 40px;
}
</style>