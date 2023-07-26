import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { cloneDeep } from 'lodash'

export const useViewStore = defineStore('viewStore', () => {
  /**
   * 页面设计器的所有数据
   */
  const viewData = reactive<viewData>({
    componentData: [
    ],
    name: '',
    id: '',
    img: '',
    height: 1080,
    width: 1920,
  })
  /**
   * 单个组件的数据
   */
  const curCompData = reactive<viewComponent>({
    name: '',
    label: '',
    props: {},
    id: '',
    type: '',
    positionSize: {
      top: 0,
      left: 0,
      width: 100,
      height: 100,
    },

  })
  /**
   * 修改组件配置
   */
  const setComp = (data:COMMON.obj) => {
    const { id } = data
    let curComp = viewData.componentData.find(e => e.id == id)
    if (curComp) {
      Object.assign(curComp, {
        ...curComp,
        ...data,
      })
    }
  }
  /**
   * 快照数据 -- 只有影响布局的操作才会保存快照
   */
  const snapshotData = reactive<viewComponent[][]>([])
  /**
   * 当前快照idx
   */
  const curSnapshotIdx = ref(0)
  /**
   * 保存快照
   */
  const setSnapshot = () => {
    snapshotData[curSnapshotIdx.value++] = cloneDeep(viewData.componentData)
  }
  /**
   * 撤销
   */
  const undo = () => {
    if (curSnapshotIdx.value > 0) {
      curSnapshotIdx.value--
      viewData.componentData = cloneDeep(snapshotData[curSnapshotIdx.value])
    }
  }
  /**
   * 重做
   */
  const redo = () => {
    if (curSnapshotIdx.value < snapshotData.length - 1) {
      curSnapshotIdx.value++
      viewData.componentData = cloneDeep(snapshotData[curSnapshotIdx.value])
    }
  }
  /**
   * 选择组件
   */
  const onClickComp = (item:viewComponent) => {
    let idx = viewData.componentData.findIndex(e => e.id === item.id)
    if (idx != -1) {
      Object.assign(curCompData, viewData.componentData[idx])
    }
  }
  /**
   * 新增组件
   */
  const addComp = (data:viewComponent) => {
    viewData.componentData.push(data)
    setSnapshot()
  }
  return { viewData, curCompData, snapshotData, curSnapshotIdx, setSnapshot, undo, redo, onClickComp, setComp, addComp }
})