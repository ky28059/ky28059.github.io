import LinkHeading from '@/components/LinkHeading';
import UniversityMapChart from '@/app/b01lers-2025-wrapped/UniversityMapChart';
import UniversityBarChart from '@/app/b01lers-2025-wrapped/UniversityBarChart';
import RatingOverTimeChart from '@/app/b01lers-2025-wrapped/RatingOverTimeChart';
import TopCTFsTable from '@/app/b01lers-2025-wrapped/TopCTFsTable';
import MessagesHeatmap from '@/app/b01lers-2025-wrapped/MessagesHeatmap';
import MessagesByDayHeatmap from '@/app/b01lers-2025-wrapped/MessagesByDayHeatmap';

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
                    <li><a href="#server-statistics" className="text-inherit">Server statistics</a></li>
                </ul>
            </aside>

            <div className="min-w-0">
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
                    This year, <span className="font-jetbrains">b01lers</span> was the <strong className="text-yellow-500">#1 scoring
                    US university-affiliated CTF team</strong>. Here's a geospatial chart showing the location of each US university
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
                <p className="mb-4">
                    This year, <span className="font-jetbrains">b01lers</span> achieved (by a high margin) the highest
                    country rank and CTFtime score <strong className="text-yellow-500">in the team's history</strong>.
                    Here's a plot of the team's CTFtime rating over the years to show how far we've come:{/* TODO? */}
                </p>
                <RatingOverTimeChart />
                <p className="my-4">
                    (compared to Sigpwny, in yellow, and PBR in orange). [...]
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

                <LinkHeading id="server-statistics" className="text-3xl font-bold mt-12 mb-4">
                    Server statistics
                </LinkHeading>
                <p className="mb-6">
                    When was the <span className="font-jetbrains">b01lers</span> server most active this year? Here are
                    2 heatmaps of aggregate message counts, grouped by day-of-year and hour-of-day, respectively:
                </p>
                <MessagesHeatmap />
                <MessagesByDayHeatmap />
                <p className="my-4">
                    (you can see the effect of b01lers CTF 2025 on April 18-20th in the day-of-year graph, CSAW quals
                    on September 12th, as well as the weekly Peppercorns chatter and eCTF / topic sessions shaped hole
                    on Monday in the hour-of-day chart).
                </p>
                [...]
            </div>
        </div>
    )
}
