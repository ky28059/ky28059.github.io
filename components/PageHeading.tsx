import type { ReactNode } from 'react';


type PageHeadingProps = {
    children: ReactNode,
    className?: string
}
export default function PageHeading(props: PageHeadingProps) {
    return (
        <h1 className={'font-bold text-7xl underline decoration-grapefruit' + (props.className ? ` ${props.className}` : '')}>
            {props.children}
        </h1>
    )
}
