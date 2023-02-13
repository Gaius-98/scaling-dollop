<template>
  <main class="l-s-main f-ca">
    <l-s-header>
    </l-s-header>
    <div class="warp f-ra">
      <l-s-sider>
      </l-s-sider>
      <l-s-container>
      </l-s-container>
    </div>
  </main>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import LSContainer from './components/LSContainer.vue'
import LSHeader from './components/LSHeader.vue'
import LSSider from './components/LSSider.vue'
</script>
<style scoped lang='scss'>
.l-s-main{
  height: calc(100vh - 60px);
  .warp{
    height: 100%;
  }
}
</style>