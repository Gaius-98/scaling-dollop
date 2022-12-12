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

<style scoped>
</style>
