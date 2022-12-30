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

const compList = ref([
  {
    field: '', // 字段名
    comp: 'input', // 组件
    compId: '', // 随机uuid
    name: '输入框',
    prop: { // 配置项
      placeholder: '输入提示',
    },
    form_config: {
      label: '输入框', // 展示描述
    },
  },
  {
    field: '', // 字段名
    comp: 'select', // 组件
    compId: '', // 随机uuid
    name: '选择框',
    prop: { // 配置项
      options: [{
        value: 1,
        label: 1,
      }],
    },
    form_config: {
      label: '选择框', // 展示描述
    },
  },
  {
    name: '栅格',
    comp: 'row',
    prop: {
      
    },
    data: {

    },
    form_config: {
      
    },
  }])
const cloneNode = (node:any) => {
  node.compId = uuid()
  node.field = 'field' + uuid()
  return cloneDeep(node)
}
</script>
<style scoped lang='scss'>
</style>