<template>
  <div class="view-design-container">
    <gu-drag-resize
      v-for="item in arr"
      :key="item.nodeKey"
      minh="10"
      minw="10"
      :node-key="item.nodeKey"
      @on-drag-resize="dragResizeAfter"
    >
      {{ item.name }}
    </gu-drag-resize>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { GuDragResize } from 'gaius-utils'

const arr = ref([
  {
    nodeKey: '1',
    name: '123',
  },
  {
    nodeKey: '2',
    name: '34',
  },
])
const dragResizeAfter = (data) => {
  console.log(data)
}
</script>
<style scoped lang='scss'>
.view-design-container{
    width: 100%;
    height: 100%;
}
</style>