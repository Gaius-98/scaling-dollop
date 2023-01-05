<template>
  <div class="form-design">
    <div class="form-design_header">
      <form-header></form-header>
    </div>
    <div class="form-design_container">
      <drag-comp-list />
      <drop-container />
      <el-tabs
        v-model="activeName"
      >
        <el-tab-pane
          label="组件配置"
          name="comp"
        >
          <ev-form-attr />
        </el-tab-pane>
        <el-tab-pane
          label="表单配置"
          name="form"
        >
          <form-attr />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang='ts' setup>
import dropContainer from './components/dropContainer.vue'
import dragCompList from './components/dragCompList.vue'
import FormAttr from '@/components/EvFormAttr/components/FormAttr.vue'
import formHeader from '@/views/Form/FormDesign/components/formHeader.vue'
import { reactive, toRefs, ref } from 'vue'

const activeName = ref('comp')
</script>
<style scoped lang='scss'>
.form-design{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .form-design_header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 60px;
  }
  .form-design_container{
    display: flex;
    justify-content: flex-start;
  }
}
</style>