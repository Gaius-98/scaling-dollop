import request from '@/utils/request'

export default {
  record: () => request<void>({
    url: 'sys/user/login',
    method: 'get',
  }),
}