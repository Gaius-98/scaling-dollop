<template>
  <div
    v-for="item in template"
    :key="item.label"
    class="view-cfg"
  >
    <el-collapse
      v-if="item.ui.type=='collapse' && isShow(item)"
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
      v-if="item.ui.type =='tab' && isShow(item)"
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
      v-if="item.ui.type == 'input' && isShow(item)"
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
      v-if="item.ui.type == 'number' && isShow(item)"
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
      v-if="item.ui.type == 'select' && isShow(item)"
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
      v-if="item.ui.type == 'iconSelect' && isShow(item)"
      :label="item.label"
    >
      <icon-select
        :value="deepGetValue(item.ui.field)"
        clearable
        filterable
        @change="deepSetValue($event,item.ui.field)"
      >
      </icon-select>
    </el-form-item>
    <el-form-item
      v-if="item.ui.type == 'switch' && isShow(item)"
      :label="item.label"
    >
      <el-switch
        :model-value="deepGetValue(item.ui.field)"
        @change="deepSetValue($event,item.ui.field)"
      >
      </el-switch>
    </el-form-item>
    <el-form-item
      v-if="item.ui.type == 'color' && isShow(item)"
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
      v-if="item.ui.type == 'code' && isShow(item)"
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
      v-if="item.ui.type == 'varObj' && isShow(item)"
      :label="item.label"
    >
      <ev-var
        :data="deepGetValue(item.ui.field)"
        @update:data="deepSetValue($event,item.ui.field)"
      >
      </ev-var>
    </el-form-item>
    <el-form-item 
      v-if="item.ui.type == 'slider' && isShow(item)"
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
    <el-form-item
      v-if="item.ui.type =='dataSource' && isShow(item)"
    >
      <el-button 
        type="primary"
        @click="onOpenDataSource(cloneDeep(deepGetValue(item.ui.field)))"
      >
        数据源配置
      </el-button>
    </el-form-item>
  </div>
</template>

<script lang='ts' setup name="viewCfg">
import EvDataSource from '@/components/common/EvDataSource/EvDataSource.vue'
import commonTemplate from '@/assets/view/viewCfgTemplates/cfgCommonTemplate'
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useViewStore } from '@/store/viewDesign'
import { cloneDeep } from 'lodash'
import IconSelect from './cfgComponents/IconSelect.vue'
import { useGuDialog } from 'gaius-utils'

interface Props{
    template:ViewCompCfg[]
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
const getTabTemplate = (children:ViewCompCfg[]|undefined, field:string, idx:number) => {
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
const isShow = (data:ViewCompCfg) => {
  const { ui: { connectShow } } = data
  if (connectShow) {
    const { field, value } = connectShow
    return deepGetValue(field) == value
  }
  return true
}
const onOpenDataSource = (data:any) => {
  const dialog = useGuDialog({
    title: '数据源配置',
    componentProps: {
      data,
    },
    height: 900,
    content: EvDataSource,
  })
  dialog.open((res:any) => {
    Object.assign(curCompData.value.dataSetting, {
      ...res.data.data,
    })
    dialog.destroyed()
  })
}
</script>
<style scoped lang='scss'>
.view-cfg{
  :deep(.el-collapse){
    .el-collapse-item__header{
      height: 32px;
      line-height: 32px;
      border-bottom: 0;
      color: var(--ev-active-color);
    }
    .el-collapse-item__content{
      padding: 5px 0 5px 15px;
    }
  }
  :deep(.el-tabs__item){
    padding: 0 15px;
  }
}
</style>