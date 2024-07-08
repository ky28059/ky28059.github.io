import type { ReactNode } from 'react';

// Components
import Section, { SectionHeading } from '../../components/Section';
import ProjectImageCard, { langToColor, langToFullName, LanguageKey, ProjectData } from './ProjectImageCard';
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
                    <p className="text-primary dark:text-primary-dark mb-6">
                        Various programming projects for organizations like the Gunn Robotics Team or GunnHacks, as well
                        as personal projects like RBot and WATT.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">
                        Statistics
                    </h2>
                    {Object.entries(counts).sort(([, a], [, b]) => b - a).map(([lang, count]) => (
                        <div key={lang} className="group flex gap-3 items-center mb-0.5">
                            <div
                                className="rounded-full size-3 ring-2 mx-0.5 ring-black ring-opacity-75 dark:ring-opacity-50"
                                style={{
                                    backgroundColor: langToColor(lang as LanguageKey),
                                    width: `${(count / total) * 100 * scale}%`
                                }}
                            />
                            <span className="text-sm text-secondary dark:text-secondary-dark">
                                {langToFullName(lang as LanguageKey)} ({count})
                            </span>
                        </div>
                    ))}
                </ProjectsHeaderSection>

                <section className="flex flex-col gap-6">
                    {projects.map((g) => (
                        <ProjectGroup name={g.name} gh={g.gh} key={g.name}>
                            {g.projects.map((p) => (
                                <ProjectImageCard {...p} key={p.name} />
                            ))}
                        </ProjectGroup>
                    ))}
                </section>
            </ProjectsLayout>

            <ProjectsLayout>
                <ProjectsHeaderSection>
                    <SectionHeading>Gists</SectionHeading>
                    <p className="text-primary dark:text-primary-dark">
                        GitHub gists about specific programming concepts, cool programming languages / technologies,
                        and more.
                    </p>
                </ProjectsHeaderSection>

                <ProjectsCardGrid>
                    <Gist
                        name="Short circuit evaluation"
                        url="https://gist.github.com/ky28059/84f33cee7cec0066390f79ee3629021e"
                    >
                        An explanation of short circuit lazy evaluation in boolean expressions, and its relevance in
                        weakly typed languages.
                    </Gist>
                    <Gist
                        name="Lambdas in Java"
                        url="https://gist.github.com/ky28059/566596eb93ac863332783182ec356e82"
                    >
                        A guide to lambda expressions in Java 17.
                    </Gist>
                    <Gist
                        name="Deploying to Vercel"
                        url="https://gist.github.com/ky28059/1c9af929a9030105da8cf00006b50484"
                    >
                        A guide on how to deploy an organization repository to Vercel for free.
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
        name: "MIT RACECAR Neo",
        gh: "https://github.com/MITRacecarNeo",
        projects: [{
            name: "RACECAR Neo Library",
            desc: 'The onboard library and documentation for MIT BWSI RACECAR.',
            href: "/assets/projects/racecar-library-3.jpg",
            langs: ['py'],
            tags: ['opencv', 'numpy', 'sphinx'],
            gh: "https://github.com/MITRacecarNeo/racecar-neo-library",
            web: "https://mitracecarneo.github.io/racecar-neo-library/"
        }]
    },
    {
        name: "b01lers",
        gh: "https://github.com/b01lers",
        projects: [{
            name: "bctf",
            desc: 'The new website for b01lers CTF!',
            href: "/assets/projects/b01lers-ctf-3.jpg",
            langs: ['ts', 'css'],
            tags: ['nextjs', 'tailwindcss'],
            gh: "https://github.com/ky28059/bctf",
            web: "https://b01lersc.tf"
        }, {
            name: "b01lers-bot",
            desc: 'An upgraded discord bot for the b01lers CTF team server.',
            href: "/assets/projects/b01lers-bot.jpg",
            langs: ['rust'],
            tags: ['serenity', 'poise', 'sqlx'],
            gh: "https://github.com/Athryx/b01lers-bot"
        }]
    },
    {
        name: "Goldhaber-Gordon Group",
        gh: "https://github.com/dgglab",
        projects: [{
            desc: "Scripts to detect and classify monolayer graphene flakes in microscope scan datasets.",
            name: "flakefinder",
            href: "/assets/projects/flakefinder.jpg",
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
            href: "/assets/projects/grt-website.jpg",
            langs: ["ts", "css"],
            tags: ["nextjs", "tailwindcss"],
            gh: "https://github.com/ky28059/GRTWebsite2.0",
            web: "https://www.gunnrobotics.com"
        }, {
            desc: "FRC team 192 code for the 2022 FIRST Robotics Competition, Rapid React.",
            name: "GRT2022",
            href: "/assets/projects/grt-22.JPG",
            langs: ["java"],
            tags: ["wpilib"],
            gh: "https://github.com/grt192/GRT2022"
        }, {
            desc: "FRC team 192 code for 2023 FIRST Robotics Competition, Charged Up.",
            name: "GRT2023",
            href: "/assets/projects/grt-23-3.JPG",
            langs: ["java"],
            tags: ["wpilib"],
            gh: "https://github.com/grt192/GRT2023"
        }, {
            desc: "Attempt at a scalable vision framework for FRC 2023 supporting AprilTag and green-light detection.",
            name: "GRTVision2023",
            href: "/assets/projects/grt-vision-23-2.JPG",
            langs: ["py"],
            tags: ["zeromq", "pupil-apriltags"],
            gh: "https://github.com/grt192/GRTVision2023"
        },
            // TODO: guava bot & slack
        ]
    }, {
        name: "GunnHacks",
        gh: "https://github.com/united-computations",
        projects: [{
            desc: "Website for GunnHacks 7.0, the seventh iteration of Gunn's annual hackathon.",
            name: "GunnHacks 7.0",
            href: "/assets/projects/gunnhacks-7.0.jpg",
            langs: ["js", "html", "scss"],
            tags: [],
            gh: "https://github.com/united-computations/GunnHacks7.0",
            web: "https://7.0.gunnhacks.com"
        }, {
            desc: "Website for GunnHacks 8.0, the eighth iteration of Gunn's annual hackathon.",
            name: "GunnHacks 8.0",
            href: "/assets/projects/gunnhacks-8.0.jpg",
            langs: ["svelte", "html", "css"],
            tags: ["sveltekit"],
            gh: "https://github.com/united-computations/GunnHacks8.0",
            web: "https://8.0.gunnhacks.com"
        }, {
            desc: "Website for GunnHacks 9.0, the ninth iteration of Gunn's annual hackathon.",
            name: "GunnHacks 9.0",
            href: "/assets/projects/gunnhacks-9.0.png",
            langs: ["ts", "css"],
            tags: ["nextjs", "tailwindcss"],
            gh: "https://github.com/united-computations/GunnHacks9.0",
            web: "https://gunnhacks.com"
        }]
    }, {
        name: "G'Floats",
        projects: [{
            desc: "Python script for the Raspberry Pi radio in the 2021 Junior float.",
            name: "hoco-radio-2021",
            href: "/assets/projects/floats-22.JPG",
            langs: ["py"],
            tags: ["pygame"],
            gh: "https://github.com/ky28059/hoco-radio-2021"
        }, {
            desc: "Python scripts for the Raspberry Pi radio + hatch mechanism + fog machine in the 2022 Senior float.",
            name: "floats-2022",
            href: "/assets/projects/floats-23.JPG",
            langs: ["py"],
            tags: ["pygame", "pigpio", "multiprocessing"],
            gh: "https://github.com/ky28059/floats-2022"
        }]
    },
    {
        name: "Personal / other",
        projects: [{
            desc: "A student-made schedule app for Purdue University!",
            name: "Pyrite",
            href: "/assets/projects/pyrite.png",
            langs: ["ts", "css"],
            tags: ["nextjs", "tailwindcss", "firebase"],
            gh: "https://github.com/ky28059/pyrite",
            web: "https://pyrite-pwl.vercel.app/"
        }, {
            desc: "Gunn schedule app and UGWA successor.",
            name: "WATT",
            href: "/assets/projects/watt.png",
            langs: ["ts", "html", "scss"],
            tags: ["create-react-app", "tailwindcss", "firebase"],
            gh: "https://github.com/GunnWATT/watt",
            web: "https://gunnwatt.web.app/"
        }, {
            desc: "Discord moderation and music bot written in discord.js 14, TypeScript, and sequelize.",
            name: "RBot",
            href: "/assets/projects/rbot.jpg",
            langs: ["ts"],
            tags: ["discord.js"],
            gh: "https://github.com/ky28059/RBot",
            discord: "https://discord.com/oauth2/authorize?client_id=684587440777986090&scope=bot+applications.commands&permissions=8"
        }, {
            desc: "Discord.Net bot with Google Drive integration and quantum computing shenanigans.",
            name: "Geckobot",
            href: "/assets/projects/geckobot-3.jpg",
            langs: ["c#", "q#"],
            tags: ["discord.net"],
            gh: "https://github.com/croissantderp/geckobot",
            discord: "https://discord.com/oauth2/authorize?client_id=766064505079726140&scope=bot&permissions=379968"
        }, {
            desc: "TypeScript discord.js bot for real-time cross-server communication.",
            name: "PortalBot",
            href: "/assets/projects/PortalBot.jpg",
            langs: ["ts"],
            tags: ["discord.js", "PortalBot framework"],
            gh: "https://github.com/ky28059/PortalBot",
            discord: "https://discord.com/oauth2/authorize?client_id=827738852902043698&scope=bot+applications.commands&permissions=8"
        }, {
            desc: "A testing / moderation bot written to explore elixir.",
            name: "Elixirbot",
            href: "/assets/projects/elixirbot.jpg",
            langs: ["elixir"],
            tags: ["nostrum", "nosedrum"],
            gh: "https://github.com/ky28059/elixirbot",
            discord: "https://discord.com/oauth2/authorize?client_id=1092613929278120017&scope=bot+applications.commands&permissions=8"
        }, {
            name: "kevin-yu",
            href: "/pfp.png",
            langs: ['ts'],
            tags: ['discord.js', 'PortalBot framework'],
            gh: "https://github.com/ky28059/kevin-yu",
            desc: "Fun discord bot for personal servers."
        }, {
            desc: "Repository of assignments from the first (scheme) semester of Gunn's AP CSA.",
            name: "AP CSA",
            href: "/assets/projects/ap-csa.jpg",
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

function ProjectsCardGrid(props: { children: ReactNode }) {
    return (
        <div className="flex flex-wrap justify-center md:justify-start gap-5 w-full">
            {props.children}
        </div>
    )
}

function ProjectGroup(props: { name: string, children: ReactNode, gh?: string }) {
    return (
        <div className="flex gap-8">
            <div className="flex flex-col items-center gap-3 text-secondary dark:text-secondary-dark mb-4">
                <h3 className="font-medium mb-0.5 flex-none [writing-mode:vertical-lr]">
                    {props.name}
                </h3>
                {props.gh && (
                    <a className="text-lg text-inherit" href={props.gh} target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                )}
                <hr className="h-full w-px border-r border-secondary/50 dark:border-secondary-dark/50" />
            </div>
            <ProjectsCardGrid>
                {props.children}
            </ProjectsCardGrid>
        </div>
    )
}
