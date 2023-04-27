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
  'card',
  'collapse'
}

declare enum size{
  'default',
  'large',
  'small'
}
declare enum labelPosition{
  'left',
  'right',
  'top'
}
 
declare interface formComp {
  comp:keyof typeof comp,
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
    options?:COMMON.obj[],
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
      list:any[]|formComp[],
      key:string,
      span:number
    },
    gutter?:number,
    card?:{
      list?:any[]|formComp[],
    },
    collapse?: {
      list: any[]|formComp[],
    },
    header?: string,
    shadow?: string,
    title?: string,
  },
  form_config?:{
    label:string,
    rules:{
      required:boolean,
      message: string,
      trigger: string,
    }
  }
}

declare interface formConfig{
  list: formComp[]|any[],
  formProp: {
    size: keyof typeof size,
    labelPosition: keyof typeof labelPosition,
    labelWidth: number,
  },
  name?: string,
}