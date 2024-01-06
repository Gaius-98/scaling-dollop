import{d as D,r as w,bp as g,o as v,z as F,A as a,b as e,aj as A,br as I,bA as O,bB as H,u as s,c as z,I as P,Q as R,bx as K,by as M,bs as W,ag as X,B as k,ad as x,ae as Y,C as Z,D as $,a4 as ee,R as le,S as ae,bL as de,bz as oe,ak as te,am as re,_ as se,__tla as ue}from"./index.5e59fa98.js";import{E as ne,a as pe,b as ie,__tla as be}from"./dropdown-item.ba22e6e3.js";import{d as me,__tla as ce}from"./vuedraggable.umd.beec9ead.js";import{__tla as fe}from"./refs.35c65af7.js";let S,_e=Promise.all([(()=>{try{return ue}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return fe}catch{}})()]).then(async()=>{const T=D({__name:"TableField",setup(U,{expose:_}){const i=w(),d=g({}),o=g({prop:[{required:!0,trigger:"blur",message:"\u5B57\u6BB5\u540D\u4E0D\u80FD\u4E3A\u7A7A"}],label:[{required:!0,trigger:"blur",message:"\u5217\u540D\u4E0D\u80FD\u4E3A\u7A7A"}]});return _({getFormData:()=>d,resetForm:()=>{!i.value||i.value.resetFields()},getFormValidate:()=>new Promise((m,b)=>{var p;(p=i.value)==null||p.validate((c,V)=>{m({valid:c,fields:V})})})}),(m,b)=>{const p=A,c=I,V=O;return v(),F(V,{ref_key:"formRef",ref:i,"label-position":"left","label-width":"80",model:d,rules:o},{default:a(()=>[e(c,{prop:"prop",label:"\u5B57\u6BB5\u540D"},{default:a(()=>[e(p,{modelValue:d.prop,"onUpdate:modelValue":b[0]||(b[0]=t=>d.prop=t),placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D",readonly:!1,disabled:!1,clearable:!0,"show-password":!1},null,8,["modelValue"])]),_:1}),e(c,{prop:"label",label:"\u5217\u540D"},{default:a(()=>[e(p,{modelValue:d.label,"onUpdate:modelValue":b[1]||(b[1]=t=>d.label=t),placeholder:"\u8BF7\u8F93\u5165\u5217\u540D",readonly:!1,disabled:!1,clearable:!0,"show-password":!1},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])}}}),j=D({__name:"TableCfg",props:{cfg:{default:()=>({label:"",prop:""})}},setup(U,{expose:_}){const i=U,d=w(),{cfg:o}=H(i),m=g({}),b=()=>o,p=g([{label:"\u5DE6",value:"left"},{label:"\u53F3",value:"right"}]),c=g([{label:"\u5DE6\u5BF9\u9F50",value:"left"},{label:"\u53F3\u5BF9\u9F50",value:"right"},{label:"\u5C45\u4E2D",value:"center"}]);return _({getFormData:b,resetForm:()=>{!d.value||d.value.resetFields()}}),(V,t)=>{const u=A,r=I,n=K,h=M,y=W,C=O;return v(),F(C,{ref_key:"formRef",ref:d,size:"default","label-position":"left","label-width":"120",model:s(o),rules:m},{default:a(()=>[e(r,{prop:"prop",label:"\u5B57\u6BB5\u540D"},{default:a(()=>[e(u,{modelValue:s(o).prop,"onUpdate:modelValue":t[0]||(t[0]=l=>s(o).prop=l),placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D",readonly:!1,disabled:!1,clearable:!0,"show-password":!1},null,8,["modelValue"])]),_:1}),e(r,{prop:"label",label:"\u5217\u540D"},{default:a(()=>[e(u,{modelValue:s(o).label,"onUpdate:modelValue":t[1]||(t[1]=l=>s(o).label=l),placeholder:"\u8BF7\u8F93\u5165\u5217\u540D",readonly:!1,disabled:!1,clearable:!0,"show-password":!1},null,8,["modelValue"])]),_:1}),e(r,{prop:"width",label:"\u5BBD\u5EA6"},{default:a(()=>[e(u,{modelValue:s(o).width,"onUpdate:modelValue":t[2]||(t[2]=l=>s(o).width=l),placeholder:"\u8BF7\u8F93\u5165\u5BBD\u5EA6",readonly:!1,disabled:!1,clearable:!0,"show-password":!1},null,8,["modelValue"])]),_:1}),e(r,{prop:"fixed",label:"\u56FA\u5B9A\u5217"},{default:a(()=>[e(h,{modelValue:s(o).fixed,"onUpdate:modelValue":t[3]||(t[3]=l=>s(o).fixed=l),placeholder:"",readonly:!1,disabled:!1,filterable:!1,clearable:!0},{default:a(()=>[(v(!0),z(P,null,R(p,l=>(v(),F(n,{key:l.value,value:l.value,label:l.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,{prop:"sortable",label:"\u662F\u5426\u53EF\u6392\u5E8F"},{default:a(()=>[e(y,{modelValue:s(o).sortable,"onUpdate:modelValue":t[4]||(t[4]=l=>s(o).sortable=l),disabled:!1,"active-text":"\u53EF\u6392\u5E8F","inactive-text":"\u4E0D\u53EF\u6392\u5E8F"},null,8,["modelValue"])]),_:1}),e(r,{prop:"align",label:"\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F"},{default:a(()=>[e(h,{modelValue:s(o).align,"onUpdate:modelValue":t[5]||(t[5]=l=>s(o).align=l),placeholder:"",readonly:!1,disabled:!1,filterable:!1,clearable:!1},{default:a(()=>[(v(!0),z(P,null,R(c,l=>(v(),F(n,{key:l.value,value:l.value,label:l.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])}}}),q={class:"table-design"},B={class:"table-data"},E={class:"table-container"},J=["onClick"],N={class:"table-cfg"},L=D({__name:"TableDesign",setup(U){const _=w({label:"",prop:""}),i=w(""),d=g({columns:[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}]}),o=w(),m=g([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]),b=u=>{i.value=u,_.value=d.columns.find(r=>r.prop==u)},p=X({title:"\u65B0\u589E\u5217\u8868\u5B57\u6BB5",content:T,componentProps:{},width:400,height:200}),c=()=>{p.open(async u=>{const{valid:r}=await u.data.getFormValidate(),n=u.data.getFormData();r&&(d.columns.push({label:n.label,prop:n.prop}),p.destroyed())})},V=(u,r)=>{const n=r.attrs.field,h=d.columns.findIndex(y=>y.prop==n);h!=-1&&d.columns.splice(h,1)},t=u=>{Object.assign(m,JSON.parse(u))};return(u,r)=>{const n=de,h=oe,y=te,C=ne,l=pe,Q=ie,G=re;return v(),z("div",q,[k("div",B,[e(n,null,{default:a(()=>[x(" \u6570\u636E\u6E90 ")]),_:1}),e(h,{code:JSON.stringify(m,null,4),onChange:t},null,8,["code"])]),k("div",E,[e(y,{type:"primary",icon:s(Y),onClick:c},{default:a(()=>[x(" \u65B0\u589E\u5B57\u6BB5 ")]),_:1},8,["icon"]),e(n,null,{default:a(()=>[x(" \u914D\u7F6E\u5217 ")]),_:1}),e(s(me),{modelValue:d.columns,"onUpdate:modelValue":r[0]||(r[0]=f=>d.columns=f),"item-key":"prop",class:"table-header"},{item:a(({element:f})=>[e(Q,{trigger:"contextmenu",onCommand:V},{dropdown:a(()=>[e(l,null,{default:a(()=>[e(C,{command:"delete",field:f.prop},{default:a(()=>[x(" \u5220\u9664 ")]),_:2},1032,["field"])]),_:2},1024)]),default:a(()=>[k("div",{class:Z(["header-cell",i.value==f.prop?"cur-column":""]),style:$({width:f.width?f.width+"px":"auto"}),onClick:he=>b(f.prop)},ee(f.label),15,J)]),_:2},1024)]),_:1},8,["modelValue"]),e(n,null,{default:a(()=>[x(" \u9884\u89C8\u533A\u57DF ")]),_:1}),e(G,{ref_key:"table",ref:o,data:m,"table-config":d,border:"",height:"750"},null,8,["data","table-config"])]),k("div",N,[le(e(j,{cfg:_.value},null,8,["cfg"]),[[ae,_.value.prop]])])])}}});S=se(L,[["__scopeId","data-v-c50f6e9a"]])});export{_e as __tla,S as default};
