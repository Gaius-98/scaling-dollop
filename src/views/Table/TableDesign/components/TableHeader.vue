<template>
  <div class="table-header">
    <el-tag 
      draggable="true"
      :data-column="JSON.stringify(column)"
      @dragstart="onDragColumn"
    >
      字段
    </el-tag>
    <el-button @click="downloadTable">
      导出vue文件
    </el-button>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { v4 as uuid } from 'uuid'
import { createTable, downloadFile } from '@/utils/func'
import { storeToRefs } from 'pinia'
import { useTableDesignStore } from '@/store/tableDesign'

const store = useTableDesignStore()
const { tableConfig } = storeToRefs(store)
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
    slot: {
      enable: false,
      content: '',
    },
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
const downloadTable = () => {
  const str = createTable(tableConfig.value)
  downloadFile(str, uuid(), 'vue')
}
</script>
<style scoped lang='scss'>
.table-header{
  width: 100%;
  height: 60px;
}
</style>