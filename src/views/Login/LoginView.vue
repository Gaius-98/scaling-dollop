<template>
  <div class="login">
    <el-card class="login_card">
      <div class="login_card_sys">
        <img
          :src="sysConfig.sysLogo"
          alt=""
          class="login_card_sys_logo"
        >
        <div class="login_card_sys_name">
          {{ sysConfig.sysName }}
        </div>
      </div>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="formRules"
        label-width="60px"
      >
        <div class="login_card_container">
          <Transition name="slide-fade">
            <div
              v-if="loginType == 'password'"
              class="login_card_container_form"
            >
              <el-form-item
                label="账号"
                prop="username"
              >
                <el-input v-model="loginForm.username">
                </el-input>
              </el-form-item>
              <el-form-item
                label="密码"
                prop="password"
              >
                <el-input
                  v-model="loginForm.password"
                  type="password"
                >
                </el-input>
              </el-form-item>
              <el-form-item
                label="验证码"
                prop="captcha"
              >
                <el-input v-model="loginForm.captcha">
                  <template #append>
                    <div
                      class="login_card_captcha"
                      @click="getSvgCaptcha"
                      v-html="svg"
                    >
                    </div>
                  </template>
                </el-input>
              </el-form-item>
            </div>
          </Transition>
          <Transition name="slide-fade-reverse">
            <div
              v-if="loginType == 'email'"
              class="login_card_container_form"
            >
              <el-form-item
                label="邮箱"
                prop="email"
              >
                <el-input v-model="loginForm.email">
                </el-input>
              </el-form-item>
              <el-form-item
                label="验证码"
                prop="emailCode"
              >
                <el-input v-model="loginForm.emailCode">
                  <template #append>
                    <el-button
                      :disabled="isSent"
                      @click="sendEmail"
                    >
                      发送验证码 <span v-show="isSent">{{ timeSpan }}s</span>
                    </el-button>
                  </template>
                </el-input>
              </el-form-item>
            </div>
          </Transition>
        </div>
        <div class="login_card_opt">
          <el-link
            class="login_card_opt_toggle"
            @click="onChangeLoginType()"
          >
            {{ loginType == 'email' ? '密码登录' :'邮箱登录' }}
          </el-link>
          <el-button @click="onLogin">
            登录
          </el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script lang='ts' setup>
import { setCookie } from '@/utils/cookie'
import { FormInstance, FormRules } from 'element-plus'
import { reactive, ref, onBeforeUnmount } from 'vue'
import * as loginApi from './service/api'
import md5 from 'md5'
import { useSysStore } from '@/store/sysConfig'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const sysStore = useSysStore()
const { sysConfig } = storeToRefs(sysStore)

const loginType = ref<loginType>('password')
const onChangeLoginType = () => {
  if (loginType.value == 'email') {
    loginType.value = 'password'
  } else {
    loginType.value = 'email'
  }
}

const loginForm = reactive<loginParams>({
  username: '',
  password: '',
  captcha: '',
  email: '',
  emailCode: '',
})
const validateEmail = (rule:any, value:any, callback:any) => {
  if (value) {
    if (!/^\w{3,}@\w+(\.\w+)+$/.test(value)) {
      callback(new Error('请输入正确的邮箱格式'))
    }
  }
}
const formRules = reactive<FormRules>({
  email: [
    {
      trigger: 'blur',
      validator: validateEmail,
    },
  ],
})
const isSent = ref(false)
const timeSpan = ref(60)
const timer = ref(0)

const sendEmail = () => {
  if (!loginFormRef.value) return 
  loginFormRef.value.validate((valid) => {
    if (valid && loginForm.email) {
      loginApi.sendEmail({ email: loginForm.email })
      .then(() => {
        isSent.value = true 
        startTime()
      })
    }
  })
}
const startTime = () => {
  timer.value = window.setInterval(() => {
    timeSpan.value-- 
    if (timer.value <= 0) {
      clearInterval(timer.value)
      timeSpan.value = 60
    }
  }, 1000)
}
onBeforeUnmount(() => {
  if (timer.value) {
    clearInterval(timer.value)
  }
})

const loginFormRef = ref<FormInstance>()
const onLogin = () => {
  if (!loginFormRef.value) return 
  loginFormRef.value.validate((valid) => {
    if (valid) {
      if (loginType.value == 'password') {
        const params = { ...loginForm }
        params.password = md5(loginForm.password)
        loginApi.loginByPwd(params)
        .then(res => {
          const { data } = res
          console.log(data)
          setCookie('ev-token', data.token)
          router.push({
            name: 'home',
          })
        })
      } else {
        loginApi.loginByEmail(loginForm)
        .then(res => {
          const { data } = res
          setCookie('ev-token', data.token)
          router.push({
            name: 'home',
          })
        })
      }
    }
  })
}

const svg = ref<string>('')
const getSvgCaptcha = () => {
  loginApi.getCaptcha()
  .then(res => {
    const { data } = res
    svg.value = data
  })
}
getSvgCaptcha()
</script>
<style scoped lang='scss'>
.login{
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
    .login_card{
      width: 400px;
      height: 300px;
      align-self: center;
      .login_card_sys{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: 10px 20px ;
      }
      .login_card_sys_logo{
        width: 40px;
        height: 40px;
      }
      .login_card_sys_name{
        font-size: 25px;
        background-clip: text;
        -webkit-background-clip: text;
        color:transparent;
        background-image:linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                         linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                         linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
        animation: change-color 2s   infinite;
      }
      .login_card_captcha{
        height: 30px;
        cursor: pointer;
      }
      .login_card_container{
          display: flex;
          width: 100%;
        .login_card_container_form{
          width: 100%;
          height: 150px;
        }
      }
      
      .login_card_opt{
        display: flex;
        justify-content: space-between;
        .login_card_opt_toggle{
          
        }
      }
     
    }
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-reverse-enter-active,
.slide-fade-reverse-leave-active,
.slide-fade-leave-active,
.slide-fade-enter-active{
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}

.slide-fade-reverse-enter-from,
.slide-fade-reverse-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
/** 
动画 
*/
@keyframes change-color {
  0%{
    background-image:linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                     linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                     linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
  }
  25%{
    background-image:linear-gradient(127deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                     linear-gradient(37deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                     linear-gradient(246deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
  }
  50%{
    background-image:linear-gradient(37deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                     linear-gradient(307deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                     linear-gradient(156deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
  }
  75%{
    background-image:linear-gradient(127deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                     linear-gradient(37deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                     linear-gradient(246deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
  }
  100%{
    background-image:linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                     linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                     linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
  }
}
</style>