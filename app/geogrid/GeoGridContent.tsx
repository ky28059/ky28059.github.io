'use client'

import { useEffect, useRef, useState, useTransition } from 'react';

// Components
import CenteredModal from '@/components/CenteredModal';
import Spinner from '@/components/Spinner';

// Utils
import { CommonCountryDetails, GeogridCountryDetails, fetchCombinedData, getFlagUrl } from '@/app/geogrid/api';

// Icons
import { FaArrowUp, FaArrowDown, FaArrowsUpDown } from 'react-icons/fa6';


export default function GeoGridContent() {
    const dataRef = useRef<{ [code: string]: { geogrid: GeogridCountryDetails, common: CommonCountryDetails } }>({});

    const [sorted, setSorted] = useState<string[] | null>(null);
    const [pending, startTransition] = useTransition();

    const [query, setQuery] = useState('');
    const [sort, setSort] = useState<SortConfig>({ column: null, direction: 'asc' });

    // The ID of the country for which we are displaying the border modal
    const [selectedBorders, setSelectedBorders] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchCombinedData();
            dataRef.current = data;

            setSorted(Object.keys(data));
        }

        void fetchData();
    }, []);

    function toggleSort(column: string) {
        setSort(prev => ({
            column,
            direction: prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc'
        }));
    }

    useEffect(() => {
        startTransition(() => {
            if (!sorted) return;

            setSorted(Object.keys(dataRef.current).filter(c => dataRef.current[c].common.name.toLowerCase().includes(query.toLowerCase())).sort((a, b) => {
                const getVal = (c: string) => {
                    const { common, geogrid } = dataRef.current[c];
                    switch (sort.column) {
                        case 'name': return common.name;
                        case 'population': return common.population;
                        case 'size': return common.size;
                        case 'borders': return geogrid.geographyInfo.borderCountOverride ?? (geogrid.geographyInfo.islandNation ? 0 : common.borders.length);
                        case 'landBorder': return geogrid.geographyInfo.landBorderLength;
                        case 'hdi': return geogrid.economicInfo.HDI;
                        case 'cpi': return geogrid.politicalInfo.CPI;
                        case 'gdp': return geogrid.economicInfo.GDPPerCapita;
                        case 'coastline': return geogrid.geographyInfo.coastlineLength;
                        case 'elevation': return geogrid.geographyInfo.averageElevation;
                        case 'temp': return geogrid.geographyInfo.averageTemperature;
                        case 'rainfall': return geogrid.geographyInfo.annualRainfall;
                        case 'forestCover': return geogrid.geographyInfo.forestCover;
                        case 'arableLand': return geogrid.geographyInfo.arableLand;
                        case 'protectedWaters': return geogrid.geographyInfo.protectedWaters;
                        case 'airPollution': return geogrid.factsInfo.airPollution;
                        case 'co2': return geogrid.factsInfo.co2Emissions;
                        case 'langs': return geogrid.politicalInfo.livingLanguages;
                        case 'urbanPop': return geogrid.politicalInfo.urbanPopulation;
                        case 'lcup': return geogrid.politicalInfo.largestCityUrbanPopulation;
                        case 'olympicMedals': return geogrid.sportsInfo.olympicMedals;
                        default: return null;
                    }
                };

                const aVal = getVal(a);
                const bVal = getVal(b);

                if (aVal == null && bVal == null) return 0;
                if (aVal == null) return 1;
                if (bVal == null) return -1;

                const cmp = typeof aVal === 'string' && typeof bVal === 'string'
                    ? aVal.localeCompare(bVal)
                    : (aVal as number) - (bVal as number);

                return sort.direction === 'asc' ? cmp : -cmp;
            }));
        })
    }, [query, sort]);

    return (
        <>
            <div className="container mb-6">
                <input
                    className="disabled:opacity-50 transition duration-200 rounded px-3.5 py-1.5 text-sm border border-tertiary focus:outline-none focus:ring-2"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled={!sorted}
                    placeholder="Filter by country"
                />
            </div>

            <div className="grow overflow-x-auto flex flex-col">
                <div className="w-max border-b border-tertiary flex text-xs text-primary items-center break-words">
                    <SortableColumnHeader label="Name / code" column="name" sort={sort} onSort={toggleSort} className="ml-17.5 w-36" />
                    <SortableColumnHeader label="Population" column="population" sort={sort} onSort={toggleSort} className="w-24" />
                    <SortableColumnHeader label="Size" column="size" sort={sort} onSort={toggleSort} className="w-28" />
                    <SortableColumnHeader label="Borders" column="borders" sort={sort} onSort={toggleSort} className="w-28" />
                    <SortableColumnHeader label="HDI" column="hdi" sort={sort} onSort={toggleSort} className="w-12" />
                    <SortableColumnHeader label="CPI" column="cpi" sort={sort} onSort={toggleSort} className="w-12" />
                    <SortableColumnHeader label="GDP / capita" column="gdp" sort={sort} onSort={toggleSort} className="w-16" />
                    <SortableColumnHeader label="Coastline length" column="coastline" sort={sort} onSort={toggleSort} className="w-20" />
                    <SortableColumnHeader label="Land border" column="landBorder" sort={sort} onSort={toggleSort} className="w-20" />
                    <SortableColumnHeader label="Average elevation" column="elevation" sort={sort} onSort={toggleSort} className="w-16" />
                    <SortableColumnHeader label="Average temp" column="temp" sort={sort} onSort={toggleSort} className="w-16" />
                    <SortableColumnHeader label="Annual rainfall" column="rainfall" sort={sort} onSort={toggleSort} className="w-20" />
                    <SortableColumnHeader label="Forest cover" column="forestCover" sort={sort} onSort={toggleSort} className="w-16" />
                    <SortableColumnHeader label="Arable land" column="arableLand" sort={sort} onSort={toggleSort} className="w-16" />
                    <SortableColumnHeader label="Protected waters" column="protectedWaters" sort={sort} onSort={toggleSort} className="w-16" />
                    <SortableColumnHeader label="Air pollution" column="airPollution" sort={sort} onSort={toggleSort} className="w-24" />
                    <SortableColumnHeader label="CO₂ emissions / capita" column="co2" sort={sort} onSort={toggleSort} className="w-24" />
                    <SortableColumnHeader label="Living lang(s)" column="langs" sort={sort} onSort={toggleSort} className="w-14" />
                    <SortableColumnHeader label="Urban pop." column="urbanPop" sort={sort} onSort={toggleSort} className="w-14" />
                    <SortableColumnHeader label="LCUP" column="lcup" sort={sort} onSort={toggleSort} className="w-14" />
                    <SortableColumnHeader label="Olympic medals" column="olympicMedals" sort={sort} onSort={toggleSort} className="w-14" />
                    <div className="px-1.5 w-14 flex-none mr-3">
                        Continent(s)
                    </div>
                    <div className="px-1.5 w-14 flex-none mr-3">
                        Hemisphere(s)
                    </div>
                    <div className="px-1.5 w-20 flex-none mr-3">
                        River systems
                    </div>
                    <div className="px-1.5 w-20 flex-none mr-3">
                        Official lang(s)
                    </div>
                    <GridBooleanLabel label="Landlocked" />
                    <GridBooleanLabel label="Island nation" />
                    <GridBooleanLabel label="River border" />
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

                {!sorted ? (
                    <div className="w-screen h-full flex items-center justify-center sticky left-0">
                        <Spinner />
                    </div>
                ) : (
                    <div className={'grow w-max bg-black/25 flex flex-col overflow-y-auto divide-y divide-tertiary transition duration-200' + (pending ? ' opacity-50' : '')}>
                        {sorted.map((c) => {
                            const { geogrid, common } = dataRef.current[c];

                            return (
                                <div
                                    className="flex text-sm items-center hover:bg-tertiary/30"
                                    key={c}
                                >
                                    <img
                                        className="max-h-12 w-16 flex-none object-contain object-right py-0.5 mr-3"
                                        src={getFlagUrl(c)}
                                        alt={c}
                                    />
                                    <div className="w-36 flex-none mr-3 text-pretty">
                                        {common.name} <span className="text-secondary">({c.toUpperCase()})</span>
                                    </div>
                                    <GridCell
                                        className="w-24"
                                        value={common?.population}
                                    />
                                    <GridCell
                                        className="w-28"
                                        value={common?.size}
                                        unit="km²"
                                    />
                                    {(geogrid?.geographyInfo.borderCountOverride !== undefined || geogrid?.geographyInfo.islandNation) ? (
                                        <GridCell
                                            className="w-28"
                                            value={geogrid?.geographyInfo.borderCountOverride ?? 0}
                                        />
                                    ) : (
                                        <button
                                            className="w-28 text-sm mr-3 flex-none bg-white/10 hover:bg-white/15 transition duration-150 rounded-full px-2.5 py-1 text-left my-0.5"
                                            onClick={() => setSelectedBorders(c)}
                                        >
                                            {common.borders.length}{' '}
                                            <span className="text-secondary text-xs">(view all)</span>
                                        </button>
                                    )}
                                    <GridCell
                                        className="w-12"
                                        value={geogrid?.economicInfo.HDI}
                                    />
                                    <GridCell
                                        className="w-12"
                                        value={geogrid?.politicalInfo.CPI}
                                    />
                                    <GridCell
                                        className="w-16"
                                        value={geogrid?.economicInfo.GDPPerCapita}
                                        prefix="$"
                                    />
                                    <GridCell
                                        className="w-20"
                                        value={geogrid?.geographyInfo.coastlineLength}
                                        unit="km"
                                    />
                                    <GridCell
                                        className="w-20"
                                        value={geogrid?.geographyInfo.landBorderLength}
                                        unit="km"
                                    />
                                    <GridCell
                                        className="w-16"
                                        value={geogrid?.geographyInfo.averageElevation}
                                        unit="m"
                                    />
                                    <GridCell
                                        className="w-16"
                                        value={geogrid?.geographyInfo.averageTemperature}
                                        unit="°C"
                                    />
                                    <GridCell
                                        className="w-20"
                                        value={geogrid?.geographyInfo.annualRainfall}
                                        unit="mm"
                                    />
                                    <GridCell
                                        className="w-16"
                                        value={geogrid?.geographyInfo.forestCover}
                                        unit="%"
                                    />
                                    <GridCell
                                        className="w-16"
                                        value={geogrid?.geographyInfo.arableLand}
                                        unit="%"
                                    />
                                    <GridCell
                                        className="w-16"
                                        value={geogrid?.geographyInfo.protectedWaters}
                                        unit="%"
                                    />
                                    <GridCell
                                        className="w-24"
                                        value={geogrid?.factsInfo.airPollution}
                                        unit="μg/m³"
                                    />
                                    <GridCell
                                        className="w-24"
                                        value={geogrid?.factsInfo.co2Emissions}
                                        unit="tCO₂/y"
                                    />
                                    <GridCell
                                        className="w-14"
                                        value={geogrid?.politicalInfo.livingLanguages}
                                    />
                                    <GridCell
                                        className="w-14"
                                        value={geogrid?.politicalInfo.urbanPopulation}
                                        unit="%"
                                    />
                                    <GridCell
                                        className="w-14"
                                        value={geogrid?.politicalInfo.largestCityUrbanPopulation}
                                        unit="%"
                                    />
                                    <GridCell
                                        className="w-14"
                                        value={geogrid?.sportsInfo.olympicMedals}
                                    />
                                    <GridArrayCell
                                        className="w-14 text-xs"
                                        value={common?.continent}
                                    />
                                    <GridArrayCell
                                        className="w-14 text-xs"
                                        value={geogrid?.geographyInfo.hemisphere}
                                    />
                                    <GridArrayCell
                                        className="w-20 text-xs"
                                        value={geogrid?.geographyInfo.rivers}
                                    />
                                    <GridArrayCell
                                        className="w-20 text-xs"
                                        value={geogrid?.politicalInfo.officialLanguageCodes}
                                    />
                                    <GridBooleanCell value={geogrid?.geographyInfo.landlocked} />
                                    <GridBooleanCell value={geogrid?.geographyInfo.islandNation} />
                                    <GridBooleanCell value={geogrid?.geographyInfo.riverBorder} />
                                    <GridBooleanCell value={geogrid?.politicalInfo.isMonarchy} />
                                    <GridBooleanCell value={geogrid?.politicalInfo.inEU} />
                                    <GridBooleanCell value={geogrid?.politicalInfo.inCommonwealth} />
                                    <GridBooleanCell value={geogrid?.politicalInfo.wasUSSR} />
                                    <GridBooleanCell value={geogrid?.economicInfo.producesNuclearPower} />
                                    <GridBooleanCell value={geogrid?.politicalInfo.hasNuclearWeapons} />
                                    <GridBooleanCell value={geogrid?.politicalInfo.observesDST} />
                                    <GridBooleanCell value={geogrid?.politicalInfo.sameSexMarriageLegal} />
                                    <GridBooleanCell value={geogrid?.politicalInfo.sameSexActivitiesIllegal} />
                                    <GridBooleanCell value={geogrid?.factsInfo.drivesLeft} />
                                    <GridBooleanCell value={geogrid?.factsInfo.hasAlcoholBan} />
                                    <GridBooleanCell value={geogrid?.geographyInfo.touchesSahara} />
                                    <GridBooleanCell value={geogrid?.geographyInfo.touchesEquator} />
                                    <GridBooleanCell value={geogrid?.geographyInfo.touchesEurasionSteppe} />
                                    <GridBooleanCell value={geogrid?.sportsInfo.hostedF1} />
                                    <GridBooleanCell value={geogrid?.sportsInfo.hostedOlympics} />
                                    <GridBooleanCell value={geogrid?.sportsInfo.hostedMensWorldCup} />
                                    <GridBooleanCell value={geogrid?.sportsInfo.playedMensWorldCup} />
                                    <GridBooleanCell value={geogrid?.sportsInfo.wonMensWorldCup} />
                                    <GridBooleanCell value={geogrid?.factsInfo.top20WorldHeritageSites} />
                                    <GridBooleanCell value={geogrid?.factsInfo.top20TourismRate} />
                                    <GridBooleanCell value={geogrid?.factsInfo.top20RailSize} />
                                    <GridBooleanCell value={geogrid?.factsInfo.top20PopulationDensity} />
                                    <GridBooleanCell value={geogrid?.factsInfo.bottom20PopulationDensity} />
                                    <GridBooleanCell value={geogrid?.economicInfo.top20WheatProduction} />
                                    <GridBooleanCell value={geogrid?.economicInfo.top20OilProduction} />
                                    <GridBooleanCell value={geogrid?.economicInfo.top20RenewableElectricityProduction} />
                                    <GridBooleanCell value={geogrid?.geographyInfo.top10Lakes} />
                                    <GridBooleanCell value={geogrid?.factsInfo.has50Skyscrapers} />
                                    <GridBooleanCell value={geogrid?.factsInfo.top20ObesityRate} />
                                    <GridBooleanCell value={geogrid?.factsInfo.top20AlcoholConsumption} />
                                    <GridBooleanCell value={geogrid?.factsInfo.top20ChocolateConsumption} />
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>

            <CenteredModal
                isOpen={selectedBorders !== null}
                onClose={() => setSelectedBorders(null)}
                className="relative w-full max-w-xl bg-midnight rounded-md overflow-clip pt-6"
            >
                {selectedBorders !== null && (
                    <>
                        <h1 className="text-xl font-semibold px-8 mb-3">
                            Borders of {dataRef.current[selectedBorders].common.name}
                        </h1>

                        <div className="flex flex-col divide-y divide-tertiary">
                            {[...new Set(dataRef.current[selectedBorders].common.borders)].map((code) => (
                                <div className="flex items-center gap-3.5" key={code}>
                                    <img
                                        src={getFlagUrl(code)}
                                        className="w-14 max-h-12 object-contain object-right"
                                    />
                                    <p className="py-1.5 text-sm">
                                        {dataRef.current[code].common?.name}{' '}
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

type SortConfig = {
    column: string | null,
    direction: 'asc' | 'desc'
}

type SortableColumnHeaderProps = {
    label: string,
    column: string,
    sort: SortConfig,
    onSort: (col: string) => void,
    className?: string
}
function SortableColumnHeader({ label, column, sort, onSort, className }: SortableColumnHeaderProps) {
    const active = sort.column === column;
    return (
        <button
            className={`${className ?? ''} self-stretch flex-none px-1.5 box-content text-left flex items-center gap-0.5 hover:text-white hover:bg-white/5 transition duration-150 cursor-pointer` + (active ? ' text-white' : '')}
            onClick={() => onSort(column)}
        >
            <span>{label}</span>

            <span className={'ml-auto' + (active ? '' : ' opacity-50')}>
                {!active ? (
                    <FaArrowsUpDown />
                ) : sort.direction === 'asc' ? (
                    <FaArrowUp />
                ) : (
                    <FaArrowDown />
                )}
            </span>
        </button>
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

// https://stackoverflow.com/a/2901298
function withCommas(x: number) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
