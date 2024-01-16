/**
 * 公共定义
 */
declare namespace COMMON{
  /**
   * 任意对象
   */
  declare interface obj{
    [key:string]:any
  }
  /**
   * 通用参数
   */
  declare interface params {
    pageNumber:number,
    pageSize:number,
    keyword:string
  }
  /**
   * 替换字段
   */
  declare interface replaceFields{
    value:string,
    children:string,
    label:string,
    key:string,
    icon?:string
  }
  /**
   * 请求
   */
  declare interface reqForm{
    url:string,
    method:'get'|'post',
    params:obj,
    data:obj,
    headers:obj
  }
  /**
   * 请求参数
   */
  declare interface reqTableData{
    key:string,
    paramsKey:string,
    paramsValue:string
  }
  /**
   * 变量设置
   */
  declare interface varTableData{
    key:string,
    varKey:string,
    varValue?:string
  }
  /**
   * 分页响应
   */
  declare interface pageData<T>{
    rows:T,
    count:number
  }
  /**
   * 列表配置
   */
  declare interface columnConfig {
    field:string,
    label:string,
  }
  /**
   * 列表插槽
   */
  declare interface columnScope {
    row:COMMON.obj
  }
  declare interface commonColumnConfig {
    label:string,
    prop:string,
    width?:string|number,
    fixed?:string|boolean,
    sortable?:string|boolean,
    align?:string,
    slot?:string,
    type?:'selection' | 'index' | 'expand' | null,
    children?:commonColumnConfig[]
  }
}