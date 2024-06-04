(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{22417:function(e,t,n){Promise.resolve().then(n.bind(n,51268))},92841:function(e,t,n){"use strict";n.d(t,{CV:function(){return x},FF:function(){return f},ZP:function(){return c},kq:function(){return u},nc:function(){return o},xS:function(){return r},xb:function(){return i}});var s,i,l=n(57437),a=n(2265);let r=["","","","","","","","",""];function c(e){let{boardState:t,setBoardStatus:n,small:s,disabled:i}=e;return(0,a.useEffect)(()=>{n(x(t))},[t]),(0,l.jsx)(u,{disabled:i,small:s,children:f.map(t=>(0,l.jsx)(o,{small:s,children:t.map(t=>(0,a.createElement)(d,{...e,id:t,key:t}))},t.join()))})}function u(e){return(0,l.jsx)("div",{className:"flex flex-col divide-white/30 transition-opacity duration-500 "+(e.small?"divide-y-4":"divide-y-8")+(e.disabled?" opacity-30":""),children:e.children})}function o(e){return(0,l.jsx)("div",{className:"flex divide-white/30 "+(e.small?"divide-x-4":"divide-x-8"),children:e.children})}function d(e){let{boardState:t,playerSymbol:n,setSquare:s,small:i,disabled:a,id:r}=e,c=t[r],u=c||n;return(0,l.jsx)("button",{className:"group font-bold text-center box-content "+(i?"size-16 text-3xl ":"size-36 text-7xl ")+("✕"===u?"text-red-400":"text-blue-400"),disabled:a||!!c,onClick:()=>s(r,n),children:(0,l.jsx)("span",{className:(i?"p-4":"p-8")+(c?"":" opacity-0 hover:opacity-50 group-disabled:opacity-0"),children:u})})}function x(e){for(let t of f){let[n,s,i]=t.map(t=>e[t]);if(n&&n===s&&n===i)return"✕"===n?2:3}for(let t in f[0]){let[n,s,i]=f.map(e=>e[t]).map(t=>e[t]);if(n&&n===s&&n===i)return"✕"===n?2:3}return e[0]&&e[0]===e[4]&&e[0]===e[8]?"✕"===e[0]?2:3:e[2]&&e[2]===e[4]&&e[2]===e[6]?"✕"===e[2]?2:3:e.every(e=>e)?1:0}(s=i||(i={}))[s.PLAYING=0]="PLAYING",s[s.TIED=1]="TIED",s[s.X_VICTORY=2]="X_VICTORY",s[s.O_VICTORY=3]="O_VICTORY";let f=[[0,1,2],[3,4,5],[6,7,8]]},93902:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(57437);function i(e){return(0,s.jsxs)("section",{className:"flex gap-3 items-center text-3xl font-medium",children:[(0,s.jsx)("div",{className:"h-6 w-6 rounded-full bg-red-400"}),(0,s.jsx)("span",{className:"pb-0.5",children:e.scores.join(" - ")}),(0,s.jsx)("div",{className:"h-6 w-6 rounded-full bg-blue-400"})]})}},51268:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var s=n(57437),i=n(2265),l=n(7449),a=n.n(l),r=n(92841);let c=[r.xS,r.xS,r.xS,r.xS,r.xS,r.xS,r.xS,r.xS,r.xS],u=[r.xb.PLAYING,r.xb.PLAYING,r.xb.PLAYING,r.xb.PLAYING,r.xb.PLAYING,r.xb.PLAYING,r.xb.PLAYING,r.xb.PLAYING,r.xb.PLAYING];function o(e){return(0,s.jsx)(r.kq,{disabled:e.disabled,children:r.FF.map(t=>(0,s.jsx)(r.nc,{children:t.map(t=>(0,i.createElement)(d,{...e,id:t,key:t}))},t.join()))})}function d(e){let{gameState:t,gameStatuses:n,playerSymbol:i,activeBoard:l,setSquare:a,setBoardStatus:c,disabled:u,id:o}=e,d=t[o],x=n[o],f=x===r.xb.X_VICTORY?"✕":x===r.xb.O_VICTORY?"◯":"";return(0,s.jsxs)("div",{className:"relative p-4",children:[f&&(0,s.jsx)("span",{className:"absolute inset-0 flex items-center justify-center z-10 text-9xl font-bold"+("✕"===f?" text-red-400":" text-blue-400"),children:f}),(0,s.jsx)(r.ZP,{small:!0,boardState:d,playerSymbol:i,setSquare:(e,t)=>a(o,e,t),setBoardStatus:e=>c(o,e),disabled:u||x!==r.xb.PLAYING||-1!==l&&o!==l})]})}var x=n(93902);function f(){let[e,t]=(0,i.useState)(c),[n,l]=(0,i.useState)(r.xb.PLAYING),[d,f]=(0,i.useState)(u),[b,m]=(0,i.useState)(4),[h,p]=(0,i.useState)([0,0]),[j,N]=(0,i.useState)("✕"),[I,Y]=(0,i.useState)("◯");return(0,s.jsxs)("main",{className:"h-screen flex flex-col gap-8 items-center justify-center",children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:"Offline Ultimate Tic-Tac-Toe | ky28059.github.io"}),(0,s.jsx)("meta",{name:"description",content:"Offline Ultimate Tic-Tac-Toe for single-device games."}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)(x.Z,{scores:h}),(0,s.jsx)(o,{gameState:e,gameStatuses:d,playerSymbol:j,activeBoard:b,setSquare:function(n,s,i){let l=[...e],a=[...l[n]];a[s]=i,l[n]=a,t(l),N("✕"===j?"◯":"✕"),m(d[s]!==r.xb.PLAYING?-1:s)},setBoardStatus:function(e,t){let n=[...d];n[e]=t,f(n),function(e){switch(e){case r.xb.TIED:p([h[0]+.5,h[1]+.5]);break;case r.xb.X_VICTORY:p([h[0]+1,h[1]]);break;case r.xb.O_VICTORY:p([h[0],h[1]+1])}l(e)}((0,r.CV)(n.map(e=>e===r.xb.X_VICTORY?"✕":e===r.xb.O_VICTORY?"◯":"")))},disabled:n!==r.xb.PLAYING}),(0,s.jsxs)("section",{className:"relative",children:[n===r.xb.PLAYING?(0,s.jsxs)("p",{className:"font-light",children:["You are playing as ",(0,s.jsx)("strong",{children:j}),". It is your move."]}):n===r.xb.TIED?(0,s.jsx)("p",{className:"font-light",children:"The game has tied."}):n===r.xb.X_VICTORY?(0,s.jsxs)("p",{className:"font-light",children:[(0,s.jsx)("strong",{children:"✕"})," has won!"]}):(0,s.jsxs)("p",{className:"font-light",children:[(0,s.jsx)("strong",{children:"◯"})," has won!"]}),n!==r.xb.PLAYING&&(0,s.jsx)("button",{className:"absolute top-8 inset-x-0",onClick:function(){t(c),f(u),N(I),Y("✕"===I?"◯":"✕"),m(4)},children:"Play again"})]})]})}},7449:function(e,t){"use strict";function n(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}},function(e){e.O(0,[971,23,744],function(){return e(e.s=22417)}),_N_E=e.O()}]);