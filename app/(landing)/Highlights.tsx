import Section, { SectionHeading } from "@/components/Section";


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
            <p className="text-primary mb-8">
                Selected projects that [...]
            </p>

            <section className="flex gap-12">
                ...

                <div>

                </div>
            </section>
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
