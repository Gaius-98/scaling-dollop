declare interface chartId{
  chartId:string
}
declare interface saveChart {
  id?:number,
  chartId:string,
  chartName:string,
  chartType:string,
  option:COMMON.obj,
  img:string,
  time?:string|Date,
  creator?:string,
  reqOption:COMMON.obj,
  handleDatajs:string,
  variable:COMMON.obj
}
