<template>
  <main class="view-design f-cs">
    <header class="view-design-header">
    </header>
    <div class="container f-rs">
      <aside class="material">
      </aside>
      <div class="view-design-main">
        <view-design-container>
        </view-design-container>
      </div>
    </div>
  </main>
</template>

<script lang='ts' setup name="viewDesign">
import ViewDesignContainer from './components/ViewDesignContainer.vue'
import { reactive, toRefs, ref } from 'vue'

</script>
<style scoped lang='scss'>
.view-design{
    height: calc(100vh - 80px);
    .view-design-header{
        height: 60px;
    }
    .container{
        height: 100%;
        .material{
            width: 300px;
            height: 100%;
        }
        .view-design-main{
            width: calc(100% - 300px);
            height: 100%;
        }
    }
}

</style>