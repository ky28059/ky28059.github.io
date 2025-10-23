export default function IconScroller() {
    return (
        <div className="overflow-hidden bg-gray-100 dark:bg-black/20 pt-8">
            <div className="flex gap-1.5 px-1.5 animate-loop-scroll hover:[animation-play-state:paused] w-max">
                {Array(3).fill(0).map((_,i)=> (
                    <div
                        key={i}
                        className="flex gap-1.5 w-max"
                    >
                        {icons.map((u) => (
                            <img
                                className="h-8 max-w-12 object-center object-contain"
                                src={u}
                                key={u}
                            />
                        ))}
                    </div>
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
