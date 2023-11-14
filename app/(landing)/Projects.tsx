import {ReactNode} from 'react';
import Section, {SectionHeading} from '../../components/Section';
import Project from './Project';
import Gist from './Gist';
import {BsGithub} from 'react-icons/bs';


export default function Projects() {
    return (
        <Section className="flex flex-col gap-16">
            <ProjectsLayout>
                <ProjectsHeaderSection>
                    <SectionHeading>Projects</SectionHeading>
                    <p className="text-secondary dark:text-secondary-dark">
                        Various programming projects for organizations like the Gunn Robotics Team or GunnHacks, as well
                        as personal projects like RBot and WATT.
                    </p>
                </ProjectsHeaderSection>

                <section className="flex flex-col gap-6">
                    <ProjectGroup name="GRT" gh="https://github.com/grt192">
                        <Project
                            name="GRT Website 2.0"
                            img="/projects/grt.png"
                            langs={['ts', 'css']}
                            tags={['nextjs', 'tailwindcss']}
                            gh="https://github.com/ky28059/GRTWebsite2.0"
                            web="https://www.gunnrobotics.com"
                        >
                            A modern rewrite of the Gunn Robotics Team website.
                        </Project>
                        <Project
                            name="GRT2022"
                            langs={['java']}
                            tags={['wpilib']}
                            gh="https://github.com/grt192/GRT2022"
                        >
                            FRC team 192 code for the 2022 FIRST Robotics Competition, Rapid React.
                        </Project>
                        <Project
                            name="GRT2023"
                            langs={['java']}
                            tags={['wpilib']}
                            gh="https://github.com/grt192/GRT2023"
                        >
                            FRC team 192 code for 2023 FIRST Robotics Competition, Charged Up.
                        </Project>
                        <Project
                            name="Guava Bot"
                            img="/projects/Guava.png"
                            langs={['ts']}
                            tags={['discord.js', 'PortalBot framework']}
                            gh="https://github.com/ky28059/guava-bot"
                        >
                            Counting and <code>!whois</code> bot for an elusive discord server.
                        </Project>
                        <Project
                            name="Guava Bot Slack"
                            img="/projects/Guava.png"
                            langs={['ts']}
                            tags={['bolt-js', 'slack-block-builder']}
                            gh="https://github.com/ky28059/guava-bot-slack"
                        >
                            Slack bot for an elusive slack workspace.
                        </Project>
                    </ProjectGroup>

                    <ProjectGroup name="GunnHacks" gh="https://github.com/united-computations">
                        <Project
                            name="GunnHacks 7.0"
                            img="/projects/gunnhacks.png"
                            langs={['js', 'html', 'scss']}
                            gh="https://github.com/GunnHacks/GunnHacks7.0"
                            web="https://7.0.gunnhacks.com"
                        >
                            Website for GunnHacks 7.0, the seventh iteration of Gunn's annual hackathon.
                        </Project>
                        <Project
                            name="GunnHacks 8.0"
                            img="/projects/gunnhacks.png"
                            langs={['svelte', 'html', 'css']}
                            tags={['sveltekit']}
                            gh="https://github.com/GunnHacks/GunnHacks8.0"
                            web="https://8.0.gunnhacks.com"
                        >
                            Website for GunnHacks 8.0, the eighth iteration of Gunn's annual hackathon.
                        </Project>
                        <Project
                            name="GunnHacks 9.0"
                            img="/projects/gunnhacks.png"
                            langs={['ts', 'css']}
                            tags={['nextjs', 'tailwindcss']}
                            gh="https://github.com/GunnHacks/GunnHacks9.0"
                            web="https://gunnhacks.com"
                        >
                            Website for GunnHacks 9.0, the ninth iteration of Gunn's annual hackathon.
                        </Project>
                    </ProjectGroup>

                    <ProjectGroup name="G'Floats">
                        <Project
                            name="hoco-radio-2021"
                            langs={['py']}
                            tags={['pygame']}
                            gh="https://github.com/ky28059/hoco-radio-2021"
                        >
                            Python script for the Raspberry Pi radio in the 2021 Junior float.
                        </Project>
                        <Project
                            name="floats-2022"
                            langs={['py']}
                            tags={['pygame', 'pigpio', 'multiprocessing']}
                            gh="https://github.com/ky28059/floats-2022"
                        >
                            Python scripts for the Raspberry Pi radio + hatch mechanism + fog machine in the 2022 Senior float.
                        </Project>
                    </ProjectGroup>

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

                    <ProjectGroup name="Personal / other">
                        <Project
                            name="RBot"
                            img="/projects/RBot.png"
                            langs={['ts']}
                            tags={['discord.js']}
                            gh="https://github.com/ky28059/RBot"
                            discord="https://discord.com/oauth2/authorize?client_id=684587440777986090&scope=bot+applications.commands&permissions=8"
                        >
                            Discord moderation and music bot written in discord.js 14, TypeScript, and sequelize.
                        </Project>
                        <Project
                            name="WATT"
                            img="/projects/watt-white.png"
                            langs={['ts', 'html', 'scss']}
                            tags={['create-react-app', 'tailwindcss', 'firebase']}
                            gh="https://github.com/GunnWATT/watt"
                            web="https://gunnwatt.web.app/"
                        >
                            Gunn schedule app and UGWA successor.
                        </Project>
                        {/*
                        <Project
                            name="Word Generator"
                            desc="A web port of Roger Fan's markov chain random word generator."
                            tags={['ts', 'html', 'scss']}
                            web="https://ky28059.github.io/#/word-gen"
                        />
                        */}
                        <Project
                            name="Geckobot"
                            img="/projects/GeckoBot.png"
                            langs={['c#', 'q#']}
                            tags={['discord.net']}
                            gh="https://github.com/croissantderp/geckobot"
                            discord="https://discord.com/oauth2/authorize?client_id=766064505079726140&scope=bot&permissions=379968"
                        >
                            Discord.Net bot with Google Drive integration and quantum computing shenanigans.
                        </Project>
                        <Project
                            name="PortalBot"
                            img="/projects/PortalBot.jpg"
                            langs={['ts']}
                            tags={['discord.js', 'PortalBot framework']}
                            gh="https://github.com/ky28059/PortalBot"
                            discord="https://discord.com/oauth2/authorize?client_id=827738852902043698&scope=bot+applications.commands&permissions=8"
                        >
                            TypeScript discord.js bot for real-time cross-server communication.
                        </Project>
                        <Project
                            name="kevin-yu"
                            img="/pfp.png"
                            langs={['ts']}
                            tags={['discord.js', 'PortalBot framework']}
                            gh="https://github.com/ky28059/kevin-yu"
                        >
                            Fun discord bot for personal servers.
                        </Project>
                        <Project
                            name="Elixirbot"
                            langs={['elixir']}
                            tags={['nostrum', 'nosedrum']}
                            gh="https://github.com/ky28059/elixirbot"
                            discord="https://discord.com/oauth2/authorize?client_id=1092613929278120017&scope=bot+applications.commands&permissions=8"
                        >
                            A testing / moderation bot written in elixir.
                        </Project>
                        <Project
                            name="AP CSA"
                            langs={['rkt']}
                            gh="https://github.com/ky28059/AP-CSA"
                        >
                            Repository of assignments from the first (scheme) semester of Gunn's AP CSA.
                        </Project>
                    </ProjectGroup>
                </section>
            </ProjectsLayout>

            <ProjectsLayout>
                <ProjectsHeaderSection>
                    <SectionHeading>Gists</SectionHeading>
                    <p className="text-secondary dark:text-secondary-dark">
                        Educational gists to inform about specific programming concepts and cool programming languages
                        and technologies.
                    </p>
                </ProjectsHeaderSection>

                <ProjectsCardGrid>
                    <Gist name="Short circuit evaluation" url="https://gist.github.com/ky28059/84f33cee7cec0066390f79ee3629021e">
                        An explanation of short circuit lazy evaluation in boolean expressions, and its relevance in
                        weakly typed languages.
                    </Gist>
                    <Gist name="Lambdas in Java" url="https://gist.github.com/ky28059/566596eb93ac863332783182ec356e82">
                        A guide to lambda expressions in Java 17.
                    </Gist>
                    <Gist name="Deploying to Vercel" url="https://gist.github.com/ky28059/1c9af929a9030105da8cf00006b50484">
                        A guide on how to deploy an organization repository to Vercel for free (by routing it through
                        your personal account).
                    </Gist>
                </ProjectsCardGrid>
            </ProjectsLayout>
        </Section>
    )
}

function ProjectsLayout(props: {children: ReactNode}) {
    return (
        <div className="flex flex-wrap md:flex-nowrap gap-y-8 gap-x-12">
            {props.children}
        </div>
    )
}

function ProjectsHeaderSection(props: {children: ReactNode}) {
    return (
        <div className="md:flex-none md:w-64 md:sticky md:top-8 md:h-max">
            {props.children}
        </div>
    )
}

function ProjectsCardGrid(props: {children: ReactNode}) {
    return (
        <div className="flex flex-wrap justify-center md:justify-start gap-6 w-full">
            {props.children}
        </div>
    )
}

function ProjectGroup(props: {name: string, children: ReactNode, gh?: string}) {
    return (
        <div>
            <div className="flex items-center gap-2 text-gray-500 mb-4">
                <h3 className="font-medium mb-0.5 flex-none">{props.name}</h3>
                {props.gh && (
                    <a className="text-lg text-inherit" href={props.gh} target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                )}
                <hr className="w-full border-gray-600/50" />
            </div>
            <ProjectsCardGrid>
                {props.children}
            </ProjectsCardGrid>
        </div>
    )
}
