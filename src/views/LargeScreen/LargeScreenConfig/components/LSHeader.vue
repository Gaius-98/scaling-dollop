<template>
  <div class="l-s-header">
    <auto-header></auto-header>
  </div>
</template>

<script lang='ts' setup>
import autoHeader from './AutoHeader.vue'
import { reactive, toRefs, ref } from 'vue'

</script>
<style scoped lang='scss'>
.l-s-header{
  width: 100%;
  height: 60px;
}
</style>