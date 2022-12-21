import request from '@/utils/request'

interface chartData {
  data:saveChart[]
}
const api = {
  /**
   * 获取配置
   */
  getConfig: (data:chartId) => request<saveChart>({
    url: '/config/find',
    method: 'post',
    data,
  }),
  /**
     * 保存
     */
  save: (data:saveChart) => request({
    url: '/chart/save',
    method: 'post',
    data,
  }),
  /**
     * 获取chart列表
     */
  getChartList: (data:COMMON.params) => request<chartData>({
    url: '/chart/list',
    method: 'post',
    data,
  }),
  /**
     * 获取chart详情
     */
  getChart: (data:chartId) => request<saveChart>({
    url: '/chart/find',
    method: 'post',
    data,
  }), 
  /**
     * 更新
     */
  update: (data:saveChart) => request({
    url: '/chart/update',
    method: 'post',
    data,
  }),
}
export default api