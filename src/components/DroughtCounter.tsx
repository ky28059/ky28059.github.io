import React, {useState, useEffect} from 'react';
import moment from 'moment';
import desert from '../assets/desert.png';


const DroughtCounter = () => {
    const [time, setTime] = useState(moment());

    // Set interval on mount to update datetime every second
    useEffect(() => {
        const update = () => setTime(moment());
        const timerID = setInterval(
            () => update(),
            1000
        );

        // Clear interval on unmount
        return function cleanup() {
            clearInterval(timerID);
        }
    }, [])

    // Spaghetti function to render time since last commit
    const parseTime = () => {
        const parseSingular = (x: number) => String(x).length === 1 ? `0${x}` : x;

        const seconds = time.diff('2/6/2021', 'seconds') % 60;
        const minutes = time.diff('2/6/2021', 'minutes') % 60;
        const hours = time.diff('2/6/2021', 'hours') % 24;
        const days = time.diff('2/6/2021', 'days');

        return `${days}:${parseSingular(hours)}:${parseSingular(minutes)}:${parseSingular(seconds)}`;
    }

    return (
        <div className="drought">
            <img src={desert} alt="desert" />
            <h1>{parseTime()}</h1>
            <h2>Since Obi-Wan's last commit to WATT</h2>
        </div>
    )
}

export default DroughtCounter;