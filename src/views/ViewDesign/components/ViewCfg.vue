<template>
  <div
    v-for="item in template"
    :key="item.label"
    class="view-cfg"
  >
    <el-collapse
      v-if="item.ui.type=='collapse'"
    >
      <el-collapse-item
        :title="item.label"
        :name="item.label"
        style="padding-left: 10px;"
      >
        <view-cfg :template="item.ui.children">
        </view-cfg>
      </el-collapse-item>
    </el-collapse>
    <el-form-item
      v-if="item.ui.type == 'input'"
      :label="item.label"
    >
      <el-input
        type="textarea"
        autosize
        :model-value="deepGetValue(item.ui.field)"
        @input="deepSetValue($event,item.ui.field)"
      >
      </el-input>
    </el-form-item>
    <el-form-item
      v-if="item.ui.type == 'number'"
      :label="item.label"
    >
      <el-input-number
        controls-position="right"
        :model-value="deepGetValue(item.ui.field)"
        @change="deepSetValue($event,item.ui.field)"
      >
      </el-input-number>
    </el-form-item>
    <el-form-item
      v-if="item.ui.type == 'select'"
      :label="item.label"
    >
      <el-select
        :model-value="deepGetValue(item.ui.field)"
        clearable
        @change="deepSetValue($event,item.ui.field)"
      >
        <el-option
          v-for="it in item.ui.props.options"
          :key="it.value"
          :label="it.label"
          :value="it.value"
        >
          {{ it.label }}
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      v-if="item.ui.type == 'switch'"
      :label="item.label"
    >
      <el-switch
        :model-value="deepGetValue(item.ui.field)"
        @change="deepSetValue($event,item.ui.field)"
      >
      </el-switch>
    </el-form-item>
    <el-form-item
      v-if="item.ui.type == 'color'"
      :label="item.label"
    >
      <el-color-picker
        show-alpha
        :model-value="deepGetValue(item.ui.field)"
        @change="deepSetValue($event,item.ui.field)"
      >
      </el-color-picker>
    </el-form-item>
  </div>
</template>

<script lang='ts' setup name="viewCfg">
import commonTemplate from '@/assets/view/viewCfgTemplates/cfgCommonTemplate'
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useViewStore } from '@/store/viewDesign'

interface Props{
    template:viewCompCfg[]
}
const props = withDefaults(defineProps<Props>(), {
  template: () => ([]),
})
const store = useViewStore()
const { curCompData } = storeToRefs(store)
const { template } = toRefs(props)
const deepGetValue = (field:string) => field.split('.').reduce((p, c) => {
  if (typeof p[c] == 'undefined') {
    return ''
  }
  return p[c]
}, curCompData.value as any)
const deepSetValue = (val:any, field:string) => {
  field.split('.').reduce((p:any, c:string, idx:number, arr:string[]) => {
    if (idx == arr.length - 1) {
      p[c] = val
      return p[c]
    }
    if (p[c]) {
      return p[c]
    } 
    if (!p[c] && idx < arr.length - 1) {
      p[c] = {}
    }
    return p[c]
  }, curCompData.value as any)
}
</script>
<style scoped lang='scss'>
.view-cfg{
  :deep(.el-collapse){
    .el-collapse-item__header{
      height: 32px;
      line-height: 32px;
      border-bottom: 0;
    }
    .el-collapse-item__content{
      padding: 5px 0;
    }
  }
}
</style>