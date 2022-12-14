<template>
  <div class="view_container">
    <router-view></router-view>
  </div>
</template>

<script lang='ts' setup name="viewTemplate">
import { reactive, toRefs, ref } from 'vue'

</script>
<style scoped lang='scss'>
.view_container{
  width: 100%;
  height: 100vh;
}
</style>