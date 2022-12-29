<template>
  <draggable
    v-model="compList"
    item-key="id"
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

const compList = ref([{
  name: '输入框',
  comp: 'el-input',
  id: '123',
},
{
  name: '选择框',
  comp: 'el-select',
  id: '1234',
},
{
  name: '栅格',
  comp: 'el-row',
  id: '1234',
}])
const cloneNode = (val:any) => {
  val.id = uuid()
  if (val.comp == 'el-row') {
    val.list = []
  }
  return val
}
</script>
<style scoped lang='scss'>
</style>