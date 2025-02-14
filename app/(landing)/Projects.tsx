import type { ReactNode } from 'react';

// Components
import Section, { SectionHeading } from '../../components/Section';
import Project, { langToColor, langToFullName, LanguageKey, ProjectData } from './Project';
import Gist from './Gist';

// Icons
import { BsGithub } from 'react-icons/bs';


export default function Projects() {
    const counts: { [lang: string]: number } = {};
    let total = 0;

    for (const lang of projects.flatMap((g) => g.projects).flatMap((p) => p.langs)) {
        if (counts[lang] === undefined) counts[lang] = 0;
        counts[lang]++;
        total++;
    }

    // Scale up "max" bar to 33% width
    const maxCount = Object.values(counts).reduce((a, b) => Math.max(a, b));
    const scale = (1 / 3) * (total / maxCount);

    return (
        <Section className="flex flex-col gap-16">
            <ProjectsLayout>
                <ProjectsHeaderSection>
                    <SectionHeading>Projects</SectionHeading>
                    <p className="text-primary mb-6">
                        Various programming projects for organizations like the b01lers CTF team or BWSI, as well
                        as personal hobby projects like RBot and WATT.
                    </p>

                    {/* TODO */}
                    <h2 className="text-lg font-semibold mb-2 hidden">
                        Statistics
                    </h2>
                    {Object.entries(counts).sort(([, a], [, b]) => b - a).map(([lang, count]) => (
                        <div key={lang} className="group flex gap-3 items-center mb-0.5 !hidden">
                            <div
                                className="rounded-full size-3 ring-2 mx-0.5 ring-black ring-opacity-75 dark:ring-opacity-50"
                                style={{
                                    backgroundColor: langToColor(lang as LanguageKey),
                                    width: `${(count / total) * 100 * scale}%`
                                }}
                            />
                            <span className="text-sm text-secondary">
                                {langToFullName(lang as LanguageKey)} ({count})
                            </span>
                        </div>
                    ))}
                </ProjectsHeaderSection>

                <section className="flex flex-col gap-6">
                    {projects.map((g) => (
                        <ProjectGroup name={g.name} gh={g.gh} key={g.name}>
                            {g.projects.map((p) => (
                                <Project {...p} key={p.name} />
                            ))}
                        </ProjectGroup>
                    ))}
                </section>
            </ProjectsLayout>

            <ProjectsLayout>
                <ProjectsHeaderSection>
                    <SectionHeading>Gists</SectionHeading>
                    <p className="text-primary">
                        GitHub gists, educational resources, and other articles about programming concepts, cool
                        languages / technologies, and more.
                    </p>
                </ProjectsHeaderSection>

                <ProjectsCardGrid className="pl-14">
                    <Gist
                        name="Deploying to Vercel"
                        href="https://gist.github.com/ky28059/1c9af929a9030105da8cf00006b50484"
                        src="/assets/projects/vercel.jpg"
                    >
                        A guide on how to deploy an organization repository to Vercel for free.
                    </Gist>
                    <Gist
                        name="Short circuit evaluation"
                        href="https://gist.github.com/ky28059/84f33cee7cec0066390f79ee3629021e"
                        src="/assets/projects/short-circuit-2.jpg"
                    >
                        An explanation of short circuit lazy evaluation in boolean expressions, and its relevance in
                        weakly typed languages.
                    </Gist>
                    <Gist
                        name="Lambdas in Java"
                        href="https://gist.github.com/ky28059/566596eb93ac863332783182ec356e82"
                        src="/assets/projects/lambdas.jpg"
                    >
                        A guide to lambda expressions in Java 17.
                    </Gist>
                </ProjectsCardGrid>
            </ProjectsLayout>
        </Section>
    )
}

type ProjectGroupData = {
    name: string,
    gh?: string,
    projects: ProjectData[]
}

