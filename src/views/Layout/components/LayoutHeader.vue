<template>
  <header class="layout_header">
    <div
      class="layout_header_sys"
      @click="onClickMenu('home')"
    >
      <div class="layout_header_sys_logo">
        <img
          src="@/assets/images/logo.jpg"
          alt=""
        >
      </div>
      <div class="layout_header_sys_title">
        gaius-form
      </div>
    </div>
    <ev-menu
      class="layout_header_sys_menu"
      mode="horizontal"
      :data="menuList"
      :replace-fields="{
        value:'appId',
        label:'appName',
        children:'children',
        icon:'icon'
      }"
      @on-click-item="onClickMenu"
    >
    </ev-menu>
    <div class="layout_header_sys_opt">
      <toggle-theme></toggle-theme>
    </div>
  </header>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { routerPush } from '@/utils/func'
import data from '@/assets/menu/menu'

const menuList = ref<sysMenu[]>(data)

const onClickMenu = (value:any) => {
  routerPush(value)
}

</script>
<style scoped lang='scss'>
.layout_header{
  display: flex;
  width: 100%;
  height: 80px;
  .layout_header_sys{
    display: flex;
    width: 240px;
    height: 100%;
    justify-content: space-around;
    align-items: center;

    background: var(--ev-active-color);
    .layout_header_sys_logo{
      width: 40px;
      height: 40px;
      overflow: hidden;
      border-radius: 50% 50%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .layout_header_sys_title{
      color:var(--ev-bg-color);
      font-weight: 600;
      font-size: 20px;
    }
    
  }
  .layout_header_sys_menu{
    flex: 1;
    margin: 0 10px;
  }
  .layout_header_sys_opt{
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