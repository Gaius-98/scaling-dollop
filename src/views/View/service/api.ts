import request from '@/utils/request'

interface pageId {
    id:number | string
}
export default {
  getList(data:COMMON.params) {
    return request<COMMON.pageData<ViewData[]>>({
      url: '/biz/page/list',
      method: 'post',
      data,
    })
  },
  save(data:ViewData) {
    return request({
      url: '/biz/page/save',
      method: 'post',
      data,
    })
  },
  update(data:ViewData) {
    return request({
      url: '/biz/page/update',
      method: 'post',
      data,
    })
  },
  deletePage(data:pageId) {
    return request({
      url: '/biz/page/delete',
      method: 'post',
      data,
    })
  },
  getDetail(data:pageId) {
    return request<ViewData>({
      url: '/biz/page/detail',
      method: 'post',
      data,
    })
  },
}