<template>
  <div class="layout_main">
    <layout-header>
    </layout-header>
    <layout-container>
    </layout-container>
  </div>
</template>

<script lang='ts' setup>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutContainer from './components/LayoutContainer.vue'
import { reactive, toRefs, ref } from 'vue'

</script>
<style scoped lang='scss'>
.layout_main{
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
</style>