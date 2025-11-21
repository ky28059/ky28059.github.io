import LinkHeading from '@/components/LinkHeading';
import UniversityMapChart from '@/app/b01lers-2025-wrapped/UniversityMapChart';
import UniversityBarChart from '@/app/b01lers-2025-wrapped/UniversityBarChart';


export default function B01lersWrapped() {
    return (
        <div className="container pt-24 pb-20">
            <LinkHeading id="us-univ" className="text-3xl font-bold mb-2">
                US universities
            </LinkHeading>

            <p className="mb-2">
                This year, <span className="font-jetbrains">b01lers</span> was the <strong>#1 scoring</strong>{' '}
                US university-affiliated CTF team. Here's the data by location:
            </p>
            <UniversityMapChart />

            <p className="my-4">
                and by numbers:
            </p>
            <UniversityBarChart />
        </div>
    )
}
