<template>
  <div class="table-header">
    <el-tag 
      draggable="true"
      :data-column="JSON.stringify(column)"
      @dragstart="onDragColumn"
    >
      字段
    </el-tag>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { v4 as uuid } from 'uuid'

const column = reactive<columnConfig>({
  props: {
    field: '',
    label: '',
    width: '',
    minWidth: '',
    fixed: '',
    sortable: false,
    showOverflowTooltip: false,
    align: 'left',
  },
  key: '1',
})
const onDragColumn = (ev:DragEvent) => {
  if (ev && ev.dataTransfer && ev.target) {
    let e = ev.target as HTMLElement
    let column = JSON.parse(e.dataset.column as string)
    column.key = uuid()
    column.props.field = `field${(Math.random() * 10000).toFixed(0)}`
    ev.dataTransfer.setData('column', JSON.stringify(column))
  }
}
</script>
<style scoped lang='scss'>
.table-header{
  width: 100%;
  height: 60px;
}
</style>