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
import { v4 as uuidv4 } from 'uuid'

const store = useFormDesignStore()
const { saveForm } = storeToRefs(store)
const { setForm } = store
const dialogVisible = ref(false)
const onClickView = () => {
  dialogVisible.value = true
}
const onExportJson = () => {
  const a = document.createElement('a')
  // 构造一个blob对象来处理数据
  const json = JSON.stringify(saveForm.value, null, 4)
  const blob = new Blob([json])
  // 拿到用户上传的文件名
  let fileName = (saveForm.value.name || 'form_' + uuidv4()) + '.json'
  fileName = decodeURI(encodeURI(fileName))
  // URL.createObjectURL()会产生一个url字符串，可以像使用普通 URL 那样使用它，比如用在 img.src 上
  a.href = URL.createObjectURL(blob)
  // a标签里有download属性可以自定义文件名
  a.setAttribute(
    'download',
    fileName,
  )
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
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