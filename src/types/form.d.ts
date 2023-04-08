declare enum comp {
  'number',
  'input',
  'textarea',
  'select',
  'color',
  'checkbox',
  'date',
  'switch',
  'time',
  'grid',
  'card'
}
declare interface formComp {
  comp:string,
  compId:string,
  name:string,
  prop:COMMON.obj,
}