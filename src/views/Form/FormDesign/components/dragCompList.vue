<template>
  <div class="comp-container">
    <ev-title class="title">
      容器组件
    </ev-title>
    <div class="container-list">
      <div class="comp-list-container">
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
    <ev-title class="title">
      表单组件
    </ev-title>
    <div class="com-list">
      <div class="container-list">
        <div class="comp-list-container">
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
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'
import list from '@/assets/form/compList'

const compList = ref<FormComp[]>([])
const containerList = ref<FormComp[]>([])
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
    comp.prop.field = `field${(Math.random() * 10000).toFixed(0)}`
    ev.dataTransfer.setData('comp', JSON.stringify(comp))
  }
}
</script>
<style scoped lang='scss'>
.comp-container{
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-right:2px solid var(--ev-active-tint-color) ;
  margin-right: 5px;
}
.comp-list-container{
  display:grid ;
  grid-template-columns: repeat(2,1fr);
  padding: 10px;
  .comp{
    display: inline-block;
    height: 20px;
    line-height: 20px;
    padding: 5px 10px;
    color: var(--ev-active-color);
    border: 1px solid var(--ev-active-tint-color);
    margin-right: 5px;
    margin-bottom: 5px;
    text-align: center;
    cursor: move;
  }
}

</style>