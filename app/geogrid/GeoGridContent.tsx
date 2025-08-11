'use client'

import { useEffect, useState } from 'react';


export default function GeoGridContent() {
    const [countries, setCountries] = useState<CountryInfo[] | null>(null);
    const [countryDetails, setCountryDetails] = useState<{ [code: string]: CountryDetails }>({});

    useEffect(() => {
        async function fetchData() {
            const countries = await fetchCountries();
            setCountries(countries);

            const details = await Promise.all(countries.map(c => fetchCountryDetails(c.code)))
            setCountryDetails(Object.fromEntries(details.map((d, i) => [countries[i].code, d])));
        }

        void fetchData();
    }, []);

    return (
        <div className="divide-y divide-tertiary">
            {!countries ? (
                <div>...</div>
            ) : countries.map((c) => {
                const details = countryDetails[c.code];

                return (
                    <div
                        className="flex gap-3 py-0.5 text-sm items-center hover:bg-tertiary/30"
                        key={c.code}
                    >
                        <img
                            className="max-h-10 w-16 object-contain object-right"
                            src={getFlagUrl(c.code)}
                            alt={c.name}
                        />
                        <div className="w-32">
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
                    </div>
                )
            })}
        </div>
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
        <div className={`${props.className} text-secondary`}>
            —
        </div>
    )

    return (
        <div className={props.className}>
            {props.prefix}
            {props.value}
            {props.unit && (
                <span className="text-secondary ml-1">{props.unit}</span>
            )}
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
        HDI: number,
        GDPPerCapita: number,
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
        officialLanguageCodes: string[],
        timeZones: string[],
        observesDST: boolean,
        sameSexMarriageLegal: boolean,
        sameSexActivitiesIllegal: boolean,
        CPI: number,
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
