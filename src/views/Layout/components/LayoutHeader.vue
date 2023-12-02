<template>
  <header class="layout-header">
    <div
      class="layout-header-sys"
    >
      <div class="layout-header-sys-logo">
        <img
          src="@/assets/images/logo.jpg"
          alt=""
        >
      </div>
      <div class="layout-header-sys-title">
        scaling-dollop
      </div>
    </div>

    <div class="layout-header-sys-opt">
      <toggle-theme></toggle-theme>
    </div>
  </header>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'

</script>
<style scoped lang='scss'>
.layout-header{
  display: flex;
  width: 100%;
  height: 40px;
  .layout-header-sys{
    display: flex;
    width: 240px;
    height: 100%;
    justify-content: space-around;
    align-items: center;

    background: var(--ev-active-color);
    .layout-header-sys-logo{
      width: 30px;
      height: 30px;
      overflow: hidden;
      border-radius: 50% 50%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .layout-header-sys-title{
      color:var(--ev-bg-color);
      font-weight: 600;
      font-size: 20px;
    }
    
  }
  .layout-header-sys-menu{
    flex: 1;
    margin: 0 10px;
  }
  .layout-header-sys-opt{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 120px;
    height: 100%;
    .sys{
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
      color: var(--ev-active-color);
    }
  }
}
</style>