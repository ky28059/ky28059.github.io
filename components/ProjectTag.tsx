import React from 'react';


type ProjectTagProps = {color: string};
const ProjectTag = (props: ProjectTagProps) => {
    const {color} = props;

    return <div className="tag" style={{backgroundColor: color}}/>
}

export default ProjectTag;