const projects: ProjectGroupData[] = [
    {
        name: 'Campus Ventures',
        projects: [{
            name: 'Jumpseat',
            desc: 'Travel engine for college students at Purdue, IU, UIUC, and more.',
            src: '/assets/projects/jumpseat.jpg',
            langs: ['ts', 'css'],
            tags: ['nextjs', 'tailwindcss'],
            web: 'https://jumpseatapp.com'
        }]
    },
    {
        name: "MIT RACECAR Neo",
        gh: "https://github.com/MITRacecarNeo",
        projects: [{
            name: "RACECAR Neo Library",
            desc: 'Onboard library and autodocs for MIT BWSI RACECAR.',
            src: "/assets/projects/racecar-library-4.jpg",
            langs: ['py'],
            tags: ['opencv', 'numpy', 'sphinx'],
            gh: "https://github.com/MITRacecarNeo/racecar-neo-library",
            web: "https://mitracecarneo.github.io/racecar-neo-library/"
        }, {
            name: "Dynamic Obstacles 2024",
            desc: 'Arduino code for the dynamic obstacles featured in the 2024 RACECAR Grand Prix.',
            src: "/assets/projects/dynamic-obstacles.jpg",
            langs: ['cpp'],
            tags: ['arduino'],
            gh: "https://github.com/MITRacecarNeo/dynamic-obstacles-2024",
        }]
    },
    {
        name: "b01lers",
        gh: "https://github.com/b01lers",
        projects: [{
            name: "bctf",
            desc: 'A custom rCTF frontend framework for b01lers CTF.',
            src: "/assets/projects/b01lers-ctf-3.jpg",
            langs: ['ts', 'css'],
            tags: ['nextjs', 'tailwindcss'],
            gh: "https://github.com/ky28059/bctf",
            web: "https://b01lersc.tf"
        }, {
            name: "rctf-deploy-action",
            desc: 'Opinionated challenge metadata updater for rCTF deployment.',
            src: "/assets/projects/rctf-deploy-action.jpg",
            langs: ['ts'],
            tags: ['GitHub action'],
            gh: "https://github.com/b01lers/rctf-deploy-action"
        }, {
            name: "b01lers-bot",
            desc: 'Upgraded discord bot for the b01lers CTF team server.',
            src: "/assets/projects/b01lers-bot.jpg",
            langs: ['rust'],
            tags: ['serenity', 'poise', 'sqlx'],
            gh: "https://github.com/Athryx/b01lers-bot"
        }]
    },
    {
        name: 'Purdue eCTF',
        gh: 'https://github.com/Purdue-eCTF',
        projects: [{
            name: "MITRE eCTF 2024",
            desc: 'Secure medical device protocol implementation for the MITRE embedded CTF 2024.',
            src: "/assets/projects/ectf-24.jpg",
            langs: ['rust'],
            tags: ['MAX78000FTHR'],
            gh: "https://github.com/Purdue-eCTF/2024-ectf-secure-example"
        }, {
            name: "scrape-bot",
            desc: 'Scoreboard scraper and automated attack / CI / testing pipeline for eCTF.',
            src: "/assets/projects/scrape-bot-2.jpg",
            langs: ['ts'],
            tags: ['discord.js', 'express', 'PortalBot framework'],
            gh: "https://github.com/Purdue-eCTF/scrape-bot"
        }]
    },
    {
        name: "Goldhaber-Gordon Group",
        gh: "https://github.com/dgglab",
        projects: [{
            desc: "Scripts to detect and classify monolayer graphene flakes in microscope scan datasets.",
            name: "flakefinder",
            src: "/assets/projects/flakefinder.jpg",
            langs: ["py"],
            tags: ["opencv", "multiprocessing", "numpy"],
            gh: "https://github.com/ky28059/flakefinder"
        }]
    },
    {
        name: "GRT",
        gh: "https://github.com/grt192",
        projects: [{
            desc: "A modern rewrite of the Gunn Robotics Team website.",
            name: "GRT Website 2.0",
            src: "/assets/projects/grt-website.jpg",
            langs: ["ts", "css"],
            tags: ["nextjs", "tailwindcss"],
            gh: "https://github.com/ky28059/GRTWebsite2.0",
            web: "https://www.gunnrobotics.com"
        }, {
            desc: "FRC team 192 code for the 2023 FIRST Robotics Competition, Charged Up.",
            name: "GRT2023",
            src: "/assets/projects/grt-23-3.JPG",
            langs: ["java"],
            tags: ["wpilib"],
            gh: "https://github.com/grt192/GRT2023"
        }, {
            desc: "Attempt at a scalable vision framework for FRC 2023 supporting AprilTag and green-light detection.",
            name: "GRTVision2023",
            src: "/assets/projects/grt-vision-23-2.JPG",
            langs: ["py"],
            tags: ["zeromq", "pupil-apriltags"],
            gh: "https://github.com/grt192/GRTVision2023"
        }, {
            desc: "FRC team 192 code for the 2022 FIRST Robotics Competition, Rapid React.",
            name: "GRT2022",
            src: "/assets/projects/grt-22.JPG",
            langs: ["java"],
            tags: ["wpilib"],
            gh: "https://github.com/grt192/GRT2022"
        },
            // TODO: guava bot & slack
        ]
    },
    {
        name: "GunnHacks",
        gh: "https://github.com/united-computations",
        projects: [{
            desc: "Website for GunnHacks 9.0, the ninth iteration of Gunn's annual hackathon.",
            name: "GunnHacks 9.0",
            src: "/assets/projects/gunnhacks-9.0.png",
            langs: ["ts", "css"],
            tags: ["nextjs", "tailwindcss"],
            gh: "https://github.com/united-computations/GunnHacks9.0",
            web: "https://gunnhacks.com"
        }, {
            desc: "Website for GunnHacks 8.0, the eighth iteration of Gunn's annual hackathon.",
            name: "GunnHacks 8.0",
            src: "/assets/projects/gunnhacks-8.0.jpg",
            langs: ["svelte", "html", "css"],
            tags: ["sveltekit"],
            gh: "https://github.com/united-computations/GunnHacks8.0",
            web: "https://8.0.gunnhacks.com"
        }, {
            desc: "Website for GunnHacks 7.0, the seventh iteration of Gunn's annual hackathon.",
            name: "GunnHacks 7.0",
            src: "/assets/projects/gunnhacks-7.0.jpg",
            langs: ["js", "html", "scss"],
            tags: [],
            gh: "https://github.com/united-computations/GunnHacks7.0",
            web: "https://7.0.gunnhacks.com"
        }]
    }, {
        name: "G'Floats",
        projects: [{
            desc: "Python scripts for the Raspberry Pi radio + hatch mechanism + fog machine in the 2022 Senior float.",
            name: "floats-2022",
            src: "/assets/projects/floats-23.JPG",
            langs: ["py"],
            tags: ["pygame", "pigpio", "multiprocessing"],
            gh: "https://github.com/ky28059/floats-2022"
        }, {
            desc: "Python script for the Raspberry Pi radio in the 2021 Junior float.",
            name: "hoco-radio-2021",
            src: "/assets/projects/floats-22.JPG",
            langs: ["py"],
            tags: ["pygame"],
            gh: "https://github.com/ky28059/hoco-radio-2021"
        }]
    },
    {
        name: "Personal / other",
        projects: [{
            desc: "A student-made schedule app for Purdue University!",
            name: "Pyrite",
            src: "/assets/projects/pyrite.png",
            langs: ["ts", "css"],
            tags: ["nextjs", "tailwindcss", "firebase"],
            gh: "https://github.com/ky28059/pyrite",
            web: "https://pyrite-pwl.vercel.app/"
        }, {
            desc: "Gunn schedule app and UGWA successor.",
            name: "WATT",
            src: "/assets/projects/watt.png",
            langs: ["ts", "html", "scss"],
            tags: ["create-react-app", "tailwindcss", "firebase"],
            gh: "https://github.com/GunnWATT/watt",
            web: "https://gunnwatt.web.app/"
        }, {
            name: "kevin-yu",
            src: "/assets/projects/kevin-yu.jpg",
            langs: ['ts'],
            tags: ['discord.js', 'PortalBot framework'],
            gh: "https://github.com/ky28059/kevin-yu",
            desc: "Fun discord bot for personal servers."
        }, {
            name: "Corpus Obfuscator",
            src: "/assets/projects/corpus-obfuscator-2.jpg",
            langs: ['ts'],
            tags: [],
            gh: "https://github.com/ky28059/ky28059.github.io/tree/main/app/(scripts)/corpus-obfuscator",
            web: 'https://ky28059.github.io/corpus-obfuscator',
            desc: "Simple obfuscator to represent any C program as any corpus of text using #define macros."
        }, {
            desc: "Discord moderation and music bot written in discord.js 14, TypeScript, and sequelize.",
            name: "RBot",
            src: "/assets/projects/rbot.jpg",
            langs: ["ts"],
            tags: ["discord.js"],
            gh: "https://github.com/ky28059/RBot",
            discord: "https://discord.com/oauth2/authorize?client_id=684587440777986090&scope=bot+applications.commands&permissions=8"
        }, {
            desc: "Discord.Net bot with Google Drive integration and quantum computing shenanigans.",
            name: "Geckobot",
            src: "/assets/projects/geckobot-3.jpg",
            langs: ["c#", "q#"],
            tags: ["discord.net"],
            gh: "https://github.com/croissantderp/geckobot",
            discord: "https://discord.com/oauth2/authorize?client_id=766064505079726140&scope=bot&permissions=379968"
        }, {
            desc: "TypeScript discord.js bot for real-time cross-server communication.",
            name: "PortalBot",
            src: "/assets/projects/PortalBot.jpg",
            langs: ["ts"],
            tags: ["discord.js", "PortalBot framework"],
            gh: "https://github.com/ky28059/PortalBot",
            discord: "https://discord.com/oauth2/authorize?client_id=827738852902043698&scope=bot+applications.commands&permissions=8"
        }, {
            desc: "A testing / moderation bot written to explore elixir.",
            name: "Elixirbot",
            src: "/assets/projects/elixirbot.jpg",
            langs: ["elixir"],
            tags: ["nostrum", "nosedrum"],
            gh: "https://github.com/ky28059/elixirbot",
            discord: "https://discord.com/oauth2/authorize?client_id=1092613929278120017&scope=bot+applications.commands&permissions=8"
        }, {
            name: "competitive-programming-club",
            src: "/assets/projects/competitive-programming-club-2.jpg",
            langs: ['kt', 'go', 'java', 'haskell'],
            tags: [],
            gh: "https://github.com/ky28059/competitive-programming-club",
            desc: "Repository of competitive programming solutions from various competitions and events."
        }, {
            desc: "Repository of assignments from the first (scheme) semester of Gunn's AP CSA.",
            name: "AP CSA",
            src: "/assets/projects/ap-csa.jpg",
            langs: ["rkt"],
            tags: [],
            gh: "https://github.com/ky28059/AP-CSA"
        }]
    }
]

