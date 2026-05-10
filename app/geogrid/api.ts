export type CountryInfo = {
    code: string,
    name: string,
    longitude: number,
    latitude: number,
    names: { [lang: string]: string }
}

export type GeogridCountryDetails = {
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
        borderCountOverride?: number,
        rivers: string[], //
        touchesEurasionSteppe: boolean, //
        touchesEquator: boolean, //
        top10Lakes: boolean, //
        averageElevation: number, //
        averageTemperature: number, //
        annualRainfall?: number, //
        hemisphere: string[], //
        riverBorder: boolean, //
        landBorderLength?: number, //
        forestCover?: number, //
        arableLand?: number, //
        protectedWaters?: number, //
    },
    economicInfo: {
        HDI?: number, //
        GDPPerCapita?: number, //
        GDPPerCapitaYear: number,
        top20WheatProduction: boolean, //
        top20OilProduction: boolean, //
        top20RenewableElectricityProduction: boolean, //
        producesNuclearPower: boolean, //
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
        isTerritory: boolean,
        majorityReligion: string,
        formerColonyOf: string[],
        romanEmpire: boolean,
        ottomanEmpire: boolean,
        livingLanguages?: number, //
        urbanPopulation?: number, //
        largestCityUrbanPopulation?: number //
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
        airPollution?: number, //
        co2Emissions: number, //
        hasUnescoSite: boolean,
        hasMetro: boolean
    }
}

export type CommonCountryDetails = {
    code: string,
    latitude: number,
    longitude: number,
    name: string,
    names: { [code: string]: string },
    flags: string[], // For worldle
    continent: string[],
    borders: string[], // Country codes
    autoUpdateBorders: boolean,
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
        languageSources?: { title: string, url: string }[],
        languages?: { languageCode: string, percentage?: number }[]
    },
    productData?: {
        year: number,
        totalValue: number,
        topExports: {
            productCode: string, // numerical ID
            value: number
        }[]
    },
    borderMode: 'bordering' | 'nearby',
    images: { imageCode: number, sourceLink: string }[],
    approvedForMapster: boolean,
    difficulty: 'easy' | 'normal' | 'hard' | 'extreme',
    gdpPerCapita?: number,
    gdpPerCapitaYear: number
}

export async function fetchCountries(): Promise<CountryInfo[]> {
    const res = await fetch('https://cdn-assets.teuteuf.fr/data/common/countries.json');
    return res.json();
}

export async function fetchGeogridData(code: string): Promise<GeogridCountryDetails> {
    const res = await fetch(`https://cdn-assets.teuteuf.fr/data/geogrid/countries/${code.toLowerCase()}.json`);
    return res.json();
}

export async function fetchCommonData(code: string): Promise<CommonCountryDetails> {
    const res = await fetch(`https://cdn-assets.teuteuf.fr/data/common/countries/${code.toLowerCase()}.json`);
    return res.json();
}

export async function fetchCombinedData(): Promise<Record<string, { geogrid: GeogridCountryDetails, common: CommonCountryDetails }>> {
    const res = await fetch('https://cdn-assets.teuteuf.fr/data/geogrid/combined.json');
    return res.json();
}

export function getFlagUrl(code: string) {
    return `https://cdn-assets.teuteuf.fr/data/common/flags/${code.toLowerCase()}.svg`;
}
