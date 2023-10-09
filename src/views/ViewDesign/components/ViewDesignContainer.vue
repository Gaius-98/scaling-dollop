<template>
  <div
    ref="container"
    class="view-design-container"
  >
    <div
      class="container"
      :style="getContainerStyle()"
      @dragover="allowDrop"
      @drop="dropComponent"
    >
      <gu-drag-resize
        v-for="(item,idx) in viewData.componentData"
        :key="item.id"
        minh="20"
        minw="20"
        :node-key="item.id"
        v-bind="item.positionSize"
        :class="item.id == curCompData.id ? 'active' :''"
        class="drag"
        :style="{
          zIndex:`${idx + 100}`
        }"
        @on-drag-resize="dragResizeAfter"
        @click="onClickComp(item)"
        @contextmenu.prevent="openContextMenu($event,item)"
      >
        <component
          :is="item.name"
          v-bind="item.props"
        >
        </component>
      </gu-drag-resize>
    </div>
  </div>
  <ul
    v-show="showMenu"
    v-click-outside="closeMenu"
    class="menu"
    @click="onChangeCommand($event)"
  >
    <li data-command="placeTop">置顶</li>
    <li data-command="placeBottom">置底</li>
    <li data-command="delete">删除</li>
  </ul>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, watch } from 'vue'
import { GuDragResize } from 'gaius-utils'
import { storeToRefs } from 'pinia'
import { useViewStore } from '@/store/viewDesign'
import { v1 as uuid } from 'uuid'
import useGetCompData from '@/hooks/useViewData'

interface dragResizeInfo {
  nodeKey:string,
  height:string,
  width:string,
  top:string,
  left:string
}
const store = useViewStore()
const { viewData, curCompData } = storeToRefs(store)
const { onClickComp, setSnapshot, setComp, addComp, changeCompByCommand } = store
const container = ref()
const getContainerStyle = () => {
  const { width, height } = viewData.value
  if (container.value) {
    return {
      width: width + 'px',
      height: height + 'px',
      transform: `scale(${(container.value.offsetWidth - 40) / width},${(container.value.offsetHeight - 40) / height})`,
      'transform-origin': '0 0 ',
    }
  }
  return {
    width: '100%',
    height: '100%',
  }
}
const dragResizeAfter = (data:dragResizeInfo) => {
  const { nodeKey, left, top, width, height } = data
  setComp({
    id: nodeKey,
    positionSize: {
      left: parseFloat(left),
      top: parseFloat(top),
      width: parseFloat(width),
      height: parseFloat(height),
    },
  })
  setSnapshot()
}

const allowDrop = (ev:any) => {
  ev.preventDefault()
}
const dropComponent = (ev:any) => {
  ev.preventDefault()
  let data = JSON.parse(ev.dataTransfer.getData('componentData')) as viewComponent
  data.id = uuid()
  data.positionSize = {
    width: 100,
    height: 100,
    top: ev.offsetY,
    left: ev.offsetX,
  }
  addComp(data)
}

const setCompData = (id:string, data:any) => {
  let idx = viewData.value.componentData.findIndex(e => e.id == id)
  if (idx != -1) {
    let comp = viewData.value.componentData[idx]
    const { type } = comp
    switch (type) {
      case 'text':
        viewData.value.componentData[idx].props.value = data
        break
      case 'img':
        viewData.value.componentData[idx].props.src = data
        break
      case 'iframe':
        viewData.value.componentData[idx].props.url = data
        break
      case 'chartPie':
        viewData.value.componentData[idx].props.option.dataset.source = data
        break
      case 'chartBar':
        viewData.value.componentData[idx].props.option.dataset.source = data
        break
      case 'chartLine':
        viewData.value.componentData[idx].props.option.dataset.source = data
        break
      case 'icon':
        viewData.value.componentData[idx].props.icon = data
        break
      default:
        viewData.value.componentData[idx].props.value = data
        break
    }
  }
}
const handleComponent = () => {
  let allRes = viewData.value.componentData.map(e => useGetCompData(e))
  Promise.all(allRes).then(res => {
    res.forEach(({ id, data }) => {
      setCompData(id, data)
    })
  })
}
watch(() => viewData.value.componentData.map(e => e.dataSetting), () => {
  handleComponent()
}, {
  deep: true,
  immediate: true,
})
const showMenu = ref(false)
const top = ref(0)
const left = ref(0)
const componentId = ref('0')
const openContextMenu = (event:MouseEvent, componentItem:viewComponent) => {
  componentId.value = componentItem.id
  const { x, y } = event
  top.value = y
  left.value = x
  showMenu.value = true
}
const onChangeCommand = (event:MouseEvent) => {
  const target = event.target as HTMLElement
  let command = target.dataset.command
  if (command) {
    changeCompByCommand(command, componentId.value)
  }
  closeMenu()
}
const closeMenu = () => {
  showMenu.value = false
}
</script>
<style scoped lang='scss'>
.view-design-container{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px;
    background: var(--ev-box-shadow-color);
    .container{
      background: var(--ev-text-color);
      :deep(.drag-resize .drag-resize-container){
        overflow: hidden;
      }
      .drag{
        border: 1px solid transparent;
        padding: 0;
      }
      .active{
        border: 1px dashed #ccc;
        background: #77ddb24d;
      }
    }
   
}
.menu{

  position: fixed;
  top:calc(v-bind(top) * 1px);
  left: calc(v-bind(left) * 1px);
  margin:0;
  padding:0;
  width: 80px;
  z-index: 999;
  list-style: none;
  background: #fff;
  box-shadow: 2px 2px 6px  #000;

  li{
    box-sizing: border-box;
    width: 100%;
    cursor: pointer;
    padding: 5px 10px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    &:hover{
      color: var(--ev-active-color);
    }
  }
}
</style>