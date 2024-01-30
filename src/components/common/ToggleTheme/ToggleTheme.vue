<template>
  <el-switch
    active-value="dark"
    inactive-value="light"
    :model-value="theme"
    @change="onToggleTheme"
  >
  </el-switch>
</template>

<script lang='ts' setup name="ToggleTheme">
import { useSysStore } from '@/store/sysConfig'
import { storeToRefs } from 'pinia'

const sysStore = useSysStore()
const { theme } = storeToRefs(sysStore)

const onToggleTheme = (val:string) => {
  const reverse = val == 'dark' ? 'light' : 'dark'
  document.documentElement.classList.replace(reverse, val)
  localStorage.setItem('ev-theme', val)
  sysStore.$patch({
    theme: val,
  })
}

const localTheme = localStorage.getItem('ev-theme')
if (localTheme) {
  sysStore.$patch({
    theme: localTheme,
  })
}

</script>
<style scoped lang='scss'>
</style>