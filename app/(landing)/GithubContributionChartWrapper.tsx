'use client'

import type { ReactNode } from 'react';


export default function GithubContributionChartWrapper(props: { children: ReactNode }) {
    function scrollToRight(e: HTMLElement | null) {
        if (!e) return;
        e.scrollTo({ left: e.scrollWidth });
    }

    return (
        <section
            className="scroll-smooth relative w-max max-w-full mx-auto flex gap-1 overflow-x-auto py-6 px-4 scrollbar:h-1 scrollbar-thumb:bg-tertiary"
            ref={scrollToRight}
        >
            {props.children}
        </section>
    )
}
