<template>  
  <div class="login">
    <div class="login-form">  
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
        <el-form-item>  
          <el-button
            type="primary"
            @click="login"
          >
            登录
          </el-button>  
        </el-form-item>  
      </el-form>  
    </div> 
  </div>
</template>  
    
<script lang="ts" setup>  
import { reactive, ref, onMounted } from 'vue'  
import type { LoginData } from './service/api'
import api from './service/api'
import type { FormInstance, FormRules } from 'element-plus'
import { setCookie } from '@/utils/cookie'
import { useRouter } from 'vue-router'
import md5 from 'md5'
import _ from 'lodash'

const router = useRouter()
const form = reactive({
  username: '',
  password: '',
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
      api.login(reqForm).then(res => {
        const { code, data } = res
        if (code == 0) {
          setCookie('gaius-token', data.token)
          router.push({
            name: 'home',
          })
        }
      }) 
    }
  })

  // 在这里添加登录逻辑，例如发送请求到后端验证用户名和密码  
  console.log('登录成功')  
  // 可以根据需要进行进一步处理，例如重定向到其他页面等  
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
    width: 100%;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-form{
        width: 400px;
        height: 300px;
        .captcha{
            height: 32px;
            svg{
                height: 32px;
            }
        }
    }
}
</style>