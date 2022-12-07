<script setup lang="ts">
console.log(import.meta.env.MODE)
console.log(import.meta.env.VITE_KEY)
</script>

<template>
  <toggle-theme></toggle-theme>
  <router-view></router-view>
</template>

<style scoped>
</style>
