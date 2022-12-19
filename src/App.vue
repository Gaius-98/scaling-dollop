<script setup lang="ts">
import { getSysConfig } from '@/api/common'
import { useSysStore } from '@/store/sysConfig'

const sysStore = useSysStore()
getSysConfig().then(res => {
  const { data } = res
  sysStore.$patch({
    sysConfig: data,
  })
  document.title = data.sysName
})
</script>

<template>
  <router-view></router-view>
</template>

<style>
/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
 ::-webkit-scrollbar
 {
     width:5px;
     height:5px;
     background-color:var(--ev-bg-color);
 }
 /*定义滚动条轨道
  内阴影+圆角*/
 ::-webkit-scrollbar-track
 {
     -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
     border-radius:10px;
     background-color:var(--ev-bg-color);
 }
 /*定义滑块
  内阴影+圆角*/
 ::-webkit-scrollbar-thumb
 {
     border-radius:10px;
     -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
     background-color:var(--ev-active-color);
 }
</style>
