import{r as e,__tla as a}from"./request.48891ebd.js";let r,o=Promise.all([(()=>{try{return a}catch{}})()]).then(async()=>{r={getList(t){return e({url:"/biz/form/list",method:"post",data:t})},save(t){return e({url:"/biz/form/save",method:"post",data:t})},update(t){return e({url:"/biz/form/update",method:"post",data:t})},deleteForm(t){return e({url:"/biz/form/delete",method:"post",data:t})},getDetail(t){return e({url:"/biz/form/detail",method:"post",data:t})}}});export{o as __tla,r as f};
