<template>
  <main class="home">
    <drag-resize
      :init="{
        width:1904,
        height:680,
        top:0,
        left:0
      }"
    >
      <readme>
      </readme>
    </drag-resize>
  </main>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import readme from '../../../README.md'
</script>
<style scoped lang='scss'>
.home{
  width: 100%;
  height: calc(100vh - 120px);
}
</style>