<template>
  <main class="layout_container">
    <Suspense>
      <template #default>
        <router-view></router-view>
      </template>
      <template #fallback>
        <div v-loading="true">
        </div>
      </template>
    </Suspense>
  </main>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'

</script>
<style scoped lang='scss'>
.layout_container{
  width: 100%;
  flex: 1;
}
</style>