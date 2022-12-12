<template>
  <main class="layout_container">
    <router-view></router-view>
  </main>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'

</script>
<style scoped lang='scss'>
.layout_container{
  width: 100%;
  flex: 1;
}
</style>