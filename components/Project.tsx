//import Image from 'next/image';

// Components
import ProjectTag from './ProjectTag';
import ProjectIconLink from './ProjectIconLink';

// Icons
//import Github from '../public/GitHub-Mark-Light-120px-plus.png';
const Github = '/GitHub-Mark-Light-120px-plus.png';
//import Discord from '../public/Discord-Logo-White.svg';
const Discord = '/Discord-Logo-White.svg';
//import Web from '../../assets/website.png';
//import Web from '../public/link.svg';
const Web = '/link.svg';


type ProjectProps = {
    name: string, desc: string, img?: string /* StaticImageData */, tags?: string[],
    gh?: string, discord?: string, web?: string
};
export default function Project(props: ProjectProps) {
    const {name, desc, img, tags, gh, discord, web} = props;

    return (
        <div className="flex flex-col m-3 p-4 space-y-3 shadow-lg bg-white dark:bg-gray-800 rounded-md transform hover:scale-110 transition transition-transform duration-150">
            <span className="flex items-center space-x-3 mb-3.5">
                {img && (
                    <img
                        src={img}
                        className="rounded-full h-8 w-8"
                        alt={`${name}-icon`}
                        width={40}
                        height={40}
                    />
                )}
                <h3 className="text-xl font-bold">{name}</h3>
            </span>
            {tags && (
                <span className="tags space-x-2 ml-1 flex">
                    {tags.map(tag => <ProjectTag color={tagToColor(tag)} key={tag} />)}
                </span>
            )}
            <p>{desc}</p>
            <span className="links space-x-2 mt-auto flex">
                {discord && <ProjectIconLink url={discord} icon={Discord} alt="Discord Invite Link" />}
                {web && <ProjectIconLink url={web} icon={Web} alt="Website Link" />}
                {gh && <ProjectIconLink url={gh} icon={Github} alt="Github Link" />}
            </span>
        </div>
    );
}

// Map tag name to github language color
// https://github.com/ozh/github-colors/blob/master/colors.json
function tagToColor(tag: string) {
    switch (tag) {
        case 'html':
            return '#e44b23';
        case 'js':
            return '#f1e05a';
        case 'ts':
            return '#2b7489';
        case 'css':
            return '#563d7c';
        case 'scss':
            return '#c6538c';
        case 'c#':
            return '#178600';
        case 'q#':
            return '#fed659';
        case 'java':
            return '#b07219';
        case 'kotlin':
            return '#F18E33';
        case 'scheme':
            return '#1e4aec';
        default:
            return '#fff';
    }
}
