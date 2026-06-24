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
                                src={u.href}
                                title={u.name}
                                key={u.href}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

const icons = [
    { name: 'Raspberry Pi', href: '/assets/logos/pi.svg' },
    { name: 'Arduino', href: '/assets/logos/arduino.svg' },
    { name: 'Bash', href: '/assets/logos/bash.svg' },
    { name: 'C', href: '/assets/logos/c.png' },
    { name: 'C++', href: '/assets/logos/cpp.svg' },
    { name: 'Java', href: '/assets/logos/java.svg' },
    { name: 'Rust', href: '/assets/logos/rust.png' },
    { name: 'Node.js', href: '/assets/logos/node.png' },
    { name: 'JavaScript', href: '/assets/logos/js.svg' },
    { name: 'TypeScript', href: '/assets/logos/ts.svg' },
    { name: 'Kotlin', href: '/assets/logos/kt.png' },
    { name: 'Python', href: '/assets/logos/py.svg' },
    { name: 'Go', href: '/assets/logos/go.svg' },
    { name: 'OCaml', href: '/assets/logos/ocaml.png' },
    { name: 'Rocq', href: '/assets/logos/rocq.png' },
    { name: 'Haskell', href: '/assets/logos/hs.svg' },
    { name: 'Elixir', href: '/assets/logos/elixir.png' },
    { name: 'React', href: '/assets/logos/react.svg' },
    { name: 'Vue', href: '/assets/logos/vue.svg' },
    { name: 'Svelte', href: '/assets/logos/svelte.svg' },
    { name: 'Express.js', href: '/assets/logos/express.svg' },
    { name: 'Vite', href: '/assets/logos/vite.svg' },
    { name: 'TailwindCSS', href: '/assets/logos/tailwind.svg' },
    { name: 'Postgres', href: '/assets/logos/postgres.svg' },
    { name: 'Prisma', href: '/assets/logos/prisma.png' },
    { name: 'Docker', href: '/assets/logos/docker.png' },
    { name: 'Firebase', href: '/assets/logos/firebase.png' },
    { name: 'AWS S3', href: '/assets/logos/s3.svg' },
    { name: 'AWS EC2', href: '/assets/logos/ec2.svg' },
    { name: 'AWS RDS', href: '/assets/logos/rds.svg' },
    { name: 'NumPy', href: '/assets/logos/numpy.png' },
    { name: 'OpenCV', href: '/assets/logos/opencv.png' },
]
