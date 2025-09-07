export default function IconScroller() {
    return (
        <div className="flex group pt-8 bg-gray-100 dark:bg-black/20 overflow-hidden">
            <div className="flex gap-1.5 w-max animate-loop-scroll group-hover:paused">
                {icons.map((u) => (
                    <img
                        className="h-8 max-w-12 object-center object-contain"
                        src={u}
                        key={u}
                    />
                ))}
            </div>
            <div
                className="flex gap-1.5 w-max pl-1.5 animate-loop-scroll group-hover:paused"
                aria-hidden
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
                className="flex gap-1.5 w-max pl-1.5 animate-loop-scroll group-hover:paused"
                aria-hidden
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

const icons = [
    '/assets/logos/pi.svg',
    '/assets/logos/arduino.svg',
    '/assets/logos/bash.svg',
    '/assets/logos/c.png',
    '/assets/logos/cpp.svg',
    '/assets/logos/java.svg',
    '/assets/logos/js.svg',
    '/assets/logos/ts.svg',
    '/assets/logos/kt.png',
    '/assets/logos/py.svg',
    '/assets/logos/go.svg',
    '/assets/logos/hs.svg',
    '/assets/logos/elixir.png',
    '/assets/logos/react.svg',
    '/assets/logos/vue.svg',
    '/assets/logos/svelte.svg',
    '/assets/logos/vite.svg',
    '/assets/logos/tailwind.svg',
    '/assets/logos/postgres.svg',
    '/assets/logos/prisma.png',
    '/assets/logos/docker.png',
    '/assets/logos/firebase.png',
    '/assets/logos/numpy.png',
    '/assets/logos/opencv.png',
]
