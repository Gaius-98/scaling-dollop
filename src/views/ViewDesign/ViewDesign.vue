<template>
  <main class="view-design f-cs">
    <header class="view-design-header">
      <el-button @click="undo">
        撤销
      </el-button>
      <el-button @click="redo">
        重做
      </el-button>
      <el-button @click="preview">
        预览
      </el-button>
      <el-input-number v-model="viewData.width">
      </el-input-number>
      <el-input-number v-model="viewData.height">
      </el-input-number>
    </header>
    <div class="container f-rs">
      <aside class="material">
        <view-material>
        </view-material>
      </aside>
      <div class="view-design-main">
        <view-design-container>
        </view-design-container>
      </div>
      <div class="material-option">
      </div>
    </div>
  </main>
</template>

<script lang='ts' setup name="viewDesign">
import ViewDesignContainer from './components/ViewDesignContainer.vue'
import ViewMaterial from './components/ViewMaterial.vue'
import { reactive, toRefs, ref } from 'vue'
import { useViewStore } from '@/store/viewDesign'
import { Dialog } from 'gaius-utils'
import ViewPreview from './components/ViewPreview.vue'
import { storeToRefs } from 'pinia'

const store = useViewStore()
const { undo, redo } = store
const { viewData, curCompData } = storeToRefs(store)
const dialog = new Dialog({
  title: '预览',
  size: 'large',
  content: ViewPreview,
  cb: (e:any) => {
    dialog.destroyed()
    console.log(e)
  },
  footer: false,
  componentProps: {
    data: viewData,
  },
})
const preview = () => {
  dialog.create()
}
</script>
<style scoped lang='scss'>
.view-design{
    height: calc(100vh - 80px);
    .view-design-header{
        height: 60px;
        border-bottom: 2px solid var(--ev-active-shallow-color);
    }
    .container{
        height: calc(100% - 60px);
        .material{
            width: 300px;
            height: 100%;
        }
        .view-design-main{
            width: calc(100% - 550px);
            height: 100%;
        }
        .material-option{
          width: 250px;
          height: 100%;
          padding:  0 10px;
        }
    }
}

</style>