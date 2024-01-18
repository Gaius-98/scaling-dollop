<template>
  <div
    v-ev-loading="loading"
    class="view-preview"
    :style="getContainerStyle"
  >
    <div
      v-for="item in curData.componentData"
      :key="item.id"
      :style="getStyle(item)"
      class="box"
    >
      <component
        :is="item.name"
        v-bind="item.props"
        :preview="true"
      >
        {{ item.name == 'el-text' ? item.props.value :'' }}
      </component>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, PropType, StyleValue, watch } from 'vue'
import { useViewStore } from '@/store/viewDesign'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import api from '@/views/View/service/api'
import { getViewData } from '@/utils/func'
import useParamsPool from '@/hooks/useParamsPool'

const store = useViewStore()
const { viewData } = storeToRefs(store)
const route = useRoute()
const curData = ref<ViewData>(viewData.value)
const loading = ref(true)
const preHandleViewData = () => {
  let allRes = curData.value.componentData.map(e => getViewData(e))
  Promise.all(allRes).then(res => {
    res.forEach(({ id, data }) => {
      setCompData(id, data)
    })
  })
}
const handleComponent = (data?:ViewComponent) => {
  if (data) {
    getViewData(data).then(({ id, data }) => {
      setCompData(id, data)
    })
  }
}
const setCompData = (id:string, data:any) => {
  let idx = curData.value.componentData.findIndex(e => e.id == id)
  if (idx != -1) {
    let comp = curData.value.componentData[idx]
    const { type } = comp
    switch (type) {
      case 'text':
        curData.value.componentData[idx].props.value = data
        break
      case 'img':
        curData.value.componentData[idx].props.src = data
        break
      case 'iframe':
        curData.value.componentData[idx].props.url = data
        break
      case 'chartPie':
        curData.value.componentData[idx].props.option.dataset.source = data
        break
      case 'chartBar':
        curData.value.componentData[idx].props.option.dataset.source = data
        break
      case 'chartLine':
        curData.value.componentData[idx].props.option.dataset.source = data
        break
      case 'icon':
        curData.value.componentData[idx].props.icon = data
        break
      default:
        curData.value.componentData[idx].props.value = data
        break
    }
  }
}
if (route.query.id) {
  api.getDetail({
    id: route.query.id as string,
  }).then(res => {
    const { code, data, msg } = res
    loading.value = false
    if (code == 0) {
      curData.value = data
      preHandleViewData()
    }
  })
} else {
  loading.value = false
  curData.value = viewData.value
  preHandleViewData()
}

const getStyle = (data:ViewComponent):StyleValue => {
  const { positionSize: { left, top, width, height } } = data
  return {
    position: 'absolute',
    left: `${left}px`,
    top: `${top}px`,
    width: `${width}px`,
    height: `${height}px`,
  }
}
const getContainerStyle = ():StyleValue => ({
  width: `${curData.value!.width}px`,
  height: `${curData.value!.height}px`,
})

const { pool } = useParamsPool()
const realParams = {}
const changeByParams = (keys:string[]) => {
  curData.value.componentData.forEach(comp => {
    if (comp.dataSetting.type == 'dev' && comp.dataSetting.params) {
      // 依赖的组件变量发生了变化
      if (keys.some((key:string) => (comp.dataSetting.params!.includes(key)))) {
        handleComponent(comp)
      }
    }
  })
}
const findChangeParamsKey = (oldParams:COMMON.obj, newParams:COMMON.obj) => {
  let differentKey:string[] = []
  let newKeys = Object.keys(newParams)
  let oldKeys = Object.keys(oldParams)
  newKeys.forEach(key => {
    if (!oldKeys.includes(key)) {
      differentKey.push(key)
    } else if (oldParams[key] != newParams[key]) {
      differentKey.push(key)
    }
  })
  return differentKey
}
watch(pool, () => {
  const keys = findChangeParamsKey(realParams, pool)
  changeByParams(keys)
}, {
  deep: true,
})
</script>
<style scoped lang='scss'>
.view-preview{
    width: 100%;
    height: 100vh;
    position: relative;
    .box{
        overflow: hidden;
    }
}
</style>