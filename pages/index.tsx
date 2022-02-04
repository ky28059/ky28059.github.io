import Head from 'next/head';
import Link from 'next/link';

// Components
import Header from '../components/Header';
import Project from '../components/Project';

// Icons
import {BsChevronCompactDown} from 'react-icons/bs';
import {FiArrowRight} from 'react-icons/fi';

// Images
const RBot = '/RBot.png';
const WATT = '/watt-white.png';
const Geckobot = '/Geckobot.png';


export default function Home() {
    return (
        <div className="bg-gray-100 dark:bg-gradient-to-r dark:from-black dark:to-gray-900">
            <Head>
                <title>Home | ky28059.github.io</title>
                <meta name="description" content="Personal portfolio website and testing chamber." />
            </Head>

            <Header />

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
                <h1 className="text-5xl font-bold text-center mb-4">Projects</h1>
                <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mx-4">
                    <Project
                        name="RBot"
                        desc="Discord mod bot using djs 13 and sequelize."
                        img={RBot}
                        tags={['ts']}
                        gh="https://github.com/ky28059/RBot"
                        discord="https://discord.com/oauth2/authorize?client_id=684587440777986090&scope=bot&permissions=8"
                    />
                    <Project
                        name="WATT"
                        desc="Gunn schedule app and UGWA successor."
                        img={WATT}
                        tags={['ts', 'js', 'html', 'scss']}
                        gh="https://github.com/GunnWATT/watt"
                        web="https://gunnwatt.web.app/"
                    />
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
                        desc="Discord.net bot with Drive API and quantum computing."
                        img={Geckobot}
                        tags={['c#', 'q#']}
                        gh="https://github.com/croissantderp/geckobot"
                        discord="https://discord.com/oauth2/authorize?client_id=766064505079726140&scope=bot&permissions=379968"
                    />
                    <Project
                        name="PortalBot"
                        desc="Typescript djs bot for real time cross server communication."
                        tags={['ts']}
                        gh="https://github.com/ky28059/PortalBot"
                        discord="https://discord.com/oauth2/authorize?client_id=827738852902043698&scope=bot&permissions=8"
                    />
                    {/*
                    <Project name="test" desc="yes" link="https://github.com/ky28059/RBot" img={Test}/>
                    <Project name="test" desc="yes" link="https://github.com/ky28059/RBot" img={Test}/>
                    <Project name="test" desc="yes" link="https://github.com/ky28059/RBot" img={Test}/>
                    <Project name="test" desc="yes" link="https://github.com/ky28059/RBot" img={Test}/>
                    <Project name="test" desc="yes" link="https://github.com/ky28059/RBot" img={Test}/>
                    <Project name="test" desc="yes" link="https://github.com/ky28059/RBot" img={Test}/>
                    */}
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
                <br/>
                <br/>
                <br/>
                <br/>
            </section>
        </div>
    )
}
