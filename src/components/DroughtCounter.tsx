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
        const lastCommitTimestamp = '2021-02-06T21:11:19Z';
        const parseSingular = (x: number) => String(x).length === 1 ? `0${x}` : x;

        const seconds = time.diff(lastCommitTimestamp, 'seconds') % 60;
        const minutes = time.diff(lastCommitTimestamp, 'minutes') % 60;
        const hours = time.diff(lastCommitTimestamp, 'hours') % 24;
        const days = time.diff(lastCommitTimestamp, 'days');

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