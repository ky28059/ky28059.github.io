import {ReactNode, useEffect, useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Icons
import {BsChevronCompactDown, BsDiscord} from 'react-icons/bs';
import {FiArrowRight, FiLink2} from 'react-icons/fi';
import {BiSun} from 'react-icons/bi';
import {MdExpandLess, MdExpandMore} from 'react-icons/md';
import {GoMarkGithub} from 'react-icons/go';

// Utilities
import {langToColor} from '../../components/Project';


export default function Home() {
    return (
        <div className="dark:text-white bg-gray-100 dark:bg-gradient-to-r dark:from-black dark:to-gray-900 selection:bg-blue-500 selection:text-white">
            <Head>
                <title>Home | ky28059.github.io</title>
                <meta name="description" content="Personal portfolio website and technology testing chamber." />
            </Head>

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

function ArchivedHeader() {
    const [open, setOpen] = useState(true);

    const [scroll, setScroll] = useState(0);
    const toggleTheme = () => document.documentElement.classList.toggle('dark');

    useEffect(() => {
        setScroll(window.scrollY);
        document.onscroll = () => setScroll(window.scrollY);
    }, []);

    const ExpandIcon = open ? MdExpandLess : MdExpandMore;

    return (
        <header className={`flex sticky top-0 p-4 bg-white dark:bg-gray-800 text-black dark:text-white bg-opacity-90 ${scroll > 0 ? 'shadow-md' : 'hover:shadow-md'} backdrop-blur-sm z-50 h-20 transition-shadow duration-300 ease-in-out ${!open ? 'h-10' : ''}`}>
            <div className={`flex flex-grow items-center h-full ${!open ? 'hidden' : ''}`}>
                <a href="https://github.com/ky28059">
                    <img src="/pfp.png" alt="Profile" className="rounded-full" height={50} width={50}/>
                </a>
                <h1 className="text-3xl font-bold ml-4 mr-8">ky28059</h1>

                <span className="p-4">
                    <Link href="/"><a>Home</a></Link>
                </span>
                <span className="p-4">
                    <Link href="/concepts"><a>Concepts</a></Link>
                </span>
            </div>
            <div className="flex items-center text-xl gap-4">
                <BiSun className="cursor-pointer" onClick={toggleTheme}/>
                <ExpandIcon className="cursor-pointer" onClick={() => setOpen(x => !x)} />
            </div>
        </header>
    )
}

type ProjectProps = {
    name: string, children: ReactNode, img?: string /* StaticImageData */, langs?: string[],
    gh?: string, discord?: string, web?: string
};
function ArchivedProject(props: ProjectProps) {
    const {name, children: desc, img, langs, gh, discord, web} = props;

    return (
        <div className="flex flex-col p-4 gap-3 shadow-lg bg-white dark:bg-gray-800 rounded-md transform hover:scale-110 transition transition-transform duration-150 w-64">
            <span className="flex items-center space-x-3 mb-1.5">
                {img && (
                    <img
                        src={img}
                        className="rounded-full h-8 w-8 bg-gray-200/50 dark:bg-gray-900/50"
                        alt={`${name}-icon`}
                        width={40}
                        height={40}
                    />
                )}
                <h3 className="text-xl font-bold">{name}</h3>
            </span>
            {langs && (
                <span className="space-x-2 ml-1 flex">
                    {langs.map(lang => <ProjectTag lang={lang} key={lang} />)}
                </span>
            )}
            <p>{desc}</p>
            <span className="flex gap-2 mt-auto text-xl">
                {gh && (
                    <a href={gh} rel="noopener noreferrer" target="_blank">
                        <GoMarkGithub />
                    </a>
                )}
                {discord && (
                    <a href={discord} rel="noopener noreferrer" target="_blank">
                        <BsDiscord />
                    </a>
                )}
                {web && (
                    <a href={web} rel="noopener noreferrer" target="_blank">
                        <FiLink2 />
                    </a>
                )}
            </span>
        </div>
    );
}

function ProjectTag(props: {lang: string}) {
    const color = langToColor(props.lang);
    return (
        <div
            className="rounded-full w-3 h-3 ring-2 ring-black ring-opacity-75 dark:ring-opacity-50"
            style={{backgroundColor: color}}
        />
    )
}
