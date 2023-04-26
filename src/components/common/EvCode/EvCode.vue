<template>
  <codemirror
    :model-value="code"
    placeholder="Code gose here..."
    :style="{ height: '400px' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    v-bind="$attrs"
    @change="onChange"
  />
</template>

<script lang='ts' setup name="EvCode">
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { oneDark } from '@codemirror/theme-one-dark'
import { reactive, toRefs, ref } from 'vue'

const props = defineProps({
  code: {
    type: String,
    require: true,
    default: '',
  },
  type: {
    type: String,
    default: 'javascript',
  },
})
const { code, type } = toRefs(props)
const findType = () => {
  if (type.value == 'javascript') {
    return javascript()
  } if (type.value == 'html') {
    return html()
  }
  return javascript()
}
const extensions = [oneDark, findType()]
const emit = defineEmits(['change', 'update:code'])
const onChange = (val:string) => {
  emit('change', val)
  emit('update:code', val)
}
</script>
<style scoped lang='scss'>
</style>