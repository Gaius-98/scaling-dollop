<template>
  <div class="form-name">
    <span>
      表单名称
    </span>
    <el-input v-model="saveForm.name">
    </el-input>
  </div>
  <div class="form-opt">
    <el-button @click="onSave">
      保存
    </el-button>
    <el-button @click="onOpenJSon">
      写入JSON
    </el-button>
    <el-button @click="onClickView">
      预览
    </el-button>
    <el-button @click="onExportJson">
      导出JSON
    </el-button>
    <el-button @click="onExportVue(3)">
      导出VUE文件(vue3)
    </el-button>
    <el-button @click="onExportVue(2)">
      导出VUE文件(vue2)
    </el-button>
  </div>
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
import { reactive, toRefs, ref, createApp } from 'vue'
import { storeToRefs } from 'pinia'
import { useFormDesignStore } from '@/store/formDesign'
import { createFormSfc, downloadFile, createFormSfcV2 } from '@/utils/func'
import { useGuDialog } from 'gaius-utils'
import EvForm from '@/components/common/EvForm/EvForm.vue'
import api from '@/views/Form/service/api'
import { ElMessage } from 'element-plus'
import html2canvas from 'html2canvas'
import { useRouter } from 'vue-router'

const store = useFormDesignStore()
const { saveForm } = storeToRefs(store)
const router = useRouter()
const onExportJson = () => {
  downloadFile(JSON.stringify(saveForm.value, null, 4), saveForm.value.name)
}

const viewDialog = useGuDialog({
  title: '预览',
  content: EvForm,
  componentProps: {
    formConfig: saveForm.value,
  },
})
const onClickView = () => {
  viewDialog.open(viewDialog.destroyed)
}
const onExportVue = (version:number) => {
  if (version == 2) {
    downloadFile(createFormSfcV2(saveForm.value), saveForm.value.name, 'vue')
  } else {
    downloadFile(createFormSfc(saveForm.value), saveForm.value.name, 'vue')
  }
}

const dialogJson = ref(false)
const onOpenJSon = () => {
  dialogJson.value = true
}

const jsonForm = ref('')
const { setForm } = store
const onClickSubmitJson = () => {
  const form = JSON.parse(jsonForm.value) as formConfig
  setForm(form)
  dialogJson.value = false
}
const onAddPreviewForm = () => {
  const vNode = document.createElement('div')
  vNode.className = 'preview-form'
  vNode.style.width = '720px'
  vNode.style.height = '500px'
  vNode.style.overflowY = 'auto'
  let formComp = createApp(EvForm, {
    formConfig: saveForm.value,
  })
  formComp.mount(vNode).$el
  document.body.appendChild(vNode)
}
const onSave = async () => {
  onAddPreviewForm()
  let img = ''
  if (document.querySelector('.preview-form')) {
    const canvas = await html2canvas(document.querySelector('.preview-form') as HTMLElement)
    if (canvas) {
      img = canvas.toDataURL('image/png')
      document.body.removeChild(document.querySelector('.preview-form') as Node)
    }
  }

  let saveOrUpdate
  if (saveForm.value.id) {
    saveOrUpdate = api.update
  } else {
    saveOrUpdate = api.save
  }
  const { code, msg } = await saveOrUpdate({
    ...saveForm.value,
    img,
  })
  if (code == 0) {
    ElMessage.success(msg)
  }
  router.back()
}
</script>
<style scoped lang='scss'>
.form-name{
  display: flex;
  align-items: center;
  width: 250px;
  span{
    width:100px
  }
}
</style>