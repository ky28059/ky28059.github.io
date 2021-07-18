import React from 'react';


type ProjectTagProps = {color: string};
const ProjectTag = (props: ProjectTagProps) => {
    const {color} = props;

    return <div className="rounded-full w-3 h-3 ring-2 ring-black ring-opacity-50" style={{backgroundColor: color}}/>
}

export default ProjectTag;