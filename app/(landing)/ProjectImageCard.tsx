export type ProjectData = {
    name: string,
    src: string
    desc: string,
    img?: string,
    langs: LanguageKey[],
    tags: string[],

    gh?: string,
    discord?: string,
    web?: string
}
export default function ProjectImageCard(props: ProjectData) {
    // TODO: display all links on hover
    const href = props.web ?? props.gh;

    return (
        <div className="group rounded-md overflow-hidden border border-white/25 hover:border-white/50 transition duration-150 relative w-96">
            <a href={href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" />

            <img
                src={props.src}
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

                <p className="text-xs text-primary">
                    {props.desc}
                </p>
            </div>
        </div>
    )
}

export type LanguageKey = 'html' | 'js' | 'ts' | 'css' | 'scss' | 'svelte' | 'py' | 'cpp' | 'c#' | 'q#'
    | 'java' | 'kt' | 'rkt' | 'elixir' | 'rust' | 'go' | 'haskell'

export function ProjectTag(props: { lang: LanguageKey }) {
    const color = langToColor(props.lang);
    return (
        <div
            className="rounded-full size-3 ring-2 mx-0.5 ring-black ring-opacity-75 dark:ring-opacity-50"
            style={{ backgroundColor: color }}
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
        case 'cpp': return '#f34b7d';
        case 'c#': return '#178600';
        case 'q#': return '#fed659';
        case 'java': return '#b07219';
        case 'kt': return '#A97BFF';
        case 'rkt': return '#3c5caa';
        case 'elixir': return '#6e4a7e';
        case 'rust': return '#dea584';
        case 'go': return '#00ADD8';
        case 'haskell': return '#5e5086';
        default: return '#fff';
    }
}

export function langToFullName(lang: LanguageKey) {
    switch (lang) {
        case 'html': return 'HTML';
        case 'js': return 'JavaScript';
        case 'ts': return 'TypeScript';
        case 'css': return 'CSS';
        case 'scss': return 'SCSS';
        case 'svelte': return 'Svelte';
        case 'py': return 'Python';
        case 'cpp': return 'C++';
        case 'c#': return 'C#';
        case 'q#': return 'Q#';
        case 'java': return 'Java';
        case 'kt': return 'Kotlin';
        case 'rkt': return 'Racket';
        case 'elixir': return 'Elixir';
        case 'rust': return 'Rust';
        case 'go': return 'Go';
        case 'haskell': return 'Haskell';
        default: return 'Unknown';
    }
}
