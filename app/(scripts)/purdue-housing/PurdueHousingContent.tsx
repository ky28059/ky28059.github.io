'use client'

import { ReactNode, useState } from 'react';

// Components
import CopyCodeBlock from '@/components/CopyCodeBlock';
import LabelledInput from '../LabelledInput';


export default function PurdueHousingContent() {
    const [lowerRoomRate, setLowerRoomRate] = useState(1000);
    const [upperRoomRate, setUpperRoomRate] = useState(20000);
    const [delay, setDelay] = useState(1000);

    const [buildingIds, setBuildingIds] = useState([1, 34, 16, 6, 4, 5]);
    const [roomTypeIds, setRoomTypeIds] = useState([165, 167, 166]);

    return (
        <>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-6 md:mb-4">
                <LabelledInput
                    label="Lower room rate ($)"
                    value={lowerRoomRate}
                    setValue={(value) => !isNaN(Number(value)) && setLowerRoomRate(Number(value))}
                />
                <LabelledInput
                    label="Upper room rate ($)"
                    value={upperRoomRate}
                    setValue={(value) => !isNaN(Number(value)) && setUpperRoomRate(Number(value))}
                />
                <LabelledInput
                    label="Delay (ms)"
                    value={delay}
                    setValue={(value) => !isNaN(Number(value)) && setDelay(Number(value))}
                />
            </div>

            <div className="flex gap-8 sm:gap-24 pl-4 mb-4">
                <div>
                    <IdCheckbox id={166} ids={roomTypeIds} setIds={setRoomTypeIds}>
                        Apartment
                    </IdCheckbox>
                    <IdCheckbox id={165} ids={roomTypeIds} setIds={setRoomTypeIds}>
                        Double
                    </IdCheckbox>
                    <IdCheckbox id={198} ids={roomTypeIds} setIds={setRoomTypeIds}>
                        Quad
                    </IdCheckbox>
                    <IdCheckbox id={169} ids={roomTypeIds} setIds={setRoomTypeIds}>
                        Single
                    </IdCheckbox>
                    <IdCheckbox id={167} ids={roomTypeIds} setIds={setRoomTypeIds}>
                        Suite
                    </IdCheckbox>
                    <IdCheckbox id={168} ids={roomTypeIds} setIds={setRoomTypeIds}>
                        Triple
                    </IdCheckbox>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-rows-6 lg:grid-flow-col gap-x-6">
                    <IdCheckbox id={1} ids={buildingIds} setIds={setBuildingIds}>
                        Cary Quadrangle
                    </IdCheckbox>
                    <IdCheckbox id={2} ids={buildingIds} setIds={setBuildingIds}>
                        Earhart
                    </IdCheckbox>
                    <IdCheckbox id={3} ids={buildingIds} setIds={setBuildingIds}>
                        First Street Towers
                    </IdCheckbox>
                    <IdCheckbox id={34} ids={buildingIds} setIds={setBuildingIds}>
                        Frieda Parker
                    </IdCheckbox>
                    <IdCheckbox id={4} ids={buildingIds} setIds={setBuildingIds}>
                        Harrison
                    </IdCheckbox>
                    <IdCheckbox id={5} ids={buildingIds} setIds={setBuildingIds}>
                        Hawkins
                    </IdCheckbox>
                    <IdCheckbox id={6} ids={buildingIds} setIds={setBuildingIds}>
                        Hillenbrand
                    </IdCheckbox>
                    <IdCheckbox id={17} ids={buildingIds} setIds={setBuildingIds}>
                        Honors
                    </IdCheckbox>
                    <IdCheckbox id={8} ids={buildingIds} setIds={setBuildingIds}>
                        McCutcheon
                    </IdCheckbox>
                    <IdCheckbox id={9} ids={buildingIds} setIds={setBuildingIds}>
                        Meredith
                    </IdCheckbox>
                    <IdCheckbox id={33} ids={buildingIds} setIds={setBuildingIds}>
                        Meredith South
                    </IdCheckbox>
                    <IdCheckbox id={10} ids={buildingIds} setIds={setBuildingIds}>
                        Owen
                    </IdCheckbox>
                    <IdCheckbox id={12} ids={buildingIds} setIds={setBuildingIds}>
                        Shreve
                    </IdCheckbox>
                    <IdCheckbox id={13} ids={buildingIds} setIds={setBuildingIds}>
                        Tarkington
                    </IdCheckbox>
                    <IdCheckbox id={14} ids={buildingIds} setIds={setBuildingIds}>
                        Wiley
                    </IdCheckbox>
                    <IdCheckbox id={15} ids={buildingIds} setIds={setBuildingIds}>
                        Windsor
                    </IdCheckbox>
                    <IdCheckbox id={16} ids={buildingIds} setIds={setBuildingIds}>
                        Winifred Parker
                    </IdCheckbox>
                </div>
            </div>

            <CopyCodeBlock language="js" className="mb-10">
                {script(lowerRoomRate, upperRoomRate, delay, roomTypeIds, buildingIds)}
            </CopyCodeBlock>
        </>
    )
}

type IdCheckboxProps = {
    id: number,
    ids: number[],
    setIds: (ids: number[]) => void,
    children: ReactNode
}
function IdCheckbox(props: IdCheckboxProps) {
    const {id, ids, setIds, children} = props;

    return (
        <div className="flex gap-3 text-primary items-center">
            <input
                type="checkbox"
                className="accent-grapefruit flex-none"
                checked={ids.includes(id)}
                onChange={(e) => {
                    e.target.checked
                        ? setIds([...ids, id])
                        : setIds(ids.filter(i => i !== id))
                }}
            />
            {children}
        </div>
    )
}

const script = (lowerRoomRate: number, upperRoomRate: number, delay: number, roomTypeIds: number[], buildingIds: number[]) => `const roomTypeIds = [${roomTypeIds.join(', ')}];
const buildingIds = [${buildingIds.join(', ')}];
const lowerRoomRate = ${lowerRoomRate};
const upperRoomRate = ${upperRoomRate};
const delay = ${delay};

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
}`

function roomTypeToId(room: string) {
    switch (room) {
        case 'apartment': return 166;
        case 'double': return 165;
        case 'quad': return 198;
        case 'single': return 169;
        case 'suite': return 167;
        case 'triple': return 168;
        default: return 0;
    }
}

function buildingToId(building: string) {
    switch (building) {
        case 'cary': return 1;
        case 'earhart': return 2;
        case 'fst': return 3;
        case 'frieda': return 34;
        case 'harrison': return 4;
        case 'hawkins': return 5;
        case 'hillenbrand': return 6;
        case 'honors': return 17;
        case 'mccutcheon': return 8;
        case 'meredith': return 9;
        case 'merediths': return 33;
        case 'owen': return 10;
        case 'shreve': return 12;
        case 'tark': return 13;
        case 'wiley': return 14;
        case 'windsor': return 15;
        case 'winifred': return 16;
        default: return 0;
    }
}
