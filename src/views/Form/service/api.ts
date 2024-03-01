import request from '@/utils/request'

interface FormId {
    id:number
}
interface SaveFromConfig extends FormConfig {
  img:string
}
export default {
  getList(data:COMMON.Params) {
    return request<COMMON.PageData<FormConfig[]>>({
      url: '/biz/form/list',
      method: 'post',
      data,
    })
  },
  save(data:SaveFromConfig) {
    return request({
      url: '/biz/form/save',
      method: 'post',
      data,
    })
  },
  update(data:SaveFromConfig) {
    return request({
      url: '/biz/form/update',
      method: 'post',
      data,
    })
  },
  deleteForm(data:FormId) {
    return request({
      url: '/biz/form/delete',
      method: 'post',
      data,
    })
  },
  getDetail(data:FormId) {
    return request<FormConfig>({
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
  downloadForm(data:{config:FormConfig}) {
    return request<string>({
      url: '/biz/form/downloadForm',
      method: 'post',
      data,
    })
  },
}