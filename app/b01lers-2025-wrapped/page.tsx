import LinkHeading from '@/components/LinkHeading';
import UniversityMapChart from '@/app/b01lers-2025-wrapped/UniversityMapChart';
import UniversityBarChart from '@/app/b01lers-2025-wrapped/UniversityBarChart';


export default function B01lersWrapped() {
    return (
        <div className="container pt-24 pb-20">
            <h1 className="text-8xl font-bold mb-10 pr-20">
                <span className="font-jetbrains">b01lers</span> 2025 wrapped
            </h1>
            <p className="mb-2">
                [...]?
            </p>
            <p className="text-sm text-secondary mb-20">
                Data last fetched on <span className="bg-tertiary text-xs text-primary px-1 py-0.5 rounded">2025-11-25</span>.
            </p>

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
                teams:
            </p>
            <UniversityBarChart />

            <LinkHeading id="over-the-years" className="text-3xl font-bold mt-12 mb-4">
                Over the years...
            </LinkHeading>
            <p>
                This year, <span className="font-jetbrains">b01lers</span> achieved the highest country / global rank
                and CTFtime score <strong className="text-yellow-500">in the team's history</strong>. Here's a plot
                of [...] over the years to show how far we've come:
            </p>
        </div>
    )
}
