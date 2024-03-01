import request from '@/utils/request'

export interface LoginData {
    username:string,
    password:string,
    code:string|number
}
export interface LoginToken {
    token:string
}

export default {
  login: (data:LoginData) => request<LoginToken>({
    url: 'sys/user/login',
    method: 'post',
    data,
  }),
  getCaptcha: () => request<string>({
    url: 'sys/user/captcha',
    method: 'get',
  }),
  record: () => request<void>({
    url: '/sys/access/record',
    method: 'get',
  }),
}