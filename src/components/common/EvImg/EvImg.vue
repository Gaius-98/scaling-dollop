<template>
  <img
    v-bind="props"
    class="ev-img"
  >
</template>

<script lang='ts' setup name="EvImg">
import { reactive, toRefs, ref } from 'vue'

enum fit{
    contain='contain',
    cover='cover',
    fill='fill',
    none='none',
    scaleDown='scale-down'
}
 interface Props {
    src:string,
    fit?: keyof typeof fit,
    alt?:string
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
})
</script>
<style scoped lang='scss'>
.ev-img{
    width: 100%;
    height: 100%;
}
</style>