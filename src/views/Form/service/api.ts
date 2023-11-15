import request from '@/utils/request'

interface formId {
    id:number
}
export default {
  getList(data:COMMON.params) {
    return request<COMMON.pageData<formConfig[]>>({
      url: '/biz/form/list',
      method: 'post',
      data,
    })
  },
  save(data:formConfig) {
    return request({
      url: '/biz/form/save',
      method: 'post',
      data,
    })
  },
  update(data:formConfig) {
    return request({
      url: '/biz/form/update',
      method: 'post',
      data,
    })
  },
  deleteForm(data:formId) {
    return request({
      url: '/biz/form/delete',
      method: 'post',
      data,
    })
  },
  getDetail(data:formId) {
    return request<formConfig>({
      url: '/biz/form/detail',
      method: 'post',
      data,
    })
  },
}