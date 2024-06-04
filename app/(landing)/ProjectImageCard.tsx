import type { ReactNode } from 'react';
import { LanguageKey, ProjectTag } from './Project';


type ProjectImageCardProps = {
    name: string,
    href: string,
    children: ReactNode,
    langs?: LanguageKey[],
    tags?: string[],
    gh: string, discord?: string, web?: string
}
export default function ProjectImageCard(props: ProjectImageCardProps) {
    const {name, href, langs, tags, gh, children} = props;

    return (
        <div className="group rounded-md overflow-hidden border border-white/25 hover:border-white/50 transition duration-150 relative w-96">
            <a href={gh} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" />

            <img
                src={href}
                alt={name}
                className="w-full h-48 object-cover transition duration-150"
            />

            <div className="px-5 pt-2.5 pb-4">
                {(langs || tags) && (
                    <section className="flex flex-wrap items-center gap-1 mb-2">
                        <h3 className="text-sm font-semibold mr-2">{props.name}</h3>

                        {langs?.map(lang => <ProjectTag lang={lang} key={lang} />)}
                        {tags?.map(tag => (
                            <span className="rounded-full bg-blue-500/20 text-blue-400 px-2.5 pt-0.5 pb-1 text-xs" key={tag}>
                                {tag}
                            </span>
                        ))}
                    </section>
                )}

                <p className="text-xs">{children}</p>
            </div>
        </div>
    )
}
