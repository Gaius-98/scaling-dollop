import request from '@/utils/request'

interface PageId {
    id:number | string
}
export default {
  getList(data:COMMON.Params) {
    return request<COMMON.PageData<ViewData[]>>({
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
  deletePage(data:PageId) {
    return request({
      url: '/biz/page/delete',
      method: 'post',
      data,
    })
  },
  getDetail(data:PageId) {
    return request<ViewData>({
      url: '/biz/page/detail',
      method: 'post',
      data,
    })
  },
}