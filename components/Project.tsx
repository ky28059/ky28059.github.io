import React from 'react';

// Components
import ProjectTag from "./ProjectTag";
import ProjectIconLink from "./ProjectIconLink";

// Icons
import Github from '../../public/GitHub-Mark-Light-120px-plus.png';
import Discord from '../../public/Discord-Logo-White.svg';
//import Web from '../../assets/website.png';
import Web from '../../public/link.svg';


type ProjectProps = {
    name: string, desc: string, img?: string, tags?: string[],
    gh?: string, discord?: string, web?: string
};
const Project = (props: ProjectProps) => {
    const {name, desc, img, tags, gh, discord, web} = props;

    // Map tag name to github language color
    // https://github.com/ozh/github-colors/blob/master/colors.json
    const tagToColor = (tag: string) => {
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

    return (
        <div className="project">
            <span className="heading">
                {img && <img src={img} alt={`${name}-icon`}/>}
                <h3>{name}</h3>
            </span>
            {tags && (
                <span className="tags">
                    {tags.map(tag => <ProjectTag color={tagToColor(tag)} />)}
                </span>
            )}
            <p>{desc}</p>
            <span className="links">
                {discord && <ProjectIconLink url={discord} icon={Discord} alt="Discord Invite Link" />}
                {web && <ProjectIconLink url={web} icon={Web} alt="Website Link" />}
                {gh && <ProjectIconLink url={gh} icon={Github} alt="Github Link" />}
            </span>
        </div>
    );
}

export default Project;