import request from '../utils/request'

export const getSysConfig = () => request<sysConfig>({
  url: '/config/findSys',
  method: 'post',
})