import{e as we,w as _o,f as go,g as ne,i as Fe,t as Vo,h as de,j as ho,k as Ae,l as Oe,m as ue,n as ko,p as Uo,q as Io,r as Co,s as xo,N as se,v as me,x as ie,d as h,b as a,P as ce,y as j,z as wo,A as Fo,B as Ao,C as Pe,F as Oo,D as ee,o as u,c as k,E as x,G as J,u as e,H as W,I as t,J as v,K as Po,L as So,M as g,O as Se,Q as De,R as Do,U as Me,S as Mo,T as Ro,V as Re,W as M,X as zo,Y as qo,Z as To,$ as Bo,a0 as ze,a1 as $o,a2 as qe,a3 as No,a4 as Eo,a5 as Lo,a6 as P,a7 as Yo,a8 as jo,a9 as Jo,aa as Ho,ab as Wo,ac as Ko,ad as K,ae as A,af as w,ag as C,ah as R,ai as S,aj as le,ak as Te,al as Be,am as ae,an as fe,ao as B,ap as te,aq as re,ar as $e,as as be,at as ve,au as oe,av as ye,aw as Xo,ax as Go,_ as X,ay as Qo,az as Zo,aA as ea,aB as _e,aC as la,aD as oa,aE as aa,aF as ta,aG as ra,aH as Ne,aI as ge,aJ as Ee,aK as Le,aL as pa,aM as na,aN as Ve,aO as da,aP as ua,__tla as sa}from"./index.36b384ee.js";import{c as ma,d as ia,E as ca,a as fa,__tla as ba}from"./vuedraggable.umd.750c146c.js";let Ye,va=Promise.all([(()=>{try{return sa}catch{}})(),(()=>{try{return ba}catch{}})()]).then(async()=>{const je=(n,i,l)=>{let f={offsetX:0,offsetY:0};const o=r=>{const b=r.clientX,y=r.clientY,{offsetX:s,offsetY:c}=f,_=n.value.getBoundingClientRect(),I=_.left,q=_.top,D=_.width,$=_.height,N=document.documentElement.clientWidth,O=document.documentElement.clientHeight,H=-I+s,E=-q+c,L=N-I-D+s,G=O-q-$+c,Y=V=>{const U=Math.min(Math.max(s+V.clientX-b,H),L),T=Math.min(Math.max(c+V.clientY-y,E),G);f={offsetX:U,offsetY:T},n.value.style.transform=`translate(${ne(U)}, ${ne(T)})`},m=()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",m)};document.addEventListener("mousemove",Y),document.addEventListener("mouseup",m)},p=()=>{i.value&&n.value&&i.value.addEventListener("mousedown",o)},d=()=>{i.value&&n.value&&i.value.removeEventListener("mousedown",o)};we(()=>{_o(()=>{l.value?p():d()})}),go(()=>{d()})},Je=(n,i={})=>{Fe(n)||Vo("[useLockscreen]","You need to pass a ref param to this function");const l=i.ns||de("popup"),f=ho(()=>l.bm("parent","hidden"));if(!Ae||Oe(document.body,f.value))return;let o=0,p=!1,d="0";const r=()=>{setTimeout(()=>{xo(document==null?void 0:document.body,f.value),p&&document&&(document.body.style.width=d)},200)};ue(n,b=>{if(!b){r();return}p=!Oe(document.body,f.value),p&&(d=document.body.style.width),o=ko(l.namespace.value);const y=document.documentElement.clientHeight<document.body.scrollHeight,s=Uo(document.body,"overflowY");o>0&&(y||s==="scroll")&&p&&(document.body.style.width=`calc(100% - ${o}px)`),Io(document.body,f.value)}),Co(()=>r())},he=n=>{if(!n)return{onClick:se,onMousedown:se,onMouseup:se};let i=!1,l=!1;return{onClick:f=>{i&&l&&n(f),i=l=!1},onMousedown:f=>{i=f.target===f.currentTarget},onMouseup:f=>{l=f.target===f.currentTarget}}},He=me({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:ie([String,Array,Object])},zIndex:{type:ie([String,Number])}}),We={click:n=>n instanceof MouseEvent},Ke="overlay";var Xe=h({name:"ElOverlay",props:He,emits:We,setup(n,{slots:i,emit:l}){const f=de(Ke),o=b=>{l("click",b)},{onClick:p,onMousedown:d,onMouseup:r}=he(n.customMaskEvent?void 0:o);return()=>n.mask?a("div",{class:[f.b(),n.overlayClass],style:{zIndex:n.zIndex},onClick:p,onMousedown:d,onMouseup:r},[j(i,"default")],ce.STYLE|ce.CLASS|ce.PROPS,["onClick","onMouseup","onMousedown"]):wo("div",{class:n.overlayClass,style:{zIndex:n.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[j(i,"default")])}});const Ge=Xe,ke=Symbol("dialogInjectionKey"),Ue=me({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:Fo},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Qe={close:()=>!0},Ze=["aria-label"],el=["id"],ll=h({name:"ElDialogContent"}),ol=h({...ll,props:Ue,emits:Qe,setup(n){const i=n,{t:l}=Ao(),{Close:f}=Do,{dialogRef:o,headerRef:p,bodyId:d,ns:r,style:b}=Pe(ke),{focusTrapRef:y}=Pe(Oo),s=ma(y,o),c=ee(()=>i.draggable);return je(o,p,c),(_,I)=>(u(),k("div",{ref:e(s),class:J([e(r).b(),e(r).is("fullscreen",_.fullscreen),e(r).is("draggable",e(c)),e(r).is("align-center",_.alignCenter),{[e(r).m("center")]:_.center},_.customClass]),style:Se(e(b)),tabindex:"-1"},[x("header",{ref_key:"headerRef",ref:p,class:J(e(r).e("header"))},[j(_.$slots,"header",{},()=>[x("span",{role:"heading",class:J(e(r).e("title"))},W(_.title),3)]),_.showClose?(u(),k("button",{key:0,"aria-label":e(l)("el.dialog.close"),class:J(e(r).e("headerbtn")),type:"button",onClick:I[0]||(I[0]=q=>_.$emit("close"))},[a(e(So),{class:J(e(r).e("close"))},{default:t(()=>[(u(),v(Po(_.closeIcon||e(f))))]),_:1},8,["class"])],10,Ze)):g("v-if",!0)],2),x("div",{id:e(d),class:J(e(r).e("body"))},[j(_.$slots,"default")],10,el),_.$slots.footer?(u(),k("footer",{key:0,class:J(e(r).e("footer"))},[j(_.$slots,"footer")],2)):g("v-if",!0)],6))}});var al=De(ol,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const tl=me({...Ue,appendToBody:{type:Boolean,default:!1},beforeClose:{type:ie(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),rl={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[Me]:n=>Mo(n),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},pl=(n,i)=>{const l=Bo().emit,{nextZIndex:f}=Ro();let o="";const p=Re(),d=Re(),r=M(!1),b=M(!1),y=M(!1),s=M(n.zIndex||f());let c,_;const I=zo("namespace",qo),q=ee(()=>{const z={},Z=`--${I.value}-dialog`;return n.fullscreen||(n.top&&(z[`${Z}-margin-top`]=n.top),n.width&&(z[`${Z}-width`]=ne(n.width))),z}),D=ee(()=>n.alignCenter?{display:"flex"}:{});function $(){l("opened")}function N(){l("closed"),l(Me,!1),n.destroyOnClose&&(y.value=!1)}function O(){l("close")}function H(){_==null||_(),c==null||c(),n.openDelay&&n.openDelay>0?{stop:c}=ze(()=>Y(),n.openDelay):Y()}function E(){c==null||c(),_==null||_(),n.closeDelay&&n.closeDelay>0?{stop:_}=ze(()=>m(),n.closeDelay):m()}function L(){function z(Z){Z||(b.value=!0,r.value=!1)}n.beforeClose?n.beforeClose(z):E()}function G(){n.closeOnClickModal&&L()}function Y(){!Ae||(r.value=!0)}function m(){r.value=!1}function V(){l("openAutoFocus")}function U(){l("closeAutoFocus")}function T(z){var Z;((Z=z.detail)==null?void 0:Z.focusReason)==="pointer"&&z.preventDefault()}n.lockScroll&&Je(r);function Q(){n.closeOnPressEscape&&L()}return ue(()=>n.modelValue,z=>{z?(b.value=!1,H(),y.value=!0,s.value=n.zIndex?s.value++:f(),To(()=>{l("open"),i.value&&(i.value.scrollTop=0)})):r.value&&E()}),ue(()=>n.fullscreen,z=>{!i.value||(z?(o=i.value.style.transform,i.value.style.transform=""):i.value.style.transform=o)}),we(()=>{n.modelValue&&(r.value=!0,y.value=!0,H())}),{afterEnter:$,afterLeave:N,beforeLeave:O,handleClose:L,onModalClick:G,close:E,doClose:m,onOpenAutoFocus:V,onCloseAutoFocus:U,onCloseRequested:Q,onFocusoutPrevented:T,titleId:p,bodyId:d,closed:b,style:q,overlayDialogStyle:D,rendered:y,visible:r,zIndex:s}},nl=["aria-label","aria-labelledby","aria-describedby"],dl=h({name:"ElDialog",inheritAttrs:!1}),ul=h({...dl,props:tl,emits:rl,setup(n,{expose:i}){const l=n,f=$o();qe({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},ee(()=>!!f.title)),qe({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},ee(()=>!!l.customClass));const o=de("dialog"),p=M(),d=M(),r=M(),{visible:b,titleId:y,bodyId:s,style:c,overlayDialogStyle:_,rendered:I,zIndex:q,afterEnter:D,afterLeave:$,beforeLeave:N,handleClose:O,onModalClick:H,onOpenAutoFocus:E,onCloseAutoFocus:L,onCloseRequested:G,onFocusoutPrevented:Y}=pl(l,p);No(ke,{dialogRef:p,headerRef:d,bodyId:s,ns:o,rendered:I,style:c});const m=he(H),V=ee(()=>l.draggable&&!l.fullscreen);return i({visible:b,dialogContentRef:r}),(U,T)=>(u(),v(Ho,{to:"body",disabled:!U.appendToBody},[a(Jo,{name:"dialog-fade",onAfterEnter:e(D),onAfterLeave:e($),onBeforeLeave:e(N),persisted:""},{default:t(()=>[Eo(a(e(Ge),{"custom-mask-event":"",mask:U.modal,"overlay-class":U.modalClass,"z-index":e(q)},{default:t(()=>[x("div",{role:"dialog","aria-modal":"true","aria-label":U.title||void 0,"aria-labelledby":U.title?void 0:e(y),"aria-describedby":e(s),class:J(`${e(o).namespace.value}-overlay-dialog`),style:Se(e(_)),onClick:T[0]||(T[0]=(...Q)=>e(m).onClick&&e(m).onClick(...Q)),onMousedown:T[1]||(T[1]=(...Q)=>e(m).onMousedown&&e(m).onMousedown(...Q)),onMouseup:T[2]||(T[2]=(...Q)=>e(m).onMouseup&&e(m).onMouseup(...Q))},[a(e(Lo),{loop:"",trapped:e(b),"focus-start-el":"container",onFocusAfterTrapped:e(E),onFocusAfterReleased:e(L),onFocusoutPrevented:e(Y),onReleaseRequested:e(G)},{default:t(()=>[e(I)?(u(),v(al,P({key:0,ref_key:"dialogContentRef",ref:r},U.$attrs,{"custom-class":U.customClass,center:U.center,"align-center":U.alignCenter,"close-icon":U.closeIcon,draggable:e(V),fullscreen:U.fullscreen,"show-close":U.showClose,title:U.title,onClose:e(O)}),Yo({header:t(()=>[U.$slots.title?j(U.$slots,"title",{key:1}):j(U.$slots,"header",{key:0,close:e(O),titleId:e(y),titleClass:e(o).e("title")})]),default:t(()=>[j(U.$slots,"default")]),_:2},[U.$slots.footer?{name:"footer",fn:t(()=>[j(U.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):g("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,nl)]),_:3},8,["mask","overlay-class","z-index"]),[[jo,e(b)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var sl=De(ul,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const ml=Wo(sl),F=Ko("formDesignStore",()=>{const n=K({}),i=K({}),l=K({list:[],formProp:{size:"default",labelPosition:"top",labelWidth:120},name:""});return{formData:n,curFormItem:i,saveForm:l,onClickFormItem:f=>{Object.assign(i,f)},init:()=>{Object.assign(l,{list:[],formProp:{size:"default",labelPosition:"top",labelWidth:120},name:""}),Object.assign(n,{}),Object.assign(i,{})},setForm:f=>{Object.assign(l,f)}}}),il=h({__name:"CommonAttr",setup(n){const i=F(),{curFormItem:l}=A(i);return(f,o)=>{const p=R,d=S,r=le,b=Te,y=Be;return u(),k(C,null,[e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:0,prop:"prop.field",label:"\u5B57\u6BB5\u540D"},{default:t(()=>[a(p,{modelValue:e(l).prop.field,"onUpdate:modelValue":o[0]||(o[0]=s=>e(l).prop.field=s),clearable:""},null,8,["modelValue"])]),_:1})):g("",!0),a(d,{prop:"name",label:"\u7EC4\u4EF6\u540D\u79F0"},{default:t(()=>[a(p,{modelValue:e(l).name,"onUpdate:modelValue":o[1]||(o[1]=s=>e(l).name=s),disabled:""},null,8,["modelValue"])]),_:1}),e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:1,prop:"form_config.label",label:"\u6807\u7B7E\u6587\u672C"},{default:t(()=>[a(p,{modelValue:e(l).form_config.label,"onUpdate:modelValue":o[2]||(o[2]=s=>e(l).form_config.label=s)},null,8,["modelValue"])]),_:1})):g("",!0),e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:2,prop:"prop.readonly",label:"\u53EA\u8BFB"},{default:t(()=>[a(r,{modelValue:e(l).prop.readonly,"onUpdate:modelValue":o[3]||(o[3]=s=>e(l).prop.readonly=s)},null,8,["modelValue"])]),_:1})):g("",!0),e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:3,prop:"prop.disabled",label:"\u7981\u7528"},{default:t(()=>[a(r,{modelValue:e(l).prop.disabled,"onUpdate:modelValue":o[4]||(o[4]=s=>e(l).prop.disabled=s)},null,8,["modelValue"])]),_:1})):g("",!0),e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:4,prop:"form_config.rules.required",label:"\u5FC5\u586B"},{default:t(()=>[a(r,{modelValue:e(l).form_config.rules.required,"onUpdate:modelValue":o[5]||(o[5]=s=>e(l).form_config.rules.required=s)},null,8,["modelValue"])]),_:1})):g("",!0),e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:5,prop:"form_config.rules.regular",label:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F"},{default:t(()=>[a(p,{modelValue:e(l).form_config.rules.regular,"onUpdate:modelValue":o[6]||(o[6]=s=>e(l).form_config.rules.regular=s)},null,8,["modelValue"])]),_:1})):g("",!0),e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:6,prop:"form_config.rules.trigger",label:"\u89E6\u53D1\u65B9\u5F0F"},{default:t(()=>[a(y,{modelValue:e(l).form_config.rules.trigger,"onUpdate:modelValue":o[7]||(o[7]=s=>e(l).form_config.rules.trigger=s)},{default:t(()=>[a(b,{label:"change"},{default:t(()=>[w("change")]),_:1}),a(b,{label:"blur"},{default:t(()=>[w("blur")]),_:1})]),_:1},8,["modelValue"])]),_:1})):g("",!0),e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:7,prop:"form_config.rules.message",label:"\u6821\u9A8C\u63D0\u793A\u4FE1\u606F"},{default:t(()=>[a(p,{modelValue:e(l).form_config.rules.message,"onUpdate:modelValue":o[8]||(o[8]=s=>e(l).form_config.rules.message=s)},null,8,["modelValue"])]),_:1})):g("",!0)],64)}}}),cl=h({__name:"InputAttr",setup(n){const i=F(),{curFormItem:l}=A(i);return(f,o)=>{const p=R,d=S,r=le;return u(),k(C,null,[a(d,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:t(()=>[a(p,{modelValue:e(l).prop.placeholder,"onUpdate:modelValue":o[0]||(o[0]=b=>e(l).prop.placeholder=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.clearable",label:"\u662F\u5426\u53EF\u6E05\u7A7A"},{default:t(()=>[a(r,{modelValue:e(l).prop.clearable,"onUpdate:modelValue":o[1]||(o[1]=b=>e(l).prop.clearable=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.showPassword",label:"\u5BC6\u7801\u6846"},{default:t(()=>[a(r,{modelValue:e(l).prop.showPassword,"onUpdate:modelValue":o[2]||(o[2]=b=>e(l).prop.showPassword=b)},null,8,["modelValue"])]),_:1})],64)}}}),fl=h({__name:"TextareaAttr",setup(n){const i=F(),{curFormItem:l}=A(i);return(f,o)=>{const p=R,d=S,r=ae;return u(),k(C,null,[a(d,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:t(()=>[a(p,{modelValue:e(l).prop.placeholder,"onUpdate:modelValue":o[0]||(o[0]=b=>e(l).prop.placeholder=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.rows",label:"\u6587\u672C\u57DF\u884C\u6570"},{default:t(()=>[a(r,{modelValue:e(l).prop.rows,"onUpdate:modelValue":o[1]||(o[1]=b=>e(l).prop.rows=b)},null,8,["modelValue"])]),_:1})],64)}}}),bl=h({__name:"SelectAttr",setup(n){const i=F(),{curFormItem:l}=A(i),f=K([{field:"label",label:"\u5C55\u793A\u503C"},{field:"value",label:"\u5B9E\u9645\u503C"}]);return(o,p)=>{const d=R,r=S,b=le,y=fe;return u(),k(C,null,[a(r,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:t(()=>[a(d,{modelValue:e(l).prop.placeholder,"onUpdate:modelValue":p[0]||(p[0]=s=>e(l).prop.placeholder=s)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.clearable",label:"\u662F\u5426\u53EF\u6E05\u7A7A"},{default:t(()=>[a(b,{modelValue:e(l).prop.clearable,"onUpdate:modelValue":p[1]||(p[1]=s=>e(l).prop.clearable=s)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.filterable",label:"\u662F\u5426\u53EF\u641C\u7D22"},{default:t(()=>[a(b,{modelValue:e(l).prop.filterable,"onUpdate:modelValue":p[2]||(p[2]=s=>e(l).prop.filterable=s)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.options",label:"\u4E0B\u62C9\u6846\u6570\u636E"},{default:t(()=>[a(y,{data:e(l).prop.options,"column-config":f},null,8,["data","column-config"])]),_:1})],64)}}}),vl=h({__name:"CheckBoxAttr",setup(n){const i=F(),{curFormItem:l}=A(i),f=K([{field:"label",label:"\u5C55\u793A\u503C"},{field:"value",label:"\u5B9E\u9645\u503C"}]);return(o,p)=>{const d=le,r=S,b=fe;return u(),k(C,null,[a(r,{prop:"prop.border",label:"\u662F\u5426\u663E\u793A\u8FB9\u6846"},{default:t(()=>[a(d,{modelValue:e(l).prop.border,"onUpdate:modelValue":p[0]||(p[0]=y=>e(l).prop.border=y)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.options",label:"\u591A\u9009\u6846\u6570\u636E"},{default:t(()=>[a(b,{data:e(l).prop.options,"column-config":f},null,8,["data","column-config"])]),_:1})],64)}}}),yl=h({__name:"DateAttr",setup(n){const i=F(),{curFormItem:l}=A(i),f=K([{label:"year",value:"year"},{label:"month",value:"month"},{label:"date",value:"date"},{label:"dates",value:"dates"},{label:"datetime",value:"datetime"},{label:"week",value:"week"},{label:"datetimerange",value:"datetimerange"},{label:"daterange",value:"daterange"},{label:"monthrange",value:"monthrange"}]);return(o,p)=>{const d=R,r=S,b=te,y=re;return u(),k(C,null,[a(r,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:t(()=>[a(d,{modelValue:e(l).prop.placeholder,"onUpdate:modelValue":p[0]||(p[0]=s=>e(l).prop.placeholder=s)},null,8,["modelValue"])]),_:1}),e(l).type=="component"?(u(),v(r,{key:0,prop:"prop.valueFormat",label:"\u503C\u683C\u5F0F"},{default:t(()=>[a(d,{modelValue:e(l).prop.valueFormat,"onUpdate:modelValue":p[1]||(p[1]=s=>e(l).prop.valueFormat=s)},null,8,["modelValue"])]),_:1})):g("",!0),a(r,{prop:"prop.type",label:"\u65E5\u671F\u7C7B\u578B"},{default:t(()=>[a(y,{modelValue:e(l).prop.type,"onUpdate:modelValue":p[2]||(p[2]=s=>e(l).prop.type=s)},{default:t(()=>[(u(!0),k(C,null,B(f,s=>(u(),v(b,{key:s.value,value:s.value,label:s.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(r,{prop:"prop.format",label:"\u5C55\u793A\u683C\u5F0F"},{default:t(()=>[a(d,{modelValue:e(l).prop.format,"onUpdate:modelValue":p[3]||(p[3]=s=>e(l).prop.format=s)},null,8,["modelValue"])]),_:1})],64)}}}),_l=h({__name:"TimeAttr",setup(n){const i=F(),{curFormItem:l}=A(i);return(f,o)=>{const p=R,d=S,r=le;return u(),k(C,null,[a(d,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:t(()=>[a(p,{modelValue:e(l).prop.placeholder,"onUpdate:modelValue":o[0]||(o[0]=b=>e(l).prop.placeholder=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.editable",label:"\u53EF\u8F93\u5165"},{default:t(()=>[a(r,{modelValue:e(l).prop.editable,"onUpdate:modelValue":o[1]||(o[1]=b=>e(l).prop.editable=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.clearable",label:"\u53EF\u6E05\u7A7A"},{default:t(()=>[a(r,{modelValue:e(l).prop.clearable,"onUpdate:modelValue":o[2]||(o[2]=b=>e(l).prop.clearable=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.arrowControl",label:"\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9"},{default:t(()=>[a(r,{modelValue:e(l).prop.arrowControl,"onUpdate:modelValue":o[3]||(o[3]=b=>e(l).prop.arrowControl=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.isRange",label:"\u65F6\u95F4\u8303\u56F4\u9009\u62E9"},{default:t(()=>[a(r,{modelValue:e(l).prop.isRange,"onUpdate:modelValue":o[4]||(o[4]=b=>e(l).prop.isRange=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.format",label:"\u5C55\u793A\u683C\u5F0F"},{default:t(()=>[a(p,{modelValue:e(l).prop.format,"onUpdate:modelValue":o[5]||(o[5]=b=>e(l).prop.format=b)},null,8,["modelValue"])]),_:1})],64)}}}),gl=h({__name:"InputNumberAttr",setup(n){const i=F(),{curFormItem:l}=A(i),f=K([{value:"right",label:"right"}]);return(o,p)=>{const d=R,r=S,b=ae,y=te,s=re;return u(),k(C,null,[a(r,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:t(()=>[a(d,{modelValue:e(l).prop.placeholder,"onUpdate:modelValue":p[0]||(p[0]=c=>e(l).prop.placeholder=c)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.step",label:"\u6B65\u957F"},{default:t(()=>[a(b,{modelValue:e(l).prop.step,"onUpdate:modelValue":p[1]||(p[1]=c=>e(l).prop.step=c)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.min",label:"\u6700\u5C0F\u503C"},{default:t(()=>[a(b,{modelValue:e(l).prop.min,"onUpdate:modelValue":p[2]||(p[2]=c=>e(l).prop.min=c)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.max",label:"\u6700\u5927\u503C"},{default:t(()=>[a(b,{modelValue:e(l).prop.max,"onUpdate:modelValue":p[3]||(p[3]=c=>e(l).prop.max=c)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.controlsPosition",label:"\u4F4D\u7F6E"},{default:t(()=>[a(s,{modelValue:e(l).prop.controlsPosition,"onUpdate:modelValue":p[4]||(p[4]=c=>e(l).prop.controlsPosition=c),clearable:""},{default:t(()=>[(u(!0),k(C,null,B(f,c=>(u(),v(y,{key:c.value,value:c.value,label:c.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})],64)}}}),Vl=h({__name:"SwitchAttr",setup(n){const i=F(),{curFormItem:l}=A(i);return(f,o)=>{const p=R,d=S;return u(),k(C,null,[a(d,{prop:"prop.activeText",label:"\u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0"},{default:t(()=>[a(p,{modelValue:e(l).prop.activeText,"onUpdate:modelValue":o[0]||(o[0]=r=>e(l).prop.activeText=r)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.inactiveText",label:"\u5173\u95ED\u65F6\u7684\u6587\u5B57\u63CF\u8FF0"},{default:t(()=>[a(p,{modelValue:e(l).prop.inactiveText,"onUpdate:modelValue":o[1]||(o[1]=r=>e(l).prop.inactiveText=r)},null,8,["modelValue"])]),_:1})],64)}}}),hl=h({__name:"GridAttr",setup(n){const i=F(),{curFormItem:l}=A(i),f=K([{field:"span",label:"\u6805\u683C\u5360\u636E\u7684\u5217\u6570"}]);return(o,p)=>{const d=fe,r=S,b=ae;return u(),k(C,null,[a(r,{prop:"prop.cols",label:"\u6805\u683C\u5E03\u5C40"},{default:t(()=>[a(d,{data:e(l).prop.cols,"column-config":f},null,8,["data","column-config"])]),_:1}),a(r,{prop:"prop.gutter",label:"\u6805\u683C\u95F4\u9694"},{default:t(()=>[a(b,{modelValue:e(l).prop.gutter,"onUpdate:modelValue":p[0]||(p[0]=y=>e(l).prop.gutter=y)},null,8,["modelValue"])]),_:1})],64)}}}),kl=h({__name:"CardAttr",setup(n){const i=F(),{curFormItem:l}=A(i),f=M([{label:"always",value:"always"},{label:"never",value:"never"},{label:"hover",value:"hover"}]);return(o,p)=>{const d=R,r=S,b=te,y=re;return u(),k(C,null,[a(r,{prop:"prop.header",label:"\u5361\u7247\u540D\u79F0"},{default:t(()=>[a(d,{modelValue:e(l).prop.header,"onUpdate:modelValue":p[0]||(p[0]=s=>e(l).prop.header=s)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.shadow",label:"\u9634\u5F71\u663E\u793A\u65F6\u673A"},{default:t(()=>[a(y,{modelValue:e(l).prop.shadow,"onUpdate:modelValue":p[1]||(p[1]=s=>e(l).prop.shadow=s)},{default:t(()=>[(u(!0),k(C,null,B(f.value,s=>(u(),v(b,{key:s.value,value:s.value,label:s.label},{default:t(()=>[w(W(s.label),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})],64)}}});var Ie=(n=>(n.large="large",n.default="default",n.small="small",n))(Ie||{}),Ce=(n=>(n.primary="primary",n.success="success",n.warning="warning",n.danger="danger",n.info="info",n))(Ce||{});const Ul=h({__name:"ButtonAttr",setup(n){const i=F(),{curFormItem:l}=A(i);return(f,o)=>{const p=R,d=S,r=te,b=re,y=le,s=$e;return u(),k(C,null,[a(d,{prop:"prop.name",label:"\u6309\u94AE\u540D\u79F0"},{default:t(()=>[a(p,{modelValue:e(l).prop.name,"onUpdate:modelValue":o[0]||(o[0]=c=>e(l).prop.name=c)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.size",label:"\u6309\u94AE\u5C3A\u5BF8"},{default:t(()=>[a(b,{modelValue:e(l).prop.size,"onUpdate:modelValue":o[1]||(o[1]=c=>e(l).prop.size=c)},{default:t(()=>[(u(),k(C,null,B(Ie,c=>a(r,{key:c,value:c,label:c},{default:t(()=>[w(W(c),1)]),_:2},1032,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),a(d,{prop:"prop.type",label:"\u6309\u94AE\u7C7B\u578B"},{default:t(()=>[a(b,{modelValue:e(l).prop.type,"onUpdate:modelValue":o[2]||(o[2]=c=>e(l).prop.type=c),clearable:""},{default:t(()=>[(u(),k(C,null,B(Ce,c=>a(r,{key:c,value:c,label:c},{default:t(()=>[w(W(c),1)]),_:2},1032,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),a(d,{prop:"prop.plain",label:"\u6734\u7D20\u6309\u94AE"},{default:t(()=>[a(y,{modelValue:e(l).prop.plain,"onUpdate:modelValue":o[3]||(o[3]=c=>e(l).prop.plain=c)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.text",label:"\u6587\u5B57\u6309\u94AE"},{default:t(()=>[a(y,{modelValue:e(l).prop.text,"onUpdate:modelValue":o[4]||(o[4]=c=>e(l).prop.text=c)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.bg",label:"\u663E\u793A\u6587\u5B57\u6309\u94AE\u80CC\u666F\u989C\u8272"},{default:t(()=>[a(y,{modelValue:e(l).prop.bg,"onUpdate:modelValue":o[5]||(o[5]=c=>e(l).prop.bg=c)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.link",label:"\u94FE\u63A5\u6309\u94AE"},{default:t(()=>[a(y,{modelValue:e(l).prop.link,"onUpdate:modelValue":o[6]||(o[6]=c=>e(l).prop.link=c)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.round",label:"\u5706\u89D2\u6309\u94AE"},{default:t(()=>[a(y,{modelValue:e(l).prop.round,"onUpdate:modelValue":o[7]||(o[7]=c=>e(l).prop.round=c)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.circle",label:"\u5706\u5F62\u6309\u94AE"},{default:t(()=>[a(y,{modelValue:e(l).prop.circle,"onUpdate:modelValue":o[8]||(o[8]=c=>e(l).prop.circle=c)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.disabled",label:"\u7981\u7528"},{default:t(()=>[a(y,{modelValue:e(l).prop.disabled,"onUpdate:modelValue":o[9]||(o[9]=c=>e(l).prop.disabled=c)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.clickEvent",label:"\u70B9\u51FB\u4E8B\u4EF6"},{default:t(()=>[a(s,{code:e(l).prop.clickEvent,"onUpdate:code":o[10]||(o[10]=c=>e(l).prop.clickEvent=c),style:{width:"100%",height:"200px"}},null,8,["code"])]),_:1})],64)}}}),Il=h({__name:"CollapseAttr",setup(n){const i=F(),{curFormItem:l}=A(i);return(f,o)=>{const p=R,d=S;return u(),v(d,{prop:"prop.title",label:"\u6298\u53E0\u9762\u677F\u540D\u79F0"},{default:t(()=>[a(p,{modelValue:e(l).prop.title,"onUpdate:modelValue":o[0]||(o[0]=r=>e(l).prop.title=r)},null,8,["modelValue"])]),_:1})}}}),Cl=h({name:"EvFormAttr"}),xl=h({...Cl,setup(n){const i=F(),{curFormItem:l}=A(i);return(f,o)=>{const p=be;return u(),v(p,{model:e(l),"label-width":"110px","label-position":"left"},{default:t(()=>[a(il),e(l).comp=="input"?(u(),v(cl,{key:0})):g("",!0),e(l).comp=="textarea"?(u(),v(fl,{key:1})):g("",!0),e(l).comp=="select"?(u(),v(bl,{key:2})):g("",!0),e(l).comp=="checkbox"?(u(),v(vl,{key:3})):g("",!0),e(l).comp=="date"?(u(),v(yl,{key:4})):g("",!0),e(l).comp=="time"?(u(),v(_l,{key:5})):g("",!0),e(l).comp=="number"?(u(),v(gl,{key:6})):g("",!0),e(l).comp=="switch"?(u(),v(Vl,{key:7})):g("",!0),e(l).comp=="button"?(u(),v(Ul,{key:8})):g("",!0),e(l).comp=="grid"?(u(),v(hl,{key:9})):g("",!0),e(l).comp=="card"?(u(),v(kl,{key:10})):g("",!0),e(l).comp=="collapse"?(u(),v(Il,{key:11})):g("",!0)]),_:1},8,["model"])}}}),wl=h({name:"dropGrid"}),Fl=h({...wl,props:{cols:{type:Array,required:!0}},setup(n){const i=n,{cols:l}=ve(i);return(f,o)=>{const p=Xo,d=Go;return u(),v(d,oe(ye(f.$attrs)),{default:t(()=>[(u(!0),k(C,null,B(e(l),r=>(u(),v(p,{key:r.key,span:Number(r.span),class:"col"},{default:t(()=>[a(pe,{list:r.list,"onUpdate:list":b=>r.list=b},null,8,["list","onUpdate:list"])]),_:2},1032,["span"]))),128))]),_:1},16)}}}),Al=X(Fl,[["__scopeId","data-v-80026d22"]]),Ol=h({name:"dropCard"}),Pl=h({...Ol,props:{card:{type:Object,required:!0}},setup(n){const i=n,{card:l}=ve(i);return(f,o)=>{const p=Qo;return u(),v(p,oe(ye(f.$attrs)),{default:t(()=>[a(pe,{list:e(l).list,"onUpdate:list":o[0]||(o[0]=d=>e(l).list=d),style:{"min-height":"40px"}},null,8,["list"])]),_:1},16)}}}),Sl=X(Pl,[["__scopeId","data-v-7a657d78"]]),Dl=h({name:"dropCard"}),Ml=h({...Dl,props:{collapse:{type:Object,required:!0},title:{type:String,required:!0,default:"\u6807\u9898"}},setup(n){const i=n,{collapse:l,title:f}=ve(i);return(o,p)=>{const d=Zo,r=ea;return u(),v(r,oe(ye(o.$attrs)),{default:t(()=>[a(d,{title:e(f),name:e(f)},{default:t(()=>[a(pe,{list:e(l).list,"onUpdate:list":p[0]||(p[0]=b=>e(l).list=b),style:{"min-height":"40px"}},null,8,["list"])]),_:1},8,["title","name"])]),_:1},16)}}}),Rl=X(Ml,[["__scopeId","data-v-fbcd0f50"]]),zl=["onClick"],ql={key:1},Tl=["onClick"],Bl=h({name:"dropComp"}),$l=h({...Bl,props:{list:{type:Array,required:!0,default:()=>[]}},emits:["update:list"],setup(n,{emit:i}){const l=n,f=F(),{formData:o,curFormItem:p}=A(f),{onClickFormItem:d}=f,r=ee({get(){return l.list},set(s){i("update:list",s)}}),b=s=>{const c=r.value.findIndex(_=>_.compId==s.compId);r.value.splice(c,1)},y=s=>{if(s&&s.dataTransfer){const c=s.dataTransfer.getData("comp");let _=JSON.parse(c);r.value.push(_)}};return(s,c)=>{const _=R,I=te,q=re,D=la,$=oa,N=aa,O=ta,H=ra,E=ae,L=le,G=Ne,Y=S;return u(),v(e(ia),{modelValue:e(r),"onUpdate:modelValue":c[0]||(c[0]=m=>Fe(r)?r.value=m:null),"item-key":"compId",group:"comp",class:"drop_container",onDrop:_e(y,["prevent","stop"]),onDragover:c[1]||(c[1]=_e(()=>{},["prevent"]))},{item:t(({element:m})=>[x("div",{class:J(["drop_container_item",e(p).compId==m.compId?"drop_container_item-active":""]),onClick:_e(V=>e(d)(m),["stop"])},[m.type=="component"?(u(),v(Y,P({key:0,prop:m.prop.field},m.form_config),{default:t(()=>[m.comp=="input"?(u(),v(_,P({key:m.compId,modelValue:e(o)[m.prop.field],"onUpdate:modelValue":V=>e(o)[m.prop.field]=V},m.prop),null,16,["modelValue","onUpdate:modelValue"])):g("",!0),m.comp=="textarea"?(u(),v(_,P({key:m.compId,modelValue:e(o)[m.prop.field],"onUpdate:modelValue":V=>e(o)[m.prop.field]=V},m.prop),null,16,["modelValue","onUpdate:modelValue"])):g("",!0),m.comp=="select"?(u(),v(q,P({key:2},m.prop,{key:m.compId,modelValue:e(o)[m.prop.field],"onUpdate:modelValue":V=>e(o)[m.prop.field]=V}),{default:t(()=>[(u(!0),k(C,null,B(m.prop.options,V=>(u(),v(I,{key:V.value,value:V.value,label:V.label},null,8,["value","label"]))),128))]),_:2},1040,["modelValue","onUpdate:modelValue"])):g("",!0),m.comp=="color"?(u(),v(D,P({key:3},m.prop,{key:m.compId,modelValue:e(o)[m.prop.field],"onUpdate:modelValue":V=>e(o)[m.prop.field]=V}),null,16,["modelValue","onUpdate:modelValue"])):g("",!0),m.comp=="checkbox"?(u(),v(N,P({key:4},m.prop,{key:m.compId,modelValue:e(o)[m.prop.field],"onUpdate:modelValue":V=>e(o)[m.prop.field]=V}),{default:t(()=>[(u(!0),k(C,null,B(m.prop.options,V=>(u(),v($,{key:V.value,label:V.value},{default:t(()=>[w(W(V.label),1)]),_:2},1032,["label"]))),128))]),_:2},1040,["modelValue","onUpdate:modelValue"])):g("",!0),m.comp=="date"?(u(),v(O,P({key:5},m.prop,{key:m.compId,modelValue:e(o)[m.prop.field],"onUpdate:modelValue":V=>e(o)[m.prop.field]=V}),null,16,["modelValue","onUpdate:modelValue"])):g("",!0),m.comp=="time"?(u(),v(H,P({key:6},m.prop,{key:m.compId,modelValue:e(o)[m.prop.field],"onUpdate:modelValue":V=>e(o)[m.prop.field]=V}),null,16,["modelValue","onUpdate:modelValue"])):g("",!0),m.comp=="number"?(u(),v(E,P({key:7},m.prop,{key:m.compId,modelValue:e(o)[m.prop.field],"onUpdate:modelValue":V=>e(o)[m.prop.field]=V}),null,16,["modelValue","onUpdate:modelValue"])):g("",!0),m.comp=="switch"?(u(),v(L,P({key:8},m.prop,{key:m.compId,modelValue:e(o)[m.prop.field],"onUpdate:modelValue":V=>e(o)[m.prop.field]=V}),null,16,["modelValue","onUpdate:modelValue"])):g("",!0),m.comp=="button"?(u(),v(G,P({key:9},m.prop,{key:m.compId}),{default:t(()=>[w(W(m.prop.name),1)]),_:2},1040)):g("",!0)]),_:2},1040,["prop"])):g("",!0),m.type=="container"?(u(),k("div",ql,[m.comp=="grid"?(u(),v(Al,oe(P({key:0},m.prop)),null,16)):g("",!0),m.comp=="card"?(u(),v(Sl,oe(P({key:1},m.prop)),null,16)):g("",!0),m.comp=="collapse"?(u(),v(Rl,oe(P({key:2},m.prop)),null,16)):g("",!0)])):g("",!0),x("div",{class:"drop_container_item_opt iconfont icon-a-shanchulajitong",onClick:V=>b(m)},null,8,Tl)],10,zl)]),_:1},8,["modelValue","onDrop"])}}}),pe=X($l,[["__scopeId","data-v-a2f7a2bf"]]),Nl={class:"container"},El=h({__name:"dropContainer",setup(n){const i=F(),{saveForm:l}=A(i);return(f,o)=>{const p=be;return u(),k("div",Nl,[a(p,P(e(l).formProp,{style:{width:"100%",height:"100%"}}),{default:t(()=>[a(pe,{list:e(l).list,"onUpdate:list":o[0]||(o[0]=d=>e(l).list=d)},null,8,["list"])]),_:1},16)])}}}),Ll=X(El,[["__scopeId","data-v-09f15553"]]),Yl=[{comp:"input",compId:"1",name:"\u8F93\u5165\u6846",type:"component",prop:{placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"1",clearable:!0,showPassword:!1},form_config:{label:"\u8F93\u5165\u6846",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"textarea",compId:"1",name:"\u6587\u672C\u57DF",type:"component",prop:{placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"1",type:"textarea",rows:2},form_config:{label:"\u6587\u672C\u57DF",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"select",compId:"2",name:"\u9009\u62E9\u6846",type:"component",prop:{options:[{value:1,label:1,key:1}],placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"2",clearable:!0,filterable:!0},form_config:{label:"\u9009\u62E9\u6846",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"color",compId:"3",name:"\u53D6\u8272\u5668",type:"component",prop:{readonly:!1,disabled:!1,field:"3"},form_config:{label:"\u53D6\u8272\u5668",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"checkbox",compId:"4",name:"\u591A\u9009\u6846",type:"component",prop:{options:[{value:1,label:1},{value:2,label:2}],placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"4"},form_config:{label:"\u591A\u9009\u6846",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"date",compId:"5",name:"\u65E5\u671F\u9009\u62E9\u5668",type:"component",prop:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD",type:"date",placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"5"},form_config:{label:"\u65E5\u671F\u9009\u62E9\u5668",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"number",compId:"6",name:"\u6570\u5B57\u8F93\u5165\u6846",type:"component",prop:{placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"6",step:1,min:0,max:100,controlsPosition:"right"},form_config:{label:"\u6570\u5B57\u8F93\u5165\u6846",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"switch",compId:"7",name:"\u5F00\u5173",type:"component",prop:{placeholder:"\u8F93\u5165\u63D0\u793A",disabled:!1,field:"6",activeText:"",inactiveText:""},form_config:{label:"\u5F00\u5173",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"time",compId:"7",name:"\u65F6\u95F4\u9009\u62E9\u5668",type:"component",prop:{placeholder:"\u8F93\u5165\u63D0\u793A",format:"HH:mm:ss",isRange:!1,arrowControl:!1,clearable:!1,editable:!1,readonly:!1,disabled:!1,field:"6"},form_config:{label:"\u65F6\u95F4\u9009\u62E9\u5668",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"button",compId:"7",name:"\u6309\u94AE",type:"component",prop:{round:!1,link:!1,bg:!1,text:!1,plain:!1,disabled:!1,field:"6",name:"\u6309\u94AE",size:"default",type:"info",clickEvent:""}},{comp:"grid",compId:"",name:"\u6805\u683C",type:"container",prop:{cols:[{list:[],key:ge(),span:12},{list:[],key:ge(),span:12}],gutter:0,field:""}},{comp:"card",compId:"",name:"\u5361\u7247\u5BB9\u5668",type:"container",prop:{card:{list:[]},field:"",header:"\u5361\u7247\u5BB9\u5668\u6807\u9898",shadow:"always"}},{comp:"collapse",compId:"",name:"\u6298\u53E0\u9762\u677F",type:"container",prop:{collapse:{list:[]},field:"",title:"\u6298\u53E0\u9762\u677F\u6807\u9898"}}],jl=Yl,xe=n=>(Ee("data-v-a8dba2b8"),n=n(),Le(),n),Jl={class:"comp_container"},Hl=xe(()=>x("div",{class:"title"}," \u8868\u5355\u7EC4\u4EF6 ",-1)),Wl={class:"com-list"},Kl={class:"container-list"},Xl={class:"comp_list_container"},Gl=["data-comp"],Ql=xe(()=>x("div",{class:"title"}," \u5BB9\u5668\u7EC4\u4EF6 ",-1)),Zl={class:"container-list"},eo={class:"comp_list_container"},lo=["data-comp"],oo=h({__name:"dragCompList",setup(n){const i=M([]),l=M([]);jl.forEach(o=>{o.type=="component"?i.value.push(o):o.type=="container"&&l.value.push(o)});const f=o=>{if(o&&o.dataTransfer&&o.target){let p=o.target,d=JSON.parse(p.dataset.comp);d.compId=ge(),d.prop.field=`field${(Math.random()*1e4).toFixed(0)}`,o.dataTransfer.setData("comp",JSON.stringify(d))}};return(o,p)=>(u(),k("div",Jl,[Hl,x("div",Wl,[x("div",Kl,[x("div",Xl,[(u(!0),k(C,null,B(i.value,d=>(u(),k("div",{key:d.compId,class:"comp",draggable:"true","data-comp":JSON.stringify(d),onDragstart:f},W(d.name),41,Gl))),128))])])]),Ql,x("div",Zl,[x("div",eo,[(u(!0),k(C,null,B(l.value,d=>(u(),k("div",{key:d.compId,class:"comp",draggable:"true","data-comp":JSON.stringify(d),onDragstart:f},W(d.name),41,lo))),128))])])]))}}),ao=X(oo,[["__scopeId","data-v-a8dba2b8"]]),to=h({name:"FormAttr"}),ro=h({...to,setup(n){const i=F(),{saveForm:l}=A(i);return(f,o)=>{const p=Te,d=Be,r=S,b=ae,y=be;return u(),v(y,{model:e(l).formProp,"label-width":"130px","label-position":"left"},{default:t(()=>[a(r,{prop:"size",label:"\u5927\u5C0F"},{default:t(()=>[a(d,{modelValue:e(l).formProp.size,"onUpdate:modelValue":o[0]||(o[0]=s=>e(l).formProp.size=s),label:"size control"},{default:t(()=>[a(p,{label:"large"},{default:t(()=>[w("large")]),_:1}),a(p,{label:"default"},{default:t(()=>[w("default")]),_:1}),a(p,{label:"small"},{default:t(()=>[w("small")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(r,{prop:"labelPosition",label:"\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E"},{default:t(()=>[a(d,{modelValue:e(l).formProp.labelPosition,"onUpdate:modelValue":o[1]||(o[1]=s=>e(l).formProp.labelPosition=s),label:"position control"},{default:t(()=>[a(p,{label:"left"},{default:t(()=>[w("Left")]),_:1}),a(p,{label:"right"},{default:t(()=>[w("Right")]),_:1}),a(p,{label:"top"},{default:t(()=>[w("Top")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(r,{prop:"labelWidth",label:"\u8868\u5355\u57DF\u6807\u7B7E\u5BBD\u5EA6"},{default:t(()=>[a(b,{modelValue:e(l).formProp.labelWidth,"onUpdate:modelValue":o[2]||(o[2]=s=>e(l).formProp.labelWidth=s),step:1,min:0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])}}}),po=n=>(Ee("data-v-c12b6129"),n=n(),Le(),n),no={class:"form_name"},uo=po(()=>x("span",null," \u8868\u5355\u540D\u79F0 ",-1)),so={class:"form_opt"},mo=h({__name:"formHeader",setup(n){const i=F(),{saveForm:l}=A(i),f=()=>{Ve(JSON.stringify(l.value,null,4),l.value.name)},o=pa({title:"\u9884\u89C8",content:na,componentProps:{formConfig:l.value}}),p=()=>{o.open()},d=_=>{_==2?Ve(da(l.value),l.value.name,"vue"):Ve(ua(l.value),l.value.name,"vue")},r=M(!1),b=()=>{r.value=!0},y=M(""),{setForm:s}=i,c=()=>{const _=JSON.parse(y.value);s(_),r.value=!1};return(_,I)=>{const q=R,D=Ne,$=$e,N=ml;return u(),k(C,null,[x("div",no,[uo,a(q,{modelValue:e(l).name,"onUpdate:modelValue":I[0]||(I[0]=O=>e(l).name=O)},null,8,["modelValue"])]),x("div",so,[a(D,{onClick:b},{default:t(()=>[w(" \u5199\u5165JSON ")]),_:1}),a(D,{onClick:p},{default:t(()=>[w(" \u9884\u89C8 ")]),_:1}),a(D,{onClick:f},{default:t(()=>[w(" \u5BFC\u51FAJSON ")]),_:1}),a(D,{onClick:I[1]||(I[1]=O=>d(3))},{default:t(()=>[w(" \u5BFC\u51FAVUE\u6587\u4EF6(vue3) ")]),_:1}),a(D,{onClick:I[2]||(I[2]=O=>d(2))},{default:t(()=>[w(" \u5BFC\u51FAVUE\u6587\u4EF6(vue2) ")]),_:1})]),a(N,{modelValue:r.value,"onUpdate:modelValue":I[4]||(I[4]=O=>r.value=O),title:"JSON\u914D\u7F6E"},{footer:t(()=>[a(D,{onClick:c},{default:t(()=>[w(" \u786E\u8BA4 ")]),_:1})]),default:t(()=>[a($,{code:y.value,"onUpdate:code":I[3]||(I[3]=O=>y.value=O)},null,8,["code"])]),_:1},8,["modelValue"])],64)}}}),io=X(mo,[["__scopeId","data-v-c12b6129"]]),co={class:"form-design"},fo={class:"form-design_header"},bo={class:"form-design_container"},vo={class:"form-design_opt"},yo=h({__name:"FormDesign",setup(n){const i=M("comp");return(l,f)=>{const o=xl,p=ca,d=fa;return u(),k("div",co,[x("div",fo,[a(io)]),x("div",bo,[a(ao),a(Ll),x("div",vo,[a(d,{modelValue:i.value,"onUpdate:modelValue":f[0]||(f[0]=r=>i.value=r)},{default:t(()=>[a(p,{label:"\u7EC4\u4EF6\u914D\u7F6E",name:"comp"},{default:t(()=>[a(o)]),_:1}),a(p,{label:"\u8868\u5355\u914D\u7F6E",name:"form"},{default:t(()=>[a(ro)]),_:1})]),_:1},8,["modelValue"])])])])}}});Ye=X(yo,[["__scopeId","data-v-bfe48856"]])});export{va as __tla,Ye as default};