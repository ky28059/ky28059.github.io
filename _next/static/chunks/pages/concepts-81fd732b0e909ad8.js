(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{458:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/concepts",function(){return n(3043)}])},6572:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893);function s(e){return(0,r.jsx)("h1",{className:"font-bold text-7xl underline decoration-grapefruit"+(e.className?" ".concat(e.className):""),children:e.children})}},6148:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),s=n(7516);function c(e){let t=()=>document.documentElement.classList.toggle("dark");return(0,r.jsx)(s.JuG,{className:e.className,onClick:t})}},3043:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),s=n(9008),c=n.n(s),o=n(1664),i=n.n(o),a=n(7294),l=n(6148),d=n(4287),u=n(5434);function h(){let[e,t]=(0,a.useState)(!0),n=(0,d.v)(),s=e?u.Faw:u.Yc6;return(0,r.jsxs)("header",{className:"flex sticky top-0 p-4 bg-white dark:bg-dark text-black dark:text-white bg-opacity-90 ".concat(n>0?"shadow-md":"hover:shadow-md"," backdrop-blur-sm z-50 h-20 transition-[box-shadow,_height] duration-300 ease-in-out ").concat(e?"":"h-10"),children:[(0,r.jsxs)("div",{className:"flex items-center gap-4 h-full ".concat(e?"":"hidden"),children:[(0,r.jsxs)("a",{href:"https://github.com/ky28059",className:"flex gap-4 items-center mr-6 text-inherit hover:no-underline",children:[(0,r.jsx)("img",{src:"/pfp.png",alt:"Profile",className:"rounded-full",height:50,width:50}),(0,r.jsx)("h1",{className:"text-3xl font-bold",children:"ky28059"})]}),(0,r.jsx)(i(),{href:"/",className:"p-2 text-inherit hover:no-underline",children:"Home"}),(0,r.jsx)(i(),{href:"/concepts",className:"p-2 text-inherit hover:no-underline",children:"Concepts"})]}),(0,r.jsxs)("div",{className:"flex items-center gap-4 ml-auto text-xl",children:[(0,r.jsx)(l.Z,{className:"cursor-pointer"}),(0,r.jsx)(s,{className:"cursor-pointer",onClick:()=>t(e=>!e)})]})]})}var m=n(6572);function f(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:"Concepts | ky28059.github.io"}),(0,r.jsx)("meta",{name:"description",content:"Various website redesigns and concept pages."})]}),(0,r.jsx)(h,{}),(0,r.jsxs)("main",{className:"container mt-16",children:[(0,r.jsx)(m.Z,{className:"mb-8",children:"Concepts"}),(0,r.jsx)("p",{className:"max-w-4xl mb-12",children:"This directory hosts concept designs for projects I've worked on. Note that most (if not all) of these concepts were designed around computer screens and haven't been made responsive for mobile, so viewing them on a phone may produce undesirable results."}),(0,r.jsxs)("section",{className:"flex flex-wrap gap-6",children:[(0,r.jsx)(p,{name:"RabbitSign",src:"/concepts/thumbnails/rabbitsign.png",href:"/concepts/rabbitsign",children:"A redesign of the RabbitSign landing page."}),(0,r.jsxs)(p,{name:"GAtM",src:"/concepts/thumbnails/gatm.png",href:"/concepts/gunn-gatm",children:["A redesign and port of ",(0,r.jsx)("code",{children:"gunn-gatm.github.io"})," to React."]})]})]})]})}function p(e){let{name:t,src:n,href:s,children:c}=e;return(0,r.jsx)(i(),{href:s,className:"text-inherit hover:no-underline",children:(0,r.jsxs)("div",{className:"rounded-lg overflow-hidden w-96 border border-gray-500/25 hover:border-dark dark:hover:border-white transition duration-200",children:[(0,r.jsx)("img",{src:n,alt:t,className:"w-full"}),(0,r.jsxs)("div",{className:"px-4 pt-2 pb-4",children:[(0,r.jsx)("h3",{className:"font-medium text-lg mb-1",children:t}),(0,r.jsx)("p",{className:"text-sm",children:c})]})]})})}},4287:function(e,t,n){"use strict";n.d(t,{v:function(){return s}});var r=n(7294);function s(){let[e,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>(t(window.scrollY),document.addEventListener("scroll",()=>t(window.scrollY)),()=>document.removeEventListener("scroll",()=>t(window.scrollY))),[]),e}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return a}});var r=n(7294),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=r.createContext&&r.createContext(s),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)0>t.indexOf(r[s])&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};function a(e){return function(t){return r.createElement(l,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,o({key:n},t.attr),e(t.child))})}(e.child))}}function l(e){var t=function(t){var n,s=e.attr,c=e.size,a=e.title,l=i(e,["attr","size","title"]),d=c||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,l,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==c?r.createElement(c.Consumer,null,function(e){return t(e)}):t(s)}}},function(e){e.O(0,[874,228,996,774,888,179],function(){return e(e.s=458)}),_N_E=e.O()}]);