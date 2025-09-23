'use client'

import { useEffect, useRef, useState, useTransition } from 'react';
import CenteredModal from '@/components/CenteredModal';


export default function GeoGridContent() {
    const countryRef = useRef<CountryInfo[] | null>(null);
    const geogridDataRef = useRef<{ [code: string]: GeogridCountryDetails }>({});
    const commonDataRef = useRef<{ [code: string]: CommonCountryDetails }>({});

    const [filtered, setFiltered] = useState<CountryInfo[] | null>(null);
    const [pending, startTransition] = useTransition();

    const [query, setQuery] = useState('');

    // The ID of the country for which we are displaying the border modal
    const [selectedBorders, setSelectedBorders] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            const countries = await fetchCountries();
            countryRef.current = countries;

            // Fetch all geogrid / common country details in parallel
            const [geogrid, common] = await Promise.all([
                Promise.all(countries.map(c => fetchGeogridData(c.code))),
                Promise.all(countries.map(c => fetchCommonData(c.code)))
            ]);
            geogridDataRef.current = Object.fromEntries(geogrid.map((d, i) => [countries[i].code, d]));
            commonDataRef.current = Object.fromEntries(common.map((d, i) => [countries[i].code, d]));

            setFiltered(countries);
        }

        void fetchData();
    }, []);

    function updateQuery(query: string) {
        setQuery(query);
        startTransition(() => {
            if (!countryRef.current) return;
            setFiltered(countryRef.current.filter(c => c.name.toLowerCase().includes(query.toLowerCase())));
        })
    }

    return (
        <>
            <div className="container mb-6">
                <input
                    className="rounded px-3.5 py-1.5 text-sm border border-tertiary focus:outline-none focus:ring-2"
                    value={query}
                    onChange={(e) => updateQuery(e.target.value)}
                    placeholder="Filter by country"
                />
            </div>

            <div className="flex-grow overflow-x-auto flex flex-col">
                <div className="w-max border-b border-tertiary flex text-xs text-primary items-center break-words">
                    <div className="ml-[4.75rem] w-36 flex-none mr-3">
                        Name / code
                    </div>

                    <div className="w-24 flex-none mr-3">
                        Population
                    </div>
                    <div className="w-28 flex-none mr-3">
                        Size
                    </div>
                    <div className="w-28 flex-none mr-3">
                        Borders
                    </div>
                    <div className="w-12 flex-none mr-3">
                        HDI
                    </div>
                    <div className="w-12 flex-none mr-3">
                        CPI
                    </div>
                    <div className="w-16 flex-none mr-3">
                        GDP / capita
                    </div>
                    <div className="w-20 flex-none mr-3">
                        Coastline length
                    </div>
                    <div className="w-24 flex-none mr-3">
                        Air pollution
                    </div>
                    <div className="w-24 flex-none mr-3">
                        CO₂ emissions / capita
                    </div>
                    <div className="w-12 flex-none mr-3">
                        Olympic medals
                    </div>
                    <div className="w-14 flex-none mr-3">
                        Continent(s)
                    </div>
                    <div className="w-20 flex-none mr-3">
                        River systems
                    </div>
                    <div className="w-20 flex-none mr-3">
                        Official lang(s)
                    </div>
                    <GridBooleanLabel label="Landlocked" />
                    <GridBooleanLabel label="Island nation" />
                    <GridBooleanLabel label="Monarchy" />
                    <GridBooleanLabel label="EU" />
                    <GridBooleanLabel label="Cmlth." />
                    <GridBooleanLabel label="USSR" />
                    <GridBooleanLabel label="Nuc. power" />
                    <GridBooleanLabel label="Nuc. weapons" />
                    <GridBooleanLabel label="DST" />
                    <GridBooleanLabel label="SSM legal" />
                    <GridBooleanLabel label="SSA illegal" />
                    <GridBooleanLabel label="Drives left" />
                    <GridBooleanLabel label="Alc. ban" />
                    <GridBooleanLabel label="Touches Sahara" />
                    <GridBooleanLabel label="Touches equator" />
                    <GridBooleanLabel label="Touches Eur. steppe" />
                    <GridBooleanLabel label="Hosted F1" />
                    <GridBooleanLabel label="Hosted olympics" />
                    <GridBooleanLabel label="Hosted MWC" />
                    <GridBooleanLabel label="Played MWC" />
                    <GridBooleanLabel label="Won MWC" />
                    <GridBooleanLabel label="T20 WHS" />
                    <GridBooleanLabel label="T20 tourism" />
                    <GridBooleanLabel label="T20 rail" />
                    <GridBooleanLabel label="T20 pop. density" />
                    <GridBooleanLabel label="B20 pop. density" />
                    <GridBooleanLabel label="T20 wheat" />
                    <GridBooleanLabel label="T20 oil" />
                    <GridBooleanLabel label="T20 ren. energy" />
                    <GridBooleanLabel label="T10 lakes" />
                    <GridBooleanLabel label="50 skyscrapers" />
                    <GridBooleanLabel label="T20 obesity" />
                    <GridBooleanLabel label="T20 alcohol" />
                    <GridBooleanLabel label="T20 choc." />
                </div>

                <div className={'flex-grow w-max bg-black/25 flex flex-col overflow-y-auto divide-y divide-tertiary transition duration-200' + (pending ? ' opacity-50' : '')}>
                    {!filtered ? (
                        <div>...</div>
                    ) : filtered.map((c) => {
                        const geogridDetails = geogridDataRef.current[c.code];
                        const commonDetails = commonDataRef.current[c.code];

                        return (
                            <div
                                className="flex text-sm items-center hover:bg-tertiary/30"
                                key={c.code}
                            >
                                <img
                                    className="max-h-12 w-16 flex-none object-contain object-right py-0.5 mr-3"
                                    src={getFlagUrl(c.code)}
                                    alt={c.name}
                                />
                                <div className="w-36 flex-none mr-3 text-pretty">
                                    {c.name} <span className="text-secondary">({c.code})</span>
                                </div>
                                <GridCell
                                    className="w-24"
                                    value={commonDetails?.population}
                                />
                                <GridCell
                                    className="w-28"
                                    value={commonDetails?.size}
                                    unit="km²"
                                />
                                {(geogridDetails?.geographyInfo.borderCountOverride !== undefined || geogridDetails?.geographyInfo.islandNation) ? (
                                    <GridCell
                                        className="w-28"
                                        value={geogridDetails?.geographyInfo.borderCountOverride ?? 0}
                                    />
                                ) : (
                                    <button
                                        className="w-28 text-sm mr-3 flex-none bg-white/10 hover:bg-white/15 transition duration-150 rounded-full px-2.5 py-1 text-left my-0.5"
                                        onClick={() => setSelectedBorders(c.code)}
                                    >
                                        {commonDetails.borders.length}{' '}
                                        <span className="text-secondary text-xs">(view all)</span>
                                    </button>
                                )}
                                <GridCell
                                    className="w-12"
                                    value={geogridDetails?.economicInfo.HDI}
                                />
                                <GridCell
                                    className="w-12"
                                    value={geogridDetails?.politicalInfo.CPI}
                                />
                                <GridCell
                                    className="w-16"
                                    value={geogridDetails?.economicInfo.GDPPerCapita}
                                    prefix="$"
                                />
                                <GridCell
                                    className="w-20"
                                    value={geogridDetails?.geographyInfo.coastlineLength}
                                    unit="km"
                                />
                                <GridCell
                                    className="w-24"
                                    value={geogridDetails?.factsInfo.airPollution}
                                    unit="μg/m³"
                                />
                                <GridCell
                                    className="w-24"
                                    value={geogridDetails?.factsInfo.co2Emissions}
                                    unit="tCO₂/y"
                                />
                                <GridCell
                                    className="w-12"
                                    value={geogridDetails?.sportsInfo.olympicMedals}
                                />
                                <GridArrayCell
                                    className="w-14 text-xs"
                                    value={commonDetails?.continent}
                                />
                                <GridArrayCell
                                    className="w-20 text-xs"
                                    value={geogridDetails?.geographyInfo.rivers}
                                />
                                <GridArrayCell
                                    className="w-20 text-xs"
                                    value={geogridDetails?.politicalInfo.officialLanguageCodes}
                                />
                                <GridBooleanCell value={geogridDetails?.geographyInfo.landlocked} />
                                <GridBooleanCell value={geogridDetails?.geographyInfo.islandNation} />
                                <GridBooleanCell value={geogridDetails?.politicalInfo.isMonarchy} />
                                <GridBooleanCell value={geogridDetails?.politicalInfo.inEU} />
                                <GridBooleanCell value={geogridDetails?.politicalInfo.inCommonwealth} />
                                <GridBooleanCell value={geogridDetails?.politicalInfo.wasUSSR} />
                                <GridBooleanCell value={geogridDetails?.economicInfo.producesNuclearPower} />
                                <GridBooleanCell value={geogridDetails?.politicalInfo.hasNuclearWeapons} />
                                <GridBooleanCell value={geogridDetails?.politicalInfo.observesDST} />
                                <GridBooleanCell value={geogridDetails?.politicalInfo.sameSexMarriageLegal} />
                                <GridBooleanCell value={geogridDetails?.politicalInfo.sameSexActivitiesIllegal} />
                                <GridBooleanCell value={geogridDetails?.factsInfo.drivesLeft} />
                                <GridBooleanCell value={geogridDetails?.factsInfo.hasAlcoholBan} />
                                <GridBooleanCell value={geogridDetails?.geographyInfo.touchesSahara} />
                                <GridBooleanCell value={geogridDetails?.geographyInfo.touchesEquator} />
                                <GridBooleanCell value={geogridDetails?.geographyInfo.touchesEurasionSteppe} />
                                <GridBooleanCell value={geogridDetails?.sportsInfo.hostedF1} />
                                <GridBooleanCell value={geogridDetails?.sportsInfo.hostedOlympics} />
                                <GridBooleanCell value={geogridDetails?.sportsInfo.hostedMensWorldCup} />
                                <GridBooleanCell value={geogridDetails?.sportsInfo.playedMensWorldCup} />
                                <GridBooleanCell value={geogridDetails?.sportsInfo.wonMensWorldCup} />
                                <GridBooleanCell value={geogridDetails?.factsInfo.top20WorldHeritageSites} />
                                <GridBooleanCell value={geogridDetails?.factsInfo.top20TourismRate} />
                                <GridBooleanCell value={geogridDetails?.factsInfo.top20RailSize} />
                                <GridBooleanCell value={geogridDetails?.factsInfo.top20PopulationDensity} />
                                <GridBooleanCell value={geogridDetails?.factsInfo.bottom20PopulationDensity} />
                                <GridBooleanCell value={geogridDetails?.economicInfo.top20WheatProduction} />
                                <GridBooleanCell value={geogridDetails?.economicInfo.top20OilProduction} />
                                <GridBooleanCell value={geogridDetails?.economicInfo.top20RenewableElectricityProduction} />
                                <GridBooleanCell value={geogridDetails?.geographyInfo.top10Lakes} />
                                <GridBooleanCell value={geogridDetails?.factsInfo.has50Skyscrapers} />
                                <GridBooleanCell value={geogridDetails?.factsInfo.top20ObesityRate} />
                                <GridBooleanCell value={geogridDetails?.factsInfo.top20AlcoholConsumption} />
                                <GridBooleanCell value={geogridDetails?.factsInfo.top20ChocolateConsumption} />
                            </div>
                        )
                    })}
                </div>
            </div>

            <CenteredModal
                isOpen={selectedBorders !== null}
                close={() => setSelectedBorders(null)}
                className="relative w-full max-w-xl bg-midnight rounded-md overflow-clip pt-6"
            >
                {selectedBorders !== null && (
                    <>
                        <h1 className="text-xl font-semibold px-8 mb-3">
                            Borders of {commonDataRef.current[selectedBorders].name}
                        </h1>

                        <div className="flex flex-col divide-y divide-tertiary">
                            {[...new Set(commonDataRef.current[selectedBorders].borders)].map((code) => (
                                <div className="flex items-center gap-3.5" key={code}>
                                    <img
                                        src={getFlagUrl(code)}
                                        className="w-14 max-h-12 object-contain object-right"
                                    />
                                    <p className="py-1.5 text-sm">
                                        {commonDataRef.current[code.toUpperCase()]?.name}{' '}
                                        <span className="text-secondary">({code.toUpperCase()})</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </CenteredModal>
        </>
    )
}

type GridCellProps = {
    value: string | number | null | undefined,
    prefix?: string,
    unit?: string,
    className: string
}
function GridCell(props: GridCellProps) {
    if (props.value === undefined || props.value === null) return (
        <div className={`${props.className} text-secondary mr-3 flex-none`}>
            —
        </div>
    )

    return (
        <div className={`${props.className} mr-3 flex-none`}>
            {props.prefix}
            {typeof props.value === 'number' ? withCommas(props.value) : props.value}
            {props.unit && (
                <span className="text-secondary ml-1">{props.unit}</span>
            )}
        </div>
    )
}

type GridBooleanCellProps = {
    value: boolean | null | undefined
}
function GridBooleanCell(props: GridBooleanCellProps) {
    if (props.value === undefined || props.value === null) return (
        <div className="w-14 flex-none text-secondary">
            —
        </div>
    )

    return (
        <div className={'w-14 flex-none self-stretch flex items-center justify-center ' + (props.value ? 'bg-lime-500/30' : 'bg-red-500/25')}>
            <input
                disabled
                readOnly
                type="checkbox"
                checked={props.value}
            />
        </div>
    )
}

type GridArrayCellProps = {
    value: string[] | undefined,
    className: string
}
function GridArrayCell(props: GridArrayCellProps) {
    if (!props.value || props.value.length === 0) return (
        <div className={`${props.className} text-secondary mr-3 flex-none`}>
            —
        </div>
    )

    return (
        <div className={`${props.className} text-xs mr-3 flex-none`}>
            {props.value.join(', ')}
        </div>
    )
}

type GridBooleanLabelProps = {
    label: string
}
function GridBooleanLabel(props: GridBooleanLabelProps) {
    return (
        <div className="w-14 flex-none text-center">
            {props.label}
        </div>
    )
}

type CountryInfo = {
    code: string,
    name: string,
    longitude: number,
    latitude: number,
    names: { [lang: string]: string }
}

type GeogridCountryDetails = {
    flagInfo: {
        colorsOnFlag: string[],
        hasStar: boolean,
        hasCoatOfArms: boolean,
        hasAnimal: boolean
    },
    geographyInfo: {
        islandNation: boolean, //
        landlocked: boolean, //
        coastlineLength: number, //
        coastline: string[],
        touchesSahara: boolean, //
        borderCountOverride: number,
        rivers: string[], //
        touchesEurasionSteppe: boolean, //
        touchesEquator: boolean, //
        top10Lakes: boolean //
    },
    economicInfo: {
        HDI?: number, //
        GDPPerCapita?: number, //
        top20WheatProduction: boolean, //
        top20OilProduction: boolean, //
        top20RenewableElectricityProduction: boolean, //
        producesNuclearPower: boolean //
    },
    politicalInfo: {
        isMonarchy: boolean, //
        inEU: boolean, //
        hasNuclearWeapons: boolean, //
        wasUSSR: boolean, //
        inCommonwealth: boolean, //
        officialLanguageCodes?: string[], //
        timeZones: string[],
        observesDST: boolean, //
        sameSexMarriageLegal: boolean, //
        sameSexActivitiesIllegal: boolean, //
        CPI: number | null, //
        isTerritory: boolean
    },
    sportsInfo: {
        olympicMedals: number, //
        hostedF1: boolean, //
        hostedOlympics: boolean, //
        hostedMensWorldCup: boolean, //
        playedMensWorldCup: boolean, //
        wonMensWorldCup: boolean //
    },
    factsInfo: {
        drivesLeft: boolean, //
        hasAlcoholBan: boolean, //
        has50Skyscrapers: boolean, //
        top20ObesityRate: boolean, //
        top20ChocolateConsumption: boolean, //
        top20AlcoholConsumption: boolean, //
        top20PopulationDensity: boolean, //
        bottom20PopulationDensity: boolean, //
        top20TourismRate: boolean, //
        top20RailSize: boolean, //
        top20WorldHeritageSites: boolean, //
        airPollution: number, //
        co2Emissions: number //
    }
}

type CommonCountryDetails = {
    code: string,
    latitude: number,
    longitude: number,
    name: string,
    names: { [code: string]: string },
    flags: string[], // For worldle
    continent: string[],
    borders: string[], // Country codes
    autoUpdateBorders: true,
    links: {
        type: 'GoogleMaps' | 'Wikipedia',
        url: string, // Includes ${cc}
        languageCode: "en"
    }[],
    currencyData: {
        code: string,
        name: string,
        nameChoices: string[], // For worldle
    },
    population: number,
    size: number,
    languageData: {
        languageSources: { title: string, url: string }[],
        languages: { languageCode: string, percentage: number }[]
    },
    productData: {
        year: number,
        totalValue: number,
        topExports: {
            productCode: string, // numerical ID
            value: number
        }[]
    },
    borderMode: "bordering",
    images: { imageCode: number, sourceLink: number }[],
    difficulty: 'easy' | 'hard'
}

async function fetchCountries(): Promise<CountryInfo[]> {
    const res = await fetch('https://cdn-assets.teuteuf.fr/data/common/countries.json');
    return res.json();
}

async function fetchGeogridData(code: string): Promise<GeogridCountryDetails> {
    const res = await fetch(`https://cdn-assets.teuteuf.fr/data/geogrid/countries/${code.toLowerCase()}.json`);
    return res.json();
}

async function fetchCommonData(code: string): Promise<CommonCountryDetails> {
    const res = await fetch(`https://cdn-assets.teuteuf.fr/data/common/countries/${code.toLowerCase()}.json`);
    return res.json();
}

function getFlagUrl(code: string) {
    return `https://cdn-assets.teuteuf.fr/data/common/flags/${code.toLowerCase()}.svg`;
}

// https://stackoverflow.com/a/2901298
function withCommas(x: number) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
