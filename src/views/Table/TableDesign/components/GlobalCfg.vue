<template>
  <el-form
    ref="formRef"
    size="default"
    label-position="left"
    label-width="120"
    :model="formData"
    :rules="rules"
  >
    <el-collapse>
      <el-collapse-item 
        title="全局配置"
        name="全局配置"
      >
        <el-collapse>
          <el-collapse-item 
            title="筛选面板配置"
            name="筛选面板配置"
          >
            <el-form-item
              prop="filter.show"
              label="开启筛选面板"
            >
              <el-switch
                v-model="formData.filter.show"
                :disabled="false"
                active-text=""
                inactive-text=""
              >
              </el-switch>
            </el-form-item>
    
            <el-form-item
              prop="filter.id"
              label="表单"
            >
              <el-select v-model="formData.filter.id">
                <el-option
                  v-for="item in formDict"
                  :key="item.id"
                  :value="item.id"
                  :label="item.name"
                >
                  {{ item.name }}
                </el-option>
              </el-select>
            </el-form-item>
          </el-collapse-item>
        </el-collapse>
    
        <el-collapse>
          <el-collapse-item 
            title="分页配置"
            name="分页配置"
          >
            <el-form-item
              prop="pagConfig.show"
              label="开启分页"
            >
              <el-switch
                v-model="formData.pagConfig.show"
                :disabled="false"
                active-text=""
                inactive-text=""
              >
              </el-switch>
            </el-form-item>
    
            <el-form-item
              prop="pagConfig.pageSize"
              label="默认展示行数"
            >
              <el-input-number
                v-model="formData.pagConfig.pageSize"
                :readonly="false"
                :disabled="false"
                :step="1"
                :min="0"
                :max="100"
                placeholder="输入提示"
                controls-position="right"
              >
              </el-input-number>
            </el-form-item>
          </el-collapse-item>
        </el-collapse>
      </el-collapse-item>
    </el-collapse>
  
    <el-collapse>
      <el-collapse-item 
        title="交互配置"
        name="交互配置"
      >
        <el-collapse>
          <el-collapse-item 
            title="新增配置"
            name="新增配置"
          >
            <el-form-item
              prop="add.show"
              label="开启新增功能"
            >
              <el-switch
                v-model="formData.add.show"
                :disabled="false"
                active-text=""
                inactive-text=""
              >
              </el-switch>
            </el-form-item>
    
            <el-form-item
              prop="add.id"
              label="表单"
            >
              <el-select v-model="formData.add.id">
                <el-option
                  v-for="item in formDict"
                  :key="item.id"
                  :value="item.id"
                  :label="item.name"
                >
                  {{ item.name }}
                </el-option>
              </el-select>
            </el-form-item>
            <el-button @click="onOpenReqSettingModal(formData.add.reqSetting,'add')">
              保存接口配置
            </el-button>
          </el-collapse-item>
        </el-collapse>
    
        <el-collapse>
          <el-collapse-item 
            title="编辑配置"
            name="编辑配置"
          >
            <el-form-item
              prop="edit.show"
              label="开启编辑功能"
            >
              <el-switch
                v-model="formData.edit.show"
                :disabled="false"
                active-text=""
                inactive-text=""
              >
              </el-switch>
            </el-form-item>
    
            <el-form-item
              prop="edit.id"
              label="表单"
            >
              <el-select v-model="formData.edit.id">
                <el-option
                  v-for="item in formDict"
                  :key="item.id"
                  :value="item.id"
                  :label="item.name"
                >
                  {{ item.name }}
                </el-option>
              </el-select>
            </el-form-item>
            <el-button @click="onOpenReqSettingModal(formData.edit.reqSetting,'edit')">
              编辑接口配置
            </el-button>
          </el-collapse-item>
        </el-collapse>
    
        <el-collapse>
          <el-collapse-item 
            title="查看配置"
            name="查看配置"
          >
            <el-form-item
              prop="view.show"
              label="开启查看功能"
            >
              <el-switch
                v-model="formData.view.show"
                :disabled="false"
                active-text=""
                inactive-text=""
              >
              </el-switch>
            </el-form-item>
    
            <el-form-item
              prop="view.id"
              label="表单"
            >
              <el-select v-model="formData.view.id">
                <el-option
                  v-for="item in formDict"
                  :key="item.id"
                  :value="item.id"
                  :label="item.name"
                >
                  {{ item.name }}
                </el-option>
              </el-select>
            </el-form-item>
          </el-collapse-item>
        </el-collapse>
    
        <el-collapse>
          <el-collapse-item 
            title="删除配置"
            name="删除配置"
          >
            <el-form-item
              prop="delete"
              label="开启删除功能"
            >
              <el-switch
                v-model="formData.delete.show"
                :disabled="false"
                active-text=""
                inactive-text=""
              >
              </el-switch>
            </el-form-item>
            <el-button @click="onOpenReqSettingModal(formData.delete.reqSetting,'delete')">
              删除接口配置
            </el-button>
          </el-collapse-item>
        </el-collapse>
      </el-collapse-item>
    </el-collapse>
  </el-form>
</template>
<script lang='ts' setup>
import { reactive, toRefs, ref, PropType } from 'vue'
import type { FormInstance } from 'element-plus'
import formApi from '@/views/Form/service/api'
import EvSimpleDataSource from '@/components/common/EvSimpleDataSource/EvSimpleDataSource.vue'
import { useGuDialog } from 'gaius-utils'

interface Props {
  cfg:COMMON.Obj
}
const props = withDefaults(defineProps<Props>(), {
  cfg: () => ({
    label: '',
    prop: '',
  }),
})

const formRef = ref<FormInstance>()
const { cfg: formData } = toRefs(props)
  
const rules = reactive<COMMON.Obj>({})
const getFormData = () => formData
  
const resetForm = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
}
const formDict = reactive<{id:number, name:string}[]>([])
const getFormDict = () => {
  formApi.getFormListInfo().then(res => {
    const { code, data, msg } = res
    if (code == 0) {
      Object.assign(formDict, data)
    }
  })
}
getFormDict()
const onOpenReqSettingModal = (data:ReqSetting, type:'add'|'edit'|'delete') => {
  console.log(data)
  const dialog = useGuDialog({
    title: '请求配置',
    content: EvSimpleDataSource,
    componentProps: {
      data,
    },
  })
  dialog.open(({ type: optType, data: modalData }:{type:string, data:any}) => {
    if (optType == 'ok') {
      formData.value[type].reqSetting = { ...modalData.data }
    }
    dialog.destroyed()
  })
}
defineExpose({ getFormData, resetForm })
</script>
  <style scoped lang='scss'>
  </style>
