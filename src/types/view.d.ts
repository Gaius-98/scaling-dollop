/**
 * 页面设计数据
 */
declare interface ViewData {
    /**
     * 所有的组件数据
     */
    componentData:ViewComponent[],
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
declare interface ViewComponent {
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
    props:COMMON.Obj,
    /**
     * 每个组件对应一个id
     */
    id:string,
    /**
     * 组件类别
     */
    type:string,
    dataSetting:DataSetting,
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

enum CompType {
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
    iconSelect='iconSelect',
    varObj='varObj',
    dataSource='dataSource'
}
/**
 * 配置面板结构
 */
declare interface ViewCompCfg {
    label:string,
    ui:{
        type:keyof typeof CompType,
        field:string,
        props:COMMON.Obj,
        children?:ViewCompCfg[],
        connectShow?:{
            field:string,
            value:string
        }
    }
}
/**
 * 数据源类型 static dev
 */
type DataSetType = 'static' | 'dev'
type ReqType = 'get'|'post'
/**
 * 请求配置
 */
declare interface ReqSetting{
    interfaceUrl?:string,
    reqType:ReqType,
    params?:string,
    handleFunc?:string
}
/**
 * 数据源配置
 */ 
declare interface DataSetting extends ReqSetting {
    type:DataSetType,
    data:any,
}
