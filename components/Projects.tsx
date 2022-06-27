import Section, {SectionHeader} from './Section';
import Project from './Project';
import Gist from './Gist';
import {ReactNode} from 'react';
import {GoMarkGithub} from 'react-icons/go';


export default function Projects() {
    return (
        <Section className="flex flex-col gap-16">
            <ProjectsLayout>
                <ProjectsHeaderSection>
                    <SectionHeader>Projects</SectionHeader>
                    <p>
                        Various programming projects for organizations like GunnHacks, as well as personal projects
                        like WATT.
                    </p>
                </ProjectsHeaderSection>

                <section className="flex flex-col gap-6">
                    <ProjectGroup name="Personal">
                        <Project
                            name="RBot"
                            img="/projects/RBot.png"
                            langs={['ts']}
                            tags={['discord.js']}
                            gh="https://github.com/ky28059/RBot"
                            discord="https://discord.com/oauth2/authorize?client_id=684587440777986090&scope=bot+applications.commands&permissions=8"
                        >
                            Discord mod and music bot using djs 13 and sequelize.
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
                            Discord.net bot with Drive API and quantum computing.
                        </Project>
                        <Project
                            name="PortalBot"
                            img="/projects/PortalBot.jpg"
                            langs={['ts']}
                            tags={['discord.js', 'PortalBot framework']}
                            gh="https://github.com/ky28059/PortalBot"
                            discord="https://discord.com/oauth2/authorize?client_id=827738852902043698&scope=bot+applications.commands&permissions=8"
                        >
                            TypeScript djs bot for real-time cross-server communication.
                        </Project>
                        <Project
                            name="hoco-radio-2021"
                            langs={['py']}
                            gh="https://github.com/ky28059/hoco-radio-2021"
                        >
                            Python script for the Raspberry Pi radio in the 2021 Junior float.
                        </Project>
                        <Project
                            name="AP CSA"
                            langs={['rkt']}
                            gh="https://github.com/ky28059/AP-CSA"
                        >
                            Repository of assignments from the first (scheme) semester of Gunn's AP CSA.
                        </Project>
                    </ProjectGroup>

                    <ProjectGroup name="GRT" gh="https://github.com/grt192">
                        <Project
                            name="Guava Bot"
                            img="/projects/Guava.png"
                            langs={['ts']}
                            tags={['discord.js', 'PortalBot framework']}
                            gh="https://github.com/ky28059/guava-bot"
                        >
                            <code>!whois</code> bot for an elusive discord server.
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
                        <Project
                            name="GRTCommandBased"
                            langs={['java']}
                            gh="https://github.com/grt192/GRTCommandBased"
                        >
                            FRC team 192 code for 2022 Rapid React.
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
                    </ProjectGroup>

                    <ProjectGroup name="GunnHacks" gh="https://github.com/GunnHacks">
                        <Project
                            name="GunnHacks 7.0"
                            img="/projects/gunnhacks.png"
                            langs={['js', 'html', 'scss']}
                            gh="https://github.com/GunnHacks/GunnHacks7.0"
                            web="https://7.0.gunnhacks.com"
                        >
                            Website for GunnHacks 7.0 (2020-2021), the seventh year of Gunn's annual hackathon.
                        </Project>
                        <Project
                            name="GunnHacks 8.0"
                            img="/projects/gunnhacks.png"
                            langs={['svelte', 'html', 'css']}
                            tags={['sveltekit']}
                            gh="https://github.com/GunnHacks/GunnHacks8.0"
                            web="https://gunnhacks.com"
                        >
                            Website for GunnHacks 8.0 (2021-2022), the eighth year of Gunn's annual hackathon.
                        </Project>
                    </ProjectGroup>
                </section>
            </ProjectsLayout>

            <ProjectsLayout>
                <ProjectsHeaderSection>
                    <SectionHeader>Gists</SectionHeader>
                    <p>
                        Educational gists to teach about specific programming concepts and cool programming languages
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
                </ProjectsCardGrid>
            </ProjectsLayout>
        </Section>
    )
}

function ProjectsLayout(props: {children: ReactNode}) {
    return (
        <div className="flex flex-wrap md:flex-nowrap gap-8">
            {props.children}
        </div>
    )
}

function ProjectsHeaderSection(props: {children: ReactNode}) {
    return (
        <div className="md:flex-none md:w-64">
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
                <h3 className="font-medium mb-0.5">{props.name}</h3>
                {props.gh && (
                    <a className="text-lg text-inherit" href={props.gh} target="_blank" rel="noopener noreferrer">
                        <GoMarkGithub />
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
