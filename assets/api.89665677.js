import{aH as a,__tla as o}from"./index.cc19e476.js";let r,d=Promise.all([(()=>{try{return o}catch{}})()]).then(async()=>{let e;e={getConfig:t=>a({url:"/config/find",method:"post",data:t}),save:t=>a({url:"/chart/save",method:"post",data:t}),getChartList:t=>a({url:"/chart/list",method:"post",data:t}),getChart:t=>a({url:"/chart/find",method:"post",data:t}),update:t=>a({url:"/chart/update",method:"post",data:t}),delete:t=>a({url:"/chart/delete",method:"post",data:t})},r=e});export{d as __tla,r as a};