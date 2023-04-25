<template>
  <el-table
    ref="table"
    :data="data"
    style="width:100%"
    :height="400"
    
    :fit="true"
    size="default"
    :show-header="true"
    :highlight-current-row="false"
  >
    <el-table-column
      key="61e87c76-a8bb-4ad5-9b62-0e59aa42febf"
      prop="test"
      label="测试"
      width=""
      min-width=""
      fixed=""
      :sortable="false"
      :show-overflow-tooltip="false"
      align="left"
    >
    </el-table-column>
  
    <el-table-column
      key="177a741a-5621-419b-ac4a-00b6a7f1e701"
      prop="field"
      label="牛的"
      width=""
      min-width=""
      fixed=""
      :sortable="true"
      :show-overflow-tooltip="false"
      align="left"
    >
      <template
        #default="scope"
      >
        <div>
          <div>
            {{ scope.row.field }}
          </div>
        </div>
      </template>
    </el-table-column>
     
    <el-table-column
      fixed="right"
      width="200 || 200"
      label="操作 || '操作'"
    >
      <template #default="scope">
        <div>
          <div>
            <a>
              查看
            </a>
          </div>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, PropType } from 'vue'

interface obj {
  [key:string]:any
}
interface Props {
  data:obj[],
}
const props = withDefaults(defineProps<Props>(), {
  data: () => [
    {
      test: 1,
      field: 2,
    },
  ],
})
const table = ref()
</script>
<style scoped lang='scss'>
</style>
