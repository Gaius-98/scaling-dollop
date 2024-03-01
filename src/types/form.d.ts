/**
 * 表单组件类别
 */
declare enum Comp {
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
  'card',
  'collapse'
}
/**
 * 表单尺寸
 */
declare enum Size{
  'default',
  'large',
  'small'
}
/**
 * 表单文本位置
 */
declare enum LabelPosition{
  'left',
  'right',
  'top'
}
/**
 * 每个form组件对应的配置
 */ 
declare interface FormComp {
  comp:keyof typeof Comp,
  compId:string,
  name:string,
  prop:{
    placeholder?:string,
    readonly?:boolean,
    disabled?:boolean,
    field?:string,
    clearable?:boolean,
    showPassword?:boolean,
    type?: string,
    rows?: number|string,
    options?:COMMON.Obj[],
    filterable?:boolean,
    valueFormat?: string,
    format?: string,
    step?:string|number,
    min?:string|number,
    max?:string|number,
    controlsPosition?:string,
    activeText?: string,
    inactiveText?: string,
    editable?: boolean,
    isRange?: boolean,
    arrowControl?: boolean,
    round?: boolean,
    link?: boolean,
    bg?: boolean,
    text?: boolean,
    plain?: boolean,
    size?: string,
    clickEvent?: string,
    cols?:{
      list:any[]|FormComp[],
      key:string,
      span:number
    }[],
    gutter?:number,
    card?:{
      list?:any[]|FormComp[],
    },
    collapse?: {
      list: any[]|FormComp[],
    },
    header?: string,
    shadow?: string,
    title?: string,
  },
  type:'component'|'container',
  form_config?:{
    label?:string,
    rules?:{
      required?:boolean,
      message?: string,
      trigger?: string,
    }
  }
}
/**
 * 整个form表单对应的配置
 */
declare interface FormConfig{
  list: FormComp[]|any[],
  formProp: {
    size: keyof typeof size,
    labelPosition: keyof typeof LabelPosition,
    labelWidth: number,
  },
  name?: string,
  id?:number
}
