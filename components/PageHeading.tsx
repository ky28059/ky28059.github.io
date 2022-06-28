import {ReactNode} from 'react';


export default function PageHeading(props: {children: ReactNode, className?: string}) {
    return (
        <h1 className={'font-bold text-7xl underline decoration-grapefruit' + (props.className ? ` ${props.className}` : '')}>
            {props.children}
        </h1>
    )
}
