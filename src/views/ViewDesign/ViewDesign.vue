<template>
  <main class="view-design f-cs">
    <header class="view-design-header f-rb">
      <el-button-group>
        <el-button
          @click="undo"
        >
          撤销
        </el-button>
        <el-button
          @click="redo"
        >
          重做
        </el-button>
      </el-button-group>
      <el-form inline>
        <el-form-item label="页面名称">
          <el-input v-model="viewData.name">
          </el-input>
        </el-form-item>
        <el-form-item label="页面宽度">
          <el-input-number
            v-model="viewData.width"
            controls-position="right"
          >
          </el-input-number>
        </el-form-item>
        <el-form-item label="页面高度">
          <el-input-number
            v-model="viewData.height"
            controls-position="right"
          >
          </el-input-number>
        </el-form-item>
      </el-form>
      <el-button-group>
        <el-button
          type="primary"
          @click="preview"
        >
          预览
        </el-button>
        <el-button type="preview">
          保存
        </el-button>
      </el-button-group>
    </header>
    <div class="container f-rs">
      <aside class="material f-ra">
        <view-level class="material-level">
        </view-level>
        <view-material>
        </view-material>
      </aside>
      <div class="view-design-main">
        <view-design-container>
        </view-design-container>
      </div>
      <div class="material-option">
        <ev-title>
          组件配置
        </ev-title>
        <view-template style="height:calc(100% - 40px)">
        </view-template>
      </div>
    </div>
  </main>
</template>

<script lang='ts' setup name="viewDesign">
import ViewLevel from '@/views/ViewDesign/components/ViewLevel.vue'
import ViewDesignContainer from './components/ViewDesignContainer.vue'
import ViewMaterial from './components/ViewMaterial.vue'
import { reactive, toRefs, ref } from 'vue'
import { useViewStore } from '@/store/viewDesign'
import { storeToRefs } from 'pinia'

import ViewTemplate from './components/ViewTemplate.vue'

import { useRouter } from 'vue-router'

const store = useViewStore()
const router = useRouter()
const { undo, redo } = store
const { viewData, curCompData } = storeToRefs(store)
const preview = () => {
  router.push({
    name: 'viewPre',
  })
}
</script>
<style scoped lang='scss'>
.view-design{
    height: calc(100vh - 80px);
    .view-design-header{
        align-items: center;
        height: 60px;
        line-height: 60px;
        border-bottom: 2px solid var(--ev-active-shallow-color);
        :deep(.el-form-item){
          margin-bottom: 0;
          margin-right: 14px;
        }
    }
    .container{
        height: calc(100% - 60px);
        .material{
            width: 400px;
            height: 100%;
            .material-level{
              width: 30%;
              border-right: 1px solid var(--ev-active-color) ;
            }
        }
        .view-design-main{
            width: calc(100% - 650px);
            height: 100%;
        }
        .material-option{
          width: 250px;
          height: 100%;
          padding:  0 10px;
          overflow: auto;
        }
    }
}

</style>