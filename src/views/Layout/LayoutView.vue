<template>
  <div class="layout">
    <layout-header>
    </layout-header>
    <div class="layout-main f-rb">
      <ev-menu
        class="layout-main-menu"
        mode="vertical"
        :default-active="active"
        :data="menuList"
        :replace-fields="{
          value:'appId',
          label:'appName',
          children:'children',
          icon:'icon'
        }"
        :style="{
          '--el-menu-item-height':'36px'
        }"
        @on-click-item="onClickMenu"
      >
      </ev-menu>
      <div class="layout-main-container">
        <layout-container>
        </layout-container>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutContainer from './components/LayoutContainer.vue'
import { routerPush } from '@/utils/func'
import data from '@/assets/menu/menu'
import { reactive, toRefs, ref, onMounted } from 'vue'
import { useGuLocalStorage } from 'gaius-utils'

const menuList = ref<sysMenu[]>(data)
const active = ref()
const local = useGuLocalStorage()
const onClickMenu = (value:any) => {
  active.value = value
  local.setItem('scaling-dollop-active-menu', value)
  routerPush(value)
}
onMounted(() => {
  if (local.getItem('scaling-dollop-active-menu')) {
    active.value = local.getItem('scaling-dollop-active-menu')
  }
})
</script>
<style scoped lang='scss'>
.layout{
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  .layout-main{
    flex: 1;
    .layout-main-menu{
      max-width:240px ;
      height: calc(100% - 40px);
      background: var(--ev-bg-color);
      padding-top: 10px;
      :deep(.el-menu){
        border-right: 0!important;
      }
      :deep(.el-menu-item.is-active){
        color: var(--ev-active-color);
        background-color: var(--ev-active-most-tint-color);
        &::after{
          position: absolute;
          right: 0px;
          content:'';
          width:4px;
          height: 100%;
          background: var(--ev-active-color);
        }
      }
    }
    .layout-main-container{
      background: var(--ev-bg-tint-color);
      padding: 10px 10px;
      flex: 1;
      overflow-x: hidden;
      overflow-y: auto;
      height:calc( 100% - 20px);
    }
  }
}
</style>