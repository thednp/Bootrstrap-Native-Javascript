"use strict";const n=require("./base-component-2e8b2d4a.cjs"),i=require("./dataBsToggle-c8bc9e7f.cjs"),e=require("./tooltip-2b151389.cjs");require("./event-listener-09f2aa63.cjs");require("./showClass-2174a6d6.cjs");require("./popupContainer-536be6c3.cjs");require("./fadeClass-a4944cf1.cjs");const p=`[${i.dataBsToggle}="${e.popoverString}"],[data-tip="${e.popoverString}"]`,a=n.q({},e.tooltipDefaults,{template:e.getTipTemplate(e.popoverString),content:"",dismissible:!1,btnClose:'<button class="btn-close" aria-label="Close"></button>'}),c=t=>n.Ln(t,e.popoverComponent),l=t=>new r(t);class r extends e.Tooltip{static selector=p;static init=l;static getInstance=c;static styleTip=e.styleTip;constructor(s,o){super(s,o)}get name(){return e.popoverComponent}get defaults(){return a}show(){super.show();const{options:s,btn:o}=this;s.dismissible&&o&&setTimeout(()=>n.Bn(o),17)}}module.exports=r;
//# sourceMappingURL=popover.cjs.map