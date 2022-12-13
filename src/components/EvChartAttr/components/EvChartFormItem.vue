<template>
  <el-form-item :label="templateOption.name">
    <el-input
      v-if="templateOption.ui.type === 'text'"
      v-model="chartOpt[templateOption.model]"
      style="width: 200px"
      :placeholder="templateOption.ui.placeholder"
    ></el-input>
    <el-input-number
      v-if="templateOption.ui.type === 'number'"
      v-model="chartOpt[templateOption.model]"
      style="width: 200px"
      :step="templateOption.ui.step"
      :min="templateOption.ui.min"
      :max="templateOption.ui.max"
    ></el-input-number>
    <el-switch
      v-if="templateOption.ui.type === 'boolean'"
      v-model="chartOpt[templateOption.model]"
    ></el-switch>
    <el-color-picker
      v-if="templateOption.ui.type === 'color'"
      v-model="chartOpt[templateOption.model]"
      show-alpha
    ></el-color-picker>
    <el-select
      v-if="templateOption.ui.type === 'select'"
      v-model="chartOpt[templateOption.model]"
      style="width: 200px"
      placeholder="请选择"
    >
      <el-option
        v-for="(item, index) in templateOption.ui.options"
        :key="index"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script lang='ts' setup name="EvChartFormItem">
import { reactive, toRefs, ref, inject } from 'vue'

const props = defineProps({
  templateOption: {
    type: Object,
    require: true,
    default: () => {},
  },
})
const chartOpt = inject('chartOpt') as COMMON.obj

const { templateOption } = toRefs(props)

</script>
<style scoped lang='scss'>
</style>