<template>
  <header class="layout_header">
    <div class="layout_header_sys">
      <div class="layout_header_sys_logo">
        <img
          :src="sysConfig.sysLogo"
          alt=""
        >
      </div>
      <div class="layout_header_sys_title">
        {{ sysConfig.sysName }}
      </div>
    </div>
    <ev-menu
      class="layout_header_sys_menu"
      mode="horizontal"
      :data="menuList"
      :replace-fields="{
        value:'appId',
        label:'appName',
        children:'children'
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
import { getMenuList } from '@/api/common'
import { reactive, toRefs, ref } from 'vue'
import { routerPush } from '@/utils/func'
import { useSysStore } from '@/store/sysConfig'
import { storeToRefs } from 'pinia'

const sysStore = useSysStore()
const { sysConfig } = storeToRefs(sysStore)
const menuList = ref<sysMenu[]>()

getMenuList().then(res => {
  const { data } = res
  menuList.value = data
})
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
    width: 120px;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    background: var(--ev-active-color);
    .layout_header_sys_logo{
      width: 40px;
      height: 40px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .layout_header_sys_title{
      color: var(--ev-text-color);
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
    width: 40px;
    height: 100%;
  }
}
</style>