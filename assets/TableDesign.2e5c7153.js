import{d as D,r as y,b9 as v,o as g,z as F,A as a,b as e,am as O,bb as P,bk as R,bl as K,u as s,c as I,I as S,Q as T,bh as L,bi as M,bc as W,ag as X,B as k,ad as x,ae as Y,C as Z,D as $,a4 as ee,R as le,S as ae,dF as de,bj as oe,an as te,ap as re,_ as se,__tla as ue}from"./index.913ea218.js";import{E as ne,a as pe,b as be,__tla as ie}from"./dropdown-item.f4735e60.js";import{d as me,__tla as ce}from"./vuedraggable.umd.cfca8bb7.js";let j,fe=Promise.all([(()=>{try{return ue}catch{}})(),(()=>{try{return ie}catch{}})(),(()=>{try{return ce}catch{}})()]).then(async()=>{const q=D({__name:"TableField",setup(U,{expose:_}){const n=y(),d=v({}),o=v({prop:[{required:!0,trigger:"blur",message:"\u5B57\u6BB5\u540D\u4E0D\u80FD\u4E3A\u7A7A"}],label:[{required:!0,trigger:"blur",message:"\u5217\u540D\u4E0D\u80FD\u4E3A\u7A7A"}]});return _({getFormData:()=>d,resetForm:()=>{!n.value||n.value.resetFields()},getFormValidate:()=>new Promise((i,p)=>{var b;(b=n.value)==null||b.validate((m,V)=>{i({valid:m,fields:V})})})}),(i,p)=>{const b=O,m=P,V=R;return g(),F(V,{ref_key:"formRef",ref:n,"label-position":"left","label-width":"80",model:d,rules:o},{default:a(()=>[e(m,{prop:"prop",label:"\u5B57\u6BB5\u540D"},{default:a(()=>[e(b,{modelValue:d.prop,"onUpdate:modelValue":p[0]||(p[0]=t=>d.prop=t),placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D",readonly:!1,disabled:!1,clearable:!0,"show-password":!1},null,8,["modelValue"])]),_:1}),e(m,{prop:"label",label:"\u5217\u540D"},{default:a(()=>[e(b,{modelValue:d.label,"onUpdate:modelValue":p[1]||(p[1]=t=>d.label=t),placeholder:"\u8BF7\u8F93\u5165\u5217\u540D",readonly:!1,disabled:!1,clearable:!0,"show-password":!1},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])}}}),z=D({__name:"TableCfg",props:{cfg:{default:()=>({label:"",prop:""})}},setup(U,{expose:_}){const n=U,d=y(),{cfg:o}=K(n),i=v({}),p=()=>o,b=v([{label:"\u5DE6",value:"left"},{label:"\u53F3",value:"right"}]),m=v([{label:"\u5DE6\u5BF9\u9F50",value:"left"},{label:"\u53F3\u5BF9\u9F50",value:"right"},{label:"\u5C45\u4E2D",value:"center"}]);return _({getFormData:p,resetForm:()=>{!d.value||d.value.resetFields()}}),(V,t)=>{const u=O,r=P,c=L,h=M,w=W,C=R;return g(),F(C,{ref_key:"formRef",ref:d,size:"default","label-position":"left","label-width":"120",model:s(o),rules:i},{default:a(()=>[e(r,{prop:"prop",label:"\u5B57\u6BB5\u540D"},{default:a(()=>[e(u,{modelValue:s(o).prop,"onUpdate:modelValue":t[0]||(t[0]=l=>s(o).prop=l),placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D",readonly:!1,disabled:!1,clearable:!0,"show-password":!1},null,8,["modelValue"])]),_:1}),e(r,{prop:"label",label:"\u5217\u540D"},{default:a(()=>[e(u,{modelValue:s(o).label,"onUpdate:modelValue":t[1]||(t[1]=l=>s(o).label=l),placeholder:"\u8BF7\u8F93\u5165\u5217\u540D",readonly:!1,disabled:!1,clearable:!0,"show-password":!1},null,8,["modelValue"])]),_:1}),e(r,{prop:"width",label:"\u5BBD\u5EA6"},{default:a(()=>[e(u,{modelValue:s(o).width,"onUpdate:modelValue":t[2]||(t[2]=l=>s(o).width=l),placeholder:"\u8BF7\u8F93\u5165\u5BBD\u5EA6",readonly:!1,disabled:!1,clearable:!0,"show-password":!1},null,8,["modelValue"])]),_:1}),e(r,{prop:"fixed",label:"\u56FA\u5B9A\u5217"},{default:a(()=>[e(h,{modelValue:s(o).fixed,"onUpdate:modelValue":t[3]||(t[3]=l=>s(o).fixed=l),placeholder:"",readonly:!1,disabled:!1,filterable:!1,clearable:!0},{default:a(()=>[(g(!0),I(S,null,T(b,l=>(g(),F(c,{key:l.value,value:l.value,label:l.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,{prop:"sortable",label:"\u662F\u5426\u53EF\u6392\u5E8F"},{default:a(()=>[e(w,{modelValue:s(o).sortable,"onUpdate:modelValue":t[4]||(t[4]=l=>s(o).sortable=l),disabled:!1,"active-text":"\u53EF\u6392\u5E8F","inactive-text":"\u4E0D\u53EF\u6392\u5E8F"},null,8,["modelValue"])]),_:1}),e(r,{prop:"align",label:"\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F"},{default:a(()=>[e(h,{modelValue:s(o).align,"onUpdate:modelValue":t[5]||(t[5]=l=>s(o).align=l),placeholder:"",readonly:!1,disabled:!1,filterable:!1,clearable:!1},{default:a(()=>[(g(!0),I(S,null,T(m,l=>(g(),F(c,{key:l.value,value:l.value,label:l.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])}}}),A={class:"table-design"},E={class:"table-data"},J={class:"table-container"},N=["onClick"],B={class:"table-cfg"},Q=D({__name:"TableDesign",setup(U){const _=y({label:"",prop:""}),n=y(""),d=v({columns:[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}]}),o=y(),i=v([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]),p=u=>{n.value=u,_.value=d.columns.find(r=>r.prop==u)},b=X({title:"\u65B0\u589E\u5217\u8868\u5B57\u6BB5",content:q,componentProps:{},width:400,height:200}),m=()=>{b.open().then(u=>{const r=u.data.getFormData();r.label&&r.prop&&d.columns.push({label:r.label,prop:r.prop})})},V=(u,r)=>{const c=r.attrs.field,h=d.columns.findIndex(w=>w.prop==c);h!=-1&&d.columns.splice(h,1)},t=u=>{Object.assign(i,JSON.parse(u))};return(u,r)=>{const c=de,h=oe,w=te,C=ne,l=pe,G=be,H=re;return g(),I("div",A,[k("div",E,[e(c,null,{default:a(()=>[x(" \u6570\u636E\u6E90 ")]),_:1}),e(h,{code:JSON.stringify(i,null,4),onChange:t},null,8,["code"])]),k("div",J,[e(w,{type:"primary",icon:s(Y),onClick:m},{default:a(()=>[x(" \u65B0\u589E\u5B57\u6BB5 ")]),_:1},8,["icon"]),e(c,null,{default:a(()=>[x(" \u914D\u7F6E\u5217 ")]),_:1}),e(s(me),{modelValue:d.columns,"onUpdate:modelValue":r[0]||(r[0]=f=>d.columns=f),"item-key":"prop",class:"table-header"},{item:a(({element:f})=>[e(G,{trigger:"contextmenu",onCommand:V},{dropdown:a(()=>[e(l,null,{default:a(()=>[e(C,{command:"delete",field:f.prop},{default:a(()=>[x(" \u5220\u9664 ")]),_:2},1032,["field"])]),_:2},1024)]),default:a(()=>[k("div",{class:Z(["header-cell",n.value==f.prop?"cur-column":""]),style:$({width:f.width?f.width+"px":"auto"}),onClick:_e=>p(f.prop)},ee(f.label),15,N)]),_:2},1024)]),_:1},8,["modelValue"]),e(c,null,{default:a(()=>[x(" \u9884\u89C8\u533A\u57DF ")]),_:1}),e(H,{ref_key:"table",ref:o,data:i,"table-config":d,border:"",height:"750"},null,8,["data","table-config"])]),k("div",B,[le(e(z,{cfg:_.value},null,8,["cfg"]),[[ae,_.value.prop]])])])}}});j=se(Q,[["__scopeId","data-v-e2fb6b24"]])});export{fe as __tla,j as default};
