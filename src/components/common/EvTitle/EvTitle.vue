<template>
  <div class="ev_title_container">
    <span class="ev_title_text">
      <slot></slot>
    </span>
    <slot name="opt"></slot>
  </div>
</template>

<script lang='ts' setup name="EvTitle">
import { reactive, toRefs, ref } from 'vue'

</script>
<style scoped lang='scss'>
.ev_title_container{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 28px;
  line-height: 28px;
  font-size: 13px;
  margin-bottom: 5px;
  border-bottom: 1px solid var(--ev-text-color);
  .ev_title_text{
    display: inline-block;
    color: var(--ev-bg-color);
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    padding: 2px 5px;
    border-bottom: 2px solid var(--ev-active-color);
  }
}
</style>