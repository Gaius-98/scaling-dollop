/**
 * 系统配置信息
 */
declare interface SysConfig extends COMMON.Obj {
  sysName:string,
  sysLoginBackground:string,
  sysLogo:string
}

/**
 * 系统菜单列表
 */
declare interface SysMenu {
  id:number,
  appName:string,
  appId:string,
  appType:'app'|'category',
  orderNum:number,
  pid:string,
  description:string,
  children?:SysMenu[],
  icon:string,
}

/**
 * 系统请求外部数据配置
 */
declare interface ProxyDataParams {
  type: DataSetType,
  data:any,
  interfaceUrl?:string,
  params?:string,
  handleFunc?:string,
  reqType:ReqType
}