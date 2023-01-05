<template>
  <el-form :model="curFormItem">
    <common-attr />
    <input-attr v-if="curFormItem.comp == 'input'" />
    <textarea-attr v-if="curFormItem.comp == 'textarea'" />
    <select-attr v-if="curFormItem.comp == 'select'" />
    <check-box-attr v-if="curFormItem.comp == 'checkbox'" />
    <date-attr v-if="curFormItem.comp == 'date'" />
    <time-attr v-if="curFormItem.comp == 'time'" />
    <input-number-attr v-if="curFormItem.comp == 'number'" />
    <switch-attr v-if="curFormItem.comp == 'switch'" />
    <grid-attr v-if="curFormItem.comp == 'grid'" />
  </el-form>
</template>

<script lang='ts' setup name="EvFormAttr">
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'
import CommonAttr from '@/components/EvFormAttr/components/CommonAttr.vue'
import InputAttr from './components/InputAttr.vue'
import TextareaAttr from './components/TextareaAttr.vue'
import SelectAttr from './components/SelectAttr.vue'
import CheckBoxAttr from './components/CheckBoxAttr.vue'
import DateAttr from './components/DateAttr.vue'
import TimeAttr from './components/TimeAttr.vue'
import InputNumberAttr from './components/InputNumberAttr.vue'
import SwitchAttr from './components/SwitchAttr.vue'
import GridAttr from './components/GridAttr.vue'

const store = useFormDesignStore()
const { curFormItem } = storeToRefs(store)

</script>
<style scoped lang='scss'>
</style>