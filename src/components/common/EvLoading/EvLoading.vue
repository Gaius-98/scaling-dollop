<template>
  <div class="ev-loading-container">
    <div class="ev-loading">
      loading
    </div>
  </div>
</template>

<script lang='ts' setup name="EvLoading">
import { reactive, toRefs, ref } from 'vue'

</script>
<style scoped lang='scss'>
.ev-loading-container{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: var(--ev-tint-color);
  .ev-loading{
    display: inline-block;
    align-self: center;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 13px;
    text-align: center;
    background: var(--ev-active-color);
    animation:rotateA 3s ease-in-out infinite;
  }
}
@keyframes rotateA {
  0% {
    color: var(--ev-bg-color);
    border-radius: 25px;
  }
  40% {
    color: var(--ev-col-bg-color);
    border-radius: 5px;
    transform: rotate(360deg);
  }
  80% {
    color: var(--ev-text-color);
    border-radius: 25px;
  }
  100% {
    color: var(--ev-bg-color);
    border-radius: 25px;
  }

}
</style>