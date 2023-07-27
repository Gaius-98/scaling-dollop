<template>
  <div
    class="ev-text"
    :style="transformCssVar(styleConfig)"
    @click="open"
  >
    {{ value }}
  </div>
</template>

<script lang='ts' setup name="EvText">
import { transformCssVar } from '@/utils/func'
import { reactive, toRefs, ref } from 'vue'

interface obj{
[key:string]:any
}
enum openTypes {
  _self='_self',
  _blank='_blank'
}
interface Props {
    value:string,
    styleConfig?:COMMON.obj,
    openUrl:boolean,
    openType:keyof typeof openTypes,
    url:string
}
const props = withDefaults(defineProps<Props>(), {
  value: '',
  styleConfig: () => ({}),
  openUrl: false,
  openType: '_blank',
  url: '',
})
const { openUrl, openType, url } = toRefs(props)
const open = () => {
  if (openUrl.value && url.value) {
    window.open(url.value, openType.value)
  }
}
</script>
<style scoped lang='scss'>
.ev-text{
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