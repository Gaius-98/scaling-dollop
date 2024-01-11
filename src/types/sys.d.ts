/**
 * 系统配置信息
 */
declare interface sysConfig extends COMMON.obj {
  sysName:string,
  sysLoginBackground:string,
  sysLogo:string
}

/**
 * 系统菜单列表
 */
declare interface sysMenu {
  id:number,
  appName:string,
  appId:string,
  appType:'app'|'category',
  orderNum:number,
  pid:string,
  description:string,
  children?:sysMenu[],
  icon:string,
}

/**
 * 系统字典
 */
declare interface sysDict {
  id:number,
  dictType:string,
  dictTypeChdesc:string,
  value:string|number,
  label:string,
  orderNum:number,
  description:string
}
/**
 * 系统请求外部数据配置
 */
declare interface getDataCfg {
  type: dataSetType,
  data:any,
  interfaceUrl?:string,
  params?:COMMON.obj,
  handleFunc?:string,
  reqType:ReqType
}