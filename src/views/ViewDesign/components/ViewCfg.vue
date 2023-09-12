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
      >
        <view-cfg :template="item.ui.children">
        </view-cfg>
      </el-collapse-item>
    </el-collapse>
    <el-tabs
      v-if="item.ui.type =='tab'"
      type="card"
      editable
      :style="{
        '--el-tabs-header-height':'32px'
      }"
      @edit="(tagName:string,action:string)=>{
        handleTabsEdit(tagName,action,item.ui.field)
      }"
    >
      <el-tab-pane
        v-for="(tab,idx) in deepGetValue(item.ui.field)"
        :key="idx"
        :label="item.ui.props.tabTitle + (idx+1)"
        :name="item.ui.props.tabTitle + (idx+1)"
      >
        <view-cfg :template="getTabTemplate(item.ui.children,item.ui.field,idx)">
        </view-cfg>
      </el-tab-pane>
    </el-tabs>
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
        filterable
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
      v-if="item.ui.type == 'iconSelect'"
      :label="item.label"
    >
      <icon-select
        :model-value="deepGetValue(item.ui.field)"
        clearable
        filterable
        @change="deepSetValue($event,item.ui.field)"
      >
      </icon-select>
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
    <el-form-item 
      v-if="item.ui.type == 'code'"
      :label="item.label"
    >
      <div style="width: 100%;height: 200px;">
        <ev-code
          style="width: 100%;height: 100%;"
          :code="deepGetCodeValue(item.ui.field)"
          @change="deepSetCodeValue($event,item.ui.field)"
        >
        </ev-code>
      </div>
    </el-form-item>
    <el-form-item 
      v-if="item.ui.type == 'slider'"
      :label="item.label"
    >
      <el-slider
        range
        :model-value="deepGetValue(item.ui.field)"
        :min="0"
        :max="200"
        :step="10"
        show-stops
        @input="deepSetValue($event,item.ui.field)"
      >
      </el-slider>
    </el-form-item>
  </div>
</template>

<script lang='ts' setup name="viewCfg">
import commonTemplate from '@/assets/view/viewCfgTemplates/cfgCommonTemplate'
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useViewStore } from '@/store/viewDesign'
import { cloneDeep } from 'lodash'
import IconSelect from './cfgComponents/IconSelect.vue'

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
const deepGetCodeValue = (field:string) => {
  let value = deepGetValue(field)
  return JSON.stringify(value, null, 4)
}
const deepSetCodeValue = (val:any, field:string) => {
  let value = JSON.parse(val)
  deepSetValue(value, field)
}
const getTabTemplate = (children:viewCompCfg[]|undefined, field:string, idx:number) => {
  if (children) {
    children = cloneDeep(children).map(e => {
      e.ui.field = `${field}.${idx}.${e.ui.field}`
      return e
    })
  }

  return children
}
const handleTabsEdit = (tag:string, action:string, field:string) => {
  if (action == 'remove') {
    let val = cloneDeep(deepGetValue(field))
    val.splice(tag.replace(/[^\d]/g, ''), 1)
    deepSetValue(val, field)
  } else {
    let val = cloneDeep(deepGetValue(field))
    val.push({

    })
    deepSetValue(val, field)
  }
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
  :deep(.el-tabs__item){
    padding: 0 15px;
  }
}
</style>