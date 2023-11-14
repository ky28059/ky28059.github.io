import {ReactNode} from 'react';
import HoverCard from './HoverCard';


type GistProps = {name: string, url: string, children: ReactNode};
export default function Gist(props: GistProps) {
    const {name, url, children} = props;

    return (
        <HoverCard href={url}>
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-sm">{children}</p>
        </HoverCard>
    )
}
