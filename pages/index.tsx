import React from 'react';
import Head from 'next/head';

// Components
import Project from '../components/Project';

// Icons
import {BsChevronCompactDown} from 'react-icons/bs';
//import RBot from '../public/RBot.png';
const RBot = '/RBot.png';
//import WATT from '../public/watt-white.png';
const WATT = '/watt-white.png';
//import Geckobot from '../public/Geckobot.png';
const Geckobot = '/Geckobot.png';
import Test from '../public/pfp.png';


export default function Home() {
    return (
        <div className="home bg-gradient-to-r from-black to-gray-900">
            <Head>
                <title>Home | ky28059.github.io</title>
                <meta name="description" content="Personal portfolio website and testing chamber." />
            </Head>

            <section className="bg-gray-900 pt-14 pb-2 mb-10">
                <div className="about">
                    <div className="w-full mx-auto h-56 -z-10 bg-gradient-to-r from-green-400 to-blue-500 transform -skew-y-3 flex flex-row">
                        <div className="transform skew-y-3 m-auto bg-white rounded-2xl p-8 shadow-lg text-gray-900">
                            <h1>About</h1>
                            <p>I am a teenager that goes to Gunn High School.</p>
                        </div>
                    </div>
                    <BsChevronCompactDown className="mx-auto mt-10 text-4xl animate-bounce" />
                </div>
            </section>

            <section>
                <h1 className="text-center mb-4">Projects</h1>
                <div className="projects">
                    <Project
                        name="RBot"
                        desc="Discord mod bot using djs and sequelize."
                        img={RBot}
                        tags={['js']}
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
                    <Project
                        name="Word Generator"
                        desc="A web port of Roger Fan's markov chain random word generator."
                        tags={['ts', 'html', 'scss']}
                        web="https://ky28059.github.io/#/word-gen"
                    />
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
