<template>
  <el-form-item
    prop="prop.name"
    label="按钮名称"
  >
    <el-input v-model="curFormItem.prop.name">
    </el-input>
  </el-form-item>
  <el-form-item
    prop="prop.size"
    label="按钮尺寸"
  >
    <el-select v-model="curFormItem.prop.size">
      <el-option
        v-for="item in size"
        :key="item"
        :value="item"
        :label="item"
      >
        {{ item }}
      </el-option>
    </el-select>
  </el-form-item>
  <el-form-item
    prop="prop.type"
    label="按钮类型"
  >
    <el-select
      v-model="curFormItem.prop.type"
      clearable
    >
      <el-option
        v-for="item in types"
        :key="item"
        :value="item"
        :label="item"
      >
        {{ item }}
      </el-option>
    </el-select>
  </el-form-item>
  <el-form-item
    prop="prop.plain"
    label="朴素按钮"
  >
    <el-switch v-model="curFormItem.prop.plain">
    </el-switch>
  </el-form-item>
  <el-form-item
    prop="prop.text"
    label="文字按钮"
  >
    <el-switch v-model="curFormItem.prop.text">
    </el-switch>
  </el-form-item>
  <el-form-item
    prop="prop.link"
    label="链接按钮"
  >
    <el-switch v-model="curFormItem.prop.link">
    </el-switch>
  </el-form-item>
  <el-form-item
    prop="prop.round"
    label="圆角按钮"
  >
    <el-switch v-model="curFormItem.prop.round">
    </el-switch>
  </el-form-item>
  <el-form-item
    prop="prop.circle"
    label="圆形按钮"
  >
    <el-switch v-model="curFormItem.prop.circle">
    </el-switch>
  </el-form-item>
  <el-form-item
    prop="prop.disabled"
    label="禁用"
  >
    <el-switch v-model="curFormItem.prop.disabled">
    </el-switch>
  </el-form-item>
  <el-form-item
    prop="prop.clickEvent"
    label="点击事件"
  >
    <ev-code
      v-model:code="curFormItem.prop.clickEvent"
      style="width: 100%;height: 200px;"
    >
    </ev-code>
  </el-form-item>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'

enum size {
  large='large',
  default='default',
  small='small'
}

enum types {
  primary='primary',
  success='success',
  warning='warning',
  danger='danger',
  info='info',
}
const store = useFormDesignStore()
const { curFormItem } = storeToRefs(store)

</script>
<style scoped lang='scss'>
</style>