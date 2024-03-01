<template>
  <div
    class="ev-color-box"
    :style="transformCssVar(styleConfig)"
  >
  </div>
</template>
  
<script lang='ts' setup name="EvColorBox">
import { transformCssVar } from '@/utils/func'
import { reactive, toRefs, ref } from 'vue'
  
  interface Props {
      icon:string,
      styleConfig?:COMMON.Obj,
  }
const props = withDefaults(defineProps<Props>(), {
  styleConfig: () => ({}),
})
</script>
<style scoped lang='scss'>
.ev-color-box{
    width: 100%;
    height: 100%;
    border: calc(var(--defaultBorderWidth) * 1px) solid  var(--defaultBorderColor);
    border-radius: calc((var(--defaultBorderRadius) * 1px));
    background: var(--defaultBackgroundColor);
    &:hover{
    border: calc(var(--hoverBorderWidth) * 1px) solid  var(--hoverBorderColor);
    border-radius: calc((var(--hoverBorderRadius) * 1px));
    background: var(--hoverBackgroundColor);
    }
}
</style>