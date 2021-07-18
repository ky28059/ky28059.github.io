import React from 'react';


type ProjectIconLinkProps = {url: string, icon: string, alt: string};
const ProjectIconLink = (props: ProjectIconLinkProps) => {
    const {url, icon, alt} = props;

    return (
        <a href={url} rel="noopener noreferrer" target="_blank">
            <img src={icon} alt={alt} />
        </a>
    );
}

export default ProjectIconLink;