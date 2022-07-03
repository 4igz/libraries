"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),f=l,s=m["".concat(d,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(s,i(i({ref:t},p),{},{components:n})):r.createElement(s,i({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26437:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(87462),l=(n(67294),n(3905));const a={},i=void 0,o={type:"mdx",permalink:"/libraries/CHANGELOG",source:"@site/pages/CHANGELOG.md",description:"2022-07-03",frontMatter:{}},d=[{value:"2022-07-03",id:"2022-07-03",level:2},{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"2022-07-02",id:"2022-07-02",level:2},{value:"Changed",id:"changed-1",level:3},{value:"2022-07-01",id:"2022-07-01",level:2},{value:"Changed",id:"changed-2",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"2022-07-03"},"2022-07-03"),(0,l.kt)("h3",{id:"added"},"Added"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added ",(0,l.kt)("inlineCode",{parentName:"li"},"numberUtil.formatToHMS"),"."),(0,l.kt)("li",{parentName:"ul"},"Added ",(0,l.kt)("inlineCode",{parentName:"li"},"numberUtil.formatToMS"),".")),(0,l.kt)("h3",{id:"changed"},"Changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Improve error checking within ",(0,l.kt)("inlineCode",{parentName:"li"},"windLines")," module."),(0,l.kt)("li",{parentName:"ul"},"Improve documentation."),(0,l.kt)("li",{parentName:"ul"},"Rename ",(0,l.kt)("inlineCode",{parentName:"li"},"numberUtil.format")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"numberUtil.suffix"),".")),(0,l.kt)("h2",{id:"2022-07-02"},"2022-07-02"),(0,l.kt)("h3",{id:"changed-1"},"Changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix middleware related bugs within the ",(0,l.kt)("inlineCode",{parentName:"li"},"network")," module."),(0,l.kt)("li",{parentName:"ul"},"Improve method names within ",(0,l.kt)("inlineCode",{parentName:"li"},"RemoteProperty"),".")),(0,l.kt)("h2",{id:"2022-07-01"},"2022-07-01"),(0,l.kt)("h3",{id:"changed-2"},"Changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rework all libraries to follow the Roblox lua style guide."),(0,l.kt)("li",{parentName:"ul"},"Implement middleware support for remote properties and remote signals."),(0,l.kt)("li",{parentName:"ul"},"Improve documentation of all libraries.")))}p.isMDXComponent=!0}}]);