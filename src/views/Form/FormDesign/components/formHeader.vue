<template>
  <div class="form_name">
    <span>
      表单名称
    </span>
    <el-input v-model="saveForm.name">
    </el-input>
  </div>
  <div class="form_opt">
    <el-button @click="onOpenJSon">
      写入JSON
    </el-button>

    <el-button @click="onClickView">
      预览
    </el-button>
  
    <el-button @click="onExportJson">
      导出JSON
    </el-button>
    <el-button @click="onExportVue">
      导出VUE文件
    </el-button>
  </div>
  <el-dialog
    v-model="dialogVisible"
    title="预览"
  >
    <ev-form :form-config="saveForm">
    </ev-form>
  </el-dialog>
  <el-dialog
    v-model="dialogJson"
    title="JSON配置"
  >
    <ev-code v-model:code="jsonForm">
    </ev-code>
    <template #footer> 
      <el-button @click="onClickSubmitJson">
        确认
      </el-button>
    </template>
  </el-dialog>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'
import { createFormSfc, downloadFile } from '@/utils/func'

const store = useFormDesignStore()
const { saveForm } = storeToRefs(store)
const { setForm } = store
const dialogVisible = ref(false)
const onClickView = () => {
  dialogVisible.value = true
}
const onExportJson = () => {
  downloadFile(JSON.stringify(saveForm.value, null, 4), saveForm.value.name)
}
const onExportVue = () => {
  downloadFile(createFormSfc(saveForm.value), saveForm.value.name, 'vue')
}
const dialogJson = ref(false)
const jsonForm = ref('')
const onOpenJSon = () => {
  dialogJson.value = true
}
const onClickSubmitJson = () => {
  const form = JSON.parse(jsonForm.value)
  setForm(form)
  dialogJson.value = false
}
</script>
<style scoped lang='scss'>
.form_name{
  display: flex;
  align-items: center;
  width: 250px;
  span{
    width:100px
  }
}
</style>