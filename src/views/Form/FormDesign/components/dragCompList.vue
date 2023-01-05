<template>
  <draggable
    v-model="compList"
    item-key="comp"
    :group="{pull:'clone',put:false,name:'comp'}"
    :clone="cloneNode"
    class="comp_container"
  >
    <template #item="{element}">
      <div class="comp">{{ element.name }}</div>
    </template>
  </draggable>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import draggable from 'vuedraggable'
import { v4 as uuid } from 'uuid'
import { cloneDeep } from 'lodash'
import compList from '@/assets/form/compList'

const cloneNode = (node:any) => {
  node.compId = uuid()
  node.prop.field = 'field_' + uuid()
  return cloneDeep(node)
}
</script>
<style scoped lang='scss'>
.comp_container{
  width: 300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  padding: 5px;
  border-right:2px solid var(--ev-border) ;
  margin-right: 5px;
}
.comp{
  height: 20px;
  line-height: 20px;
  padding: 5px 10px;
  color: var(--ev-active-color);
  border: 1px solid var(--ev-border);
}
</style>