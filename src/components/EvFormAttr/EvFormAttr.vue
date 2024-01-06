<template>
  <el-form
    :model="curFormItem"
    label-width="120px"
    label-position="right"
    size="small"
  >
    <common-attr />
    <input-attr v-if="curFormItem.comp == 'input'" />
    <textarea-attr v-if="curFormItem.comp == 'textarea'" />
    <select-attr v-if="curFormItem.comp == 'select'" />
    <check-box-attr v-if="curFormItem.comp == 'checkbox'" />
    <date-attr v-if="curFormItem.comp == 'date'" />
    <time-attr v-if="curFormItem.comp == 'time'" />
    <input-number-attr v-if="curFormItem.comp == 'number'" />
    <switch-attr v-if="curFormItem.comp == 'switch'" />
    <button-attr v-if="curFormItem.comp == 'button'" />
    <grid-attr v-if="curFormItem.comp == 'grid'" />
    <card-attr v-if="curFormItem.comp == 'card'" />
    <collapse-attr v-if="curFormItem.comp == 'collapse'"></collapse-attr>
  </el-form>
</template>

<script lang='ts' setup name="EvFormAttr">
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
import CardAttr from './components/CardAttr.vue'
import ButtonAttr from './components/ButtonAttr.vue'
import CollapseAttr from './components/CollapseAttr.vue'

const store = useFormDesignStore()
const { curFormItem } = storeToRefs(store)

</script>
<style scoped lang='scss'>
</style>