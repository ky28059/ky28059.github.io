(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951,142],{65396:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(9268),o=r(86006),i=r(35846),s=r.n(i),c=r(20346),l=r(23335);function a(){let[e,t]=(0,o.useState)(!1),r=()=>t(!e),i=(0,l.v)();return(0,n.jsx)("header",{className:"sticky top-0 bg-white z-50 dark:bg-gray-800 ".concat(i>0?"bg-opacity-90 dark:bg-opacity-90 shadow-md backdrop-blur-sm":"hover:bg-opacity-90 dark:hover:bg-opacity-90 hover:shadow-md hover:backdrop-blur-sm"," transition-shadow duration-300 ease-in-out"),children:(0,n.jsxs)("nav",{className:"p-4 flex items-center",children:[(0,n.jsx)(s(),{href:"/",className:"navbar-brand",children:(0,n.jsx)("img",{src:"/concepts/rabbitsign/logo-cropped.png",alt:"RabbitSign logo",width:135,height:27,className:"dark:invert"})}),e&&(0,n.jsx)(s(),{href:"/dashboard",className:"ml-4 text-inherit hover:no-underline",title:"Dashboard",children:"Dashboard"}),(0,n.jsx)(s(),{href:"/faq",className:"ml-4 text-inherit hover:no-underline",title:"FAQ",children:"FAQ"}),e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{className:"ml-auto cursor-pointer text-inherit hover:no-underline",title:"My Account",children:"My Account"}),(0,n.jsx)("a",{className:"sign-out-button ml-4 cursor-pointer text-inherit hover:no-underline",title:"Sign Out",onClick:r,children:"Sign Out"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{title:"Sign Up",className:"ml-auto cursor-pointer text-inherit hover:no-underline",onClick:r,children:"Sign Up"}),(0,n.jsx)("a",{className:"ml-4 cursor-pointer text-inherit hover:no-underline",title:"Log In",onClick:r,children:"Log In"})]}),(0,n.jsx)(c.default,{className:"text-lg ml-4 cursor-pointer"})]})})}},20346:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(9268),o=r(96758);function i(e){let t=()=>document.documentElement.classList.toggle("dark");return(0,n.jsx)("button",{onClick:t,className:e.className,children:(0,n.jsx)(o.JuG,{})})}},23335:function(e,t,r){"use strict";r.d(t,{v:function(){return o}});var n=r(86006);function o(){let[e,t]=(0,n.useState)(0);return(0,n.useEffect)(()=>(t(window.scrollY),document.addEventListener("scroll",()=>t(window.scrollY)),()=>document.removeEventListener("scroll",()=>t(window.scrollY))),[]),e}},12097:function(e,t,r){Promise.resolve().then(r.bind(r,65396)),Promise.resolve().then(r.t.bind(r,93619,23))},83177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(86006),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,i={},a=null,u=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:c.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},9268:function(e,t,r){"use strict";e.exports=r(83177)},35846:function(e,t,r){e.exports=r(93619)},83270:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var n=r(86006),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function l(e){return function(t){return n.createElement(a,s({attr:s({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,s({key:r},t.attr),e(t.child))})}(e.child))}}function a(e){var t=function(t){var r,o=e.attr,i=e.size,l=e.title,a=c(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,a,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return t(e)}):t(o)}}},function(e){e.O(0,[855,619,667,961,744],function(){return e(e.s=12097)}),_N_E=e.O()}]);