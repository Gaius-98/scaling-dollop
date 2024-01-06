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
        :class="curFormItem.compId == element.compId ? 'drop-container-item-active' :''"
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
          class="drop-container-item-opt iconfont icon-a-shanchulajitong"
          @click="onClickRemove(element)"
        >
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

const props = defineProps({
  list: {
    type: Array as PropType<formComp[]>,
    required: true,
    default: () => [],
  },
})
const store = useFormDesignStore()
const { formData, curFormItem } = storeToRefs(store)
const { onClickFormItem } = store
const emit = defineEmits(['update:list'])
const compList = computed<formComp[]>({
  get() {
    return props.list
  },
  set(value:any) {
    emit('update:list', value)
  },
})
const onClickRemove = (element:formComp) => {
  const idx = compList.value.findIndex((formItem) => formItem.compId == element.compId)
  compList.value.splice(idx, 1)
}
const dropComp = (ev:DragEvent) => {
  if (ev && ev.dataTransfer) {
    const compJson = ev.dataTransfer.getData('comp') 
    let comp = JSON.parse(compJson) as formComp
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
      display: none;
      position: absolute;
      top: 1px;
      right: 1px;
      font-size: 18px;
      color: var(--ev-bg-color);
      background: var(--ev-active-tint-color);
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .drop-container-item-active {
    border: 1px solid var(--ev-active-color);
    .drop-container-item-opt{
      display: block;
    }
  }
  :deep(.el-form-item){
    margin:5px 0;
  }
}

</style>