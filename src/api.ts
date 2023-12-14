import request from '@/utils/request'

export default {
  record: () => request<void>({
    url: '/sys/access/record',
    method: 'get',
  }),
}