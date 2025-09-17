'use client'

import { useEffect, useRef, useState, useTransition } from 'react';


export default function GeoGridContent() {
    const countryRef = useRef<CountryInfo[] | null>(null);
    const [countryDetails, setCountryDetails] = useState<{ [code: string]: CountryDetails }>({});

    const [filtered, setFiltered] = useState<CountryInfo[] | null>(null);
    const [pending, startTransition] = useTransition();

    const [query, setQuery] = useState('');

    useEffect(() => {
        async function fetchData() {
            const countries = await fetchCountries();
            countryRef.current = countries;
            setFiltered(countries);

            const details = await Promise.all(countries.map(c => fetchCountryDetails(c.code)))
            setCountryDetails(Object.fromEntries(details.map((d, i) => [countries[i].code, d])));
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
                    <div className="w-20 flex-none mr-3">
                        River systems
                    </div>
                    <div className="w-20 flex-none mr-3">
                        Official langs
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
                        const details = countryDetails[c.code];

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
                                    className="w-12"
                                    value={details?.economicInfo.HDI}
                                />
                                <GridCell
                                    className="w-12"
                                    value={details?.politicalInfo.CPI}
                                />
                                <GridCell
                                    className="w-16"
                                    value={details?.economicInfo.GDPPerCapita}
                                    prefix="$"
                                />
                                <GridCell
                                    className="w-20"
                                    value={details?.geographyInfo.coastlineLength}
                                    unit="km"
                                />
                                <GridCell
                                    className="w-24"
                                    value={details?.factsInfo.airPollution}
                                    unit="μg/m³"
                                />
                                <GridCell
                                    className="w-24"
                                    value={details?.factsInfo.co2Emissions}
                                    unit="tCO₂/y"
                                />
                                <GridCell
                                    className="w-12"
                                    value={details?.sportsInfo.olympicMedals}
                                />
                                <GridArrayCell
                                    className="w-20 text-xs"
                                    value={details?.geographyInfo.rivers}
                                />
                                <GridArrayCell
                                    className="w-20 text-xs"
                                    value={details?.politicalInfo.officialLanguageCodes}
                                />
                                <GridBooleanCell value={details?.geographyInfo.landlocked} />
                                <GridBooleanCell value={details?.geographyInfo.islandNation} />
                                <GridBooleanCell value={details?.politicalInfo.isMonarchy} />
                                <GridBooleanCell value={details?.politicalInfo.inEU} />
                                <GridBooleanCell value={details?.politicalInfo.inCommonwealth} />
                                <GridBooleanCell value={details?.politicalInfo.wasUSSR} />
                                <GridBooleanCell value={details?.economicInfo.producesNuclearPower} />
                                <GridBooleanCell value={details?.politicalInfo.hasNuclearWeapons} />
                                <GridBooleanCell value={details?.politicalInfo.observesDST} />
                                <GridBooleanCell value={details?.politicalInfo.sameSexMarriageLegal} />
                                <GridBooleanCell value={details?.politicalInfo.sameSexActivitiesIllegal} />
                                <GridBooleanCell value={details?.factsInfo.drivesLeft} />
                                <GridBooleanCell value={details?.factsInfo.hasAlcoholBan} />
                                <GridBooleanCell value={details?.geographyInfo.touchesSahara} />
                                <GridBooleanCell value={details?.geographyInfo.touchesEquator} />
                                <GridBooleanCell value={details?.geographyInfo.touchesEurasionSteppe} />
                                <GridBooleanCell value={details?.sportsInfo.hostedF1} />
                                <GridBooleanCell value={details?.sportsInfo.hostedOlympics} />
                                <GridBooleanCell value={details?.sportsInfo.hostedMensWorldCup} />
                                <GridBooleanCell value={details?.sportsInfo.playedMensWorldCup} />
                                <GridBooleanCell value={details?.sportsInfo.wonMensWorldCup} />
                                <GridBooleanCell value={details?.factsInfo.top20WorldHeritageSites} />
                                <GridBooleanCell value={details?.factsInfo.top20TourismRate} />
                                <GridBooleanCell value={details?.factsInfo.top20RailSize} />
                                <GridBooleanCell value={details?.factsInfo.top20PopulationDensity} />
                                <GridBooleanCell value={details?.factsInfo.bottom20PopulationDensity} />
                                <GridBooleanCell value={details?.economicInfo.top20WheatProduction} />
                                <GridBooleanCell value={details?.economicInfo.top20OilProduction} />
                                <GridBooleanCell value={details?.economicInfo.top20RenewableElectricityProduction} />
                                <GridBooleanCell value={details?.geographyInfo.top10Lakes} />
                                <GridBooleanCell value={details?.factsInfo.has50Skyscrapers} />
                                <GridBooleanCell value={details?.factsInfo.top20ObesityRate} />
                                <GridBooleanCell value={details?.factsInfo.top20AlcoholConsumption} />
                                <GridBooleanCell value={details?.factsInfo.top20ChocolateConsumption} />
                            </div>
                        )
                    })}
                </div>
            </div>
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
            {props.value}
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

type CountryDetails = {
    flagInfo: {
        colorsOnFlag: string[],
        hasStar: boolean,
        hasCoatOfArms: boolean,
        hasAnimal: boolean
    },
    geographyInfo: {
        islandNation: boolean,
        landlocked: boolean,
        coastlineLength: number,
        coastline: string[],
        touchesSahara: boolean,
        borderCountOverride: number,
        rivers: string[],
        touchesEurasionSteppe: boolean,
        touchesEquator: boolean,
        top10Lakes: boolean
    },
    economicInfo: {
        HDI?: number,
        GDPPerCapita?: number,
        top20WheatProduction: boolean,
        top20OilProduction: boolean,
        top20RenewableElectricityProduction: boolean,
        producesNuclearPower: boolean
    },
    politicalInfo: {
        isMonarchy: boolean,
        inEU: boolean,
        hasNuclearWeapons: boolean,
        wasUSSR: boolean,
        inCommonwealth: boolean,
        officialLanguageCodes?: string[],
        timeZones: string[],
        observesDST: boolean,
        sameSexMarriageLegal: boolean,
        sameSexActivitiesIllegal: boolean,
        CPI: number | null,
        isTerritory: boolean
    },
    sportsInfo: {
        olympicMedals: number,
        hostedF1: boolean,
        hostedOlympics: boolean,
        hostedMensWorldCup: boolean,
        playedMensWorldCup: boolean,
        wonMensWorldCup: boolean
    },
    factsInfo: {
        drivesLeft: boolean,
        hasAlcoholBan: boolean,
        has50Skyscrapers: boolean,
        top20ObesityRate: boolean,
        top20ChocolateConsumption: boolean,
        top20AlcoholConsumption: boolean,
        top20PopulationDensity: boolean,
        bottom20PopulationDensity: boolean,
        top20TourismRate: boolean,
        top20RailSize: boolean,
        top20WorldHeritageSites: boolean,
        airPollution: number,
        co2Emissions: number
    }
}

async function fetchCountries(): Promise<CountryInfo[]> {
    const res = await fetch('https://cdn-assets.teuteuf.fr/data/common/countries.json');
    return res.json();
}

async function fetchCountryDetails(code: string): Promise<CountryDetails> {
    const res = await fetch(`https://cdn-assets.teuteuf.fr/data/geogrid/countries/${code.toLowerCase()}.json`);
    return res.json();
}

function getFlagUrl(code: string) {
    return `https://cdn-assets.teuteuf.fr/data/common/flags/${code.toLowerCase()}.svg`;
}
