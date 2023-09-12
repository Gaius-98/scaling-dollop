<template>
  <div
    class="ev-icon iconfont"
    :class="`icon-${icon}`"
    :style="transformCssVar(styleConfig)"
  >
  </div>
</template>

<script lang='ts' setup name="EvIcon">
import { transformCssVar } from '@/utils/func'
import { reactive, toRefs, ref } from 'vue'

interface Props {
    icon:string,
    styleConfig?:COMMON.obj,
}
const props = withDefaults(defineProps<Props>(), {
  icon: '',
  styleConfig: () => ({}),
})
const { icon } = toRefs(props)
</script>
<style scoped lang='scss'>
.ev-icon{
  width: 100%;
    height: 100%;
    color:var(--defaultColor);
    font-size: calc(var(--defaultFontSize) * 1px);
    background: var(--defaultBackgroundColor);
    &:hover{
      color:var(--hoverColor);
      font-size: calc(var(--hoverFontSize) * 1px);
      background: var(--hoverBackgroundColor);
    }
}
</style>