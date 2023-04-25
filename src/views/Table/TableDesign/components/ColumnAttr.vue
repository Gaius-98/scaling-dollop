<template>
  <div class="column-attr">
    <el-form-item
      prop="props.field"
      label="字段名"
    >
      <el-input
        v-model="curColumn.props.field"
        placeholder="输入提示"
        :readonly="false"
        :disabled="false"
        :clearable="true"
        :show-password="false"
      >
      </el-input>
    </el-form-item>
    
    <el-form-item
      prop="props.label"
      label="显示标题"
    >
      <el-input
        v-model="curColumn.props.label"
        placeholder="输入提示"
        :readonly="false"
        :disabled="false"
        :clearable="true"
        :show-password="false"
      >
      </el-input>
    </el-form-item>
    
    <el-form-item
      prop="props.width"
      label="宽度"
    >
      <el-input
        v-model="curColumn.props.width"
        placeholder="输入提示"
        :readonly="false"
        :disabled="false"
        :clearable="true"
        :show-password="false"
      >
      </el-input>
    </el-form-item>
    
    <el-form-item
      prop="props.minWidth"
      label="最小宽度"
    >
      <el-input
        v-model="curColumn.props.minWidth"
        placeholder="输入提示"
        :readonly="false"
        :disabled="false"
        :clearable="true"
        :show-password="false"
      >
      </el-input>
    </el-form-item>
    
    <el-form-item
      prop="props.sortable"
      label="是否可排序"
    >
      <el-switch
        v-model="curColumn.props.sortable"
        :disabled="false"
        active-text=""
        inactive-text=""
      >
      </el-switch>
    </el-form-item>
  
    <el-form-item
      prop="props.showOverflowTooltip"
      label="是否显示tip"
    >
      <el-switch
        v-model="curColumn.props.showOverflowTooltip"
        :disabled="false"
        active-text=""
        inactive-text=""
      >
      </el-switch>
    </el-form-item>
  
    <el-form-item
      prop="props.fixed"
      label="固定列"
    >
      <el-select
        v-model="curColumn.props.fixed"
        placeholder=""
        :readonly="false"
        :disabled="false"
        :filterable="true"
        :clearable="true"
      >
        <el-option 
          v-for="item in optionsFixed"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        >
        </el-option>
      </el-select>
    </el-form-item>
    
    <el-form-item
      prop="props.align"
      label="对齐方式"
    >
      <el-select
        v-model="curColumn.props.align"
        placeholder="输入提示"
        :readonly="false"
        :disabled="false"
        :filterable="true"
        :clearable="true"
      >
        <el-option 
          v-for="item in optionsAlign"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      prop="curColumn.props.slot.enable"
      label="开启自定义内容"
    >
      <el-switch v-model="curColumn.props.slot.enable">
      </el-switch>
    </el-form-item>
    <el-form-item
      v-if="curColumn.props.slot.enable"
      prop="curColumn.props.slot.content"
      label="插槽"
    >
      <ev-code
        v-model="curColumn.props.slot.content" 
        style="width:380px;height:200px;"
        type="html"
      >
      </ev-code>
    </el-form-item>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTableDesignStore } from '@/store/tableDesign'

const store = useTableDesignStore()
const { curColumn } = storeToRefs(store)
const optionsFixed = reactive([
  {
    label: '左',
    value: 'left',
  },
      
  {
    label: '右',
    value: 'right',
  },
])
    
const optionsAlign = reactive([
  {
    label: '左',
    value: 'left',
  },
      
  {
    label: '中',
    value: 'center',
  },
      
  {
    label: '右',
    value: 'right',
  },
])
</script>
<style scoped lang='scss'>
.column-attr{
  width: 380px;
}
</style>