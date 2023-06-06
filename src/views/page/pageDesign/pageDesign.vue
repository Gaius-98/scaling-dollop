<template>
  <div class="page-design">
    <page-header>
    </page-header>
    <div class="page-container">
      <page-side-bar>
      </page-side-bar>
      <div class="page-wrap">
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import pageHeader from '@/views/page/pageDesign/components/pageHeader'
import pageSideBar from '@/views/page/pageDesign/components/pageSideBar'
import { reactive, toRefs, ref } from 'vue'

</script>
<style scoped lang='scss'>
.page-design{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: calc(100vh - 80px);
  .page-container{
    display: flex;
    justify-content: flex-start;
  }
}
</style>