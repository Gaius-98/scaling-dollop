declare interface columnConfig {
  props:{
    field:string,
    label:string,
    width:string,
    minWidth:string,
    fixed:'left'|'right'|''|null,
    sortable:boolean,
    showOverflowTooltip:boolean,
    align:'left'|'center'|'right'
  },
  key:string|number
}