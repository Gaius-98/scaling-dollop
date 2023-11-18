<template>
  <el-select
    v-model="modelValue"
    @change="onChangeValue"
  >
    <el-option
      v-for="item in list"
      :key="item[replaceFields.key]"
      :label="item[replaceFields.label]"
      :value="item[replaceFields.value]"
    >
    </el-option>
  </el-select>
</template>

<script lang='ts' setup name="EvSelect">
import { reactive, toRefs, ref, computed } from 'vue'
import useParamsPool from '@/hooks/useParamsPool'

interface Props {
    value:string,
    list:COMMON.obj[],
    replaceFields:{
        value:string,
        label:string,
        key:string
    },
    paramsField:{
        paramsValue:string
    }
}
const props = withDefaults(defineProps<Props>(), {
  value: '',
  list: () => ([]),
  replaceFields: () => ({
    value: 'value',
    label: 'label',
    key: 'value',
  }),
  paramsField: () => ({
    paramsValue: 'paramsValue',
  }),
})
const { value: defaultValue, list, replaceFields, paramsField } = toRefs(props)
const value = ref('')
value.value = defaultValue.value
const modelValue = computed({
  get() {
    return value.value
  },
  set(val:string) {
    value.value = val
  },
})
const { setParams } = useParamsPool()
const onChangeValue = (val:string) => {
  setParams({
    [paramsField.value.paramsValue]: val,
  })
}
</script>
<style scoped lang='scss'>
</style>