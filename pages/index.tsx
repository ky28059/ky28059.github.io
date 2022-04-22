import Head from 'next/head';
import Link from 'next/link';

// Components
import Header from '../components/Header';
import Project from '../components/Project';

// Icons
import {BsChevronCompactDown} from 'react-icons/bs';
import {FiArrowRight} from 'react-icons/fi';
import {BiArrowToRight, BiSun} from "react-icons/bi";


export default function Home() {
    const toggleTheme = () => document.documentElement.classList.toggle('dark');

    return (
        <div className="text-dark dark:text-white">
            <Head>
                <title>Home | ky28059.github.io</title>
                <meta name="description" content="Personal portfolio website and technology testing chamber." />
            </Head>

            <section className="bg-white dark:bg-midnight">
                <div className="container relative pl-44 pt-24 pb-12">
                    <BiSun className="absolute top-8 right-8 cursor-pointer text-xl" onClick={toggleTheme}/>
                    <div className="relative">
                        <img src="pfp.png" alt="Profile picture" className="absolute -left-32 -top-10 h-24 w-24 rounded-full" />
                        <h1 className="font-bold text-7xl mb-4 underline decoration-grapefruit">kevin yu.</h1>
                        <p className="text-lg">
                            Teenager that goes to Gunn High School. Interested in art, web development, and robotics.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-light dark:bg-dark py-8">
                <div className="container text-center">
                    <h1 className="text-5xl font-bold mb-4">Concepts</h1>
                    <p className="mb-4">Concepts I've made for other websites. ___.</p>
                    <Link href="/concepts">
                        <a className="text-lg hover:underline">Explore concepts <BiArrowToRight /></a>
                    </Link>
                </div>
            </section>

            <section className="bg-white dark:bg-midnight py-8">
                <h1 className="text-5xl font-bold text-center mb-8">Projects</h1>
                <div className="container mx-auto flex justify-center flex-wrap gap-6">
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
                </div>
                {/*
                <Link href="/all"><a className="text-2xl mx-auto">More <FiArrowRight /></a></Link>
                */}
            </section>

            <section className="bg-light dark:bg-dark py-8">
                <h1 className="text-5xl font-bold text-center mb-8">Gists</h1>
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
