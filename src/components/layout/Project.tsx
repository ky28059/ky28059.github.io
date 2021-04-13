import React from 'react';


type ProjectProps = {name: string, desc: string, link: string, img?: string};
const Project = (props: ProjectProps) => {
    const {name, desc, img} = props;

    return (
        <div className="project">
            <span className="heading">
                {img && <img src={img} alt={`${name}-icon`}/>}
                <h3>{name}</h3>
            </span>
            <p>{desc}</p>
        </div>
    );
}

export default Project;