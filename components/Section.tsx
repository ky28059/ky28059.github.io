import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';


type SectionProps = {
    type?: 'secondary' | 'dark',
    className?: string,
    children: ReactNode
}

export default function Section(props: SectionProps) {
    const bg =
        props.type === 'secondary' ? 'bg-gray-100 dark:bg-dark'
        : props.type === 'dark' ? 'bg-gray-100 dark:bg-black/20'
        : 'bg-white dark:bg-midnight';

    return (
        <section className={'py-14 ' + bg}>
            <div className={cn('container', props.className)}>
                {props.children}
            </div>
        </section>
    )
}

type SectionHeadingProps = {
    className?: string,
    children: ReactNode
}

export function SectionHeading(props: SectionHeadingProps) {
    return (
        <h1 className={cn('text-4xl font-bold mb-4', props.className)}>
            {props.children}
        </h1>
    )
}
