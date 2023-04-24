<template>
  <div class="table-design">
    <table-header>
    </table-header>
    <div class="main-container">
      <table-container :list="tableConfig.column">
      </table-container>
      <el-tabs
        v-model="activeName"
      >
        <el-tab-pane
          label="列配置"
          name="column"
        >
          <column-attr>
          </column-attr>
        </el-tab-pane>
        <el-tab-pane
          label="表格配置"
          name="table"
        >
          <table-attr />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang='ts' setup name="TableDesign">
import { reactive, toRefs, ref } from 'vue'
import TableHeader from '@/views/Table/TableDesign/components/TableHeader.vue'
import TableContainer from '@/views/Table/TableDesign/components/TableContainer.vue'
import ColumnAttr from './components/ColumnAttr.vue'
import TableAttr from '@/views/Table/TableDesign/components/TableAttr.vue'
import { storeToRefs } from 'pinia'
import { useTableDesignStore } from '@/store/tableDesign'

const store = useTableDesignStore()
const { tableConfig } = storeToRefs(store)
const activeName = ref('column')
</script>
<style scoped lang='scss'>
.table-design{
  display: flex;
  flex-direction: column;
  .main-container{
    display: flex;
    justify-content: space-around;
    height: calc(100vh - 150px);
  }
}
</style>