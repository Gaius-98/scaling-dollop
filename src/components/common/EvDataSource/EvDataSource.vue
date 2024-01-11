<template>
  <el-form
    label-width="100px"
    :model="cloneData"
  >
    <el-form-item label="数据源类型">
      <el-radio
        v-model="cloneData.type"
        label="static"
      >
        静态数据
      </el-radio>
      <el-radio
        v-model="cloneData.type"
        label="dev"
      >
        动态数据
      </el-radio>
    </el-form-item>
    <el-form-item
      v-if="cloneData.type == 'static'"
      label="数据"
    >
      <ev-code
        style="width: 100%;height: 200px;"
        :code="JSON.stringify(cloneData.data,null,4)"
        @change="changeJsonData"
      >
      </ev-code>
    </el-form-item>
    <el-form-item
      v-if="cloneData.type == 'dev'"
      label="请求配置"
    >
      <div class="req-header">
        <el-input
          v-model="cloneData.interfaceUrl"
          placeholder="请输入请求地址"
          style="width: 100%;"
        >
          <template #prepend>
            <el-select
              v-model="cloneData.reqType"
              placeholder="请选择请求方式"
              style="width: 115px"
            >
              <el-option
                label="Get"
                value="get"
              />
              <el-option
                label="Post"
                value="post"
              />
            </el-select>
          </template>
        </el-input>
      </div>
      <div
        v-if="cloneData.params"
        class="req-params"
      >
        <req-table
          v-model:data="cloneData.params"
        />
      </div>
    </el-form-item>
    <el-form-item label="处理函数">
      <span class="code">
        (resData)=>{
      </span>
      <ev-code
        v-model:code="cloneData.handleFunc"
        style="width: 100%;height: 200px;"
      >
      </ev-code>
      <span class="code">
        }
      </span>
    </el-form-item>
    <el-form-item label="预览数据">
      <el-button
        type="primary"
        @click="onClickSendReq"
      >
        <i class="iconfont icon-play-circle"></i>
        执行
      </el-button>
      <ev-code 
        v-model:code="result"
        readonly
        style="width:100%;height:100px;margin-top:10px"
        placeholder="数据处理结果"
      >
      </ev-code>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup name="EvDataSource">
import { reactive, toRefs, ref } from 'vue'
import ReqTable from '@/components/common/EvReq/components/ReqTable.vue'
import { getData } from '@/utils/func'

interface Props {
    data:DataSetting
}
const props = withDefaults(defineProps<Props>(), {
  data: () => ({
    type: 'static',
    data: {},
    reqType: 'get',
  }),   
})
const { data } = toRefs(props)
const cloneData = reactive<DataSetting>({
  ...data.value,
})
const result = ref('')
const changeJsonData = (code:string) => {
  cloneData.data = JSON.parse(code)
}
const onClickSendReq = () => {
  getData(cloneData).then((data) => {
    result.value = typeof data == 'string' ? data : JSON.stringify(data, null, 4)
  })
}
defineExpose({
  data: cloneData,
})
</script>
<style scoped lang='scss'>
.req-header{
    width: 100%;
}
.req-params{
    width: 100%;
    height: 180px;
    overflow-y: auto;
}
.code{
    display: inline-block;
    background: #282c34;
    color: #ccc;
    font-size: 12px;
    font-family: monospace;
    width: 100%;
}
</style>