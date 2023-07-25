<template>
  <div class="ev-text">
    {{ value }}
  </div>
</template>

<script lang='ts' setup name="EvText">
import { reactive, toRefs, ref } from 'vue'

interface obj{
[key:string]:any
}
interface Props {
    value:string,
    styleConfig?:COMMON.obj 
}
const props = withDefaults(defineProps<Props>(), {
  value: '',
  styleConfig: () => ({}),
})
</script>
<style scoped lang='scss'>
.ev-text{
    width: 100%;
    height: 100%;
}
</style>