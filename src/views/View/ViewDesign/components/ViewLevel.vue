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
  <!-- <el-dropdown
          trigger="contextmenu"
          @command="onChangeCompByCommand"
        >
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                command="placeTop"
                :comp-id="element.id"
              >
                置于顶层
              </el-dropdown-item>
              <el-dropdown-item
                command="placeBottom"
                :comp-id="element.id"
              >
                置于底层
              </el-dropdown-item>
              <el-dropdown-item
                command="delete"
                :comp-id="element.id"
              >
                删除
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown> -->
</template>

<script lang='ts' setup>
import draggable from 'vuedraggable'
import { useViewStore } from '@/store/viewDesign'
import { storeToRefs } from 'pinia'
import { reactive, toRefs, ref, computed } from 'vue'

const store = useViewStore()
const { viewData, curCompData } = storeToRefs(store)
const { onClickComp, changeCompByCommand } = store
const onChangeCompByCommand = (command:string, node:any) => {
  const id = node.attrs['comp-id']
  changeCompByCommand(command, id)
}
</script>
<style scoped lang='scss'>
.view-level{
    width: 100%;
    height: calc(100% - 45px);
    padding-top: 10px;
    overflow-y: auto;
    .view-level-item{
        box-sizing: border-box;
        width: 100%;
        height: 20px;
        line-height: 20px;
        padding: 0 10px;
        cursor: move;    
        color: var(--ev-active-color);
        /* border-bottom: 1px solid var(--ev-active-color); */
        &:hover{
            background: #bdf3c98f;
        }
    }
}
</style>