<template>
  <el-form
    label-width="100px"
    :model="cloneData"
  >
    <el-form-item
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
    </el-form-item>
    <el-form-item
      label="处理请求参数"
    >
      <div
        class="req-params"
      >
        <span class="code">
          (params)=>{
        </span>
        <ev-code
          v-model:code="cloneData.params"
          style="width: 100%;height: 100px;"
        >
        </ev-code>
        <span class="code">
          }
        </span>
      </div>
    </el-form-item>
    <el-form-item label="处理函数">
      <span class="code">
        (resData,msgServer)=>{
      </span>
      <ev-code
        v-model:code="cloneData.handleFunc"
        style="width: 100%;height: 100px;"
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
        style="width:100%;height:200px;margin-top:10px"
        placeholder="数据处理结果"
      >
      </ev-code>
    </el-form-item>
  </el-form>
</template>
  
<script lang='ts' setup name="evSimpleDataSource">
import { reactive, toRefs, ref } from 'vue'
import { getData } from '@/utils/func'
  
interface Props {
    data:reqSetting
}
const props = withDefaults(defineProps<Props>(), {
  data: () => ({
    reqType: 'post',
  }),   
})
const { data } = toRefs(props)
const cloneData = reactive<reqSetting>({
  ...data.value,
})
console.log(cloneData, data.value)
const result = ref('')
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