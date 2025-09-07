'use client'

import { useEffect, useRef } from 'react';


export default function IconScroller() {
    const scroll1 = useRef<HTMLDivElement>(null);
    const scroll2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scroll1.current) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) return;
            resetAnimation(scroll1.current!);
            resetAnimation(scroll2.current!);
        });
        observer.observe(scroll1.current);
    }, [scroll1.current]);

    return (
        <div className="flex group pt-8 bg-gray-100 dark:bg-black/20 overflow-hidden">
            <div
                className="flex gap-1.5 w-max animate-loop-scroll group-hover:[animation-play-state:paused]"
                ref={scroll1}
            >
                {icons.map((u) => (
                    <img
                        className="h-8 max-w-12 object-center object-contain"
                        src={u}
                        key={u}
                    />
                ))}
            </div>
            <div
                className="flex gap-1.5 w-max pl-1.5 animate-loop-scroll group-hover:[animation-play-state:paused]"
                aria-hidden
                ref={scroll2}
            >
                {icons.map((u) => (
                    <img
                        className="h-8 max-w-12 object-center object-contain"
                        src={u}
                        key={u}
                    />
                ))}
            </div>
        </div>
    )
}

// https://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element
function resetAnimation(el: HTMLElement) {
    el.style.animation = 'none';
    el.offsetHeight;
    // @ts-ignore
    el.style.animation = null;
}

const icons = [
    '/assets/logos/pi.svg',
    '/assets/logos/arduino.svg',
    '/assets/logos/bash.svg',
    '/assets/logos/c.png',
    '/assets/logos/cpp.svg',
    '/assets/logos/java.svg',
    '/assets/logos/rust.png',
    '/assets/logos/node.png',
    '/assets/logos/js.svg',
    '/assets/logos/ts.svg',
    '/assets/logos/kt.png',
    '/assets/logos/py.svg',
    '/assets/logos/go.svg',
    '/assets/logos/ocaml.png',
    '/assets/logos/hs.svg',
    '/assets/logos/elixir.png',
    '/assets/logos/react.svg',
    '/assets/logos/vue.svg',
    '/assets/logos/svelte.svg',
    '/assets/logos/express.svg',
    '/assets/logos/vite.svg',
    '/assets/logos/tailwind.svg',
    '/assets/logos/postgres.svg',
    '/assets/logos/prisma.png',
    '/assets/logos/docker.png',
    '/assets/logos/firebase.png',
    '/assets/logos/s3.svg',
    '/assets/logos/ec2.svg',
    '/assets/logos/rds.svg',
    '/assets/logos/numpy.png',
    '/assets/logos/opencv.png',
]
