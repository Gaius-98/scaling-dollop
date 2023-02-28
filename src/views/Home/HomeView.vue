<template>
  <main class="home">
    <drag-resize
      :init="{
        width:850,
        height:330,
        top:0,
        left:0
      }"
    >
      <ev-chart
        chart-id="6ee60e0e-6f05-44f6-85fd-f2426738cd77"
      >
      </ev-chart>
    </drag-resize>
    <drag-resize
      :init="{
        width:850,
        height:330,
        top:0,
        left:980
      }"
    >
      <ev-chart
        chart-id="0ab5bd05-84c6-4619-8630-361d7a7f08cf"
      >
      </ev-chart>
    </drag-resize>
    <drag-resize
      :init="{
        width:1904,
        height:480,
        top:350,
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