import type { Metadata } from 'next';

// Components
import ArchivedHeader from './ArchivedHeader';
import ArchivedProject from './ArchivedProject';

// Icons
import { BsChevronCompactDown } from 'react-icons/bs';


export const metadata: Metadata = {
    title: {
        absolute: 'Home | ky28059.github.io'
    },
    description: 'Personal portfolio website and technology testing chamber.'
}

export default function Home() {
    return (
        <div className="dark:text-white bg-gray-100 dark:bg-gradient-to-r dark:from-black dark:to-gray-900 selection:bg-blue-500 selection:text-white">
            <ArchivedHeader />

            <section className="bg-white dark:bg-gray-900 pt-14 pb-2 mb-10">
                <div className="text-center py-4">
                    <div className="w-full mx-auto h-56 -z-10 bg-gradient-to-r from-green-400 to-blue-500 transform -skew-y-3 flex flex-row">
                        <div className="transform skew-y-3 m-auto bg-white rounded-2xl p-8 shadow-lg text-gray-900">
                            <h1 className="text-5xl font-bold">About</h1>
                            <p>I am a teenager that goes to Gunn High School.</p>
                        </div>
                    </div>
                    <BsChevronCompactDown className="mx-auto mt-10 text-4xl animate-bounce" />
                </div>
            </section>

            <section>
                <h1 className="text-5xl font-bold text-center mb-8">Projects</h1>
                <div className="container mx-auto flex justify-center flex-wrap gap-6">
                    <ArchivedProject
                        name="RBot"
                        img="/projects/RBot.png"
                        langs={['ts']}
                        gh="https://github.com/ky28059/RBot"
                        discord="https://discord.com/oauth2/authorize?client_id=684587440777986090&scope=bot&permissions=8"
                    >
                        Discord mod bot using djs 13 and sequelize.
                    </ArchivedProject>
                    <ArchivedProject
                        name="WATT"
                        img="/projects/watt-white.png"
                        langs={['ts', 'html', 'scss']}
                        gh="https://github.com/GunnWATT/watt"
                        web="https://gunnwatt.web.app/"
                    >
                        Gunn schedule app and UGWA successor.
                    </ArchivedProject>
                    {/*
                    <Project
                        name="Word Generator"
                        desc="A web port of Roger Fan's markov chain random word generator."
                        tags={['ts', 'html', 'scss']}
                        web="https://ky28059.github.io/#/word-gen"
                    />
                    */}
                    <ArchivedProject
                        name="Geckobot"
                        img="/projects/GeckoBot.png"
                        langs={['c#', 'q#']}
                        gh="https://github.com/croissantderp/geckobot"
                        discord="https://discord.com/oauth2/authorize?client_id=766064505079726140&scope=bot&permissions=379968"
                    >
                        Discord.net bot with Drive API and quantum computing.
                    </ArchivedProject>
                    <ArchivedProject
                        name="PortalBot"
                        img="/projects/PortalBot.jpg"
                        langs={['ts']}
                        gh="https://github.com/ky28059/PortalBot"
                        discord="https://discord.com/oauth2/authorize?client_id=827738852902043698&scope=bot&permissions=8"
                    >
                        TypeScript djs bot for real time cross server communication.
                    </ArchivedProject>
                    <ArchivedProject
                        name="GunnHacks 7.0"
                        img="/projects/gunnhacks.png"
                        langs={['js', 'html', 'scss']}
                        gh="https://github.com/GunnHacks/GunnHacks7.0"
                        web="https://7.0.gunnhacks.com"
                    >
                        Website for GunnHacks 7.0 (2020-2021).
                    </ArchivedProject>
                    <ArchivedProject
                        name="GunnHacks 8.0"
                        img="/projects/gunnhacks.png"
                        langs={['svelte', 'html', 'css']}
                        gh="https://github.com/GunnHacks/GunnHacks8.0"
                        web="https://gunnhacks.com"
                    >
                        SvelteKit website for GunnHacks 8.0.
                    </ArchivedProject>
                    <ArchivedProject
                        name="Guava Bot"
                        img="/projects/Guava.png"
                        langs={['ts']}
                        gh="https://github.com/ky28059/guava-bot"
                    >
                        <code>!whois</code> bot for an elusive discord server.
                    </ArchivedProject>
                    <ArchivedProject
                        name="Guava Bot Slack"
                        img="/projects/Guava.png"
                        langs={['ts']}
                        gh="https://github.com/ky28059/guava-bot-slack"
                    >
                        Slack bot for an elusive slack workspace.
                    </ArchivedProject>
                    <ArchivedProject
                        name="hoco-radio-2021"
                        langs={['py']}
                        gh="https://github.com/ky28059/hoco-radio-2021"
                    >
                        Python script for the Raspberry Pi radio in the Junior float.
                    </ArchivedProject>
                    <ArchivedProject
                        name="AP CSA"
                        langs={['rkt']}
                        gh="https://github.com/ky28059/AP-CSA"
                    >
                        Repository of assignments from the first (scheme) semester of Gunn's AP CSA.
                    </ArchivedProject>
                </div>
                {/*
                <Link href="/all"><a className="text-2xl mx-auto">More <FiArrowRight /></a></Link>
                */}
            </section>

            <section>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </section>
        </div>
    )
}
