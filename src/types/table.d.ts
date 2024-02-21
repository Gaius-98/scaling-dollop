declare interface TableModalCfg{
    show:boolean,
    id?:number,
    reqSetting?:reqSetting,
}
declare interface TableGlobalCfg {
    pagConfig:{
        total:number,
        pageSize:number,
        pageNumber:number,
        pageSizes?:number[],
        [key:string]:any,
    }
    add:TableModalCfg,
    edit:TableModalCfg,
    delete:TableModalCfg,
    view:TableModalCfg,
    filter:TableModalCfg
}
declare interface TableSaveCfg {
    id?:number,
    name:string,
    dataSetting:getDataCfg,
    tableCfg:TableCfg,
    globalCfg:TableGlobalCfg
}