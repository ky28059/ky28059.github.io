import {ReactNode} from 'react';

// Components
import ProjectTag from './ProjectTag';
import ProjectIconLink from './ProjectIconLink';

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
        <div className="flex flex-col p-4 gap-3 shadow-lg bg-white dark:bg-gray-800 rounded-md transform hover:scale-110 transition transition-transform duration-150 w-64">
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
                <span className="tags space-x-2 ml-1 flex">
                    {langs.map(lang => <ProjectTag color={langToColor(lang)} key={lang} />)}
                </span>
            )}
            <p>{desc}</p>
            <span className="links space-x-2 mt-auto flex text-xl">
                {gh && <ProjectIconLink url={gh} icon={<GoMarkGithub />} />}
                {discord && <ProjectIconLink url={discord} icon={<BsDiscord />} />}
                {web && <ProjectIconLink url={web} icon={<FiLink2 />} />}
            </span>
        </div>
    );
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
