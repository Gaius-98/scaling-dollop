<template>  
  <div class="login">
    <!-- login页后续自己写一个 -->
    <login-bg
      class="bg"
      :loading="loading"
    ></login-bg>
    <div class="login-form">
      <div class="title">
        scaling-dollop
      </div>
      <el-form
        ref="ruleForm"
        :model="form"
        label-width="100px"
        label-position="left"
        :rules="rules"
      >  
        <el-form-item
          label="用户名"
          prop="username"
        >  
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
          ></el-input>  
        </el-form-item>  
        <el-form-item
          label="密码"
          prop="password"
        >  
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>  
        </el-form-item>  
        <el-form-item
          label="验证码"
          prop="code"
        >
          <el-input
            v-model="form.code"
            placeholder="请输入验证码"
          >
            <template #append>
              <div
                class="captcha"
                @click="getCaptchaSvg"
                v-html="captchaSvg"
              >
              </div>
            </template>
          </el-input>
        </el-form-item>
      </el-form>  
      <el-button
        v-loading="loading"
        @click="login"
      >
        登录
      </el-button>  
    </div> 
  </div>
</template>  
    
<script lang="ts" setup> 
import LoginBg from '@/views/Login/components/LoginBg.vue' 
import { reactive, ref, onMounted } from 'vue'  
import type { LoginData } from './service/api'
import api from './service/api'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import md5 from 'md5'
import _ from 'lodash'

const loading = ref(false)
const router = useRouter()
const form = reactive({
  username: 'test',
  password: 'test',
  code: '',
})
const ruleForm = ref()
const captchaSvg = ref('')
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
  ],
})
let reqForm = reactive<LoginData>({
  username: '',
  password: '',
  code: '',
})
const login = () => { 
  (ruleForm.value as FormInstance).validate((valid) => {
    if (valid) {
      reqForm = _.cloneDeep(form)
      reqForm.password = md5(reqForm.password)
      loading.value = true
      api.login(reqForm).then(res => {
        const { code, data } = res
        loading.value = false
        api.record()
        if (code == 0) {
          router.push({
            name: 'home',
          })
        }
      }) 
    }
  })
}  
const getCaptchaSvg = () => {
  api.getCaptcha().then(res => {
    const { code, data, msg } = res
    if (code == 0) {
      captchaSvg.value = data
    }
  })
}
onMounted(() => {
  getCaptchaSvg()
})
</script>
<style lang="scss" scoped>
.login{
    position: relative;
    width: 100%;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../../assets/images/bg.png') no-repeat;
    .bg{
      position: absolute;
      top:0;
      left:0;
    }
    .login-form{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
        height: 260px;
        border-radius: 8px;
        background: rgba($color: #fff, $alpha: .6);
        backdrop-filter:blur(10px);
        padding: 10px;
        .title{
          color: #6A57F5;
          font-size: 25px;
          font-weight: 600;
          width: 100%;
          margin-bottom: 30px;
        }
        .captcha{
            height: 32px;
            svg{
                height: 32px;
            }
        }
        .btn{
          width: 120px;
          padding: 10px 12px;
          text-align: center;
          border-radius: 8px;
          color:#f0f2f5;
          background: #5D4AF4;
          cursor: pointer;
          &:hover{
            color:#fff;
            background: #6A57F5;
          }
        }
    }
}
</style>