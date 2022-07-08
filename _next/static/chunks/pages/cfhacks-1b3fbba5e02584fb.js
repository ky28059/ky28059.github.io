(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[735],{8751:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cfhacks",function(){return t(1027)}])},7557:function(e,n,t){"use strict";t.d(n,{Z:function(){return o},d:function(){return c}});var s=t(5893),a=t(7294),r=t(5227);function o(e){var n,t,r=e.sources,o=(0,a.useState)(0),i=o[0],d=o[1],u=(0,a.useState)([]),h=u[0],m=u[1];return(0,a.useEffect)((function(){Promise.all(r.map((function(e){return fetch(e).then((function(e){return e.text()}))}))).then((function(e){return m(e)}))}),[]),(0,s.jsxs)("div",{className:"flex flex-col rounded-lg overflow-hidden w-[36rem] h-[36rem] max-w-full flex-none text-xs bg-[#2b2b2b] border border-gray-100/20",children:[(0,s.jsx)("div",{className:"flex bg-[#484a4a]/50",children:r.map((function(e,n){var t;return(0,s.jsx)("button",{className:"px-3.5 py-1.5 font-[Consolas,_Monaco,_'Andale_Mono',_monospace] text-[#a9b7c6]"+(i===n?" bg-[#2b2b2b]":""),onClick:function(){return d(n)},children:null===(t=e.match(/.+\/(.+)/))||void 0===t?void 0:t[1]},e)}))}),(0,s.jsx)(c,{language:null!==(t=l(null===(n=r[i].match(/.+\.(.+)/))||void 0===n?void 0:n[1]))&&void 0!==t?t:"java",children:h[i]})]})}function c(e){return(0,s.jsx)(r.Z,{language:e.language,codeTagProps:{style:{}},showLineNumbers:!0,useInlineStyles:!1,children:e.children})}function l(e){return"kt"===e?"kotlin":e}},9383:function(e,n,t){"use strict";t.d(n,{O:function(){return r},Z:function(){return a}});var s=t(5893);function a(e){return(0,s.jsx)("section",{className:"py-8 my-4 "+(e.secondary?"bg-gray-100 dark:bg-dark":"bg-white dark:bg-midnight"),children:(0,s.jsx)("div",{className:"container"+(e.className?" ".concat(e.className):""),children:e.children})})}function r(e){return(0,s.jsx)("h1",{className:"text-5xl font-bold mb-6"+(e.className?" ".concat(e.className):""),children:e.children})}},1027:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var s=t(5893),a=t(7294),r=t(9008),o=t(9383),c=t(7557);function l(){var e=(0,a.useState)(1701),n=e[0],t=e[1],l=(0,a.useState)("A"),u=l[0],h=l[1],m=(0,a.useState)(""),f=m[0],x=m[1],b=(0,a.useState)(1e3),p=b[0],g=b[1],j=(0,a.useRef)(null);return(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:"Codeforces Hacks | ky28059.github.io"}),(0,s.jsx)("meta",{name:"description",content:"Generator for a script to hack all AC submissions in a Codeforces contest."})]}),(0,s.jsxs)("main",{className:"container py-24",children:[(0,s.jsx)(o.O,{children:"Hack everyone!"}),(0,s.jsxs)("p",{className:"mb-3",children:["This is a script for automatically hacking AC submissions to a given problem in a given contest. To use this script, input the target ",(0,s.jsx)("code",{children:"contestId"}),", ",(0,s.jsx)("code",{children:"problem"}),", ",(0,s.jsx)("code",{children:"testCase"}),", and ",(0,s.jsx)("code",{children:"count"}),", then paste the generated javascript into console on codeforces.com."]}),(0,s.jsx)("p",{className:"font-medium",children:"Notes:"}),(0,s.jsxs)("ul",{className:"list-disc pl-6 mb-6 max-w-4xl",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"Contest"})," should be the ID of the contest (eg."," ",(0,s.jsx)("code",{children:"https://codeforces.com/contest/1701"})," has an ID of 1701)."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"Problem"})," should be the index (letter) of the problem (eg. A, B, C, etc.)."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"Count"})," should be the number of submissions you want to parse. Note that this corresponds to the total number of submissions ",(0,s.jsx)("em",{children:"before"})," filtering for AC or problem."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"Test case"})," should be the test case you want to submit as a hack."]})]}),(0,s.jsxs)("div",{className:"flex gap-3 mb-2.5 max-w-2xl",children:[(0,s.jsx)(i,{label:"Contest",value:n,setValue:function(e){return!isNaN(Number(e))&&t(Number(e))}}),(0,s.jsx)(i,{label:"Problem",value:u,setValue:h}),(0,s.jsx)(i,{label:"Count",value:p,setValue:function(e){return!isNaN(Number(e))&&g(Number(e))}})]}),(0,s.jsx)("textarea",{ref:j,placeholder:"Test case",value:f,onChange:function(e){x(e.target.value);var n=j.current;n&&(n.style.height="auto",n.style.height=n.scrollHeight+8+"px")},className:"rounded px-3 py-1 dark:bg-[#2b2b2b] mb-3 w-full max-w-2xl border border-gray-400/50 dark:border-gray-100/10 placeholder:text-gray-400 placeholder:dark:text-gray-100/40"}),(0,s.jsxs)("p",{className:"text-sm mb-1 text-gray-400 dark:text-gray-100/40",children:["Generated:"," ",(0,s.jsx)("button",{onClick:function(){return navigator.clipboard.writeText(d(n,u,f,p))},className:"hover:underline",children:"(copy)"})]}),(0,s.jsx)("div",{className:"rounded-lg overflow-hidden text-xs",children:(0,s.jsx)(c.d,{language:"javascript",children:d(n,u,f,p)})})]})]})}function i(e){var n=e.value,t=e.setValue,a=e.label;return(0,s.jsxs)("div",{className:"flex flex-col gap-1 flex-grow",children:[(0,s.jsx)("label",{className:"text-xs text-gray-400 dark:text-gray-100/40",children:a}),(0,s.jsx)("input",{type:"text",value:n,onChange:function(e){return t(e.target.value)},className:"rounded px-3 py-1 dark:bg-[#2b2b2b] border border-gray-400/50 dark:border-gray-100/10"})]})}var d=function(e,n,t,s){return"const contestId = ".concat(e,";\nconst problem = '").concat(n.replaceAll(/['\\]/g,"\\$&"),"';\nconst testCase = `").concat(t.replaceAll(/[`\\$]/g,"\\$&"),"`;\nconst count = ").concat(s,';\n\n;(async () => {\n    const submissions = (await (await fetch(`https://codeforces.com/api/contest.status?contestId=${contestId}&from=1&count=${count}`)).json()).result\n        .filter((submission) => submission.verdict === \'OK\' && submission.problem.index === problem);\n\n    for (const submission of submissions) {\n        const raw = await (await fetch(`https://codeforces.com/contest/1701/challenge/${submission.id}`)).text();\n        const [, csrf, body] = raw.match(/<form class="challenge-form".+?action="\\/data\\/challenge\\?csrf_token=(.+?)".*?>([^]+)<\\/form>/);\n\n        const formData = new FormData();\n\n        // Add all hidden fields\n        [...body.matchAll(/<input type="hidden".+?name="(\\w+)".+?value="(\\w+)"\\/>/g)]\n            .forEach(([, name, value]) => formData.append(name, value));\n\n        formData.append(\'testcase\', testCase);\n\n        await fetch(`https://codeforces.com/data/challenge?csrf_token=${csrf}`, {\n            body: formData,\n            method: \'POST\'\n        });\n    }\n})();')}},9008:function(e,n,t){e.exports=t(3121)}},function(e){e.O(0,[227,774,888,179],(function(){return n=8751,e(e.s=n);var n}));var n=e.O();_N_E=n}]);