function ProjectsLayout(props: { children: ReactNode }) {
    return (
        <div className="flex flex-wrap md:flex-nowrap gap-y-8 gap-x-12">
            {props.children}
        </div>
    )
}

function ProjectsHeaderSection(props: { children: ReactNode }) {
    return (
        <div className="md:flex-none md:w-64 md:sticky md:top-12 md:h-max">
            {props.children}
        </div>
    )
}

function ProjectsCardGrid(props: { className?: string, children: ReactNode }) {
    return (
        <div className={'flex flex-wrap justify-center md:justify-start gap-5 w-full' + (props.className ? ` ${props.className}` : '')}>
            {props.children}
        </div>
    )
}

function ProjectGroup(props: { name: string, children: ReactNode, gh?: string }) {
    return (
        <div className="flex gap-8">
            <div className="flex flex-col items-center gap-3 text-secondary mb-2 -mt-1.5">
                <div className="size-3.5 flex-none rounded-full bg-secondary" />

                <h3 className="font-medium mb-0.5 flex-none [writing-mode:vertical-lr]">
                    {props.name}
                </h3>
                {props.gh && (
                    <a className="text-lg text-inherit" href={props.gh} target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                )}
                <hr className="h-full w-px border-r border-secondary/50" />
            </div>
            <ProjectsCardGrid>
                {props.children}
            </ProjectsCardGrid>
        </div>
    )
}
