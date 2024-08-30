"use strict";var ot=Object.defineProperty;var rt=(s,e,n)=>e in s?ot(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var h=(s,e,n)=>rt(s,typeof e!="symbol"?e+"":e,n);const t=require("@thednp/shorty"),b=require("@thednp/event-listener"),m=require("./showClass-D_Ms1FgG.js"),G=require("./dataBsToggle-Dj-Ng54N.js"),A=require("./dropdownClasses-CnEyz_iw.js"),it=require("./base-component-j_bwTL_x.js"),J="Dropdown",Q="dropdown-menu",V=s=>{const e=t.closest(s,"A");return s.tagName==="A"&&t.hasAttribute(s,"href")&&t.getAttribute(s,"href").slice(-1)==="#"||e&&t.hasAttribute(e,"href")&&t.getAttribute(e,"href").slice(-1)==="#"},[p,H,M,B]=A.dropdownMenuClasses,X=`[${G.dataBsToggle}="${p}"]`,f=s=>t.getInstance(s,J),ct=s=>new g(s),dt=`${Q}-end`,O=[p,H],W=[M,B],U=["A","BUTTON"],at={offset:5,display:"dynamic"},T=t.createCustomEvent(`show.bs.${p}`),R=t.createCustomEvent(`shown.bs.${p}`),$=t.createCustomEvent(`hide.bs.${p}`),_=t.createCustomEvent(`hidden.bs.${p}`),Y=t.createCustomEvent(`updated.bs.${p}`),Z=s=>{const{element:e,menu:n,parentElement:o,options:c}=s,{offset:r}=c;if(t.getElementStyle(n,"position")!=="static"){const i=t.isRTL(e),d=t.hasClass(n,dt);["margin","top","bottom","left","right"].forEach(l=>{const F={};F[l]="",t.setElementStyle(n,F)});let a=A.dropdownMenuClasses.find(l=>t.hasClass(o,l))||p;const tt={dropdown:[r,0,0],dropup:[0,0,r],dropstart:i?[-1,0,0,r]:[-1,r,0],dropend:i?[-1,r,0]:[-1,0,0,r]},E={dropdown:{top:"100%"},dropup:{top:"auto",bottom:"100%"},dropstart:i?{left:"100%",right:"auto"}:{left:"auto",right:"100%"},dropend:i?{left:"auto",right:"100%"}:{left:"100%",right:"auto"},menuStart:i?{right:"0",left:"auto"}:{right:"auto",left:"0"},menuEnd:i?{right:"auto",left:"0"}:{right:"0",left:"auto"}},{offsetWidth:w,offsetHeight:k}=n,{clientWidth:P,clientHeight:I}=t.getDocumentElement(e),{left:v,top:L,width:N,height:et}=t.getBoundingClientRect(e),x=v-w-r<0,S=v+w+N+r>=P,nt=L+k+r>=I,q=L+k+et+r>=I,j=L-k-r<0,C=(!i&&d||i&&!d)&&v+N-w<0,y=(i&&d||!i&&!d)&&v+w>=P;if(W.includes(a)&&x&&S&&(a=p),a===M&&(i?S:x)&&(a=B),a===B&&(i?x:S)&&(a=M),a===H&&j&&!q&&(a=p),a===p&&q&&!j&&(a=H),W.includes(a)&&nt&&t.ObjectAssign(E[a],{top:"auto",bottom:0}),O.includes(a)&&(C||y)){let l={left:"auto",right:"auto"};!C&&y&&!i&&(l={left:"auto",right:0}),C&&!y&&i&&(l={left:0,right:"auto"}),l&&t.ObjectAssign(E[a],l)}const st=tt[a];if(t.setElementStyle(n,{...E[a],margin:`${st.map(l=>l&&`${l}px`).join(" ")}`}),O.includes(a)&&d&&d){const l=!i&&C||i&&y?"menuStart":"menuEnd";t.setElementStyle(n,E[l])}t.dispatchEvent(o,Y)}},lt=s=>[...s.children].map(e=>{if(e&&U.includes(e.tagName))return e;const{firstElementChild:n}=e;return n&&U.includes(n.tagName)?n:null}).filter(e=>e),z=s=>{const{element:e,options:n}=s,o=s.open?b.addListener:b.removeListener,c=t.getDocument(e);o(c,t.mouseclickEvent,K),o(c,t.focusEvent,K),o(c,t.keydownEvent,pt),o(c,t.keyupEvent,ft),n.display==="dynamic"&&[t.scrollEvent,t.resizeEvent].forEach(r=>{o(t.getWindow(e),r,ht,t.passiveHandler)})},D=s=>{const e=[...A.dropdownMenuClasses,"btn-group","input-group"].map(n=>t.getElementsByClassName(`${n} ${m.showClass}`,t.getDocument(s))).find(n=>n.length);if(e&&e.length)return[...e[0].children].find(n=>A.dropdownMenuClasses.some(o=>o===t.getAttribute(n,G.dataBsToggle)))},K=s=>{const{target:e,type:n}=s;if(e&&t.isHTMLElement(e)){const o=D(e),c=o&&f(o);if(c){const{parentElement:r,menu:i}=c,d=r&&r.contains(e)&&(e.tagName==="form"||t.closest(e,"form")!==null);[t.mouseclickEvent,t.mousedownEvent].includes(n)&&V(e)&&s.preventDefault(),!d&&n!==t.focusEvent&&e!==o&&e!==i&&c.hide()}}},ut=s=>{const{target:e}=s,n=e&&t.closest(e,X),o=n&&f(n);o&&(s.stopPropagation(),o.toggle(),n&&V(n)&&s.preventDefault())},pt=s=>{[t.keyArrowDown,t.keyArrowUp].includes(s.code)&&s.preventDefault()};function ft(s){const{code:e}=s,n=D(this),o=n&&f(n),{activeElement:c}=n&&t.getDocument(n);if(o&&c){const{menu:r,open:i}=o,d=lt(r);if(d&&d.length&&[t.keyArrowDown,t.keyArrowUp].includes(e)){let u=d.indexOf(c);c===n?u=0:e===t.keyArrowUp?u=u>1?u-1:0:e===t.keyArrowDown&&(u=u<d.length-1?u+1:u),d[u]&&t.focus(d[u])}t.keyEscape===e&&i&&(o.toggle(),t.focus(n))}}function ht(){const s=D(this),e=s&&f(s);e&&e.open&&Z(e)}class g extends it.BaseComponent{constructor(n,o){super(n,o);h(this,"_toggleEventListeners",n=>{(n?b.addListener:b.removeListener)(this.element,t.mouseclickEvent,ut)});const{parentElement:c}=this.element,[r]=t.getElementsByClassName(Q,c);r&&(this.parentElement=c,this.menu=r,this._toggleEventListeners(!0))}get name(){return J}get defaults(){return at}toggle(){this.open?this.hide():this.show()}show(){const{element:n,open:o,menu:c,parentElement:r}=this;if(!o){const i=D(n),d=i&&f(i);d&&d.hide(),[T,R,Y].forEach(u=>{u.relatedTarget=n}),t.dispatchEvent(r,T),T.defaultPrevented||(t.addClass(c,m.showClass),t.addClass(r,m.showClass),t.setAttribute(n,t.ariaExpanded,"true"),Z(this),this.open=!o,t.focus(n),z(this),t.dispatchEvent(r,R))}}hide(){const{element:n,open:o,menu:c,parentElement:r}=this;o&&([$,_].forEach(i=>{i.relatedTarget=n}),t.dispatchEvent(r,$),$.defaultPrevented||(t.removeClass(c,m.showClass),t.removeClass(r,m.showClass),t.setAttribute(n,t.ariaExpanded,"false"),this.open=!o,z(this),t.dispatchEvent(r,_)))}dispose(){this.open&&this.hide(),this._toggleEventListeners(),super.dispose()}}h(g,"selector",X),h(g,"init",ct),h(g,"getInstance",f);module.exports=g;
//# sourceMappingURL=dropdown.cjs.map