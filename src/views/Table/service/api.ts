import request from '@/utils/request'

interface TableId{
    id:string|number
}
export default {
  getList(data:COMMON.params) {
    return request<COMMON.pageData<TableSaveCfg[]>>({
      url: '/biz/table/list',
      method: 'post',
      data,
    })
  },
  save(data:TableSaveCfg) {
    return request({
      url: '/biz/table/save',
      method: 'post',
      data,
    })
  },
  update(data:TableSaveCfg) {
    return request({
      url: '/biz/table/update',
      method: 'post',
      data,
    })
  },
  deleteForm(data:TableId) {
    return request({
      url: '/biz/table/delete',
      method: 'post',
      data,
    })
  },
  getDetail(data:TableId) {
    return request<TableSaveCfg>({
      url: '/biz/table/detail',
      method: 'post',
      data,
    })
  },
}