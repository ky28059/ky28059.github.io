//import Image from 'next/image';


// TODO: is this necessary?
type ProjectIconLinkProps = {url: string, icon: JSX.Element};
export default function ProjectIconLink(props: ProjectIconLinkProps) {
    const {url, icon} = props;

    return (
        <a href={url} rel="noopener noreferrer" target="_blank">
            {icon}
        </a>
    );
}
