import React from 'react';

// Components
import Project from './home/Project';

// Project Icons
import RBot from '../assets/RBot.png';
import WATT from '../assets/watt-white.png';
import Geckobot from '../assets/Geckobot.png';
import Test from '../assets/pfp.png';
import ProjectTag from "./home/ProjectTag";


const Home = () => {
    return (
        <div className="home">
            <h1>Home</h1>

            <div className="about">
                <h2>About</h2>
                <p>I am a teenager that goes to Gunn High School.</p>
            </div>

            <h2 className="center">Projects</h2>
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
        </div>
    )
}

export default Home;