import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { clone, cloneDeep } from 'lodash'

export const useViewStore = defineStore('viewStore', () => {
  /**
   * 页面设计器的所有数据
   */
  const viewData = reactive<ViewData>({
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
  const curCompData = reactive<ViewComponent>({
    name: '',
    label: '',
    props: {},
    id: '',
    type: '',
    dataSetting: {
      type: 'static',
      data: '',
      handleFunc: '',
      params: {
        
      },
      reqType: 'get',
    },
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
  const snapshotData = reactive<ViewComponent[][]>([])
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
  const onClickComp = (item:ViewComponent) => {
    let idx = viewData.componentData.findIndex(e => e.id === item.id)
    if (idx != -1) {
      Object.assign(curCompData, viewData.componentData[idx])
    }
  }
  // /**
  //  * 同步配置
  //  */
  // const syncCfg = () => {
  //   let idx = viewData.componentData.findIndex(e => e.id === curCompData.id)
  //   if (idx != -1) {
  //     Object.assign(viewData.componentData[idx], cloneDeep(curCompData))
  //   }
  // }
  /**
   * 新增组件
   */
  const addComp = (data:ViewComponent) => {
    viewData.componentData.push(data)
    setSnapshot()
  }

  /**
   * 通过command 处理组件
   * @params {string} command
   * @params {string} compId
   */
  const changeCompByCommand = (command:string, id:string) => {
    let idx = viewData.componentData.findIndex(e => e.id === id)
    let newComp = viewData.componentData[idx]
    switch (command) {
      case 'delete':
        if (id === curCompData.id) {
          initCurComp()
        }
        viewData.componentData.splice(idx, 1) 
        
        break
      case 'placeTop':
        viewData.componentData.splice(idx, 1) 
        viewData.componentData.push(newComp)
        break
      case 'placeBottom':
        viewData.componentData.splice(idx, 1) 
        viewData.componentData.unshift(newComp)
        break
      default:
        break
    }
    setSnapshot()
  }
  /**
   * 还原
   */
  const init = () => {
    Object.assign(viewData, {
      componentData: [
      ],
      name: '',
      id: '',
      img: '',
      height: 1080,
      width: 1920,
    })
    initCurComp()
  }
  const setViewData = (obj:ViewData) => {
    Object.assign(viewData, obj)
  }
  const initCurComp = () => {
    Object.assign(curCompData, {
      name: '',
      label: '',
      props: {},
      id: '',
      type: '',
      dataSetting: {
        type: 'static',
        data: '',
        handleFunc: '',
        params: {
          
        },
      },
      positionSize: {
        top: 0,
        left: 0,
        width: 100,
        height: 100,
      },
  
    })
  }
  return {
    viewData, 
    curCompData, 
    snapshotData, 
    curSnapshotIdx,
    setSnapshot,
    undo,
    redo,
    onClickComp, 
    setComp,
    addComp,
    changeCompByCommand, 
    init,
    setViewData,
    initCurComp,
    // syncCfg,
  }
})