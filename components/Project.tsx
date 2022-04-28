import {ReactNode} from 'react';

// Components
import HoverCard from './HoverCard';

// Icons
import {GoMarkGithub} from 'react-icons/go';
import {BsDiscord} from 'react-icons/bs';
import {FiLink2} from 'react-icons/fi';


type ProjectProps = {
    name: string, children: ReactNode, img?: string /* StaticImageData */, langs?: string[],
    gh?: string, discord?: string, web?: string
};
export default function Project(props: ProjectProps) {
    const {name, children: desc, img, langs, gh, discord, web} = props;

    return (
        <HoverCard>
            <span className="flex items-center space-x-3 mb-1.5">
                {img && (
                    <img
                        src={img}
                        className="rounded-full h-8 w-8 bg-gray-200/50 dark:bg-gray-900/50"
                        alt={`${name}-icon`}
                        width={40}
                        height={40}
                    />
                )}
                <h3 className="text-xl font-bold">{name}</h3>
            </span>
            {langs && (
                <span className="space-x-2 ml-1 flex">
                    {langs.map(lang => <ProjectTag lang={lang} key={lang} />)}
                </span>
            )}
            <p>{desc}</p>
            <span className="flex gap-2 mt-auto text-xl">
                {gh && (
                    <a href={gh} rel="noopener noreferrer" target="_blank">
                        <GoMarkGithub />
                    </a>
                )}
                {discord && (
                    <a href={discord} rel="noopener noreferrer" target="_blank">
                        <BsDiscord />
                    </a>
                )}
                {web && (
                    <a href={web} rel="noopener noreferrer" target="_blank">
                        <FiLink2 />
                    </a>
                )}
            </span>
        </HoverCard>
    );
}

export function ProjectTag(props: {lang: string}) {
    const color = langToColor(props.lang);
    return (
        <div
            className="rounded-full w-3 h-3 ring-2 ring-black ring-opacity-75 dark:ring-opacity-50"
            style={{backgroundColor: color}}
        />
    )
}

// Map tag name to github language color
// Sad, but there are no libraries with TypeScript typings that accomplish this
// https://github.com/ozh/github-colors/blob/master/colors.json
function langToColor(lang: string) {
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
        default: return '#fff';
    }
}
