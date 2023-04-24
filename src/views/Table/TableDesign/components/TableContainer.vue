<template>
  <div class="table-container">
    <draggable
      v-model="columnList"
      item-key="key"
      class="table-drag-container"
      @drop.prevent.stop="dropColumn"
      @dragover.prevent="()=>{}"
    >
      <template
        #item="{element}"
      >
        <div
          class="table-drag-column"
          :class="curColumn.key == element.key ? 'active' :''"
          @click="onClickColumn(element)"
        >
          <div class="table-drag-column-header">
            {{ element.props.label }}({{ element.props.field }})
          </div>
          <div class="table-drag-column-data">
          </div>
          <div
            class="table-column-delete iconfont icon-a-shanchulajitong"
            @click="onClickRemove(element)"
          >
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, computed } from 'vue'
import draggable from 'vuedraggable'
import { storeToRefs } from 'pinia'
import { useTableDesignStore } from '@/store/tableDesign'

interface Props {
  list:columnConfig[]
}
const props = withDefaults(defineProps<Props>(), {
  list: () => [],
})
const store = useTableDesignStore()
const { curColumn } = storeToRefs(store)
const { onClickColumn } = store
const emit = defineEmits(['update:list'])
const columnList = computed({
  get() {
    return props.list
  },
  set(value:any) {
    emit('update:list', value)
  },
})
const dropColumn = (ev:DragEvent) => {
  if (ev && ev.dataTransfer) {
    const columnJson = ev.dataTransfer.getData('column')
    let column = JSON.parse(columnJson)
    columnList.value.push(column)
  }
}
const onClickRemove = (column:columnConfig) => {
  const idx = columnList.value.findIndex((columnItem:any) => columnItem.key == column.key)
  columnList.value.splice(idx, 1)
}
</script>
<style scoped lang='scss'>
.table-container{
 flex: 1;
  height: 800px;
  padding: 10px;
  
  .table-drag-container{
    display: flex;
    width: 100%;
    height: 100%;
    background: var(--ev-col-bg-color);
    .table-drag-column{
      position: relative;
      height: 100%;
      padding: 0 12px;
      border: 1px solid #ebeef5;
      cursor: pointer;
      &.active{
        border:1px dashed var(--ev-active-color);
        .table-column-delete{
          display: block;
        }
      }
      .table-drag-column-header{
        height:40px;
        line-height: 40px;
        background: #fff;
        border-bottom: 1px solid #ebeef5;
      }
      .table-drag-column-data{
        height: calc(100% - 45px);
      }
      .table-column-delete{
        display: none;
        position: absolute;
        top: 1px;
        right: 1px;
        font-size: 18px;
        color: var(--ev-text-color);
        background: var(--ev-active-color);
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>