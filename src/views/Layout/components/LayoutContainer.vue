<template>
  <main class="layout-container">
    <router-view></router-view>
    <!-- <Suspense>
      <template #default>
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </template>
      <template #fallback>
        <div v-loading="true">
        </div>
      </template>
    </Suspense> -->
  </main>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'

</script>
<style scoped lang='scss'>
.layout-container{
  box-sizing: border-box;
  background: var(--ev-bg-color);
  padding: 10px;
  border-radius: 5px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>