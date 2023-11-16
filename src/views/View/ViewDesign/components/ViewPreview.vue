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

const store = useViewStore()
const { viewData } = storeToRefs(store)
const route = useRoute()
const curData = ref<ViewData|COMMON.obj>({})
const loading = ref(true)
if (route.query.id) {
  api.getDetail({
    id: route.query.id as string,
  }).then(res => {
    const { code, data, msg } = res
    loading.value = false
    if (code == 0) {
      curData.value = data
    }
  })
} else {
  curData.value = viewData.value
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