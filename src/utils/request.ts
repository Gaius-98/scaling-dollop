import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { getCookie } from './cookie'

export type res<T = any> = {
  code:number,
  data:T,
  msg:string
}
const service = axios.create({
  baseURL: import.meta.env.VITE_REQ_URL,
})

service.interceptors.request.use((config) => {
  const token = getCookie('ev-token')
  if (token) {
    if (config.headers) config.headers.Authorization = `bearer ${ token }`
  }
  return config
}, (error) => error)
service.interceptors.response.use((res:AxiosResponse<any, any>) => {
  const { code, msg } = res.data
  if (code == 0) {
    return res.data
  }
  ElMessage.error(msg)
  return Promise.reject(new Error(msg))
}, (error:AxiosError) => {
  let message:string
  const status = error.response?.status
  switch (status) {
    case 401:
      message = 'token 失效，请重新登录'
      // 这里可以触发退出的 action
      break
    case 403:
      message = '没有权限'
      break
    case 404:
      message = '请求地址错误'
      break
    case 500:
      message = '服务器错误'
      break
    default:
      message = '网络连接故障'
  }
  ElMessage.error(message)
  return Promise.reject(error)
})

const request = <T>(config:AxiosRequestConfig) => new Promise<res<T>>((resolve, reject) => {
  service.request<any, res<T>>(config).then((res) => {
    resolve(res)
  }, err => {
    reject(err)
  })
})

export default request
