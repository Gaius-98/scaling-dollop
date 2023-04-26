<template>
  <template
    v-for="element in list"
    :key="element.compId"
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
        @click="clickEvents[element.prop.field](formData)"
      >
        {{ element.prop.name }}
      </el-button>
    </el-form-item>
    <div v-if="element.type == 'container'">
      <form-grid
        v-if="element.comp == 'grid'"
        v-bind="element.prop"
        :data="formData"
      >
      </form-grid>
      <form-card
        v-if="element.comp == 'card'"
        v-bind="element.prop"
        :data="formData"
      >
      </form-card>
      <form-collapse
        v-if="element.comp == 'collapse'"
        v-bind="element.prop"
        :data="formData"
      >
      </form-collapse>
    </div>
  </template>
</template>

<script lang='ts' setup name="FormComp">
import { reactive, toRefs, ref, PropType, computed } from 'vue'

const props = defineProps({
  list: {
    type: Array as PropType<COMMON.obj[]>,
    required: true,
  },
  data: {
    type: Object as PropType<COMMON.obj>,
    required: true,
  },
})
const { list } = toRefs(props)
const emit = defineEmits(['update:data'])
const formData = computed({
  get() {
    return props.data
  },
  set(value:any) {
    emit('update:data', value)
  },
})
const clickEvents = reactive<COMMON.obj>({})
list.value.forEach(item => {
  if (item.comp == 'button' && item.prop.clickEvent) {
    clickEvents[item.prop.field] = new Function('formData', item.prop.clickEvent)
  }
})
</script>
<style scoped lang='scss'>
</style>