(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[757],{91637:function(e,r,t){Promise.resolve().then(t.bind(t,28474))},28474:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});var a=t(57437),l=t(2265),n=t(79158);function s(){let e;let[r,t]=(0,l.useState)("To the red country and part of the gray country of Oklahoma, the last rains came gently and they did not cut the scarred earth.");return(0,a.jsxs)("div",{className:"flex gap-8 xl:gap-12 flex-wrap lg:flex-nowrap",children:[(0,a.jsxs)("section",{className:"flex-grow basis-1/2",children:[(0,a.jsx)("p",{className:"text-sm mb-1 text-gray-400 dark:text-gray-100/40",children:"Input"}),(0,a.jsx)(n.Z,{placeholder:"Type input...",value:r,onChange:e=>t(e.target.value),className:"rounded px-3 py-1 h-24 dark:bg-[#2b2b2b] mb-2 w-full border border-gray-400/50 dark:border-gray-100/10 placeholder:text-gray-400 placeholder:dark:text-gray-100/40"}),(0,a.jsxs)("p",{className:"text-xs mb-1 text-gray-400 dark:text-gray-100/40",children:["Length: ",r.length," characters | ",r.length&&r.trim().split(/\s+/).length," words"]})]}),(0,a.jsxs)("section",{className:"flex-grow basis-1/2 flex flex-col gap-2",children:[(0,a.jsx)(o,{label:"Plain text",children:r}),(0,a.jsx)(o,{label:"Capitalized",children:r.toUpperCase()}),(0,a.jsx)(o,{label:"Lowercase",children:r.toLowerCase()}),(0,a.jsx)(o,{label:"Alternating case",children:(e=0,[...r].map(r=>/\w/.test(r)?++e%2==0?r.toUpperCase():r.toLowerCase():r).join(""))}),(0,a.jsx)(o,{label:"rot13",children:[...r].map(e=>{if(!/\w/.test(e))return e;let r=e.charCodeAt(0)>=97,t=(e.toLowerCase().charCodeAt(0)-96+13)%26||26;return String.fromCharCode(t+(r?96:64))}).join("")}),(0,a.jsx)(o,{label:"Reversed",children:i(r)}),(0,a.jsx)(o,{label:"Upside down (reversed)",children:i(c(r))}),(0,a.jsx)(o,{label:"Upside down",children:c(r)})]})]})}function o(e){return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm mb-1 text-gray-400 dark:text-gray-100/40",children:e.label}),(0,a.jsx)("div",{className:"whitespace-pre-wrap rounded px-3 py-1 dark:bg-[#2b2b2b] mb-3 w-full border border-gray-400/50 dark:border-gray-100/10 placeholder:text-gray-400 placeholder:dark:text-gray-100/40",children:e.children})]})}function c(e){var r;return[...e].map(e=>null!==(r=d[e])&&void 0!==r?r:e).join("")}function i(e){return[...e].reverse().join("")}let d={a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ᴉ",j:"ɾ",k:"ʞ",l:"l",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"s",t:"ʇ",u:"n",v:"ʌ",w:"ʍ",x:"x",y:"ʎ",z:"z",A:"∀",B:"\uD801\uDC12",C:"Ɔ",D:"ᗡ",E:"Ǝ",F:"Ⅎ",G:"פ",H:"H",I:"I",J:"ſ",K:"ꓘ",L:"˥",M:"W",N:"N",O:"O",P:"Ԁ",Q:"Ỏ",R:"ᴚ",S:"S",T:"┴",U:"∩",V:"Λ",W:"M",X:"X",Y:"⅄",Z:"Z",",":"'",".":"˙","?":"\xbf","!":"\xa1",'"':",,","'":",","`":",","&":"⅋",_:"‾","(":")",")":"(","[":"]","]":"[","{":"}","}":"{","<":">",">":"<"}},79158:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var a=t(57437),l=t(2265);function n(e){let r=(0,l.useRef)(null),{onChange:t,...n}=e;return(0,a.jsx)("textarea",{ref:r,onChange:e=>{null==t||t(e);let a=r.current;a&&(a.style.height="auto",a.style.height=a.scrollHeight+8+"px")},...n})}},30622:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=t(2265),l=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var a,n={},i=null,d=null;for(a in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,a)&&!c.hasOwnProperty(a)&&(n[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===n[a]&&(n[a]=r[a]);return{$$typeof:l,type:e,key:i,ref:d,props:n,_owner:o.current}}r.Fragment=n,r.jsx=i,r.jsxs=i},57437:function(e,r,t){"use strict";e.exports=t(30622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=91637)}),_N_E=e.O()}]);