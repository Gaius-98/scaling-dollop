<template>
  <div class="comp_container">
    <div class="title">
      表单组件
    </div>
    <div class="com-list">
      <draggable
        v-model="compList"
        item-key="comp"
        :group="{pull:'clone',put:false,name:'comp'}"
        :clone="cloneNode"
        class="comp_list_container"
      >
        <template #item="{element}">
          <div class="comp">{{ element.name }}</div>
        </template>
      </draggable>
    </div>
    <div class="title">
      容器组件
    </div>
    <div class="container-list">
      <draggable
        v-model="containerList"
        item-key="comp"
        :group="{pull:'clone',put:false,name:'comp'}"
        :clone="cloneNode"
        class="comp_list_container"
      >
        <template #item="{element}">
          <div class="comp">{{ element.name }}</div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import draggable from 'vuedraggable'
import { v4 as uuid } from 'uuid'
import { cloneDeep } from 'lodash'
import list from '@/assets/form/compList'

const compList = ref<formComp[]>([])
const containerList = ref<formComp[]>([])
list.forEach(item => {
  if (item.type == 'component') {
    compList.value.push(item)
  } else if (item.type == 'container') {
    containerList.value.push(item)
  }
})
const cloneNode = (node:any) => {
  node.compId = uuid()
  node.prop.field = 'field' 
  return cloneDeep(node)
}
</script>
<style scoped lang='scss'>
.comp_container{
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-right:2px solid var(--ev-border) ;
  margin-right: 5px;
}
.comp_list_container{
  padding: 10px;
  .comp{
    display: inline-block;
    height: 20px;
    line-height: 20px;
    padding: 5px 10px;
    color: var(--ev-active-color);
    border: 1px solid var(--ev-border);
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: move;
  }
}

</style>