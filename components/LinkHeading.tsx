import type { ReactNode } from 'react';
import { FiLink } from 'react-icons/fi';


type LinkHeadingProps = {
    id: string,
    className?: string,
    children: ReactNode
}
export default function LinkHeading(props: LinkHeadingProps) {
    return (
        <div className="relative">
            <span id={props.id} className="absolute -top-16" />
            <a
                className={'group flex gap-2 items-center text-inherit hover:underline decoration-1 underline-offset-4 decoration-secondary decoration-dotted' + (props.className ? ` ${props.className}` : '')}
                href={`#${props.id}`}
            >
                <h2>{props.children}</h2>
                <FiLink className="hidden group-hover:block text-xl absolute pt-0.5 -left-7 stroke-[1.5px] text-secondary" />
            </a>
        </div>
    )
}
