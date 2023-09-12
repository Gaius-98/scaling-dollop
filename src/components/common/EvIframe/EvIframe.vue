<template>
  <div class="ev-iframe">
    <iframe
      :src="url"
      frameborder="0"
      class="iframe"
      :style="{
        zIndex:preview ? 0 :-1
      }"
    ></iframe>
  </div>
</template>

<script lang='ts' setup name="EvIframe">
import { reactive, toRefs, ref } from 'vue'

interface Props {
    url:string,
    preview:boolean
}
const props = withDefaults(defineProps<Props>(), {
  url: '',
  preview: false,
})
const { url, preview } = toRefs(props)
</script>
<style scoped lang='scss'>
.ev-iframe{
    position: relative;
    width: 100%;
    height: 100%;
    .iframe{
        position: relative;
        width: 100%;
        height: 100%;
    }
}
</style>