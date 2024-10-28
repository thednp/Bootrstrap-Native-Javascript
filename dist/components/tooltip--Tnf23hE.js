"use strict";const t=require("./base-component-D3rSrWwH.js"),q=require("./event-listener-W3RGkfJ6.js"),vt=require("./index-BRPRSfaI.js"),bt=require("./dataBsToggle-Dj-Ng54N.js"),Z=require("./showClass-D_Ms1FgG.js"),N=require("./popupContainer-D8In9VFi.js"),st=require("./fadeClass-Co6nOzNJ.js"),z="popover",ot="Popover",C="tooltip",rt=i=>{const e=i===C,s=e?`${i}-inner`:`${i}-body`,o=e?"":`<h3 class="${i}-header"></h3>`,n=`<div class="${i}-arrow"></div>`,l=`<div class="${s}"></div>`;return`<div class="${i}" role="${C}">${o+n+l}</div>`},ct={top:"top",bottom:"bottom",left:"start",right:"end"},tt=i=>{const e=/\b(top|bottom|start|end)+/,{element:s,tooltip:o,container:n,options:l,arrow:c}=i;if(o){const m={...ct},p=t.isRTL(s);t.setElementStyle(o,{top:"",left:"",right:"",bottom:""});const f=i.name===ot,{offsetWidth:r,offsetHeight:g}=o,{clientWidth:P,clientHeight:b,offsetWidth:B}=t.getDocumentElement(s);let{placement:a}=l;const{clientWidth:E,offsetWidth:T}=n,H=t.getElementStyle(n,"position")==="fixed",d=Math.abs(H?E-T:P-B),L=p&&H?d:0,w=P-(p?0:d)-1,{width:u,height:v,left:h,right:ft,top:D}=t.getBoundingClientRect(s,!0),{x:U,y:R}={x:h,y:D};t.setElementStyle(c,{top:"",left:"",right:"",bottom:""});let x=0,O="",y=0,K="",W="",Y="",Q="";const A=c.offsetWidth||0,$=c.offsetHeight||0,V=A/2;let _=D-g-$<0,k=D+g+v+$>=b,I=h-r-A<L,F=h+r+u+A>=w;const G=["left","right"],X=["top","bottom"];_=G.includes(a)?D+v/2-g/2-$<0:_,k=G.includes(a)?D+g/2+v/2+$>=b:k,I=X.includes(a)?h+u/2-r/2<L:I,F=X.includes(a)?h+r/2+u/2>=w:F,a=G.includes(a)&&I&&F?"top":a,a=a==="top"&&_?"bottom":a,a=a==="bottom"&&k?"top":a,a=a==="left"&&I?"right":a,a=a==="right"&&F?"left":a,o.className.includes(a)||(o.className=o.className.replace(e,m[a])),G.includes(a)?(a==="left"?y=U-r-(f?A:0):y=U+u+(f?A:0),_&&k?(x=0,O=0,W=D+v/2-$/2):_?(x=R,O="",W=v/2-A):k?(x=R-g+v,O="",W=g-v/2-A):(x=R-g/2+v/2,W=g/2-$/2)):X.includes(a)&&(a==="top"?x=R-g-(f?$:0):x=R+v+(f?$:0),I?(y=0,Y=U+u/2-V):F?(y="auto",K=0,Q=u/2+w-ft-V):(y=U-r/2+u/2,Y=r/2-V)),t.setElementStyle(o,{top:`${x}px`,bottom:O===""?"":`${O}px`,left:y==="auto"?y:`${y}px`,right:K!==""?`${K}px`:""}),t.isHTMLElement(c)&&(W!==""&&(c.style.top=`${W}px`),Y!==""?c.style.left=`${Y}px`:Q!==""&&(c.style.right=`${Q}px`));const gt=t.createCustomEvent(`updated.bs.${t.toLowerCase(i.name)}`);t.dispatchEvent(s,gt)}},et={template:rt(C),title:"",customClass:"",trigger:"hover focus",placement:"top",sanitizeFn:void 0,animation:!0,delay:200,container:document.body,content:"",dismissible:!1,btnClose:""},dt="data-original-title",M="Tooltip",S=(i,e,s)=>{if(t.isString(e)&&e.length){let o=e.trim();t.isFunction(s)&&(o=s(o));const l=new DOMParser().parseFromString(o,"text/html");i.append(...l.body.childNodes)}else t.isHTMLElement(e)?i.append(e):(t.isNodeList(e)||t.isArray(e)&&e.every(t.isNode))&&i.append(...e)},Et=i=>{const e=i.name===M,{id:s,element:o,options:n}=i,{title:l,placement:c,template:m,animation:p,customClass:f,sanitizeFn:r,dismissible:g,content:P,btnClose:b}=n,B=e?C:z,a={...ct};let E=[],T=[];t.isRTL(o)&&(a.left="end",a.right="start");const J=`bs-${B}-${a[c]}`;let H;if(t.isHTMLElement(m))H=m;else{const L=t.createElement("div");S(L,m,r),H=L.firstChild}i.tooltip=t.isHTMLElement(H)?H.cloneNode(!0):void 0;const{tooltip:d}=i;if(d){t.setAttribute(d,"id",s),t.setAttribute(d,"role",C);const L=e?`${C}-inner`:`${z}-body`,w=e?null:t.querySelector(`.${z}-header`,d),u=t.querySelector(`.${L}`,d);i.arrow=t.querySelector(`.${B}-arrow`,d);const{arrow:v}=i;if(t.isHTMLElement(l))E=[l.cloneNode(!0)];else{const h=t.createElement("div");S(h,l,r),E=[...h.childNodes]}if(t.isHTMLElement(P))T=[P.cloneNode(!0)];else{const h=t.createElement("div");S(h,P,r),T=[...h.childNodes]}if(g)if(l)if(t.isHTMLElement(b))E=[...E,b.cloneNode(!0)];else{const h=t.createElement("div");S(h,b,r),E=[...E,h.firstChild]}else if(w&&w.remove(),t.isHTMLElement(b))T=[...T,b.cloneNode(!0)];else{const h=t.createElement("div");S(h,b,r),T=[...T,h.firstChild]}e?l&&u&&S(u,l,r):(l&&w&&S(w,E,r),P&&u&&S(u,T,r),i.btn=t.querySelector(".btn-close",d)||void 0),t.addClass(d,"position-fixed"),t.addClass(v,"position-absolute"),t.hasClass(d,B)||t.addClass(d,B),p&&!t.hasClass(d,st.fadeClass)&&t.addClass(d,st.fadeClass),f&&!t.hasClass(d,f)&&t.addClass(d,f),t.hasClass(d,J)||t.addClass(d,J)}},Tt=i=>{const e=["HTML","BODY"],s=[];let{parentNode:o}=i;for(;o&&!e.includes(o.nodeName);)o=t.getParentNode(o),t.isShadowRoot(o)||t.isTableElement(o)||s.push(o);return s.find((n,l)=>t.getElementStyle(n,"position")!=="relative"&&s.slice(l+1).every(c=>t.getElementStyle(c,"position")==="static")?n:null)||t.getDocument(i).body},Ct=`[${bt.dataBsToggle}="${C}"],[data-tip="${C}"]`,ht="title";let it=i=>t.getInstance(i,M);const wt=i=>new ut(i),yt=i=>{const{element:e,tooltip:s,container:o,offsetParent:n}=i;t.removeAttribute(e,t.ariaDescribedBy),N.removePopup(s,o===n?o:n)},j=i=>{const{tooltip:e,container:s,offsetParent:o}=i;return e&&N.hasPopup(e,s===o?s:o)},$t=(i,e)=>{const{element:s}=i;i._toggleEventListeners(),t.hasAttribute(s,dt)&&i.name===M&&mt(i),e&&e()},pt=(i,e)=>{const s=e?q.E:q.r,{element:o}=i;s(t.getDocument(o),t.touchstartEvent,i.handleTouch,t.passiveHandler)},nt=i=>{const{element:e}=i,s=t.createCustomEvent(`shown.bs.${t.toLowerCase(i.name)}`);pt(i,!0),t.dispatchEvent(e,s),t.Timer.clear(e,"in")},lt=i=>{const{element:e}=i,s=t.createCustomEvent(`hidden.bs.${t.toLowerCase(i.name)}`);pt(i),yt(i),t.dispatchEvent(e,s),t.Timer.clear(e,"out")},at=(i,e)=>{const s=e?q.E:q.r,{element:o}=i,n=t.closest(o,`.${N.modalString}`),l=t.closest(o,`.${N.offcanvasString}`);e?i._observer.observe(i.element):i._observer.disconnect(),n&&s(n,`hide.bs.${N.modalString}`,i.handleHide),l&&s(l,`hide.bs.${N.offcanvasString}`,i.handleHide)},mt=(i,e)=>{const s=[dt,ht],{element:o}=i;t.setAttribute(o,s[e?0:1],e||t.getAttribute(o,s[0])||""),t.removeAttribute(o,s[e?1:0])};class ut extends t.BaseComponent{static selector=Ct;static init=wt;static getInstance=it;static styleTip=tt;constructor(e,s){super(e,s);const{element:o}=this,n=this.name===M,l=n?C:z,c=n?M:ot;it=p=>t.getInstance(p,c),this.enabled=!0,this.id=`${l}-${t.getUID(o,l)}`;const{options:m}=this;!m.title&&n||!n&&!m.content||(t.ObjectAssign(et,{titleAttr:""}),t.hasAttribute(o,ht)&&n&&typeof m.title=="string"&&mt(this,m.title),this.container=Tt(o),this.offsetParent=["sticky","fixed"].some(p=>t.getElementStyle(this.container,"position")===p)?this.container:t.getDocument(this.element).body,Et(this),this._observer=new vt.x(()=>this.update()),this._toggleEventListeners(!0))}get name(){return M}get defaults(){return et}handleFocus=()=>t.focus(this.element);handleShow=()=>this.show();show(){const{options:e,tooltip:s,element:o,container:n,offsetParent:l,id:c}=this,{animation:m}=e,p=t.Timer.get(o,"out"),f=n===l?n:l;t.Timer.clear(o,"out"),s&&!p&&!j(this)&&t.Timer.set(o,()=>{const r=t.createCustomEvent(`show.bs.${t.toLowerCase(this.name)}`);t.dispatchEvent(o,r),r.defaultPrevented||(N.appendPopup(s,f),t.setAttribute(o,t.ariaDescribedBy,`#${c}`),this.update(),at(this,!0),t.hasClass(s,Z.showClass)||t.addClass(s,Z.showClass),m?t.emulateTransitionEnd(s,()=>nt(this)):nt(this))},17,"in")}handleHide=()=>this.hide();hide(){const{options:e,tooltip:s,element:o}=this,{animation:n,delay:l}=e;t.Timer.clear(o,"in"),s&&j(this)&&t.Timer.set(o,()=>{const c=t.createCustomEvent(`hide.bs.${t.toLowerCase(this.name)}`);t.dispatchEvent(o,c),c.defaultPrevented||(this.update(),t.removeClass(s,Z.showClass),at(this),n?t.emulateTransitionEnd(s,()=>lt(this)):lt(this))},l+17,"out")}update=()=>{tt(this)};toggle=()=>{const{tooltip:e}=this;e&&!j(this)?this.show():this.hide()};enable(){const{enabled:e}=this;e||(this._toggleEventListeners(!0),this.enabled=!e)}disable(){const{tooltip:e,enabled:s}=this;s&&(e&&j(this)&&this.hide(),this._toggleEventListeners(),this.enabled=!s)}toggleEnabled(){this.enabled?this.disable():this.enable()}handleTouch=({target:e})=>{const{tooltip:s,element:o}=this;s&&s.contains(e)||e===o||e&&o.contains(e)||this.hide()};_toggleEventListeners=e=>{const s=e?q.E:q.r,{element:o,options:n,btn:l}=this,{trigger:c}=n,p=!!(this.name!==M&&n.dismissible);c.includes("manual")||(this.enabled=!!e,c.split(" ").forEach(r=>{r===t.mousehoverEvent?(s(o,t.mousedownEvent,this.handleShow),s(o,t.mouseenterEvent,this.handleShow),p||(s(o,t.mouseleaveEvent,this.handleHide),s(t.getDocument(o),t.touchstartEvent,this.handleTouch,t.passiveHandler))):r===t.mouseclickEvent?s(o,r,p?this.handleShow:this.toggle):r===t.focusEvent&&(s(o,t.focusinEvent,this.handleShow),p||s(o,t.focusoutEvent,this.handleHide),t.isApple()&&s(o,t.mouseclickEvent,this.handleFocus)),p&&l&&s(l,t.mouseclickEvent,this.handleHide)}))};dispose(){const{tooltip:e,options:s}=this,o={...this,name:this.name},n=()=>setTimeout(()=>$t(o,()=>super.dispose()),17);s.animation&&j(o)?(this.options.delay=0,this.hide(),t.emulateTransitionEnd(e,n)):n()}}exports.Tooltip=ut;exports.getTipTemplate=rt;exports.popoverComponent=ot;exports.popoverString=z;exports.styleTip=tt;exports.tooltipDefaults=et;
//# sourceMappingURL=tooltip--Tnf23hE.js.map