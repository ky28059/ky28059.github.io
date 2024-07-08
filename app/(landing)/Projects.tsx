import { ReactNode } from 'react';

// Components
import Section, { SectionHeading } from '../../components/Section';
import Project from './Project';
import ProjectImageCard from './ProjectImageCard';
import Gist from './Gist';

// Icons
import { BsGithub } from 'react-icons/bs';


export default function Projects() {
    return (
        <Section className="flex flex-col gap-16">
            <ProjectsLayout>
                <ProjectsHeaderSection>
                    <SectionHeading>Projects</SectionHeading>
                    <p className="text-primary dark:text-primary-dark">
                        Various programming projects for organizations like the Gunn Robotics Team or GunnHacks, as well
                        as personal projects like RBot and WATT.
                    </p>
                </ProjectsHeaderSection>

                <section className="flex flex-col gap-6">
                    <ProjectGroup name="MIT RACECAR Neo" gh="https://github.com/MITRacecarNeo">
                        <ProjectImageCard
                            name="RACECAR Neo Library"
                            href="/assets/projects/racecar-library-3.jpg"
                            langs={['py']}
                            tags={['opencv', 'numpy', 'sphinx']}
                            gh="https://github.com/MITRacecarNeo/racecar-neo-library"
                            web="https://mitracecarneo.github.io/racecar-neo-library/"
                        >
                            The onboard library and documentation for MIT BWSI RACECAR.
                        </ProjectImageCard>
                    </ProjectGroup>

                    <ProjectGroup name="b01lers" gh="https://github.com/b01lers">
                        <ProjectImageCard
                            name="bctf"
                            href="/assets/projects/b01lers-ctf-3.jpg"
                            langs={['ts', 'css']}
                            tags={['nextjs', 'tailwindcss']}
                            gh="https://github.com/ky28059/bctf"
                            web="https://b01lersc.tf"
                        >
                            The new website for b01lers CTF!
                        </ProjectImageCard>
                        <ProjectImageCard
                            name="b01lers-bot"
                            href="/assets/projects/b01lers-bot.jpg"
                            langs={['rust']}
                            tags={['serenity', 'poise', 'sqlx']}
                            gh="https://github.com/Athryx/b01lers-bot"
                        >
                            An upgraded discord bot for the b01lers CTF team server.
                        </ProjectImageCard>
                    </ProjectGroup>

                    <ProjectGroup name="Goldhaber-Gordon Group" gh="https://github.com/dgglab">
                        <ProjectImageCard
                            name="flakefinder"
                            href="/assets/projects/flakefinder.jpg"
                            langs={['py']}
                            tags={['opencv', 'multiprocessing', 'numpy']}
                            gh="https://github.com/ky28059/flakefinder"
                        >
                            Scripts to detect and classify monolayer graphene flakes in microscope scan datasets.
                        </ProjectImageCard>
                    </ProjectGroup>

                    <ProjectGroup name="GRT" gh="https://github.com/grt192">
                        <ProjectImageCard
                            name="GRT Website 2.0"
                            href="/assets/projects/grt-website.jpg"
                            langs={['ts', 'css']}
                            tags={['nextjs', 'tailwindcss']}
                            gh="https://github.com/ky28059/GRTWebsite2.0"
                            web="https://www.gunnrobotics.com"
                        >
                            A modern rewrite of the Gunn Robotics Team website.
                        </ProjectImageCard>
                        <ProjectImageCard
                            name="GRT2022"
                            href="/assets/projects/grt-22.JPG"
                            langs={['java']}
                            tags={['wpilib']}
                            gh="https://github.com/grt192/GRT2022"
                        >
                            FRC team 192 code for the 2022 FIRST Robotics Competition, Rapid React.
                        </ProjectImageCard>
                        <ProjectImageCard
                            name="GRT2023"
                            href="/assets/projects/grt-23-3.JPG"
                            langs={['java']}
                            tags={['wpilib']}
                            gh="https://github.com/grt192/GRT2023"
                        >
                            FRC team 192 code for 2023 FIRST Robotics Competition, Charged Up.
                        </ProjectImageCard>
                        <ProjectImageCard
                            name="GRTVision2023"
                            href="/assets/projects/grt-vision-23-2.JPG"
                            langs={['py']}
                            tags={['zeromq', 'pupil-apriltags']}
                            gh="https://github.com/grt192/GRTVision2023"
                        >
                            Attempt at a scalable vision framework for FRC 2023 supporting AprilTag and green-light
                            detection.
                        </ProjectImageCard>
                        <Project
                            name="Guava Bot"
                            img="/assets/projects/Guava.png"
                            langs={['ts']}
                            tags={['discord.js', 'PortalBot framework']}
                            gh="https://github.com/ky28059/guava-bot"
                        >
                            Counting and <code>!whois</code> bot for an elusive discord server.
                        </Project>
                        <Project
                            name="Guava Bot Slack"
                            img="/assets/projects/Guava.png"
                            langs={['ts']}
                            tags={['bolt-js', 'slack-block-builder']}
                            gh="https://github.com/ky28059/guava-bot-slack"
                        >
                            Slack bot for an elusive slack workspace.
                        </Project>
                    </ProjectGroup>

                    <ProjectGroup name="GunnHacks" gh="https://github.com/united-computations">
                        <ProjectImageCard
                            name="GunnHacks 7.0"
                            href="/assets/projects/gunnhacks-7.0.jpg"
                            langs={['js', 'html', 'scss']}
                            gh="https://github.com/united-computations/GunnHacks7.0"
                            web="https://7.0.gunnhacks.com"
                        >
                            Website for GunnHacks 7.0, the seventh iteration of Gunn's annual hackathon.
                        </ProjectImageCard>
                        <ProjectImageCard
                            name="GunnHacks 8.0"
                            href="/assets/projects/gunnhacks-8.0.jpg"
                            langs={['svelte', 'html', 'css']}
                            tags={['sveltekit']}
                            gh="https://github.com/united-computations/GunnHacks8.0"
                            web="https://8.0.gunnhacks.com"
                        >
                            Website for GunnHacks 8.0, the eighth iteration of Gunn's annual hackathon.
                        </ProjectImageCard>
                        <ProjectImageCard
                            name="GunnHacks 9.0"
                            href="/assets/projects/gunnhacks-9.0.png"
                            langs={['ts', 'css']}
                            tags={['nextjs', 'tailwindcss']}
                            gh="https://github.com/united-computations/GunnHacks9.0"
                            web="https://gunnhacks.com"
                        >
                            Website for GunnHacks 9.0, the ninth iteration of Gunn's annual hackathon.
                        </ProjectImageCard>
                    </ProjectGroup>

                    <ProjectGroup name="G'Floats">
                        <ProjectImageCard
                            name="hoco-radio-2021"
                            href="/assets/projects/floats-22.JPG"
                            langs={['py']}
                            tags={['pygame']}
                            gh="https://github.com/ky28059/hoco-radio-2021"
                        >
                            Python script for the Raspberry Pi radio in the 2021 Junior float.
                        </ProjectImageCard>
                        <ProjectImageCard
                            name="floats-2022"
                            href="/assets/projects/floats-23.JPG"
                            langs={['py']}
                            tags={['pygame', 'pigpio', 'multiprocessing']}
                            gh="https://github.com/ky28059/floats-2022"
                        >
                            Python scripts for the Raspberry Pi radio + hatch mechanism + fog machine in the 2022
                            Senior float.
                        </ProjectImageCard>
                    </ProjectGroup>

                    {/*
                    <ProjectGroup name="SEC" gh="https://github.com/gunnsec">
                        <Project
                            name="Hall Monitor"
                            //img="/projects/timmy.png"
                            langs={['ts']}
                            tags={['bolt-js', 'slack-block-builder']}
                            gh="https://github.com/gunnsec/hall-monitor"
                        >
                            Slack bot for official SEC business.
                        </Project>
                        <Project
                            name="Gunn Launchpad"
                            langs={['ts', 'css']}
                            tags={['nextjs', 'tailwindcss']}
                            gh="https://github.com/gunnsec/gunn-launchpad"
                            web="https://launchpad.gunn.one"
                        >
                            Website for the Gunn Launchpad initiative!
                        </Project>
                    </ProjectGroup>
                    */}

                    <ProjectGroup name="Personal / other">
                        <ProjectImageCard
                            name="Pyrite"
                            href="/assets/projects/pyrite.png"
                            langs={['ts', 'css']}
                            tags={['nextjs', 'tailwindcss', 'firebase']}
                            gh="https://github.com/ky28059/pyrite"
                            web="https://pyrite-pwl.vercel.app/"
                        >
                            A student-made schedule app for Purdue University!
                        </ProjectImageCard>
                        <ProjectImageCard
                            name="WATT"
                            href="/assets/projects/watt.png"
                            langs={['ts', 'html', 'scss']}
                            tags={['create-react-app', 'tailwindcss', 'firebase']}
                            gh="https://github.com/GunnWATT/watt"
                            web="https://gunnwatt.web.app/"
                        >
                            Gunn schedule app and UGWA successor.
                        </ProjectImageCard>
                        {/*
                        <Project
                            name="Word Generator"
                            desc="A web port of Roger Fan's markov chain random word generator."
                            tags={['ts', 'html', 'scss']}
                            web="https://ky28059.github.io/#/word-gen"
                        />
                        */}
                        <ProjectImageCard
                            name="RBot"
                            href="/assets/projects/rbot.jpg"
                            langs={['ts']}
                            tags={['discord.js']}
                            gh="https://github.com/ky28059/RBot"
                            discord="https://discord.com/oauth2/authorize?client_id=684587440777986090&scope=bot+applications.commands&permissions=8"
                        >
                            Discord moderation and music bot written in discord.js 14, TypeScript, and sequelize.
                        </ProjectImageCard>
                        <ProjectImageCard
                            name="Geckobot"
                            href="/assets/projects/geckobot-3.jpg"
                            langs={['c#', 'q#']}
                            tags={['discord.net']}
                            gh="https://github.com/croissantderp/geckobot"
                            discord="https://discord.com/oauth2/authorize?client_id=766064505079726140&scope=bot&permissions=379968"
                        >
                            Discord.Net bot with Google Drive integration and quantum computing shenanigans.
                        </ProjectImageCard>
                        <ProjectImageCard
                            name="PortalBot"
                            href="/assets/projects/PortalBot.jpg"
                            langs={['ts']}
                            tags={['discord.js', 'PortalBot framework']}
                            gh="https://github.com/ky28059/PortalBot"
                            discord="https://discord.com/oauth2/authorize?client_id=827738852902043698&scope=bot+applications.commands&permissions=8"
                        >
                            TypeScript discord.js bot for real-time cross-server communication.
                        </ProjectImageCard>
                        <Project
                            name="kevin-yu"
                            img="/pfp.png"
                            langs={['ts']}
                            tags={['discord.js', 'PortalBot framework']}
                            gh="https://github.com/ky28059/kevin-yu"
                        >
                            Fun discord bot for personal servers.
                        </Project>
                        <ProjectImageCard
                            name="Elixirbot"
                            href="/assets/projects/elixirbot.jpg"
                            langs={['elixir']}
                            tags={['nostrum', 'nosedrum']}
                            gh="https://github.com/ky28059/elixirbot"
                            discord="https://discord.com/oauth2/authorize?client_id=1092613929278120017&scope=bot+applications.commands&permissions=8"
                        >
                            A testing / moderation bot written to explore elixir.
                        </ProjectImageCard>
                        <ProjectImageCard
                            name="AP CSA"
                            href="/assets/projects/ap-csa.png"
                            langs={['rkt']}
                            gh="https://github.com/ky28059/AP-CSA"
                        >
                            Repository of assignments from the first (scheme) semester of Gunn's AP CSA.
                        </ProjectImageCard>
                    </ProjectGroup>
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

function ProjectsLayout(props: { children: ReactNode }) {
    return (
        <div className="flex flex-wrap md:flex-nowrap gap-y-8 gap-x-12">
            {props.children}
        </div>
    )
}

function ProjectsHeaderSection(props: { children: ReactNode }) {
    return (
        <div className="md:flex-none md:w-64 md:sticky md:top-8 md:h-max">
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
