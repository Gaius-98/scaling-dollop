<template>
  <el-table
    :key="tableKey"
    :data="tableData"
  >
    <el-table-column
      prop="paramsKey"
      label="参数名"
    >
      <template
        #default="scope"
      >
        <el-input
          v-model="scope.row.paramsKey"
          @change="onHandle"
        >
        </el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="paramsValue"
      label="参数值"
    >
      <template
        #default="scope"
      >
        <el-input
          v-model="scope.row.paramsValue"
          @change="onHandle"
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

<script lang='ts' setup name="ReqTable">
import { reactive, toRefs, ref, PropType, watch, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const props = defineProps({
  data: {
    type: Object as PropType<COMMON.Obj>,
    required: true,
  },
})
const { data } = toRefs(props)
// const tableData = ref<COMMON.ReqTableData[]>([])
const tableKey = ref(uuidv4())
const tableData = computed(() => {
  const table:COMMON.ReqTableData[] = []
  if (Object.keys(data.value).length == 0) {
    table.push({
      key: uuidv4(),
      paramsKey: '',
      paramsValue: '',
    })
  }
  for (const key in data.value) {
    if (Object.prototype.hasOwnProperty.call(data.value, key)) {
      const value = data.value[key]
      table.push({
        key: uuidv4(),
        paramsKey: key,
        paramsValue: value,
      })
    }
  }
  return table
})
const emits = defineEmits(['update:data'])
const onHandle = () => {
  const obj:COMMON.Obj = {}
  tableData.value.forEach((item => {
    obj[item.paramsKey] = item.paramsValue
  }))
  emits('update:data', obj)
}

const onAdd = () => {
  tableData.value.unshift({
    key: uuidv4(),
    paramsKey: '',
    paramsValue: '',
  })
  tableKey.value = uuidv4()
}
const onDelete = (row:COMMON.Obj) => {
  const idx = tableData.value.findIndex((item) => item.key == row.key)
  tableData.value.splice(idx, 1)
  tableKey.value = uuidv4()
  onHandle()
}
</script>
<style scoped lang='scss'>
.opt{
  cursor: pointer;
}
</style>