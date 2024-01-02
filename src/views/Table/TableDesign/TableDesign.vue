<template>
  <div class="table-design">
    <div class="table-data">
    </div>
    <div class="table-container">
      <button @click="onAddField">新增字段</button>
      <draggable
        v-model="tableConfig.columns"
        item-key="prop"
        class="table-header"
      >
        <template #item="{element}">
          <div
            class="header-cell"
            :class="curTableColumn == element.prop? 'cur-column' :''"
            @click="onClickTableHeader(element.prop)"
          >
            {{ element.label }}
          </div>
        </template>
      </draggable>
      <ev-table 
        ref="table"
        :data="data"
        :table-config="tableConfig"
        :show-header="false"
        border
      >
      </ev-table>
    </div>
    <div class="table-cfg">
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { Column } from 'element-plus'
import draggable from 'vuedraggable'

const curTableColumn = ref('')
const tableConfig = reactive(
  {
    columns: [
      {
        label: '日期',
        prop: 'date',
      },
      {
        label: '姓名',
        prop: 'name',
      },
      {
        label: '地址',
        prop: 'address',
      },
    ],
  },

)
const table = ref()
const data = reactive([{
  date: '2016-05-02',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1518 弄',
}, {
  date: '2016-05-04',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1517 弄',
}, {
  date: '2016-05-01',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1519 弄',
}, {
  date: '2016-05-03',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1516 弄',
}])
const onClickTableHeader = (property:string) => {
  curTableColumn.value = property
}
const onAddField = () => {
  tableConfig.columns.push({
    label: '测试',
    prop: 'test',
  })
}
</script>
<style scoped lang='scss'>

.table-header{
    display: flex;
    align-items: center;
    height: 30px;
}
.header-cell{
    flex: 1;
    color: #909399;
    font-weight: bold;
    font-size: 14px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    line-height: 30px;
    height: 30px;
    padding: 0 12px;
    border: 1px solid #ebeef5;
    cursor: pointer;
    &.cur-column{
        border: 1px solid var(--ev-active-color);
    }
}
</style>