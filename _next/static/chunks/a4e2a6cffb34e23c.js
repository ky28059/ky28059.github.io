(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,49356,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},37429,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},40141,e=>{"use strict";var t=e.i(71645),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=t.default.createContext&&t.default.createContext(r),o=["attr","size","title"];function i(){return(i=Object.assign.bind()).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var a,o,i;a=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in a?Object.defineProperty(a,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[o]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){return r=>t.default.createElement(c,i({attr:n({},e.attr)},r),function e(r){return r&&r.map((r,a)=>t.default.createElement(r.tag,n({key:a},r.attr),e(r.child)))}(e.child))}function c(e){var s=r=>{var a,{attr:s,size:d,title:c}=e,l=function(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,o),u=d||r.size||"1em";return r.className&&(a=r.className),e.className&&(a=(a?a+" ":"")+e.className),t.default.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,l,{className:a,style:n(n({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&t.default.createElement("title",null,c),e.children)};return void 0!==a?t.default.createElement(a.Consumer,null,e=>s(e)):s(r)}e.s(["GenIcon",()=>d],40141)},1245,e=>{"use strict";var t=e.i(43476);function r(e){let{value:r,setValue:a,label:o}=e;return(0,t.jsxs)("div",{className:"flex flex-col gap-1 grow",children:[(0,t.jsx)("label",{className:"text-xs text-secondary",children:o}),(0,t.jsx)("input",{type:"text",value:r,onChange:e=>a(e.target.value),className:"rounded px-3 py-1 dark:bg-[#2b2b2b] border border-secondary/40"})]})}e.s(["default",()=>r])},96699,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(10453),o=e.i(1245);function i(){let[e,i]=(0,r.useState)(1e3),[d,c]=(0,r.useState)(2e4),[l,u]=(0,r.useState)(1e3),[m,p]=(0,r.useState)([1,34,16,6,4,5]),[f,h]=(0,r.useState)([165,167,166]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"flex flex-wrap gap-x-3 gap-y-1.5 mb-6 md:mb-4",children:[(0,t.jsx)(o.default,{label:"Lower room rate ($)",value:e,setValue:e=>!isNaN(Number(e))&&i(Number(e))}),(0,t.jsx)(o.default,{label:"Upper room rate ($)",value:d,setValue:e=>!isNaN(Number(e))&&c(Number(e))}),(0,t.jsx)(o.default,{label:"Delay (ms)",value:l,setValue:e=>!isNaN(Number(e))&&u(Number(e))})]}),(0,t.jsxs)("div",{className:"flex gap-8 sm:gap-24 pl-4 mb-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(s,{id:166,ids:f,setIds:h,children:"Apartment"}),(0,t.jsx)(s,{id:165,ids:f,setIds:h,children:"Double"}),(0,t.jsx)(s,{id:198,ids:f,setIds:h,children:"Quad"}),(0,t.jsx)(s,{id:169,ids:f,setIds:h,children:"Single"}),(0,t.jsx)(s,{id:167,ids:f,setIds:h,children:"Suite"}),(0,t.jsx)(s,{id:168,ids:f,setIds:h,children:"Triple"})]}),(0,t.jsxs)("div",{className:"grid sm:grid-cols-2 lg:grid-rows-6 lg:grid-flow-col gap-x-6",children:[(0,t.jsx)(s,{id:1,ids:m,setIds:p,children:"Cary Quadrangle"}),(0,t.jsx)(s,{id:2,ids:m,setIds:p,children:"Earhart"}),(0,t.jsx)(s,{id:3,ids:m,setIds:p,children:"First Street Towers"}),(0,t.jsx)(s,{id:34,ids:m,setIds:p,children:"Frieda Parker"}),(0,t.jsx)(s,{id:4,ids:m,setIds:p,children:"Harrison"}),(0,t.jsx)(s,{id:5,ids:m,setIds:p,children:"Hawkins"}),(0,t.jsx)(s,{id:6,ids:m,setIds:p,children:"Hillenbrand"}),(0,t.jsx)(s,{id:17,ids:m,setIds:p,children:"Honors"}),(0,t.jsx)(s,{id:8,ids:m,setIds:p,children:"McCutcheon"}),(0,t.jsx)(s,{id:9,ids:m,setIds:p,children:"Meredith"}),(0,t.jsx)(s,{id:33,ids:m,setIds:p,children:"Meredith South"}),(0,t.jsx)(s,{id:10,ids:m,setIds:p,children:"Owen"}),(0,t.jsx)(s,{id:12,ids:m,setIds:p,children:"Shreve"}),(0,t.jsx)(s,{id:13,ids:m,setIds:p,children:"Tarkington"}),(0,t.jsx)(s,{id:14,ids:m,setIds:p,children:"Wiley"}),(0,t.jsx)(s,{id:15,ids:m,setIds:p,children:"Windsor"}),(0,t.jsx)(s,{id:16,ids:m,setIds:p,children:"Winifred Parker"})]})]}),(0,t.jsx)(a.default,{language:"js",className:"mb-10",children:n(e,d,l,f,m)})]})}function s(e){let{id:r,ids:a,setIds:o,children:i}=e;return(0,t.jsxs)("div",{className:"flex gap-3 text-primary items-center",children:[(0,t.jsx)("input",{type:"checkbox",className:"accent-grapefruit flex-none",checked:a.includes(r),onChange:e=>{e.target.checked?o([...a,r]):o(a.filter(e=>e!==r))}}),i]})}let n=(e,t,r,a,o)=>`const roomTypeIds = [${a.join(", ")}];
const buildingIds = [${o.join(", ")}];
const lowerRoomRate = ${e};
const upperRoomRate = ${t};
const delay = ${r};

let id;
;(async () => {
    // Parse URL token from search param after login
    const params = new URLSearchParams(location.search);
    const urlToken = params.get('UrlToken');

    const dateStart = params.get('DateStart');
    const dateEnd = params.get('DateEnd');
    const termId = params.get('TermID');
    const classificationId = params.get('ClassificationID');

    const verificationToken = document.body.innerHTML.match(/<input name="__RequestVerificationToken" type="hidden" value="(.+)"\\s*\\/?>/)?.[1];
    if (!verificationToken) return log('Could not parse request verification token!');

    const data = document.body.innerHTML.match(/<div class="" data-actualaddingroomtocartoption=".*" data-canaddroomstocart=".*" data-classificationid=".+" data-currencysymbol=".*" data-currentpagenumber="(.+)" data-dateend="(.+)" data-datestart="(.+)" data-filterresultshash="(.+)" data-invalidfieldresponse=".*" data-isauthenticated=".*" data-lowerroomratevalue=".*" data-maximumroomratefilterarialabel=".*" data-maximumroomratefiltervalue=".*" data-minimumroomratefilterarialabel=".*" data-minimumroomratefiltervalue=".*" data-mustselectroommessage=".+" data-portalpageid=".+" data-portalrulestatus=".*" data-processid="(.+)" data-roombaseids=".*" data-roomrateid=".*" data-roomselectionpageid="(.*)" data-showfilterswithoutrooms=".*" data-termid=".+" data-unknowninvalidfieldresponse=".*" data-upperroomratevalue=".*" data-useroommateclassifications=".*" id="page-container">/)
    if (!data) return log('Could not parse other page data!');
    const [, currentPageNumber, dateEndISO, dateStartISO, filterHash, processId, roomSelectionPageId] = data;

    // Construct filter request body
    const filterBody = {
        classificationID: Number(classificationId),
        currentPageNumber: Number(currentPageNumber),
        termID: Number(termId),
        filters: {
            DateStart: dateStartISO,
            DateEnd: dateEndISO,
            ProfileItemID: roomTypeIds, // Room type IDs
            RoomLocationID: buildingIds, // Building IDs
            RoomBaseIDs: [],
            RoomLocationAreaID: [],
            RoomLocationFloorSuiteID: [],
            RoomTypeID: [],
            UseRoommateClassifications: false,
            LowerRoomRateValue: lowerRoomRate,
            UpperRoomRateValue: upperRoomRate,
        }
    }

    id = setInterval(queryRooms, delay);

    async function queryRooms() {
        const res = await fetch(\`https://purdue.starrezhousing.com/StarRezPortalX/General/RoomSearch/roomsearch/GetFilterResultsAuthenticated?hash=\${filterHash}&pageID=\${roomSelectionPageId}&processID=\${processId}\`, {
            method: 'POST',
            body: JSON.stringify(filterBody),
            headers: {
                __RequestVerificationToken: verificationToken,
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        if (!res.ok) return log('Error while fetching filter endpoint');

        const parsed = await res.json();
        if (!('ResultsHtml' in parsed)) {
            log('Error response when fetching filter endpoint');
            return console.log(parsed);
        }

        console.log(parsed.ResultsHtml);

        // Search HTML response for "add to cart" buttons
        const matches = [...parsed.ResultsHtml.matchAll(/<button aria-label="Add (.+) To Cart" class="ui-add-room-to-cart sr_button_primary sr_button" data-hash="(.+)" data-url="(.+)" title="Add To Cart" type="button">.+<\\/button>/g)];
        if (!matches.length) return log('No rooms found');

        for (const [, name, hash, url] of matches) {
            log(\`Found room \${name}\`);

            // Match room base and rate ID from broken url data param
            const roomMatch = url.match(/roomBaseID=(.+?)&amp;roomRateID=(.+?)&amp;/);
            if (!roomMatch) {
                log(\`Couldn't find base and rate ID for room \${name}\`)
                continue;
            }

            // Add room to cart
            const [, roomBaseId, roomRateId] = roomMatch;
            const res = await fetch(\`https://purdue.starrezhousing.com/StarRezPortalX/General/RoomSearch/roomsearch/AddRoomToCartForTerm?hash=\${hash}&checkInDate=\${dateStartISO}&checkOutDate=\${dateEndISO}&termID=\${termId}&pageID=\${roomSelectionPageId}&roomBaseID=\${roomBaseId}&roomRateID=\${roomRateId}\`, {
                method: 'POST',
                body: JSON.stringify({}),
                headers: {
                    __RequestVerificationToken: verificationToken,
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });
            if (!res.ok) {
                log(\`Error adding room \${name} to cart\`);
                continue;
            }

            // Construct next page request body
            const continueBody = {
                RoomLocationID: buildingIds,
                ProfileItemID: roomTypeIds,
                PageWidgetData: []
            }
            for (const id of [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 17, 33, 34])
                continueBody[\`\${id}-checkbox\`] = buildingIds.includes(id);
            for (const id of [165, 166, 167, 168, 169, 198])
                continueBody[\`\${id}-checkbox\`] = roomTypeIds.includes(id);

            // Fetch next page URL and open it in a new tab if everything is successful
            const checkoutRawUrl = await (await fetch(window.location.href, {
                method: 'POST',
                body: JSON.stringify(continueBody),
                headers: {
                    __RequestVerificationToken: verificationToken,
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })).text();

            window.open(checkoutRawUrl.slice(1, -1).replaceAll('\\\\u0026', '&'));
            clearInterval(id);
        }
    }
})();

function log(m) {
    console.log(\`[\${new Date().toLocaleTimeString()}]: \${m}\`);
}`;e.s(["default",()=>i])}]);