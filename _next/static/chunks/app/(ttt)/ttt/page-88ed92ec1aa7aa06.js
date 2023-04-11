(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[704],{37669:function(e,t,n){"use strict";n.d(t,{CV:function(){return f},FF:function(){return x},ZP:function(){return a},kq:function(){return o},nc:function(){return u},xS:function(){return c},xb:function(){return s}});var r,s,i=n(9268),l=n(86006);let c=["","","","","","","","",""];function a(e){let{boardState:t,setBoardStatus:n,small:r,disabled:s}=e;return(0,l.useEffect)(()=>{n(f(t))},[t]),(0,i.jsx)(o,{disabled:s,small:r,children:x.map(t=>(0,i.jsx)(u,{small:r,children:t.map(t=>(0,l.createElement)(d,{...e,id:t,key:t}))},t.join()))})}function o(e){return(0,i.jsx)("div",{className:"flex flex-col divide-white/30 transition-opacity duration-500 "+(e.small?"divide-y-4":"divide-y-8")+(e.disabled?" opacity-30":""),children:e.children})}function u(e){return(0,i.jsx)("div",{className:"flex divide-white/30 "+(e.small?"divide-x-4":"divide-x-8"),children:e.children})}function d(e){let{boardState:t,playerSymbol:n,setSquare:r,small:s,disabled:l,id:c}=e,a=t[c],o=a||n;return(0,i.jsx)("button",{className:"group font-bold text-center box-content "+(s?"w-16 h-16 text-3xl ":"w-36 h-36 text-7xl ")+("✕"===o?"text-red-400":"text-blue-400"),disabled:l||!!a,onClick:()=>r(c,n),children:(0,i.jsx)("span",{className:(s?"p-4":"p-8")+(a?"":" opacity-0 hover:opacity-50 group-disabled:opacity-0"),children:o})})}function f(e){for(let t of x){let[n,r,i]=t.map(t=>e[t]);if(n&&n===r&&n===i)return"✕"===n?s.X_VICTORY:s.O_VICTORY}for(let t in x[0]){let[n,r,i]=x.map(e=>e[t]).map(t=>e[t]);if(n&&n===r&&n===i)return"✕"===n?s.X_VICTORY:s.O_VICTORY}return e[0]&&e[0]===e[4]&&e[0]===e[8]?"✕"===e[0]?s.X_VICTORY:s.O_VICTORY:e[2]&&e[2]===e[4]&&e[2]===e[6]?"✕"===e[2]?s.X_VICTORY:s.O_VICTORY:e.every(e=>e)?s.TIED:s.PLAYING}(r=s||(s={}))[r.PLAYING=0]="PLAYING",r[r.TIED=1]="TIED",r[r.X_VICTORY=2]="X_VICTORY",r[r.O_VICTORY=3]="O_VICTORY";let x=[[0,1,2],[3,4,5],[6,7,8]]},98154:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9268);function s(e){return(0,r.jsxs)("section",{className:"flex gap-3 items-center text-3xl font-medium",children:[(0,r.jsx)("div",{className:"h-6 w-6 rounded-full bg-red-400"}),(0,r.jsx)("span",{className:"pb-0.5",children:e.scores.join(" - ")}),(0,r.jsx)("div",{className:"h-6 w-6 rounded-full bg-blue-400"})]})}},21185:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(9268),s=n(86006),i=n(64836),l=n.n(i),c=n(37669),a=n(98154);function o(){let[e,t]=(0,s.useState)(c.xS),[n,i]=(0,s.useState)(c.xb.PLAYING),[o,u]=(0,s.useState)([0,0]),[d,f]=(0,s.useState)("✕"),[x,h]=(0,s.useState)("◯");return(0,r.jsxs)("main",{className:"h-screen flex flex-col gap-8 items-center justify-center",children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"Offline Tic-Tac-Toe | ky28059.github.io"}),(0,r.jsx)("meta",{name:"description",content:"Offline Tic-Tac-Toe for single-device games."})]}),(0,r.jsx)(a.Z,{scores:o}),(0,r.jsx)(c.ZP,{boardState:e,playerSymbol:d,setSquare:function(n,r){let s=[...e];s[n]=r,t(s),f("✕"===d?"◯":"✕")},setBoardStatus:function(e){switch(e){case c.xb.TIED:u([o[0]+.5,o[1]+.5]);break;case c.xb.X_VICTORY:u([o[0]+1,o[1]]);break;case c.xb.O_VICTORY:u([o[0],o[1]+1])}i(e)},disabled:n!==c.xb.PLAYING}),(0,r.jsxs)("section",{className:"relative",children:[n===c.xb.PLAYING?(0,r.jsxs)("p",{className:"font-light",children:["You are playing as ",(0,r.jsx)("strong",{children:d}),". It is your move."]}):n===c.xb.TIED?(0,r.jsx)("p",{className:"font-light",children:"The game has tied."}):n===c.xb.X_VICTORY?(0,r.jsxs)("p",{className:"font-light",children:[(0,r.jsx)("strong",{children:"✕"})," has won!"]}):(0,r.jsxs)("p",{className:"font-light",children:[(0,r.jsx)("strong",{children:"◯"})," has won!"]}),n!==c.xb.PLAYING&&(0,r.jsx)("button",{className:"absolute top-8 inset-x-0",onClick:function(){t(c.xS),i(c.xb.PLAYING),f(x),h("✕"===x?"◯":"✕")},children:"Play again"})]})]})}},64836:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return null},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},68058:function(e,t,n){Promise.resolve().then(n.bind(n,21185))},83177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(86006),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var r,i={},o=null,u=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:o,ref:u,props:i,_owner:c.current}}t.Fragment=i,t.jsx=o,t.jsxs=o},9268:function(e,t,n){"use strict";e.exports=n(83177)}},function(e){e.O(0,[667,961,744],function(){return e(e.s=68058)}),_N_E=e.O()}]);