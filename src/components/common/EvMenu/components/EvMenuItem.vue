<template>
  <template 
    v-for="(item,idx) in menuData" 
    :key="idx"
  >
    <el-sub-menu 
      v-if="item[replaceFields.children] && item[replaceFields.children].length"
      :index="item[replaceFields.value]" 
    >
      <template #title>
        <i 
          v-if="replaceFields.icon && item[replaceFields.icon]" 
          class="iconfont" 
          :class="'icon-'+item[replaceFields.icon]"
        ></i>
        <span>{{ item[replaceFields.label] }}</span>
      </template>
      <EvMenuItem 
        :menu-data="item[replaceFields.children]"
        :replace-fields="replaceFields"
        @on-click-item="onClick"
      ></EvMenuItem>
    </el-sub-menu>
    <el-menu-item 
      v-else
      :index="item[replaceFields.value]" 
      @click="onClickItem"
    >
      <i 
        v-if="replaceFields.icon && item[replaceFields.icon]" 
        class="iconfont" 
        :class="'icon-'+item[replaceFields.icon]"
      ></i>
      <span>{{ item[replaceFields.label] }}</span>
    </el-menu-item>
  </template>
</template>

<script lang='ts' setup name="EvMenuItem">
import { reactive, toRefs, ref, PropType } from 'vue'

const props = defineProps({
  menuData: {
    type: Object as PropType<COMMON.Obj>,
    required: true,
  },
  replaceFields: {
    type: Object as PropType<COMMON.ReplaceFields>,
    required: false,
    default: () => ({
      value: 'value',
      children: 'children',
      label: 'label',
      key: 'key',
      icon: 'icon',
    }),
  },
})
const { menuData, replaceFields } = toRefs(props)
const emits = defineEmits(['onClickItem'])
const onClickItem = (item:COMMON.Obj) => {
  emits('onClickItem', item.index)
}
const onClick = (val:any) => {
  emits('onClickItem', val)
}
</script>
<style scoped lang='scss'>

</style>