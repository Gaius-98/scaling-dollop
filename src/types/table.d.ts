declare interface columnConfig {
  props:{
    field:string,
    label:string,
    width:string,
    minWidth:string,
    fixed:'left'|'right'|''|null,
    sortable:boolean,
    showOverflowTooltip:boolean,
    align:'left'|'center'|'right',
    slot:{
      enable:boolean,
      content:string
    }
  },
  key:string|number
}

declare interface tableOvConfig{
  height:string|number,
  maxHeight?:string|number,
  stripe:boolean,
  border:boolean,
  size:'large'|'default'|'small',
  fit:boolean,
  showHeader:boolean,
  highlightCurrentRow:boolean,
  opt:{
    show:boolean,
    fixed:'left'|'right'|''|null,
    width:string,
    minWidth?:string,
    label:string,
    slot:{
      enable:boolean,
      content:string
    }
  }
}

declare interface tableConfig{
  column:columnConfig[]|[],
  table:tableOvConfig
}