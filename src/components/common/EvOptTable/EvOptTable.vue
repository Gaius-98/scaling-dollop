<template>
  <el-table
    :key="tableKey"
    :data="tableData"
  >
    <el-table-column
      v-for="column in columnConfig"
      :prop="column.field"
      :label="column.label"
    >
      <template
        #default="scope"
      >
        <el-input
          v-model="scope.row[column.field]"
        >
        </el-input>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
    >
      <template
        #default="scope"
      >
        <span
          class="opt"
          @click="onAdd()"
        >
          +
        </span>
        <span
          class="opt"
          @click="onDelete(scope.row)"
        >
          -
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang='ts' setup name="EvOptTable">
import { reactive, toRefs, ref, PropType, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { cloneDeep } from 'lodash-es'

const props = defineProps({
  data: {
    type: Array as PropType<COMMON.obj[]>,
    required: true,
  },
  columnConfig: {
    type: Array as PropType<COMMON.columnConfig[]>,
    required: true,
  },
})
const tableData = computed({
  get() {
    return props.data
  },
  set(value:any) {
    console.log()
    emit('update:data', value)
  },
})
const tableKey = ref(uuidv4())
const emit = defineEmits(['update:data'])

const onAdd = () => {
  const cloneTable = cloneDeep(tableData.value[0])
  Object.keys(cloneTable).forEach(key => {
    cloneTable[key] = ''
  })
  cloneTable.key = uuidv4()
  tableData.value.push(cloneTable)
  tableKey.value = uuidv4()
}
const onDelete = (row:COMMON.obj) => {
  const idx = tableData.value.findIndex((item:COMMON.obj) => item.key == row.key)
  tableData.value.splice(idx, 1)
  tableKey.value = uuidv4()
}
</script>
<style scoped lang='scss'>
</style>