<template>
  <div
    class="view-preview"
    :style="getContainerStyle"
  >
    <div
      v-for="item in viewData.componentData"
      :key="item.id"
      :style="getStyle(item)"
      class="box"
    >
      <component
        :is="item.name"
        v-bind="item.props"
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

const store = useViewStore()
const { viewData } = storeToRefs(store)
const getStyle = (data:viewComponent):StyleValue => {
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
  width: `${viewData.value.width}px`,
  height: `${viewData.value.height}px`,
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