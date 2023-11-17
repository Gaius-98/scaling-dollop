<template>
  <div
    v-loading="loading"
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
import { reactive, toRefs, ref, PropType, StyleValue } from 'vue'
import { useViewStore } from '@/store/viewDesign'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import api from '@/views/View/service/api'
import useGetCompData from '@/hooks/useViewData'
import { all } from 'axios'

const store = useViewStore()
const { viewData } = storeToRefs(store)
const route = useRoute()
const curData = ref<ViewData>(viewData.value)
const loading = ref(true)
const preHandleViewData = () => {
  let allRes = curData.value.componentData.map(e => useGetCompData(e))
  Promise.all(allRes).then(res => {
    res.forEach(({ id, data }) => {
      setCompData(id, data)
    })
  })
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