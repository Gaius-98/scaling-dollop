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
  document.body.classList.replace(reverse, val)
  sysStore.$patch({
    theme: val,
  })
}
document.body.classList.add(theme.value)
</script>
<style scoped lang='scss'>
</style>