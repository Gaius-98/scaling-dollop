<template>
  <el-table
    :data="data"
    style="width: 100%"
    v-bind="tableProps"
  >
    <el-table-column
      v-for="column in tableConfig.column"
      v-bind="column.props"
      :key="column.key"
      :prop="column.props.field"
    >
      <template
        #default="scope"
      >
        <div 
          v-if="column.props.slot.enable"
          v-html="column.props.slot.content"
        >
        </div>
        <!-- <slot
          :name="column.props.slot" 
          :row="scope.row"
          :$index="scope.$index"
        ></slot> -->
      </template>
    </el-table-column>
    <!-- 操作 -->
    <el-table-column
      v-if="tableConfig.table.opt.show"
      :fixed="tableConfig.table.opt.fixed"
      :width="tableConfig.table.opt.width || 200"
      :label="tableConfig.table.opt.label || '操作'"
    >
      <template #default="scope">
        <div
          v-if="tableConfig.table.opt.slot.enable"
          v-html="tableConfig.table.opt.slot.content"
        >
        </div>
        <slot
          name="op"             
          :row="scope.row"
          :$index="scope.$index"
        ></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang='ts' setup name="EvTable">
import { reactive, toRefs, ref, computed } from 'vue'

interface Props {
  data:COMMON.obj[],
  tableConfig:tableConfig
}
const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  tableConfig: () => ({
    column: [],
    table: {
      height: 400,
      stripe: false,
      border: false,
      size: 'default',
      fit: true,
      showHeader: true,
      highlightCurrentRow: false,
      opt: {
        show: true,
        fixed: 'right',
        width: '200',
        label: '操作',
        slot: {
          enable: true,
          content: '',
        },
      },
    },
  }),
})
const { data, tableConfig } = toRefs(props)
const tableProps = computed(() => ({
  ...tableConfig.value.table,
  ...Attr,
}))
</script>
<style scoped lang='scss'>
</style>