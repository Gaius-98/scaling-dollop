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
import { reactive, toRefs, ref, watch } from 'vue'
import useGetCompData from '../../../hooks/useViewData'

interface obj{
[key:string]:any
}
enum openTypes {
  _self='_self',
  _blank='_blank'
}
interface Props {
    styleConfig?:COMMON.obj,
    openUrl:boolean,
    openType:keyof typeof openTypes,
    url:string,
    dataSetting:DataSetting
}
const props = withDefaults(defineProps<Props>(), {
  styleConfig: () => ({}),
  openUrl: false,
  openType: '_blank',
  url: '',
})
const { openUrl, openType, url, dataSetting } = toRefs(props)
const value = ref('')
const open = () => {
  if (openUrl.value && url.value) {
    window.open(url.value, openType.value)
  }
}
watch(dataSetting.value, () => {
  const resData = useGetCompData(dataSetting.value)
  resData.then((res) => {
    value.value = res as string
  })
}, {
  deep: true,
  immediate: true,
})

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