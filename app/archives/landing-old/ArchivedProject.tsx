import {ReactNode} from 'react';
import {langToColor} from '../../(landing)/Project';

// Icons
import {BsDiscord, BsGithub} from 'react-icons/bs';
import {FiLink2} from 'react-icons/fi';


type ProjectProps = {
    name: string, children: ReactNode, img?: string /* StaticImageData */, langs?: string[],
    gh?: string, discord?: string, web?: string
};
export default function ArchivedProject(props: ProjectProps) {
    const {name, children: desc, img, langs, gh, discord, web} = props;

    return (
        <div className="flex flex-col p-4 gap-3 shadow-lg bg-white dark:bg-gray-800 rounded-md transform hover:scale-110 transition-transform duration-150 w-64">
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
                    <a href={gh} rel="noopener noreferrer" target="_blank" className="text-inherit hover:no-underline">
                        <BsGithub />
                    </a>
                )}
                {discord && (
                    <a href={discord} rel="noopener noreferrer" target="_blank" className="text-inherit hover:no-underline">
                        <BsDiscord />
                    </a>
                )}
                {web && (
                    <a href={web} rel="noopener noreferrer" target="_blank" className="text-inherit hover:no-underline">
                        <FiLink2 />
                    </a>
                )}
            </span>
        </div>
    );
}

function ProjectTag(props: {lang: string}) {
    const color = langToColor(props.lang);
    return (
        <div
            className="rounded-full w-3 h-3 ring-2 ring-black ring-opacity-75 dark:ring-opacity-50"
            style={{backgroundColor: color}}
        />
    )
}
