<template>
  <main class="layout_container">
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
.layout_container{
  width: 100%;
  flex: 1;
}
</style>