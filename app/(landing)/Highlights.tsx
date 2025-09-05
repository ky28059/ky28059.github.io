import Section, { SectionHeading } from "@/components/Section";
import Highlight from '@/app/(landing)/Highlight';


export default function Highlights() {
    return (
        <Section type="dark">
            <SectionHeading>Highlights</SectionHeading>
            <div className="flex gap-1 mt-2 mb-4">
                {icons.map((u) => (
                    <img
                        className="h-7 max-w-12 object-center object-contain"
                        src={u}
                        key={u}
                    />
                ))}
            </div>
            <p className="text-primary">
                Selected projects that [...]
            </p>

            <Highlight
                name="Jumpseat"
                date="2024"
            >
                <p className="mb-4">
                    Jumpseat is a travel engine for college students that pairs flights with airport shuttles
                    to find the optimal travel itinerary to and from Purdue, UIUC, and more.
                </p>
                <p className="mb-4">
                    Originally a student startup, a fork of Jumpseat is now hosted and maintained by [...]
                </p>
                <p>
                    Jumpseat is built using TypeScript, Tailwind CSS, and Next.js, and stores user preferences
                    / breaks via Prisma + Postgres.
                </p>
            </Highlight>
        </Section>
    )
}

const icons = [
    '/assets/logos/js.svg',
    '/assets/logos/ts.svg',
    '/assets/logos/kt.png',
    '/assets/logos/py.svg',
    '/assets/logos/go.svg',
    '/assets/logos/hs.svg',
    '/assets/logos/elixir.png',
    '/assets/logos/react.svg',
    '/assets/logos/vue.svg',
    '/assets/logos/svelte.svg',
    '/assets/logos/tailwind.svg',
]
