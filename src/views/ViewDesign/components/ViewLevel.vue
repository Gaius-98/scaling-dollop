<template>
  <div>
    <ev-title>
      层级信息
    </ev-title>
    <draggable 
      v-model="viewData.componentData"
      item-key="id"
      group="viewComp"
      class="view-level"
    >
      <template #item="{element}">
        <div
          class="view-level-item"
          :class="curCompData.id == element.id ? 'active' :''"
          @mouseover="onClickComp(element)"
        >
          <i
            class="iconfont "
            :class="element.icon"
          ></i>
          {{ element.label }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<script lang='ts' setup>
import draggable from 'vuedraggable'
import { useViewStore } from '@/store/viewDesign'
import { storeToRefs } from 'pinia'
import { reactive, toRefs, ref } from 'vue'

const store = useViewStore()
const { viewData, curCompData } = storeToRefs(store)
const { onClickComp } = store
</script>
<style scoped lang='scss'>
.view-level{
    width: 100%;
    height: calc(100% - 45px);
    padding-top: 10px;
    overflow-y: auto;
    .view-level-item{
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding: 0 10px;
        cursor: move;    
        color: var(--ev-active-color);
        border-bottom: 1px solid var(--ev-active-color);
        &:hover{
            background: #bdf3c98f;
        }
    }
}
</style>