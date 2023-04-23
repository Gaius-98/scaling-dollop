<template>
  <div class="comp_container">
    <div class="title">
      表单组件
    </div>
    <div class="com-list">
      <div class="container-list">
        <div class="comp_list_container">
          <div
            v-for="item in compList"
            :key="item.compId"
            class="comp"
            draggable="true"
            :data-comp="JSON.stringify(item)"
            @dragstart="onDrag" 
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="title">
      容器组件
    </div>
    <div class="container-list">
      <div class="comp_list_container">
        <div
          v-for="item in containerList"
          :key="item.compId"
          class="comp"
          draggable="true"
          :data-comp="JSON.stringify(item)"
          @dragstart="onDrag" 
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'
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
const onDrag = (ev:DragEvent) => {
  if (ev && ev.dataTransfer && ev.target) {
    let e = ev.target as HTMLElement
    let comp = JSON.parse(e.dataset.comp as string)
    comp.compId = uuid()
    comp.prop.field = 'field'
    ev.dataTransfer.setData('comp', JSON.stringify(comp))
  }
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
    // cursor: move;
  }
}

</style>