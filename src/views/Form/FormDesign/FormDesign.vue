<template>
  <div class="form-design">
    <div class="form-design_header">
    </div>
    <div class="form-design_container">
      <drag-comp-list />
      <drop-container />
    </div>
  </div>
</template>

<script lang='ts' setup>
import dropContainer from './components/dropContainer.vue'
import dragCompList from './components/dragCompList.vue'
import { reactive, toRefs, ref } from 'vue'

</script>
<style scoped lang='scss'>
.form-design{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .form-design_header{
    height: 60px;
  }
  .form-design_container{
    display: flex;
    justify-content: flex-start;
  }
}
</style>