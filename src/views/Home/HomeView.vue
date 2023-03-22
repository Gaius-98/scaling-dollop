<template>
  <main class="home">
    <readme>
    </readme>
  </main>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import readme from '../../../README.md'
</script>
<style scoped lang='scss'>
.home{
  width: calc(100% - 40px);
  height: calc(100vh - 160px);
  padding: 20px;
}
</style>