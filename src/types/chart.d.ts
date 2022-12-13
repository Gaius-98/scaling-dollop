declare interface chartId{
  chartId:string
}
declare interface saveChart {
  id?:number,
  chartId:string,
  chartName:string,
  chartType:string,
  option:string,
  img:string,
  time?:string|Date,
  creator?:string
}
