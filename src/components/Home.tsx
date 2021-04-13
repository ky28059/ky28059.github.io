import React from 'react';

// Components
import Project from './layout/Project';

// Project Icons
import RBot from '../assets/RBot.png';
import WATT from '../assets/watt-white.png';
import Geckobot from '../assets/Geckobot.png';
import Test from '../assets/pfp.png';


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
                    link="https://github.com/ky28059/RBot"
                    img={RBot}
                />
                <Project
                    name="WATT"
                    desc="Gunn schedule app and UGWA successor."
                    link="https://github.com/GunnWATT/watt"
                    img={WATT}
                />
                <Project
                    name="Word Generator"
                    desc="A web port of Roger Fan's markov chain random word generator."
                    link="https://github.com/ky28059/RBot"
                />
                <Project
                    name="Geckobot"
                    desc="Discord.net bot with Drive API and quantum computing."
                    link="https://github.com/croissantderp/geckobot"
                    img={Geckobot}
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