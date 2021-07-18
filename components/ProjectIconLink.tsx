import React from 'react';
//import Image from 'next/image';


type ProjectIconLinkProps = {url: string, icon: string /* StaticImageData */, alt: string};
const ProjectIconLink = (props: ProjectIconLinkProps) => {
    const {url, icon, alt} = props;

    return (
        <a href={url} rel="noopener noreferrer" target="_blank">
            <img src={icon} alt={alt} />
        </a>
    );
}

export default ProjectIconLink;