import{ad as u,ae as s,X as h,dd as i,__tla as D}from"./index.908e42af.js";let d,v=Promise.all([(()=>{try{return D}catch{}})()]).then(async()=>{d=u("viewStore",()=>{const t=s({componentData:[],name:"",id:"",img:"",height:1080,width:1920}),l=s({name:"",label:"",props:{},id:"",type:"",dataSetting:{type:"static",data:"",handleFunc:"",params:{}},positionSize:{top:0,left:0,width:100,height:100}}),m=e=>{const{id:p}=e;let o=t.componentData.find(r=>r.id==p);o&&Object.assign(o,{...o,...e})},n=s([]),a=h(0),c=()=>{n[a.value++]=i.exports.cloneDeep(t.componentData)};return{viewData:t,curCompData:l,snapshotData:n,curSnapshotIdx:a,setSnapshot:c,undo:()=>{a.value>0&&(a.value--,t.componentData=i.exports.cloneDeep(n[a.value]))},redo:()=>{a.value<n.length-1&&(a.value++,t.componentData=i.exports.cloneDeep(n[a.value]))},onClickComp:e=>{let p=t.componentData.findIndex(o=>o.id===e.id);p!=-1&&Object.assign(l,t.componentData[p])},setComp:m,addComp:e=>{t.componentData.push(e),c()}}})});export{v as __tla,d as u};
