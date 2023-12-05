import request from '@/utils/request'

export interface LoginData {
    username:string,
    password:string,
    code:string|number
}
export interface loginToken {
    token:string
}

export default {
  login: (data:LoginData) => request<loginToken>({
    url: 'sys/user/login',
    method: 'post',
    data,
  }),
  getCaptcha: () => request<string>({
    url: 'sys/user/captcha',
    method: 'get',
  }),
}