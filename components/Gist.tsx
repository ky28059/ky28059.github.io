import {ReactNode} from 'react';
import HoverCard from './HoverCard';


type GistProps = {name: string, url: string, children: ReactNode};
export default function Gist(props: GistProps) {
    const {name, url, children} = props;

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex">
            <HoverCard>
                <h3 className="text-xl font-bold">{name}</h3>
                <p>{children}</p>
            </HoverCard>
        </a>
    )
}
