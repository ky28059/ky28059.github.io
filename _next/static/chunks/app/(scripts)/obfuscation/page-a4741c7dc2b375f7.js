(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[846],{45015:function(e,t,n){Promise.resolve().then(n.bind(n,75701))},19926:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var a=n(57437),r=n(94035);function s(e){var t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{className:"text-sm mb-1 text-secondary dark:text-secondary-dark",children:["Code:"," ",(0,a.jsx)("button",{onClick:()=>navigator.clipboard.writeText(e.children),className:"hover:underline",children:"(copy)"})]}),(0,a.jsx)("div",{className:"rounded-lg overflow-hidden text-xs"+(e.className?" ".concat(e.className):""),children:(0,a.jsx)(r.SyntaxHighlighter,{language:null!==(t=e.language)&&void 0!==t?t:"javascript",children:e.children})})]})}},75701:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var a=n(57437),r=n(2265),s=n(55318),l=n(19926);function i(){let[e,t]=(0,r.useState)(u),{defineString:n,parsedString:i,wordCounts:d,tokens:m,errors:p}=(0,r.useMemo)(()=>{let t=[...e.matchAll(/\b[a-zA-Z]+\b/g)],n={};for(let[e]of t)n[e]||(n[e]=0),n[e]++;let a=Math.max(...Object.keys(n).map(e=>e.length)),r=Object.entries(n).filter(e=>{let[t,n]=e;return isNaN(Number(t))}),s=RegExp("\\b(?:".concat(r.filter(e=>{let[t,n]=e;return n>1}).map(e=>{let[t,n]=e;return t}).join("|"),")\\b"),"g"),l=e.replaceAll(s,""),i=l.split(RegExp("\\s+|(?<=\\W)|(?=\\W)")).filter(e=>!!e),o={},d="struct tbnlw{int srlpn;}tbnlw_o;int main(void){",u=[];for(let e=0;e<i.length;e++){let t=i[e],a=i[e+1];if(!/^[a-zA-Z]+$/.test(t)){0===e&&u.push("Corpus does not begin with controllable token."),h(t)||t in n||u.push("Invalid token `".concat(t,"` in corpus"));continue}let r=d,s=!1;d="",","===a?(r+="(void)((void)0",d="0);"+d,s=!0):"."===a?(r+="(void)tbnlw_o",d="srlpn;"+d,s=!0):c.includes(a)?(r+="(void)(0",d="1);"+d,s=!0):Number(a)&&(r+="(void)",d+=";",s=!0),s&&h(i[++e+1])&&u.push("Special character followed by uncontrollable token after token `".concat(t,"`")),e===i.length-1&&(r+="}"),l=l.replaceAll(RegExp("\\b".concat(t,"\\b"),"g"),r||"/* ".concat(t," */")),o[t]=r||"// free"}return d&&u.push("Corpus does not end with controllable token."),console.log(i,o),{defineString:r.map(e=>{var t;let[n,r]=e;return"#define ".concat(n).concat(r>1?"":"".concat(" ".repeat(a-n.length)," ").concat(null!==(t=o[n])&&void 0!==t?t:""))}).join("\n"),parsedString:l,wordCounts:n,tokens:i,errors:u}},[e]);return(0,a.jsxs)("div",{className:"flex gap-6",children:[(0,a.jsxs)("div",{className:"flex-grow [&>pre]:h-max min-w-0",children:[(0,a.jsxs)("p",{className:"my-4",children:["The main idea goal of this obfuscator is being able to format any C program into a given block of English text using ",(0,a.jsx)(o,{children:"#define"})," macros and other tricks to get there."]}),(0,a.jsxs)("p",{className:"my-4",children:["Furthermore, code generated by this obfuscator should compile successfully with"," ",(0,a.jsx)(o,{children:"-Wall -Werror"}),"."]}),(0,a.jsx)("p",{className:"mt-4 mb-3",children:"First, we need to figure out what tokens we have in the text to work with. We can extract all word matches from the corpus using Regex, giving us the following word counts:"}),(0,a.jsx)(l.default,{children:JSON.stringify(d)}),(0,a.jsx)("p",{className:"my-4",children:"To prevent saturating the generation process with overly convoluted computations, we first remove all tokens that are duplicated across the text. This means that the script is sometimes unable to calculate an optimal solution, but also makes it a lot more feasible to write."}),(0,a.jsx)("p",{className:"mt-4 mb-3",children:"Then, the parsed string is tokenized into the following tokens:"}),(0,a.jsx)(l.default,{children:JSON.stringify(m)}),(0,a.jsxs)("p",{className:"my-4",children:["If each token contained only valid variable names, we'd be done. However, symbols like"," ",(0,a.jsx)(o,{children:"."})," or ",(0,a.jsx)(o,{children:","}),' cannot be overridden via macro; the script will attempt to "escape" them using surrounding controllable tokens instead.']}),(0,a.jsx)("p",{className:"my-4",children:"The basic strategy for doing so is as follows:"}),(0,a.jsxs)("ul",{className:"list-disc list-outside pl-6 text-pretty",children:[(0,a.jsxs)("li",{children:["Attempt to escape integer literals by wrapping it in"," ",(0,a.jsx)(o,{children:"(void) [token];"}),"."]}),(0,a.jsxs)("li",{children:["Attempt to escape any valid integer operator (i.e."," ",(0,a.jsx)("span",{className:"inline-flex gap-1",children:c.map(e=>(0,a.jsx)(o,{children:e},e))}),") by wrapping it in"," ",(0,a.jsx)(o,{children:"(void)(0 [operator] 1);"})," ",(0,a.jsx)("em",{className:"text-secondary dark:text-secondary-dark",children:"(a discarded integer operation)"}),"."]}),(0,a.jsxs)("li",{children:["Attempt to escape ",(0,a.jsx)(o,{children:","})," by wrapping it in"," ",(0,a.jsx)(o,{children:"(void)((void)0,0);"})," ",(0,a.jsx)("em",{className:"text-secondary dark:text-secondary-dark",children:"(a discarded comma operator expression)"}),"."]}),(0,a.jsxs)("li",{children:["Attempt to escape ",(0,a.jsx)(o,{children:"."})," by wrapping it in"," ",(0,a.jsx)(o,{children:"(void)obj.prop;"})," ",(0,a.jsx)("em",{className:"text-secondary dark:text-secondary-dark",children:"(a discarded access to some property on some object)"}),"."]})]}),(0,a.jsxs)("p",{className:"my-4",children:["Unfortunately, ",(0,a.jsx)(o,{children:"-Werror"})," causes compilation to fail on unclosed quotes in",(0,a.jsx)(o,{children:"#define"})," macros, and because macros can't insert block comments into code there are certain text sequences that are simply impossible to escape. These include:"]}),(0,a.jsxs)("ul",{className:"list-disc list-outside pl-6 text-pretty",children:[(0,a.jsx)("li",{children:"Any corpus that starts with an uncontrollable token."}),(0,a.jsx)("li",{children:"Any corpus that ends with an uncontrollable token."}),(0,a.jsx)("li",{children:"Any invalid token (i.e. a token that starts with a number that isn't a valid number literal)."}),(0,a.jsxs)("li",{children:["Two ",(0,a.jsx)(o,{children:","}),"s in a row without a controllable token in between."]}),(0,a.jsx)("li",{children:"Any special character proceeded by an incompatible, uncontrollable token."})]}),(0,a.jsx)("p",{className:"my-4",children:"Furthermore, rules surrounding brackets are tricky and this generator is not smart enough to escape them automatically; corpora containing brackets or parentheses must be edited manually."}),(0,a.jsx)("p",{className:"my-4",children:"Applying these rules (and assuming no errors), we can generate the following parsed corpus:"}),(0,a.jsx)(l.default,{language:"c",children:i}),(0,a.jsx)("p",{className:"my-4",children:"where the commented tokens are free slots to put any C code you want to run."}),(0,a.jsxs)("p",{className:"mt-4 mb-3",children:["Then, we can map these tokens to ",(0,a.jsx)(o,{children:"#define"})," macros to generate the final C program (replace defines with ",(0,a.jsx)(o,{children:"// free"})," comments with your C code):"]}),(0,a.jsx)(l.default,{language:"c",children:n+"\n\n"+e})]}),(0,a.jsxs)("div",{className:"w-[26rem] flex-none sticky top-8 h-max",children:[(0,a.jsx)("h5",{className:"text-secondary dark:text-secondary-dark text-sm mb-1",children:"Corpus"}),(0,a.jsx)(s.Z,{value:e,onChange:e=>t(e.target.value),className:"text-sm rounded px-6 py-4 h-24 dark:bg-[#2b2b2b] mb-2 w-full border border-gray-400/50 dark:border-gray-100/10 placeholder:text-gray-400 placeholder:dark:text-gray-100/40"}),p.length>0&&(0,a.jsx)("ol",{className:"bg-black/20 rounded pr-6 pl-10 py-3 text-red-500 text-sm list-outside list-decimal",children:p.map(e=>(0,a.jsx)("li",{children:e},e))})]})]})}function o(e){return(0,a.jsx)("code",{className:"text-secondary dark:text-secondary-dark bg-black/20 rounded p-1",children:e.children})}let c=["-","+","*","/","%","&","|","^",">","<"],d=c.concat([",",".","'",'"',"[","]","(",")"]);function h(e){return d.includes(e)||!isNaN(Number(e))}let u="A cantilever is a rigid structural element that extends horizontally and is\nunsupported at one end. Typically it extends from a flat vertical surface such\nas a wall, to which it must be firmly attached. Like other structural elements,\na cantilever can be formed as a beam, plate, truss, or slab.\n\nCantilever construction allows overhanging structures without additional support.\n\nSee also\n- Applied mechanics\n- Cantilever bicycle brakes\n- Cantilever bicycle frame\n- Cantilever chair\n- Cantilever method\n- Cantilevered stairs\n- Corbel arch\n- Euler-Bernoulli beam theory\n- Grand Canyon Skywalk\n- Knudsen force in the context of microcantilevers\n- Orthodontics\n- Statics"},55318:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(57437),r=n(2265);function s(e){let t=(0,r.useRef)(null),{onChange:n,...s}=e;function l(){let e=t.current;e&&(e.style.height="auto",e.style.height=e.scrollHeight+8+"px")}return(0,r.useLayoutEffect)(()=>{l()},[]),(0,a.jsx)("textarea",{ref:t,onChange:e=>{null==n||n(e),l()},...s})}},94035:function(e,t,n){"use strict";n.r(t),n.d(t,{SyntaxHighlighter:function(){return i},default:function(){return l}});var a=n(57437),r=n(2265),s=n(71542);function l(e){var t,n,s;let{sources:l}=e,[o,c]=(0,r.useState)(0),[d,h]=(0,r.useState)([]);return(0,r.useEffect)(()=>{Promise.all(l.map(e=>fetch(e).then(e=>e.text()))).then(e=>h(e))},[]),(0,a.jsxs)("div",{className:"flex flex-col rounded-lg overflow-hidden w-[36rem] h-[36rem] max-w-full flex-none text-xs bg-[#2b2b2b] border border-gray-100/20",children:[(0,a.jsx)("div",{className:"flex bg-[#484a4a]/50",children:l.map((e,t)=>{var n;return(0,a.jsx)("button",{className:"px-3.5 py-1.5 font-[Consolas,_Monaco,_'Andale_Mono',_monospace] text-[#a9b7c6]"+(o===t?" bg-[#2b2b2b]":""),onClick:()=>c(t),children:null===(n=e.match(/.+\/(.+)/))||void 0===n?void 0:n[1]},e)})}),(0,a.jsx)(i,{language:null!==(n="kt"===(s=null===(t=l[o].match(/.+\.(.+)/))||void 0===t?void 0:t[1])?"kotlin":s)&&void 0!==n?n:"java",children:d[o]})]})}function i(e){return(0,a.jsx)(s.Z,{language:e.language,codeTagProps:{style:{}},showLineNumbers:!0,useInlineStyles:!1,children:e.children})}}},function(e){e.O(0,[235,971,938,744],function(){return e(e.s=45015)}),_N_E=e.O()}]);