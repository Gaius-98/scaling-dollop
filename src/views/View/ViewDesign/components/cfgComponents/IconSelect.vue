<template>
  <el-select-v2
    :model-value="value"
    v-bind="$attrs"
    :options="iconOptions"
    value-key="font_class"
    :props="{
      value:'font_class',
      label:'name'
    }"
    @change="onChangeValue"
  >
    <template #prefix>
      <div
        class="iconfont"
        :class="`icon-${value}`"
      ></div>
    </template>
    <template #default="{ item }">
      <span
        class="iconfont"
        :class="`icon-${item.font_class}`"
      >{{ item.value }}</span>
      <span>{{ item.name }}</span>
    </template>
  </el-select-v2>
</template>

<script lang='ts' setup name="iconSelect">
import { reactive, toRefs, ref } from 'vue'
import iconJson from '@/assets/iconfont/iconfont.json'

interface Props {
    value:string,
}
const props = withDefaults(defineProps<Props>(), {
  value: '',
})
const iconOptions = ref(iconJson.glyphs)
console.log(iconOptions)
const { value } = toRefs(props)
console.log(value, props)
const emits = defineEmits(['change'])
const onChangeValue = (val:string) => {
  console.log(val)
  emits('change', val)
}
</script>
<style scoped lang='scss'>
</style>