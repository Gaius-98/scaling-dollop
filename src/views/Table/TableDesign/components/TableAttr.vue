<template>
  <div class="table-attr">
    <el-form-item
      prop="height"
      label="高度"
    >
      <el-input
        v-model="tableConfig.table.height"
        placeholder="输入提示"
        :readonly="false"
        :disabled="false"
        :clearable="true"
        :show-password="false"
      >
      </el-input>
    </el-form-item>
    
    <el-form-item
      prop="maxHeight"
      label="最大高度"
    >
      <el-input
        v-model="tableConfig.table.maxHeight"
        placeholder="输入提示"
        :readonly="false"
        :disabled="false"
        :clearable="true"
        :show-password="false"
      >
      </el-input>
    </el-form-item>
    
    <el-form-item
      prop="stripe"
      label="斑马纹"
    >
      <el-switch
        v-model="tableConfig.table.stripe"
        :disabled="false"
        active-text=""
        inactive-text=""
      >
      </el-switch>
    </el-form-item>
  
    <el-form-item
      prop="border"
      label="边框"
    >
      <el-switch
        v-model="tableConfig.table.border"
        :disabled="false"
        active-text=""
        inactive-text=""
      >
      </el-switch>
    </el-form-item>
  
    <el-form-item
      prop="size"
      label="尺寸"
    >
      <el-select
        v-model="tableConfig.table.size"
        placeholder="输入提示"
        :readonly="false"
        :disabled="false"
        :filterable="true"
        :clearable="true"
      >
        <el-option 
          v-for="item in optionsSize"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        >
        </el-option>
      </el-select>
    </el-form-item>
    
    <el-form-item
      prop="fit"
      label="列宽自动撑开"
    >
      <el-switch
        v-model="tableConfig.table.fit"
        :disabled="false"
        active-text=""
        inactive-text=""
      >
      </el-switch>
    </el-form-item>
  
    <el-form-item
      prop="showHeader"
      label="显示表头"
    >
      <el-switch
        v-model="tableConfig.table.showHeader"
        :disabled="false"
        active-text=""
        inactive-text=""
      >
      </el-switch>
    </el-form-item>
  
    <el-form-item
      prop="highlightCurrentRow"
      label="高亮当前行"
    >
      <el-switch
        v-model="tableConfig.table.highlightCurrentRow"
        :disabled="false"
        active-text=""
        inactive-text=""
      >
      </el-switch>
    </el-form-item>
    <span>
      操作列
    </span>
    <el-form-item 
      prop="tableConfig.table.opt.show"
      label="展示操作列"
    >
      <el-switch
        v-model="tableConfig.table.opt.show"
        :disabled="false"
        active-text=""
        inactive-text=""
      >
      </el-switch>
    </el-form-item>
    <el-form-item
      prop="props.width"
      label="宽度"
    >
      <el-input
        v-model="tableConfig.table.opt.width"
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
        v-model="tableConfig.table.opt.minWidth"
        placeholder="输入提示"
        :readonly="false"
        :disabled="false"
        :clearable="true"
        :show-password="false"
      >
      </el-input>
    </el-form-item>
    <el-form-item
      prop="props.fixed"
      label="固定操作列"
    >
      <el-select
        v-model="tableConfig.table.opt.fixed"
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
      prop="tableConfig.table.opt.slot.enable"
      label="开启自定义内容"
    >
      <el-switch v-model="tableConfig.table.opt.slot.enable">
      </el-switch>
    </el-form-item>
    <el-form-item
      v-if="tableConfig.table.opt.slot.enable"
      prop="tableConfig.table.opt.slot.content"
      label="插槽"
    >
      <ev-code
        v-model="tableConfig.table.opt.slot.content" 
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
const { tableConfig } = storeToRefs(store)
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
const optionsSize = reactive([
  {
    label: 'large',
    value: 'large',
  },
      
  {
    label: 'default',
    value: 'default',
  },
      
  {
    label: 'small',
    value: 'small',
  },
])
</script>
<style scoped lang='scss'>
.table-attr{
  width:380px;
  height: 700px;
  overflow-y: auto;
}
</style>