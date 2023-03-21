import{ac as Fe,ad as ee,P as Re,ae as Le,af as N,ag as Se,ah as _e,H as X,ai as ze,aj as oe,ak as te,I as q,al as De,am as Oe,an as Pe,ao as Te,ap as Ye,aq as H,s as j,C as V,d as P,b as T,ar as G,as as h,$ as Ne,t as Xe,G as qe,B as ae,at as He,v as L,o as S,c as J,f as Y,O as C,u as o,x as je,w as I,j as K,y as Ve,z as Ge,Q as U,au as le,A as se,av as Je,aw as ne,ax as Ke,ay as Ue,az as ue,h as B,aA as Qe,aB as We,aC as Ze,X as eo,aD as re,aE as oo,aF as de,Y as to,a4 as ao,aG as lo,aH as so,aI as no,aJ as uo,aK as ro,aL as co,a0 as io,__tla as fo}from"./index.25c7b428.js";let ce,po=Promise.all([(()=>{try{return fo}catch{}})()]).then(async()=>{const ie=(...e)=>l=>{e.forEach(t=>{Fe(t)?t(l):t.value=l})},Q=Symbol("dialogInjectionKey"),fe=(e,l,t)=>{let u={offsetX:0,offsetY:0};const r=a=>{const c=a.clientX,p=a.clientY,{offsetX:v,offsetY:d}=u,s=e.value.getBoundingClientRect(),b=s.left,k=s.top,_=s.width,z=s.height,D=document.documentElement.clientWidth,$=document.documentElement.clientHeight,F=-b+v,w=-k+d,M=D-b-_+v,O=$-k-z+d,x=R=>{const n=Math.min(Math.max(v+R.clientX-c,F),M),g=Math.min(Math.max(d+R.clientY-p,w),O);u={offsetX:n,offsetY:g},e.value.style.transform=`translate(${N(n)}, ${N(g)})`},m=()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",m)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",m)},i=()=>{l.value&&e.value&&l.value.addEventListener("mousedown",r)},f=()=>{l.value&&e.value&&l.value.removeEventListener("mousedown",r)};ee(()=>{Re(()=>{t.value?i():f()})}),Le(()=>{f()})},pe=e=>{Se(e)||_e("[useLockscreen]","You need to pass a ref param to this function");const l=X("popup"),t=ze(()=>l.bm("parent","hidden"));if(!oe||te(document.body,t.value))return;let u=0,r=!1,i="0";const f=()=>{setTimeout(()=>{Ye(document.body,t.value),r&&(document.body.style.width=i)},200)};q(e,a=>{if(!a){f();return}r=!te(document.body,t.value),r&&(i=document.body.style.width),u=De(l.namespace.value);const c=document.documentElement.clientHeight<document.body.scrollHeight,p=Oe(document.body,"overflowY");u>0&&(c||p==="scroll")&&r&&(document.body.style.width=`calc(100% - ${u}px)`),Pe(document.body,t.value)}),Te(()=>f())},W=e=>{if(!e)return{onClick:H,onMousedown:H,onMouseup:H};let l=!1,t=!1;return{onClick:u=>{l&&t&&e(u),l=t=!1},onMousedown:u=>{l=u.target===u.currentTarget},onMouseup:u=>{t=u.target===u.currentTarget}}},me=j({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:V([String,Array,Object])},zIndex:{type:V([String,Number])}});var ve=P({name:"ElOverlay",props:me,emits:{click:e=>e instanceof MouseEvent},setup(e,{slots:l,emit:t}){const u=X("overlay"),r=c=>{t("click",c)},{onClick:i,onMousedown:f,onMouseup:a}=W(e.customMaskEvent?void 0:r);return()=>e.mask?T("div",{class:[u.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:i,onMousedown:f,onMouseup:a},[h(l,"default")],G.STYLE|G.CLASS|G.PROPS,["onClick","onMouseup","onMousedown"]):Ne("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[h(l,"default")])}});const ye=ve,Z=j({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:Xe},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),ge={close:()=>!0},be=["aria-label"],he=["id"],Ce=P({name:"ElDialogContent"}),ke=P({...Ce,props:Z,emits:ge,setup(e){const l=e,{t}=qe(),{Close:u}=Je,{dialogRef:r,headerRef:i,bodyId:f,ns:a,style:c}=ae(Q),{focusTrapRef:p}=ae(He),v=ie(p,r),d=L(()=>l.draggable);return fe(r,i,d),(s,b)=>(S(),J("div",{ref:o(v),class:C([o(a).b(),o(a).is("fullscreen",s.fullscreen),o(a).is("draggable",o(d)),o(a).is("align-center",s.alignCenter),{[o(a).m("center")]:s.center},s.customClass]),style:le(o(c)),tabindex:"-1"},[Y("header",{ref_key:"headerRef",ref:i,class:C(o(a).e("header"))},[h(s.$slots,"header",{},()=>[Y("span",{role:"heading",class:C(o(a).e("title"))},je(s.title),3)]),s.showClose?(S(),J("button",{key:0,"aria-label":o(t)("el.dialog.close"),class:C(o(a).e("headerbtn")),type:"button",onClick:b[0]||(b[0]=k=>s.$emit("close"))},[T(o(Ge),{class:C(o(a).e("close"))},{default:I(()=>[(S(),K(Ve(s.closeIcon||o(u))))]),_:1},8,["class"])],10,be)):U("v-if",!0)],2),Y("div",{id:o(f),class:C(o(a).e("body"))},[h(s.$slots,"default")],10,he),s.$slots.footer?(S(),J("footer",{key:0,class:C(o(a).e("footer"))},[h(s.$slots,"footer")],2)):U("v-if",!0)],6))}});var we=se(ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Me=j({...Z,appendToBody:{type:Boolean,default:!1},beforeClose:{type:V(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),xe={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ne]:e=>Ke(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ee=(e,l)=>{const t=eo().emit,{nextZIndex:u}=Ue();let r="";const i=ue(),f=ue(),a=B(!1),c=B(!1),p=B(!1),v=B(e.zIndex||u());let d,s;const b=Qe("namespace",We),k=L(()=>{const y={},A=`--${b.value}-dialog`;return e.fullscreen||(e.top&&(y[`${A}-margin-top`]=e.top),e.width&&(y[`${A}-width`]=N(e.width))),y}),_=L(()=>e.alignCenter?{display:"flex"}:{});function z(){t("opened")}function D(){t("closed"),t(ne,!1),e.destroyOnClose&&(p.value=!1)}function $(){t("close")}function F(){s==null||s(),d==null||d(),e.openDelay&&e.openDelay>0?{stop:d}=re(()=>x(),e.openDelay):x()}function w(){d==null||d(),s==null||s(),e.closeDelay&&e.closeDelay>0?{stop:s}=re(()=>m(),e.closeDelay):m()}function M(){function y(A){A||(c.value=!0,a.value=!1)}e.beforeClose?e.beforeClose(y):w()}function O(){e.closeOnClickModal&&M()}function x(){!oe||(a.value=!0)}function m(){a.value=!1}function R(){t("openAutoFocus")}function n(){t("closeAutoFocus")}function g(y){var A;((A=y.detail)==null?void 0:A.focusReason)==="pointer"&&y.preventDefault()}e.lockScroll&&pe(a);function E(){e.closeOnPressEscape&&M()}return q(()=>e.modelValue,y=>{y?(c.value=!1,F(),p.value=!0,v.value=e.zIndex?v.value++:u(),Ze(()=>{t("open"),l.value&&(l.value.scrollTop=0)})):a.value&&w()}),q(()=>e.fullscreen,y=>{!l.value||(y?(r=l.value.style.transform,l.value.style.transform=""):l.value.style.transform=r)}),ee(()=>{e.modelValue&&(a.value=!0,p.value=!0,F())}),{afterEnter:z,afterLeave:D,beforeLeave:$,handleClose:M,onModalClick:O,close:w,doClose:m,onOpenAutoFocus:R,onCloseAutoFocus:n,onCloseRequested:E,onFocusoutPrevented:g,titleId:i,bodyId:f,closed:c,style:k,overlayDialogStyle:_,rendered:p,visible:a,zIndex:v}},Ae=["aria-label","aria-labelledby","aria-describedby"],Ie=P({name:"ElDialog",inheritAttrs:!1}),Be=P({...Ie,props:Me,emits:xe,setup(e,{expose:l}){const t=e,u=oo();de({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},L(()=>!!u.title)),de({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},L(()=>!!t.customClass));const r=X("dialog"),i=B(),f=B(),a=B(),{visible:c,titleId:p,bodyId:v,style:d,overlayDialogStyle:s,rendered:b,zIndex:k,afterEnter:_,afterLeave:z,beforeLeave:D,handleClose:$,onModalClick:F,onOpenAutoFocus:w,onCloseAutoFocus:M,onCloseRequested:O,onFocusoutPrevented:x}=Ee(t,i);to(Q,{dialogRef:i,headerRef:f,bodyId:v,ns:r,rendered:b,style:d});const m=W(F),R=L(()=>t.draggable&&!t.fullscreen);return l({visible:c,dialogContentRef:a}),(n,g)=>(S(),K(co,{to:"body",disabled:!n.appendToBody},[T(ro,{name:"dialog-fade",onAfterEnter:o(_),onAfterLeave:o(z),onBeforeLeave:o(D),persisted:""},{default:I(()=>[ao(T(o(ye),{"custom-mask-event":"",mask:n.modal,"overlay-class":n.modalClass,"z-index":o(k)},{default:I(()=>[Y("div",{role:"dialog","aria-modal":"true","aria-label":n.title||void 0,"aria-labelledby":n.title?void 0:o(p),"aria-describedby":o(v),class:C(`${o(r).namespace.value}-overlay-dialog`),style:le(o(s)),onClick:g[0]||(g[0]=(...E)=>o(m).onClick&&o(m).onClick(...E)),onMousedown:g[1]||(g[1]=(...E)=>o(m).onMousedown&&o(m).onMousedown(...E)),onMouseup:g[2]||(g[2]=(...E)=>o(m).onMouseup&&o(m).onMouseup(...E))},[T(o(lo),{loop:"",trapped:o(c),"focus-start-el":"container",onFocusAfterTrapped:o(w),onFocusAfterReleased:o(M),onFocusoutPrevented:o(x),onReleaseRequested:o(O)},{default:I(()=>[o(b)?(S(),K(we,so({key:0,ref_key:"dialogContentRef",ref:a},n.$attrs,{"custom-class":n.customClass,center:n.center,"align-center":n.alignCenter,"close-icon":n.closeIcon,draggable:o(R),fullscreen:n.fullscreen,"show-close":n.showClose,title:n.title,onClose:o($)}),no({header:I(()=>[n.$slots.title?h(n.$slots,"title",{key:1}):h(n.$slots,"header",{key:0,close:o($),titleId:o(p),titleClass:o(r).e("title")})]),default:I(()=>[h(n.$slots,"default")]),_:2},[n.$slots.footer?{name:"footer",fn:I(()=>[h(n.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):U("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Ae)]),_:3},8,["mask","overlay-class","z-index"]),[[uo,o(c)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var $e=se(Be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);ce=io($e)});export{ce as E,po as __tla};
