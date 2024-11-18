"use strict";const t=require("./base-component-CEXwoid1.js"),et=require("./index-CxumdV5N.js"),f=require("./showClass-D_Ms1FgG.js"),U=require("./dataBsToggle-Dj-Ng54N.js"),C=require("./dropdownClasses-CnEyz_iw.js"),nt=require("./isDisabled-CST_xG4K.js"),Y="Dropdown",Z="dropdown-menu",z=o=>{const e=t.ke(o,"A");return o.tagName==="A"&&t.oe(o,"href")&&t.j(o,"href")?.slice(-1)==="#"||e&&t.oe(e,"href")&&t.j(e,"href")?.slice(-1)==="#"},[p,T,S,A]=C.dropdownMenuClasses,ot=`[${U.dataBsToggle}="${p}"]`,h=o=>t.to(o,Y),st=o=>new R(o),rt=`${Z}-end`,B=[p,T],F=[S,A],L=["A","BUTTON"],it={offset:5,display:"dynamic"},x=t.mo(`show.bs.${p}`),O=t.mo(`shown.bs.${p}`),y=t.mo(`hide.bs.${p}`),k=t.mo(`hidden.bs.${p}`),K=t.mo(`updated.bs.${p}`),W=o=>{const{element:e,menu:n,parentElement:d,options:r}=o,{offset:s}=r;if(t.g(n,"position")!=="static"){const i=t.Uo(e),c=t.Zn(n,rt);["margin","top","bottom","left","right"].forEach(l=>{const _={};_[l]="",t.Eo(n,_)});let a=C.dropdownMenuClasses.find(l=>t.Zn(d,l))||p;const J={dropdown:[s,0,0],dropup:[0,0,s],dropstart:i?[-1,0,0,s]:[-1,s,0],dropend:i?[-1,s,0]:[-1,0,0,s]},g={dropdown:{top:"100%"},dropup:{top:"auto",bottom:"100%"},dropstart:i?{left:"100%",right:"auto"}:{left:"auto",right:"100%"},dropend:i?{left:"auto",right:"100%"}:{left:"100%",right:"auto"},menuStart:i?{right:"0",left:"auto"}:{right:"auto",left:"0"},menuEnd:i?{right:"auto",left:"0"}:{right:"0",left:"auto"}},{offsetWidth:m,offsetHeight:b}=n,{clientWidth:P,clientHeight:H}=t.S(e),{left:w,top:D,width:N,height:V}=t.w(e),q=w-m-s<0,$=w+m+N+s>=P,X=D+b+s>=H,j=D+b+V+s>=H,I=D-b-s<0,E=(!i&&c||i&&!c)&&w+N-m<0,v=(i&&c||!i&&!c)&&w+m>=P;if(F.includes(a)&&q&&$&&(a=p),a===S&&(i?$:q)&&(a=A),a===A&&(i?q:$)&&(a=S),a===T&&I&&!j&&(a=p),a===p&&j&&!I&&(a=T),F.includes(a)&&X&&t.N(g[a],{top:"auto",bottom:0}),B.includes(a)&&(E||v)){let l={left:"auto",right:"auto"};!E&&v&&!i&&(l={left:"auto",right:0}),E&&!v&&i&&(l={left:0,right:"auto"}),l&&t.N(g[a],l)}const tt=J[a];if(t.Eo(n,{...g[a],margin:`${tt.map(l=>l&&`${l}px`).join(" ")}`}),B.includes(a)&&c&&c){const l=!i&&E||i&&v?"menuStart":"menuEnd";t.Eo(n,g[l])}t.q(d,K)}},dt=o=>Array.from(o.children).map(e=>{if(e&&L.includes(e.tagName))return e;const{firstElementChild:n}=e;return n&&L.includes(n.tagName)?n:null}).filter(e=>e),G=o=>{const{element:e,options:n,menu:d}=o,r=o.open?t.E:t.r,s=t.d(e);r(s,t.vt,Q),r(s,t.ct,Q),r(s,t.ft,at),r(s,t.gt,lt),n.display==="dynamic"&&(o.open?o._observer.observe(d):o._observer.disconnect())},M=o=>{const e=[...C.dropdownMenuClasses,"btn-group","input-group"].map(n=>t.Go(`${n} ${f.showClass}`,t.d(o))).find(n=>n.length);if(e&&e.length)return[...e[0].children].find(n=>C.dropdownMenuClasses.some(d=>d===t.j(n,U.dataBsToggle)))},Q=o=>{const{target:e,type:n}=o;if(!t.m(e))return;const d=M(e),r=d&&h(d);if(!r)return;const{parentElement:s,menu:i}=r,c=s&&s.contains(e)&&(e.tagName==="form"||t.ke(e,"form")!==null);[t.vt,t.Et].includes(n)&&z(e)&&o.preventDefault(),!c&&n!==t.ct&&e!==d&&e!==i&&r.hide()};function ct(o){const e=h(this);nt.isDisabled(this)||e&&(o.stopPropagation(),e.toggle(),z(this)&&o.preventDefault())}const at=o=>{[t.on,t.sn].includes(o.code)&&o.preventDefault()};function lt(o){const{code:e}=o,n=M(this);if(!n)return;const d=h(n),{activeElement:r}=t.d(n);if(!d||!r)return;const{menu:s,open:i}=d,c=dt(s);if(c&&c.length&&[t.on,t.sn].includes(e)){let u=c.indexOf(r);r===n?u=0:e===t.sn?u=u>1?u-1:0:e===t.on&&(u=u<c.length-1?u+1:u),c[u]&&t.ao(c[u])}t.gn===e&&i&&(d.toggle(),t.ao(n))}class R extends t.BaseComponent{static selector=ot;static init=st;static getInstance=h;constructor(e,n){super(e,n);const{parentElement:d}=this.element,[r]=t.Go(Z,d);r&&(this.parentElement=d,this.menu=r,this._observer=new et.v(()=>W(this)),this._toggleEventListeners(!0))}get name(){return Y}get defaults(){return it}toggle(){this.open?this.hide():this.show()}show(){const{element:e,open:n,menu:d,parentElement:r}=this;if(n)return;const s=M(e),i=s&&h(s);i&&i.hide(),[x,O,K].forEach(c=>{c.relatedTarget=e}),t.q(r,x),!x.defaultPrevented&&(t.qn(d,f.showClass),t.qn(r,f.showClass),t.Qn(e,t.Oe,"true"),W(this),this.open=!n,t.ao(e),G(this),t.q(r,O))}hide(){const{element:e,open:n,menu:d,parentElement:r}=this;n&&([y,k].forEach(s=>{s.relatedTarget=e}),t.q(r,y),!y.defaultPrevented&&(t.Yn(d,f.showClass),t.Yn(r,f.showClass),t.Qn(e,t.Oe,"false"),this.open=!n,G(this),t.q(r,k)))}_toggleEventListeners=e=>{(e?t.E:t.r)(this.element,t.vt,ct)};dispose(){this.open&&this.hide(),this._toggleEventListeners(),super.dispose()}}module.exports=R;
//# sourceMappingURL=dropdown.cjs.map
