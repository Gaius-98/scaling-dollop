<template>
  <img
    v-bind="props"
    class="ev-img"
  >
</template>

<script lang='ts' setup name="EvImg">
import { reactive, toRefs, ref } from 'vue'

enum fitType{
    contain='contain',
    cover='cover',
    fill='fill',
    none='none',
}
interface Props {
    src:string,
    fit?: keyof typeof fitType|string,
    alt?:string
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
  fit: '',
  alt: '',
})
const { src, fit, alt } = toRefs(props)
</script>
<style scoped lang='scss'>
.ev-img{
    width: 100%;
    height: 100%;
    object-fit: v-bind(fit);
}
</style>