<template>
  <el-select-v2
    :model-value="value"
    v-bind="$attrs"
    :options="iconOptions"
    value-key="font_class"
    @change="onChangeValue"
  >
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
const { value } = toRefs(props)
const emits = defineEmits(['change'])
const onChangeValue = (val:string) => {
  emits('change', val)
}
</script>
<style scoped lang='scss'>
</style>