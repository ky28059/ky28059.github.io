import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';


type PageHeadingProps = {
    children: ReactNode,
    className?: string
}

// TODO: delete this component
export default function PageHeading(props: PageHeadingProps) {
    return (
        <h1 className={cn('font-bold text-7xl underline decoration-grapefruit', props.className)}>
            {props.children}
        </h1>
    )
}
