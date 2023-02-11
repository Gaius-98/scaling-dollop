<template>
  <el-form-item
    v-if="curFormItem.type == 'component'"
    prop="prop.field"
    label="字段名"
  >
    <el-input v-model="curFormItem.prop.field">
    </el-input>
  </el-form-item>
  <el-form-item
    prop="name"
    label="组件名称"
  >
    <el-input
      v-model="curFormItem.name"
      disabled
    >
    </el-input>
  </el-form-item>
  <el-form-item
    v-if="curFormItem.type == 'component'"
    prop="form_config.label"
    label="标签文本"
  >
    <el-input v-model="curFormItem.form_config.label">
    </el-input>
  </el-form-item>
  <el-form-item
    v-if="curFormItem.type == 'component'"
    prop="prop.readonly"
    label="只读"
  >
    <el-switch v-model="curFormItem.prop.readonly"></el-switch>
  </el-form-item>
  <el-form-item
    v-if="curFormItem.type == 'component'"
    prop="prop.disabled"
    label="禁用"
  >
    <el-switch v-model="curFormItem.prop.disabled"></el-switch>
  </el-form-item>
  <el-form-item
    v-if="curFormItem.type == 'component'"
    prop="form_config.rules.required"
    label="必填"
  >
    <el-switch v-model="curFormItem.form_config.rules.required">
    </el-switch>
  </el-form-item>
  <el-form-item
    v-if="curFormItem.type == 'component'"
    prop="form_config.rules.regular"
    label="校验正则表达式"
  >
    <el-input v-model="curFormItem.form_config.rules.regular">
    </el-input>
  </el-form-item>
  <el-form-item
    v-if="curFormItem.type == 'component'"
    prop="form_config.rules.trigger"
    label="触发方式"
  >
    <el-radio-group v-model="curFormItem.form_config.rules.trigger">
      <el-radio label="change">change</el-radio>
      <el-radio label="blur">blur</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item
    v-if="curFormItem.type == 'component'"
    prop="form_config.rules.message"
    label="提示信息"
  >
    <el-input v-model="curFormItem.form_config.rules.message">
    </el-input>
  </el-form-item>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'

const store = useFormDesignStore()
const { curFormItem } = storeToRefs(store)
</script>
<style scoped lang='scss'>
</style>