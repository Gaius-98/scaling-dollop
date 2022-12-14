<template>
  <header class="layout_header">
    <div
      v-for="pidMenu in menuList"
      :key="pidMenu.appId"
    >
      {{ pidMenu.appName }}
    </div>
    <div>
      <toggle-theme></toggle-theme>
    </div>
  </header>
</template>

<script lang='ts' setup>
import { getMenuList } from '@/api/common'
import { reactive, toRefs, ref } from 'vue'

const menuList = ref<sysMenu[]>()

getMenuList().then(res => {
  console.log(res)
  const { data } = res
  menuList.value = data
})
</script>
<style scoped lang='scss'>
.layout_header{
  width: 100%;
  height: 80px;
}
</style>