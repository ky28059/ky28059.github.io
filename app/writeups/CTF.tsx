'use client'

import type { ReactNode } from 'react';


type CTFProps = {
    name: string,
    children: ReactNode
}

export default function CTF(props: CTFProps) {
    return (
        <div className="relative -ml-5 border-l border-tertiary hover:border-secondary transition duration-150">
            <ul className="peer flex flex-col gap-1.5 pl-5">
                {props.children}
            </ul>

            <p className="hidden peer-hover:block absolute -left-7 top-0 [writing-mode:vertical-lr] whitespace-nowrap text-sm text-secondary">
                {props.name}
            </p>
        </div>
    )
}
