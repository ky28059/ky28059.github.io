import {ReactNode} from 'react';
import HoverCard from '../../components/HoverCard';


type GistProps = {name: string, url: string, children: ReactNode};
export default function Gist(props: GistProps) {
    const {name, url, children} = props;

    return (
        <HoverCard href={url}>
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p>{children}</p>
        </HoverCard>
    )
}
