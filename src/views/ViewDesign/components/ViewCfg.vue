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
    <el-form-item
      v-if="item.ui.type == 'input'"
      :label="item.label"
    >
      <el-input
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
      v-if="item.ui.type == 'textarea'"
      :label="item.label"
    >
      <el-input
        type="textarea"
        :model-value="deepGetValue(item.ui.field)"
        @change="deepSetValue($event,item.ui.field)"
      >
      </el-input>
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
const deepGetValue = (field:string) => field.split('.').reduce((p, c) => p[c], curCompData.value as any)
const deepSetValue = (val:any, field:string) => {
  field.split('.').reduce((p:any, c:string, idx:number, arr:string[]) => {
    if (idx == arr.length - 1) {
      console.log(p, val)
      p[c] = val
    }
    return p[c]
  }, curCompData.value as any)
}
</script>
<style scoped lang='scss'>
</style>