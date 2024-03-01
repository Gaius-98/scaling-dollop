<template>
  <el-menu
    class="ev-menu"
    v-bind="$attrs"
  >
    <ev-menu-item
      :menu-data="data"
      :replace-fields="replaceFields"
      v-bind="$attrs"
      @on-click-item="onClickMenu"
    >
    </ev-menu-item>
  </el-menu>
</template>

<script lang='ts' setup name="EvMenu">
import EvMenuItem from './components/EvMenuItem.vue'
import { reactive, toRefs, ref, PropType } from 'vue'

const props = defineProps({
  data: {
    type: Array as PropType<COMMON.Obj[]>,
    required: true,
  },
  replaceFields: {
    type: Object as PropType<COMMON.ReplaceFields>,
    required: false,
    default: () => ({
      value: 'value',
      children: 'children',
      label: 'label',
      key: 'key',
    }),
  },
})
const { data, replaceFields } = toRefs(props)
const emits = defineEmits(['onClickItem'])
const onClickMenu = (val:any) => {
  emits('onClickItem', val)
}
</script>
<style scoped lang='scss'>
.ev-menu{
  width:100%;
  height:100%;
}

</style>