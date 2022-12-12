"use strict";const t=require("./base-component-2e8b2d4a.cjs"),m=require("./event-listener-09f2aa63.cjs"),l=require("./fadeClass-a4944cf1.cjs"),h=require("./showClass-2174a6d6.cjs"),j=require("./dataBsDismiss-4ee313a7.cjs"),q=require("./dataBsToggle-c8bc9e7f.cjs"),p=require("./getTargetElement-3f39cec8.cjs"),a="toast",C="Toast",B=`.${a}`,D=`[${j.dataBsDismiss}="${a}"]`,E=`[${q.dataBsToggle}="${a}"]`,c="showing",b="hide",G={animation:!0,autohide:!0,delay:5e3},g=e=>t.Ln(e,C),N=e=>new $(e),u=t.Wn(`show.bs.${a}`),Q=t.Wn(`shown.bs.${a}`),f=t.Wn(`hide.bs.${a}`),k=t.Wn(`hidden.bs.${a}`),T=e=>{const{element:s,options:n}=e;t.Nn(s,c),t.Gn.clear(s,c),t.Q(s,Q),n.autohide&&t.Gn.set(s,()=>e.hide(),n.delay,a)},w=e=>{const{element:s}=e;t.Nn(s,c),t.Nn(s,h.showClass),t.Mn(s,b),t.Gn.clear(s,a),t.Q(s,k)},M=e=>{const{element:s,options:n}=e;t.Mn(s,c),n.animation?(t.Qn(s),t.zn(s,()=>w(e))):w(e)},y=e=>{const{element:s,options:n}=e;t.Gn.set(s,()=>{t.Nn(s,b),t.Qn(s),t.Mn(s,h.showClass),t.Mn(s,c),n.animation?t.zn(s,()=>T(e)):T(e)},17,c)},v=(e,s)=>{const n=s?m.E:m.d,{element:o,triggers:i,dismiss:r,options:S}=e;r&&n(r,t.ut,e.hide),S.autohide&&[t.tt,t.et,t.mt,t.gt].forEach(d=>n(o,d,I)),i.length&&i.forEach(d=>n(d,t.ut,H))},W=e=>{t.Gn.clear(e.element,a),v(e)},H=e=>{const{target:s}=e,n=s&&t.de(s,E),o=n&&p.getTargetElement(n),i=o&&g(o);!i||(n&&n.tagName==="A"&&e.preventDefault(),i.relatedTarget=n,i.show())},I=e=>{const s=e.target,n=g(s),{type:o,relatedTarget:i}=e;!n||s===i||s.contains(i)||([t.mt,t.tt].includes(o)?t.Gn.clear(s,a):t.Gn.set(s,()=>n.hide(),n.options.delay,a))};class $ extends t.BaseComponent{static selector=B;static init=N;static getInstance=g;constructor(s,n){super(s,n);const{element:o,options:i}=this;i.animation&&!t.kn(o,l.fadeClass)?t.Mn(o,l.fadeClass):!i.animation&&t.kn(o,l.fadeClass)&&t.Nn(o,l.fadeClass),this.dismiss=t.go(D,o),this.triggers=[...t.bo(E,t.d(o))].filter(r=>p.getTargetElement(r)===o),this.show=this.show.bind(this),this.hide=this.hide.bind(this),v(this,!0)}get name(){return C}get defaults(){return G}get isShown(){return t.kn(this.element,h.showClass)}show(){const{element:s,isShown:n}=this;if(s&&!n){if(t.Q(s,u),u.defaultPrevented)return;y(this)}}hide(){const{element:s,isShown:n}=this;if(s&&n){if(t.Q(s,f),f.defaultPrevented)return;M(this)}}dispose(){const{element:s,isShown:n}=this;n&&t.Nn(s,h.showClass),W(this),super.dispose()}}module.exports=$;
//# sourceMappingURL=toast.cjs.map