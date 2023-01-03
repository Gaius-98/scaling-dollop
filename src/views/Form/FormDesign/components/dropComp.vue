<template>
  <draggable
    v-model="compList"
    item-key="compId"
    group="comp"
    class="drop_container"
  >
    <template
      #item="{element}"
    >
      <div
        class="drop_container_item"
        :class="curFormItem.compId == element.compId ? 'drop_container_item-active' :''"
        @click="onClickFormItem(element)"
      >
        <el-form-item
          v-if="element.type == 'component'"
          :prop="element.field"
          :label="element.form_config.label"
        >
          <el-input
            v-if="element.comp == 'input'"
            :key="element.compId"
            v-model="formData[element.field]"
            v-bind="element.prop"
          >
          </el-input>
          <el-select
            v-if="element.comp == 'select'"
            v-bind="element.prop"
            :key="element.compId"
            v-model="formData[element.field]"
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
            v-model="formData[element.field]"
          >
          </el-color-picker>
          <el-checkbox-group
            v-if="element.comp == 'checkbox'"
            v-bind="element.prop"
            :key="element.compId"
            v-model="formData[element.field]"
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
            v-model="formData[element.field]"
          >
          </el-date-picker>
          <el-input-number
            v-if="element.comp == 'number'"
            v-bind="element.prop"
            :key="element.compId"
            v-model="formData[element.field]"
          >
          </el-input-number>
        </el-form-item>
        <div v-if="element.type == 'container'">
          <drop-grid
            v-if="element.comp == 'grid'"
            v-bind="element.prop"
          >
          </drop-grid>
        </div>
        <div
          class="drop_container_item_opt iconfont icon-a-shanchulajitong"
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

const props = defineProps({
  list: {
    type: Array as PropType<COMMON.obj[]>,
    required: true,
  },
})
const store = useFormDesignStore()
const { formData, curFormItem } = storeToRefs(store)
const { onClickFormItem, onClickRemove } = store
const emit = defineEmits(['update:list'])
const compList = computed({
  get() {
    return props.list
  },
  set(value:any) {
    emit('update:list', value)
  },
})

</script>
<style scoped lang='scss'>
.drop_container{
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: #f3f3f3;
  .drop_container_item{
    position: relative;
    border: 1px solid var(--ev-active-shallow-color);
    .drop_container_item_opt{
      display: none;
      position: absolute;
      top: 1px;
      right: 1px;
      font-size: 18px;
      color: var(--ev-text-color);
      background: var(--ev-active-color);
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .drop_container_item-active {
    border: 1px solid var(--ev-active-color);
    .drop_container_item_opt{
      display: block;
    }
  }
  :deep(.el-form-item){
    margin-top: 18px;
  }
}

</style>