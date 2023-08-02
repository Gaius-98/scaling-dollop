<template>
  <div class="ev-iframe">
    <iframe
      :src="url"
      frameborder="0"
      class="iframe"
    ></iframe>
  </div>
</template>

<script lang='ts' setup name="EvIframe">
import { reactive, toRefs, ref } from 'vue'

interface Props {
    url:string,
}
const props = withDefaults(defineProps<Props>(), {
  url: '',
})
const { url } = toRefs(props)
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