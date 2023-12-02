<template>
  <div class="ev-title-container">
    <span class="ev-title-text">
      <slot></slot>
    </span>
    <slot name="opt"></slot>
  </div>
</template>

<script lang='ts' setup name="EvTitle">
import { reactive, toRefs, ref } from 'vue'

</script>
<style scoped lang='scss'>
.ev-title-container{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 28px;
  line-height: 28px;
  font-size: 13px;
  margin-bottom: 5px;
  .ev-title-text{
    display: inline-block;
    color: var(--ev-text-color);
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    padding: 2px 5px;
    border-bottom: 2px solid var(--ev-active-color);
  }
}
</style>