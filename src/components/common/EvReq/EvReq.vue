<template>
  <el-form
    :model="reqForm"
    label-width="100px"
  >
    <el-form-item
      prop="url"
      label="请求地址"
    >
      <el-input v-model="reqForm.url">
      </el-input>
    </el-form-item>
    <el-form-item
      prop="method"
      label="请求方式"
    >
      <el-radio-group v-model="reqForm.method"> 
        <el-radio
          label="get"
        >
          GET
        </el-radio>
        <el-radio
          label="post"
        >
          POST
        </el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="headers"
    >
      <req-table
        v-model:data="reqForm.headers"
        @update:data="(val)=>{reqForm.headers = val}"
      />
    </el-form-item>
    <el-form-item
      v-if="reqForm.method == 'get'"
      label="params参数"
    >
      <req-table
        v-model:data="reqForm.params"
        @update:data="(val)=>{reqForm.params = val}"
      />
    </el-form-item>
    <el-form-item
      v-else
      label="body参数"
    >
      <req-table
        v-model:data="reqForm.data"
        @update:data="(val)=>{reqForm.data = val}"
      />
    </el-form-item>
    <el-form-item>
      <el-button @click="onRefresh">
        刷新数据
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup name="EvReq">
import { toRefs, PropType } from 'vue'
import axios from 'axios'
import ReqTable from './components/ReqTable.vue'

const props = defineProps({
  reqForm: {
    type: Object as PropType<COMMON.ReqForm>,
    required: true,
  },
})
const { reqForm } = toRefs(props)
const emits = defineEmits(['getReqData'])

const onRefresh = () => {
  axios({
    ...reqForm.value,
  })
  .then(res => {
    emits('getReqData', res)
  })
  .catch(err => {
    emits('getReqData', err)
  })
}
defineExpose({
  onRefresh,
})
</script>
<style scoped lang='scss'>
</style>