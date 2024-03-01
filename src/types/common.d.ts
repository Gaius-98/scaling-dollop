/**
 * 公共定义
 */
declare namespace COMMON{
  /**
   * 任意对象
   */
  declare interface Obj{
    [key:string]:any
  }
  /**
   * 通用参数
   */
  declare interface Params {
    pageNumber:number,
    pageSize:number,
    keyword:string
  }
  /**
   * 替换字段
   */
  declare interface ReplaceFields{
    value:string,
    children:string,
    label:string,
    key:string,
    icon?:string
  }
  /**
   * 请求
   */
  declare interface ReqForm{
    url:string,
    method:'get'|'post',
    params:obj,
    data:obj,
    headers:obj
  }
  /**
   * 请求参数
   */
  declare interface ReqTableData{
    key:string,
    paramsKey:string,
    paramsValue:string
  }
  /**
   * 变量设置
   */
  declare interface VarTableData{
    key:string,
    varKey:string,
    varValue?:string
  }
  /**
   * 分页响应
   */
  declare interface PageData<T>{
    rows:T,
    count:number
  }
  /**
   * 列表配置
   */
  declare interface ColumnConfig {
    field:string,
    label:string,
  }
  /**
   * 列表插槽
   */
  declare interface ColumnScope {
    row:COMMON.Obj
  }
  declare interface CommonColumnConfig {
    label:string,
    prop:string,
    width?:string|number,
    fixed?:string|boolean,
    sortable?:string|boolean,
    align?:string,
    slot?:string,
    type?:'selection' | 'index' | 'expand' | null,
    children?:CommonColumnConfig[]
  }
  declare interface TableCfg {
    columns:CommonColumnConfig[],
    opt:{
      fixed?:string|boolean,
      width?:string|number,
      label?:string,
      show?:boolean
    }
  }
}