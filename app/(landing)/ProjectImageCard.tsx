import { LanguageKey, ProjectData, ProjectTag } from './Project';


export default function ProjectImageCard(props: ProjectData) {
    return (
        <div className="group rounded-md overflow-hidden border border-white/25 hover:border-white/50 transition duration-150 relative w-96">
            <a href={props.gh} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" />

            <img
                src={props.href}
                alt={props.name}
                className="w-full h-44 object-cover transition duration-150"
            />

            <div className="px-5 pt-3.5 pb-4">
                <section className="flex flex-wrap items-center gap-1 mb-2">
                    <h3 className="text-sm font-semibold mr-2">{props.name}</h3>

                    {props.langs.map(lang => <ProjectTag lang={lang} key={lang} />)}
                    {props.tags.map(tag => (
                        <span className="rounded-full bg-blue-500/20 text-blue-400 px-2.5 py-0.5 text-xs" key={tag}>
                            {tag}
                        </span>
                    ))}
                </section>

                <p className="text-xs text-primary dark:text-primary-dark">
                    {props.desc}
                </p>
            </div>
        </div>
    )
}
