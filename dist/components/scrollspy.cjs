"use strict";const e=require("./base-component-2e8b2d4a.cjs"),d=require("./event-listener-09f2aa63.cjs"),g=require("./activeClass-a1284579.cjs"),T="scrollspy",C="ScrollSpy",b='[data-bs-spy="scroll"]',k={offset:10,target:null},w=t=>e.Ln(t,C),L=t=>new E(t),S=e.Wn(`activate.bs.${T}`),x=t=>{const{target:s,scrollTarget:n,options:o,itemsLength:i,scrollHeight:r,element:a}=t,{offset:c}=o,l=e.W(n),h=s&&e.pe("A",s),u=n&&A(n);if(t.scrollTop=l?n.scrollY:n.scrollTop,h&&(i!==h.length||u!==r)){let p,f,m;t.items=[],t.offsets=[],t.scrollHeight=u,t.maxScroll=t.scrollHeight-W(t),[...h].forEach(v=>{p=e.Zt(v,"href"),f=p&&p.charAt(0)==="#"&&p.slice(-1)!=="#"&&e.go(p,e.d(a)),f&&(t.items.push(v),m=e.w(f),t.offsets.push((l?m.top+t.scrollTop:f.offsetTop)-c))}),t.itemsLength=t.items.length}},A=t=>e.u(t)?t.scrollHeight:e.k(t).scrollHeight,W=({element:t,scrollTarget:s})=>e.W(s)?s.innerHeight:e.w(t).height,I=t=>{[...e.pe("A",t)].forEach(s=>{e.kn(s,g.activeClass)&&e.Nn(s,g.activeClass)})},y=(t,s)=>{const{target:n,element:o}=t;e.u(n)&&I(n),t.activeItem=s,e.Mn(s,g.activeClass);const i=[];let r=s;for(;r!==e.Jn(o);)r=r.parentElement,(e.kn(r,"nav")||e.kn(r,"dropdown-menu"))&&i.push(r);i.forEach(a=>{const c=a.previousElementSibling;c&&!e.kn(c,g.activeClass)&&e.Mn(c,g.activeClass)}),S.relatedTarget=s,e.Q(o,S)},H=(t,s)=>{(s?d.E:d.d)(t.scrollTarget,e.xt,t.refresh,e.Rn)};class E extends e.BaseComponent{static selector=b;static init=L;static getInstance=w;constructor(s,n){super(s,n);const{element:o,options:i}=this;this.target=e.go(i.target,e.d(o)),this.target&&(this.scrollTarget=o.clientHeight<o.scrollHeight?o:e.$n(o),this.refresh=this.refresh.bind(this),H(this,!0),this.refresh())}get name(){return C}get defaults(){return k}refresh(){const{target:s}=this;if(s?.offsetHeight===0)return;x(this);const{scrollTop:n,maxScroll:o,itemsLength:i,items:r,activeItem:a}=this;if(n>=o){const l=r[i-1];a!==l&&y(this,l);return}const{offsets:c}=this;if(a&&n<c[0]&&c[0]>0){this.activeItem=null,e.u(s)&&I(s);return}r.forEach((l,h)=>{a!==l&&n>=c[h]&&(typeof c[h+1]>"u"||n<c[h+1])&&y(this,l)})}dispose(){H(this),super.dispose()}}module.exports=E;
//# sourceMappingURL=scrollspy.cjs.map