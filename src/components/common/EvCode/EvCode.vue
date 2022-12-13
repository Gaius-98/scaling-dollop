<template>
  <codemirror
    :model-value="code"
    placeholder="Code gose here..."
    :style="{ height: '400px' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @change="onChange"
  />
</template>

<script lang='ts' setup name="EvCode">
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { reactive, toRefs, ref } from 'vue'

const props = defineProps({
  code: {
    type: String,
  },
})
const { code } = toRefs(props)
const extensions = [javascript(), oneDark]
const emit = defineEmits(['change', 'update:code'])
const onChange = (val:string) => {
  emit('change', val)
  emit('update:code', val)
}
</script>
<style scoped lang='scss'>
</style>