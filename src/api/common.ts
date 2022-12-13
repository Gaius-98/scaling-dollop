import request from '../utils/request'
/**
 * 获取系统配置信息
 * @returns {sysConfig}
 */
export const getSysConfig = () => request<sysConfig>({
  url: '/config/findSys',
  method: 'post',
})

/**
 * 获取系统菜单列表
 * @returns {sysMenu[]}
 */
export const getMenuList = () => request<sysMenu[]>({
  url: '/menu/list',
  method: 'post',
})

/**
 * 获取字典的方法
 * @params {string} dictType
 */
export const getDict = (dictType:string) => request<sysDict>({
  url: '/dict/getDict',
  method: 'post',
  data: { dictType },
})

/**
 * 获取chart详情
 * @params {chartId} data
 */
export const getChart = (data:chartId) => request<saveChart>({
  url: '/chart/find',
  method: 'post',
  data,
})
