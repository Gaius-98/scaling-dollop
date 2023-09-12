/**
 * 页面设计数据
 */
declare interface viewData {
    /**
     * 所有的组件数据
     */
    componentData:viewComponent[],
    /**
     * 页面名称
     */
    name:string,
    /**
     * 预览图片
     */
    img:string,
    /**
     * 页面对应的id
     */
    id:string,
    /**
     * 页面高度
     */
    height:number,
    /**
     * 页面宽度
     */
    width:number
}

/**
 * 页面设计 单个组件
 */
declare interface viewComponent {
    /**
     * 组件component名称
     */
    name:string,
    /**
     * 组件显示名称
     */
    label:string,
    /**
     * 组件的props
     */
    props:COMMON.obj,
    /**
     * 每个组件对应一个id
     */
    id:string,
    /**
     * 组件类别
     */
    type:string,
    dataSetting:{
        type:'static'|'dev',
        data:any,
        params:COMMON.obj
    },
    /**
     * 位置及尺寸信息
     */
    positionSize:{
        top:number,
        left:number,
        width:number,
        height:number
    },
}

enum cfgComp {
    collapse='collapse',
    number='number',
    input='input',
    select='select',
    textarea='textarea',
    switch='switch',
    color='color',
    code='code',
    slider='slider',
    tab='tab',
    iconSelect='iconSelect'
    varObj='varObj'
}
/**
 * 配置面板结构
 */
declare interface viewCompCfg {
    label:string,
    ui:{
        type:keyof typeof cfgComp,
        field:string,
        props:COMMON.obj,
        children?:viewCompCfg[],
        connectShow?:{
            field:string,
            value:string
        }
    }
}
/**
 * 数据源类型 static dev
 */
type dataSetType = 'static' | 'dev'
/**
 * 数据源配置
 */
interface DataSetting {
    type:dataSetType,
    data:any,
    params?:COMMON.obj,
    handleFunc?:string
}