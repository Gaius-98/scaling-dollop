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
     * 位置及尺寸信息
     */
    positionSize:{
        top:number,
        left:number,
        width:number,
        height:number
    },
}