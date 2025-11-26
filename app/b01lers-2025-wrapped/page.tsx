import LinkHeading from '@/components/LinkHeading';
import UniversityMapChart from '@/app/b01lers-2025-wrapped/UniversityMapChart';
import UniversityBarChart from '@/app/b01lers-2025-wrapped/UniversityBarChart';
import TopCTFsTable from '@/app/b01lers-2025-wrapped/TopCTFsTable';

// Utils
import { teamData } from '@/app/b01lers-2025-wrapped/data';


export default function B01lersWrapped() {
    const current = teamData.find((f) => f.year === '2025')!;

    return (
        <div className="container pt-24 pb-20 flex gap-12">
            <aside className="hidden sm:block text-right border-r border-tertiary pt-3 pr-10 h-max sticky top-12 w-42 flex-none">
                <h2 className="font-semibold mb-4 text-lg/5 italic text-primary">
                    b01lers 2025 wrapped
                </h2>

                <ul>
                    <li><a href="#us-univ" className="text-inherit">US universities</a></li>
                    <li><a href="#over-the-years" className="text-inherit">Over the years...</a></li>
                    <li><a href="#ctf-statistics" className="text-inherit">CTF statistics</a></li>
                </ul>
            </aside>

            <div>
                <h1 className="text-8xl font-bold mb-10 pr-20">
                    <span className="font-jetbrains">b01lers</span> 2025 wrapped
                </h1>
                <p className="mb-1 text-primary">
                    Stats, visualizations, and more to sum up 2025.
                </p>
                <p className="text-sm text-secondary mb-8">
                    Data last fetched on <span className="bg-tertiary text-xs text-primary px-1 py-0.5 rounded">2025-11-25</span>.
                </p>

                <div className="flex gap-16 mb-16">
                    <div>
                        <p className="text-6xl font-bold">
                            #{current.countryPlace}
                        </p>
                        <p className="text-primary text-sm">in the US</p>
                    </div>
                    <div>
                        <p className="text-6xl font-bold">
                            #{current.globalPlace}
                        </p>
                        <p className="text-primary text-sm">in the world</p>
                    </div>
                    <div>
                        <p className="text-6xl font-bold">{current.points}</p>
                        <p className="text-primary text-sm">CTFtime rating</p>
                    </div>
                </div>

                <LinkHeading id="us-univ" className="text-3xl font-bold mb-4">
                    US universities
                </LinkHeading>

                <p className="mb-2">
                    This year, <span className="font-jetbrains">b01lers</span> was the <strong className="text-yellow-500">#1 scoring</strong>{' '}
                    US university-affiliated CTF team. Here's a geospatial chart showing the location of each US university
                    CTF team, with each circle scaled by their CTFtime rating this year:
                </p>
                <UniversityMapChart />

                <p className="mt-8 mb-3">
                    By the numbers, here's how <span className="font-jetbrains">b01lers</span> compared to other university
                    teams in 2025:
                </p>
                <UniversityBarChart />
                <p className="text-sm text-secondary">
                    University teams were manually taken from team descriptions and CTFtime's "academic team" label.
                    Only university teams in the top 50 US were counted.
                </p>

                <LinkHeading id="over-the-years" className="text-3xl font-bold mt-12 mb-4">
                    Over the years...
                </LinkHeading>
                <p>
                    This year, <span className="font-jetbrains">b01lers</span> achieved the highest country / global rank
                    and CTFtime score <strong className="text-yellow-500">in the team's history</strong>. Here's a plot
                    of [...] over the years to show how far we've come:
                </p>

                <LinkHeading id="ctf-statistics" className="text-3xl font-bold mt-12 mb-4">
                    CTF statistics
                </LinkHeading>
                <p className="mb-4">
                    These were <span className="font-jetbrains">b01lers</span>' top 10 CTF finishes in 2025:
                </p>
                <TopCTFsTable />
                <p className="my-4">
                    [...]
                </p>
            </div>
        </div>
    )
}
