import {ReactNode} from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Components
import Section, {SectionHeader} from '../components/Section';
import Project, {ProjectTag} from '../components/Project';
import Gist from '../components/Gist';
import ConceptsCard from '../components/ConceptsCard';

// Icons
import {BiArrowToRight, BiSun} from 'react-icons/bi';


export default function Home() {
    const toggleTheme = () => document.documentElement.classList.toggle('dark');

    return (
        <div>
            <Head>
                <title>Home | ky28059.github.io</title>
                <meta name="description" content="Personal portfolio website and technology testing chamber." />
            </Head>

            {/* TODO: responsive design */}
            <header className="bg-white dark:bg-midnight">
                <div className="container relative pl-44 pt-24 pb-12 pr-4">
                    <BiSun className="absolute top-8 right-8 cursor-pointer text-xl" onClick={toggleTheme}/>
                    <div className="relative">
                        <img src="pfp.png" alt="Profile picture" className="absolute -left-32 -top-10 h-24 w-24 rounded-full" />
                        <h1 className="font-bold text-7xl mb-4 underline decoration-grapefruit">kevin yu.</h1>
                        <p className="text-lg">
                            Teenager that goes to Gunn High School. Interested in art, web development, and robotics.
                        </p>
                    </div>
                </div>
            </header>

            <Section secondary>
                <div className="flex gap-8 justify-center">
                    <div className="hidden sm:flex flex-col gap-3 basis-60">
                        <ConceptsCard />
                        <ConceptsCard />
                        <ConceptsCard />
                    </div>
                    <div>
                        <SectionHeader className="mb-4">Concepts</SectionHeader>
                        <p className="mb-4">Design concepts I've made for other websites. ___.</p>
                        <Link href="/concepts">
                            <a className="text-lg font-medium hover:underline w-max mx-auto">
                                Explore concepts →
                            </a>
                        </Link>
                    </div>
                </div>
            </Section>

            <Section>
                <ProjectsLayout>
                    <ProjectsHeaderSection>
                        <SectionHeader className="mb-6">Projects</SectionHeader>
                        <p>
                            Various programming projects for organizations like GunnHacks, as well as personal projects
                            like WATT.
                        </p>
                    </ProjectsHeaderSection>
                    <ProjectsCardGrid>
                        <Project
                            name="RBot"
                            img="/projects/RBot.png"
                            langs={['ts']}
                            gh="https://github.com/ky28059/RBot"
                            discord="https://discord.com/oauth2/authorize?client_id=684587440777986090&scope=bot&permissions=8"
                        >
                            Discord mod bot using djs 13 and sequelize.
                        </Project>
                        <Project
                            name="WATT"
                            img="/projects/watt-white.png"
                            langs={['ts', 'html', 'scss']}
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
                            gh="https://github.com/croissantderp/geckobot"
                            discord="https://discord.com/oauth2/authorize?client_id=766064505079726140&scope=bot&permissions=379968"
                        >
                            Discord.net bot with Drive API and quantum computing.
                        </Project>
                        <Project
                            name="PortalBot"
                            img="/projects/PortalBot.jpg"
                            langs={['ts']}
                            gh="https://github.com/ky28059/PortalBot"
                            discord="https://discord.com/oauth2/authorize?client_id=827738852902043698&scope=bot&permissions=8"
                        >
                            TypeScript djs bot for real time cross server communication.
                        </Project>
                        <Project
                            name="GunnHacks 7.0"
                            img="/projects/gunnhacks.png"
                            langs={['js', 'html', 'scss']}
                            gh="https://github.com/GunnHacks/GunnHacks7.0"
                            web="https://7.0.gunnhacks.com"
                        >
                            Website for GunnHacks 7.0 (2020-2021).
                        </Project>
                        <Project
                            name="GunnHacks 8.0"
                            img="/projects/gunnhacks.png"
                            langs={['svelte', 'html', 'css']}
                            gh="https://github.com/GunnHacks/GunnHacks8.0"
                            web="https://gunnhacks.com"
                        >
                            SvelteKit website for GunnHacks 8.0.
                        </Project>
                        <Project
                            name="Guava Bot"
                            img="/projects/Guava.png"
                            langs={['ts']}
                            gh="https://github.com/ky28059/guava-bot"
                        >
                            <code>!whois</code> bot for an elusive discord server.
                        </Project>
                        <Project
                            name="Guava Bot Slack"
                            img="/projects/Guava.png"
                            langs={['ts']}
                            gh="https://github.com/ky28059/guava-bot-slack"
                        >
                            Slack bot for an elusive slack workspace.
                        </Project>
                        <Project
                            name="hoco-radio-2021"
                            langs={['py']}
                            gh="https://github.com/ky28059/hoco-radio-2021"
                        >
                            Python script for the Raspberry Pi radio in the Junior float.
                        </Project>
                        <Project
                            name="AP CSA"
                            langs={['rkt']}
                            gh="https://github.com/ky28059/AP-CSA"
                        >
                            Repository of assignments from the first (scheme) semester of Gunn's AP CSA.
                        </Project>
                    </ProjectsCardGrid>
                </ProjectsLayout>
            </Section>

            <Section>
                <ProjectsLayout>
                    <ProjectsHeaderSection>
                        <SectionHeader className="mb-6">Gists</SectionHeader>
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
        </div>
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