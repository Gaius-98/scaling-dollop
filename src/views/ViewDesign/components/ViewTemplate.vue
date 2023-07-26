<template>
  <el-form
    label-width="80px"
    size="small"
  >
    <view-cfg :template="template"></view-cfg>
  </el-form>
</template>

<script lang='ts' setup name="viewTemplate">
import ViewCfg from './ViewCfg.vue'
import { reactive, toRefs, ref, watch } from 'vue'
import { useViewStore } from '@/store/viewDesign'
import { storeToRefs } from 'pinia'
import { getUpperCase } from 'gaius-utils'

const store = useViewStore()
const { curCompData } = storeToRefs(store)
watch(curCompData.value, () => {
  if (curCompData.value && curCompData.value.type) {
    let curTemplate
    for (const key in modules.value) {
      if (key.includes(getUpperCase(curCompData.value.type))) {
        const module = modules.value[key] as Record<string, unknown>
        curTemplate = module.default as viewCompCfg[]
        template.value = [...commonTemplate.value, ...curTemplate]
      }
    }
  }
}, {
  deep: true,
})
const template = ref<viewCompCfg[]>([])

const modules = ref<Record<string, unknown>>()
const commonTemplate = ref<viewCompCfg[]>([])

const getModule = async () => await import.meta.glob('@/assets/view/viewCfgTemplates/*.ts', { eager: true })
getModule().then(res => {
  modules.value = res
  for (const key in modules.value) {
    if (key.includes('Common')) {
      const module = modules.value[key] as Record<string, unknown>
      commonTemplate.value = module.default as viewCompCfg[]
    }
  }
})
</script>
<style scoped lang='scss'>
</style>