"use strict";const e=require("./base-component-D3rSrWwH.js"),c="modal",i="offcanvas",n=e.createElement({tagName:"div",className:"popup-container"}),N=(p,o)=>{const s=e.isNode(o)&&o.nodeName==="BODY",d=e.isNode(o)&&!s?o:n,a=s?o:e.getDocumentBody(p);e.isNode(p)&&(d===n&&a.append(n),d.append(p))},f=(p,o)=>{const s=e.isNode(o)&&o.nodeName==="BODY",d=e.isNode(o)&&!s?o:n;e.isNode(p)&&(p.remove(),d===n&&!n.children.length&&n.remove())},l=(p,o)=>{const s=e.isNode(o)&&o.nodeName!=="BODY"?o:n;return e.isNode(p)&&s.contains(p)};exports.appendPopup=N;exports.hasPopup=l;exports.modalString=c;exports.offcanvasString=i;exports.removePopup=f;
//# sourceMappingURL=popupContainer-D8In9VFi.js.map