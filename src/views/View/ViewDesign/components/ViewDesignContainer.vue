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
        @on-drag="(e)=>{ showMarkLine(e,'drag') }"
        @on-resize="(e)=>{ showMarkLine(e,'resize') }"
        @click="onClickComp(item)"
        @contextmenu.prevent="openContextMenu($event,item)"
      >
        <component
          :is="item.name"
          v-bind="item.props"
        >
        </component>
      </gu-drag-resize>
      <div
        v-show="lineType.type == 'v'"
        class="vertical-line"
        :style="{
          left:lineType.line + 'px'
        }"
      >
      </div>
      <div
        v-show="lineType.type == 'h'"
        class="horizontal-line"
        :style="{
          top:lineType.line+'px'
        }"
      >
      </div>
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
  let { nodeKey, left, top, width, height } = data
  if (lineType.type == 'h' && lineType.optType == 'drag') {
    if (lineType.direction == 't2t' || lineType.direction == 't2b') {
      top = lineType.line.toString()
    } else if (lineType.direction == 'b2t' || lineType.direction == 'b2b') {
      top = String(lineType.line - parseFloat(height))
    }
  } else if (lineType.type == 'h' && lineType.optType == 'resize') {
    if (lineType.direction == 'b2t' || lineType.direction == 'b2b') {
      height = String(lineType.line - parseFloat(top))
    }
  } else if (lineType.type == 'v' && lineType.optType == 'drag') {
    if (lineType.direction == 'l2l' || lineType.direction == 'l2r') {
      left = lineType.line.toString()
    } else if (lineType.direction == 'r2r' || lineType.direction == 'r2l') {
      left = String(lineType.line - parseFloat(width))
    }
  } else if (lineType.type == 'v' && lineType.optType == 'resize') {
    if (lineType.direction == 'r2r' || lineType.direction == 'r2l') {
      width = String(lineType.line - parseFloat(left))
    }
  }
  setComp({
    id: nodeKey,
    positionSize: {
      left: parseFloat(left),
      top: parseFloat(top),
      width: parseFloat(width),
      height: parseFloat(height),
    },
  })
  // 隐藏辅助线
  lineType.type = ''
  lineType.line = 0
  setSnapshot()
}
const lineType = reactive({
  type: '',
  line: 0,
  optType: '',
  direction: '',
})
const showMarkLine = (curData:dragResizeInfo, optType:string) => {
  let lineInfo 
  for (let i = 0; i < viewData.value.componentData.length; i++) {
    let item = viewData.value.componentData[i]
    if (item.id != curData.nodeKey) {
      let data = judgeShowLine(item, curData)
      if (data) {
        lineInfo = data
        break
      }
    }
  }
  if (lineInfo) {
    const { type, line, direction } = lineInfo
    lineType.type = type
    lineType.line = line as number
    lineType.optType = optType
    lineType.direction = direction
  } else {
    lineType.type = ''
    lineType.line = 0
    lineType.optType = ''
    lineType.direction = ''
  }
}
const judgeShowLine = (data:ViewComponent, cur:dragResizeInfo) => {
  const { positionSize: { top, left, width, height } } = data
  const { top: curTop, left: curLeft, width: curWidth, height: curHeight } = cur
  let type = null
  let line = null
  let direction = ''
  const mistake = 3
  const judgeMisTake = (val1:number, val2:number) => Math.abs(val1 - val2) <= mistake

  if (judgeMisTake(parseFloat(curTop), top)) {
    type = 'h'
    line = top
    direction = 't2t'
  } else if (judgeMisTake(parseFloat(curTop), top + height)) {
    type = 'h'
    line = top + height
    direction = 't2b'
  } else if (judgeMisTake(parseFloat(curTop) + parseFloat(curHeight), top + height)) {
    type = 'h'
    line = top + height
    direction = 'b2b'
  } else if (judgeMisTake(parseFloat(curTop) + parseFloat(curHeight), top)) {
    type = 'h'
    line = top
    direction = 'b2t'
  } else if (judgeMisTake(parseFloat(curLeft), left)) {
    type = 'v'
    line = left
    direction = 'l2l'
  } else if (judgeMisTake(parseFloat(curLeft), left + width)) {
    type = 'v'
    line = left + width
    direction = 'l2r'
  } else if (judgeMisTake(parseFloat(curLeft) + parseFloat(curWidth), left + width)) {
    type = 'v'
    line = left + width
    direction = 'r2r'
  } else if (judgeMisTake(parseFloat(curLeft) + parseFloat(curWidth), left)) {
    type = 'v'
    line = left 
    direction = 'r2l'
  }
  return type ? { type, line, direction } : false
}
const allowDrop = (ev:any) => {
  ev.preventDefault()
}
const dropComponent = (ev:any) => {
  ev.preventDefault()
  let data = JSON.parse(ev.dataTransfer.getData('componentData')) as ViewComponent
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
const handleComponent = (data?:ViewComponent) => {
  if (data) {
    useGetCompData(data).then(({ id, data }) => {
      setCompData(id, data)
    })
  } else {
    let allRes = viewData.value.componentData.map(e => useGetCompData(e))
    Promise.all(allRes).then(res => {
      res.forEach(({ id, data }) => {
        setCompData(id, data)
      })
    })
  }
}
watch(() => viewData.value.componentData.map(e => e.dataSetting), () => {
  // 数据源配置变更，应该只刷新当前配置对应的组件数据
  handleComponent(curCompData.value)
}, {
  deep: true,
  immediate: true,
})
const showMenu = ref(false)
const top = ref(0)
const left = ref(0)
const componentId = ref('0')
const openContextMenu = (event:MouseEvent, componentItem:ViewComponent) => {
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
      .vertical-line{
        position: absolute;
        width: 1px;
        height: 100%;
        background: var(--ev-active-color);
      }
      .horizontal-line{
        position: absolute;
        height: 1px;
        width: 100%;
        background: var(--ev-active-color);
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