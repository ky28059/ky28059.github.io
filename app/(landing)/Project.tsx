import type {ReactNode} from 'react';

// Components
import HoverCard from './HoverCard';

// Icons
import {BsDiscord} from 'react-icons/bs';
import {FiLink} from 'react-icons/fi';


type ProjectProps = {
    name: string,
    children: ReactNode,
    img?: string,
    langs?: LanguageKey[],
    tags?: string[],
    gh: string, discord?: string, web?: string
}
export default function Project(props: ProjectProps) {
    const {name, children: desc, img, langs, tags, gh, discord, web} = props;

    return (
        <HoverCard href={gh}>
            <section className="flex gap-3 items-center mb-2">
                {img && (
                    <img
                        src={img}
                        className="rounded-full h-8 w-8 bg-gray-200/50 dark:bg-gray-900/50 -ml-1"
                        alt={`${name}-icon`}
                    />
                )}
                <h3 className="text-xl font-semibold">{name}</h3>

                <section className="flex gap-2 ml-auto text-xl">
                    {discord && (
                        <a href={discord} rel="noopener noreferrer" target="_blank" className="z-10 text-inherit hover:no-underline">
                            <BsDiscord />
                        </a>
                    )}
                    {web && (
                        <a href={web} rel="noopener noreferrer" target="_blank" className="z-10 text-inherit hover:no-underline">
                            <FiLink />
                        </a>
                    )}
                </section>
            </section>

            {(langs || tags) && (
                <section className="flex flex-wrap items-center gap-1 mb-2">
                    {langs?.map(lang => <ProjectTag lang={lang} key={lang} />)}
                    {tags?.map(tag => (
                        <span className="rounded-full bg-blue-500/20 text-blue-400 px-2.5 py-0.5 text-xs" key={tag}>
                            {tag}
                        </span>
                    ))}
                </section>
            )}

            <p className="text-sm">{desc}</p>
        </HoverCard>
    );
}

export type LanguageKey = 'html' | 'js' | 'ts' | 'css' | 'scss' | 'svelte' | 'py' | 'c#' | 'q#'
    | 'java' | 'kt' | 'rkt' | 'elixir'

export function ProjectTag(props: {lang: LanguageKey}) {
    const color = langToColor(props.lang);
    return (
        <div
            className="rounded-full size-3 ring-2 mx-0.5 ring-black ring-opacity-75 dark:ring-opacity-50"
            style={{backgroundColor: color}}
        />
    )
}

// Map tag name to GitHub language color
// https://github.com/ozh/github-colors/blob/master/colors.json
export function langToColor(lang: LanguageKey) {
    switch (lang) {
        case 'html': return '#e44b23';
        case 'js': return '#f1e05a';
        case 'ts': return '#2b7489';
        case 'css': return '#563d7c';
        case 'scss': return '#c6538c';
        case 'svelte': return '#ff3e00';
        case 'py': return '#3572A5';
        case 'c#': return '#178600';
        case 'q#': return '#fed659';
        case 'java': return '#b07219';
        case 'kt': return '#A97BFF';
        case 'rkt': return '#3c5caa';
        case 'elixir': return '#6e4a7e';
        default: return '#fff';
    }
}
