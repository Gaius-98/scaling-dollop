import request from '@/utils/request'

interface formId {
    id:number
}
interface saveFromConfig extends formConfig {
  img:string
}
export default {
  getList(data:COMMON.params) {
    return request<COMMON.pageData<formConfig[]>>({
      url: '/biz/form/list',
      method: 'post',
      data,
    })
  },
  save(data:saveFromConfig) {
    return request({
      url: '/biz/form/save',
      method: 'post',
      data,
    })
  },
  update(data:saveFromConfig) {
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
  getFormListInfo() {
    return request<{id:number, name:string}[]>({
      url: '/biz/form/listInfo',
      method: 'post',
    })
  },
  downloadForm(data:{config:formConfig}) {
    return request<string>({
      url: '/biz/form/downloadForm',
      method: 'post',
      data,
    })
  },
}