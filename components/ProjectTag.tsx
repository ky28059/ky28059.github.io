type ProjectTagProps = {color: string};
export default function ProjectTag(props: ProjectTagProps) {
    const {color} = props;

    return <div className="rounded-full w-3 h-3 ring-2 ring-black ring-opacity-75 dark:ring-opacity-50" style={{backgroundColor: color}}/>
}
