(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{58787:function(e,t,n){"use strict";n.r(t),n.d(t,{SyntaxHighlighter:function(){return c},default:function(){return a}});var r=n(9268),o=n(86006),l=n(33991);function a(e){var t,n,l;let{sources:a}=e,[s,i]=(0,o.useState)(0),[u,f]=(0,o.useState)([]);return(0,o.useEffect)(()=>{Promise.all(a.map(e=>fetch(e).then(e=>e.text()))).then(e=>f(e))},[]),(0,r.jsxs)("div",{className:"flex flex-col rounded-lg overflow-hidden w-[36rem] h-[36rem] max-w-full flex-none text-xs bg-[#2b2b2b] border border-gray-100/20",children:[(0,r.jsx)("div",{className:"flex bg-[#484a4a]/50",children:a.map((e,t)=>{var n;return(0,r.jsx)("button",{className:"px-3.5 py-1.5 font-[Consolas,_Monaco,_'Andale_Mono',_monospace] text-[#a9b7c6]"+(s===t?" bg-[#2b2b2b]":""),onClick:()=>i(t),children:null===(n=e.match(/.+\/(.+)/))||void 0===n?void 0:n[1]},e)})}),(0,r.jsx)(c,{language:null!==(n="kt"===(l=null===(t=a[s].match(/.+\.(.+)/))||void 0===t?void 0:t[1])?"kotlin":l)&&void 0!==n?n:"java",children:u[s]})]})}function c(e){return(0,r.jsx)(l.Z,{language:e.language,codeTagProps:{style:{}},showLineNumbers:!0,useInlineStyles:!1,children:e.children})}},20346:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(9268),o=n(96758);function l(e){let t=()=>document.documentElement.classList.toggle("dark");return(0,r.jsx)("button",{onClick:t,className:e.className,children:(0,r.jsx)(o.JuG,{})})}},48173:function(e,t,n){Promise.resolve().then(n.t.bind(n,93619,23)),Promise.resolve().then(n.bind(n,58787)),Promise.resolve().then(n.bind(n,20346))},83270:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(86006),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function s(e){return function(t){return r.createElement(i,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,a({key:n},t.attr),e(t.child))})}(e.child))}}function i(e){var t=function(t){var n,o=e.attr,l=e.size,s=e.title,i=c(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,i,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==l?r.createElement(l.Consumer,null,function(e){return t(e)}):t(o)}}},function(e){e.O(0,[855,619,858,667,961,744],function(){return e(e.s=48173)}),_N_E=e.O()}]);