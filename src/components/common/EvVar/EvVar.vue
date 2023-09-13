<template>
  <el-table
    :key="tableKey"
    :data="tableData"
  >
    <el-table-column
      prop="varKey"
      label="参数名"
    >
      <template
        #default="scope"
      >
        <el-input
          v-model="scope.row.varKey"
          @change="onHandle"
        >
        </el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="varValue"
      label="参数别名"
    >
      <template
        #default="scope"
      >
        <el-input
          v-model="scope.row.varValue"
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
    type: Object as PropType<COMMON.obj>,
    required: true,
  },
})
const { data } = toRefs(props)
// const tableData = ref<COMMON.reqTableData[]>([])
const tableKey = ref(uuidv4())
console.log(data)
const tableData = computed(() => {
  const table:COMMON.varTableData[] = []
  if (Object.keys(data.value).length == 0) {
    table.push({
      key: uuidv4(),
      varKey: '',
      varValue: '',
    })
  }
  for (const key in data.value) {
    if (Object.prototype.hasOwnProperty.call(data.value, key)) {
      const value = data.value[key]
      table.push({
        key: uuidv4(),
        varKey: key,
        varValue: value,
      })
    }
  }
  return table
})
const emits = defineEmits(['update:data'])
const onHandle = () => {
  const obj:COMMON.obj = {}
  tableData.value.forEach((item => {
    obj[item.varKey] = item.varValue
  }))
  emits('update:data', obj)
}

const onAdd = () => {
  tableData.value.unshift({
    key: uuidv4(),
    varKey: '',
    varValue: '',
  })
  tableKey.value = uuidv4()
}
const onDelete = (row:COMMON.obj) => {
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