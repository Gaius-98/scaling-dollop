<template>
  <draggable
    v-model="compList"
    item-key="comp"
    :group="{pull:'clone',put:false,name:'comp'}"
    :clone="cloneNode"
  >
    <template #item="{element}">
      <div>{{ element.name }}</div>
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
  node.field = 'field_' + uuid()
  return cloneDeep(node)
}
</script>
<style scoped lang='scss'>
</style>