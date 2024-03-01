<template>
  <draggable
    v-model="compList"
    item-key="compId"
    group="comp"
    class="drop-container"
    @drop.prevent.stop="dropComp"
    @dragover.prevent="()=>{}"
  >
    <template
      #item="{element}"
    >
      <div
        class="drop-container-item"
        :class="curFormItem.compId == element.compId ? 'drop-container-item-active':''"
        @click.stop="onClickFormItem(element)"
      >
        <el-form-item
          v-if="element.type == 'component'"
          :prop="element.prop.field"
          v-bind="element.form_config"
        >
          <el-input
            v-if="element.comp == 'input'"
            :key="element.compId"
            v-model="formData[element.prop.field]"
            v-bind="element.prop"
          >
          </el-input>
          <el-input
            v-if="element.comp == 'textarea'"
            :key="element.compId"
            v-model="formData[element.prop.field]"
            v-bind="element.prop"
          >
          </el-input>
          <el-select
            v-if="element.comp == 'select'"
            v-bind="element.prop"
            :key="element.compId"
            v-model="formData[element.prop.field]"
          >
            <el-option
              v-for="item in element.prop.options"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            >
            </el-option>
          </el-select>
          <el-color-picker
            v-if="element.comp == 'color'"
            v-bind="element.prop"
            :key="element.compId"
            v-model="formData[element.prop.field]"
          >
          </el-color-picker>
          <el-checkbox-group
            v-if="element.comp == 'checkbox'"
            v-bind="element.prop"
            :key="element.compId"
            v-model="formData[element.prop.field]"
          >
            <el-checkbox
              v-for="item in element.prop.options"
              :key="item.value"
              :label="item.value"
            >
              {{ item.label }}
            </el-checkbox>
          </el-checkbox-group>
          <el-date-picker
            v-if="element.comp == 'date'"
            v-bind="element.prop"
            :key="element.compId"
            v-model="formData[element.prop.field]"
          >
          </el-date-picker>
          <el-time-picker
            v-if="element.comp == 'time'"
            v-bind="element.prop"
            :key="element.compId"
            v-model="formData[element.prop.field]"
          >
          </el-time-picker>
          <el-input-number
            v-if="element.comp == 'number'"
            v-bind="element.prop"
            :key="element.compId"
            v-model="formData[element.prop.field]"
          >
          </el-input-number>
          <el-switch
            v-if="element.comp == 'switch'"
            v-bind="element.prop"
            :key="element.compId"
            v-model="formData[element.prop.field]"
          >
          </el-switch>
          <el-button
            v-if="element.comp == 'button'"
            v-bind="element.prop"
            :key="element.compId"
          >
            {{ element.prop.name }}
          </el-button>
        </el-form-item>
        <div v-if="element.type == 'container'">
          <drop-grid
            v-if="element.comp == 'grid'"
            v-bind="element.prop"
          >
          </drop-grid>
          <drop-card 
            v-if="element.comp == 'card'"
            v-bind="element.prop"
          >
          </drop-card>
          <drop-collapse
            v-if="element.comp == 'collapse'"
            v-bind="element.prop"
          >
          </drop-collapse>
        </div>
        <div
          v-show="curFormItem.compId == element.compId"
          class="drop-container-item-opt"
        >
          <div
            class="opt iconfont icon-queue"
            title="复制"
            @click="onClickCopy(element)"
          >
          </div>
          <div
            class="opt iconfont icon-a-shanchulajitong"
            title="删除"
            @click="onClickRemove(element)"
          >
          </div>
        </div>
      </div>
    </template>
  </draggable>
</template>

<script lang='ts' setup name="dropComp">
import { reactive, toRefs, ref, PropType, computed } from 'vue'
import draggable from 'vuedraggable'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'
import dropGrid from './dropGrid.vue'
import dropCard from './dropCard.vue'
import dropCollapse from './dropCollapse.vue'
import { cloneDeep } from 'lodash'
import { v4 as uuid } from 'uuid'

const props = defineProps({
  list: {
    type: Array as PropType<FormComp[]>,
    required: true,
    default: () => [],
  },
})
const store = useFormDesignStore()
const { formData, curFormItem } = storeToRefs(store)
const { onClickFormItem } = store
const emit = defineEmits(['update:list'])
const compList = computed<FormComp[]>({
  get() {
    return props.list
  },
  set(value:any) {
    emit('update:list', value)
  },
})
const onClickRemove = (element:FormComp) => {
  const idx = compList.value.findIndex((formItem) => formItem.compId == element.compId)
  compList.value.splice(idx, 1)
}
const handleDeepData = (element:FormComp) => {
  if (element.type == 'container') {
    if (element.comp == 'grid') {
      element.prop.cols!.forEach((col:{list:any[]}) => {
        col.list = col.list.map((comp:FormComp) => handleDeepData(comp))
      })
      return element
    } if (element.comp == 'card') {
      element.prop.card?.list!.map((comp:FormComp) => handleDeepData(comp))
      return element
    } if (element.comp == 'collapse') {
      element.prop.collapse?.list!.map((comp:FormComp) => handleDeepData(comp))
      return element
    }
    return element
  } 
  const cloneComp = cloneDeep(element)
  cloneComp.compId = uuid()
  cloneComp.prop.field = `field${(Math.random() * 10000).toFixed(0)}`
  return cloneComp
}
const onClickCopy = (element:FormComp) => {
  const cloneComp = handleDeepData(cloneDeep(element))
  compList.value.push(cloneComp)
}
const dropComp = (ev:DragEvent) => {
  if (ev && ev.dataTransfer) {
    const compJson = ev.dataTransfer.getData('comp') 
    let comp = JSON.parse(compJson) as FormComp
    compList.value.push(comp)
  }
}

</script>
<style scoped lang='scss'>
.drop-container{
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: var(--ev-bg-color);
  .drop-container-item{
    position: relative;
    border: 1px dashed var(--ev-active-most-tint-color);
    padding: 0 1px;
    .drop-container-item-opt{
      display: flex;
      position: absolute;
      top: 1px;
      right: 1px;
      border-radius: 2px;
      .opt{
        cursor: pointer;
        color: var(--ev-bg-color);
        background: var(--ev-active-tint-color);
        margin-right: 2px;
        height: 16px;
        line-height: 16px;
        width: 16px;
      }
    }
  }
  .drop-container-item-active {
    border: 1px solid var(--ev-active-color);
  }
  :deep(.el-form-item){
    margin:5px 0;
  }
}

</style>