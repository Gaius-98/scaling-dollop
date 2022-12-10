<template>
  <div class="login">
    <el-card class="login_card">
      <div class="login_card_logo">
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
          <el-button @click="onLogin">
            登录
          </el-button>
          <el-link
            class="login_card_opt_toggle"
            @click="onChangeLoginType()"
          >
            {{ loginType == 'email' ? '密码登录' :'邮箱登录' }}
          </el-link>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script lang='ts' setup>
import { setCookie } from '@/utils/cookie'
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import { reactive, toRefs, ref, onBeforeUnmount } from 'vue'
import * as loginApi from './service/api'
import md5 from 'md5'

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
      .then(res => {
        const { code, data, msg } = res
        if (code == 0) {
          isSent.value = true 
          startTime()
        } else {
          ElMessage.error(msg)
        }
      })
    } else {
      ElMessage.error('请输入正确的邮箱')
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
        loginApi.loginByPwd(loginForm)
        .then(res => {
          const { code, data, msg } = res
          if (code == 0) {
            setCookie('ev-token', data.token)
          } else {
            ElMessage.error(msg)
          }
        })
      } else {
        loginApi.loginByEmail(loginForm)
        .then(res => {
          const { code, data, msg } = res
          if (code == 0) {
            setCookie('ev-token', data.token)
          } else {
            ElMessage.error(msg)
          }
        })
      }
    }
  })
}

const svg = ref<string>('')
const getSvgCaptcha = () => {
  loginApi.getCaptcha()
  .then(res => {
    const { code, data, msg } = res
    if (code == 0) {
      svg.value = data
    }
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
      .login_card_logo{
        width: 40px;
        height: 40px;
        margin: 15px auto;
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
</style>