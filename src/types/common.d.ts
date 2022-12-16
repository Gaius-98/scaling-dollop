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
}