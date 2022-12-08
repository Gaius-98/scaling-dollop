import request from '@/utils/request'

interface sendEmailParmas{
  email:string
}
interface loginToken {
  token:string
}
/* 获取验证码 */
export const getCaptcha = () => request<any>({
  method: 'get',
  url: '/user/getCaptcha',
})
/* 密码登录 */
export const loginByPwd = (data:loginParamsPwd) => request<loginToken>({
  method: 'post',
  url: '/user/login',
  data,
})
/* 邮箱登录 */
export const loginByEmail = (data:loginParamsEml) => request<loginToken>({
  method: 'post',
  url: '/user/emailLogin',
  data,
})
/* 发送邮件 */
export const sendEmail = (data:sendEmailParmas) => request<sendEmailParmas>({
  method: 'post',
  url: '/user/sendEmail',
  data,
})
