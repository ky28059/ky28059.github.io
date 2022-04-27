import {useState, useEffect} from 'react';
import Head from 'next/head';
import moment from 'moment';


export default function Drought() {
    const [time, setTime] = useState(moment());

    // Set interval on mount to update datetime every second
    useEffect(() => {
        const timerID = setInterval(() => setTime(moment()), 1000);
        return function cleanup() {
            clearInterval(timerID);
        }
    }, [])

    // TODO: clean this up
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
        <div className="fixed top-0 w-full h-full flex">
            <Head>
                <title>Drought | ky28059.github.io</title>
                <meta name="description" content="Countdown of days since Obi Wan's last commit to WATT." />
            </Head>

            <img
                src="/desert.png"
                alt="desert"
                className="fixed top-0 left-0 w-full h-full object-cover object-center -z-10"
            />

            <div className="fixed inset-0 bg-black/20" />
            <main className="m-auto relative text-white text-center">
                <h1 className="text-9xl mb-4 font-mono font-semibold">{parseTime()}</h1>
                <h2 className="text-5xl font-medium">since Obi-Wan's last commit to WATT.</h2>
            </main>
        </div>
    )
}
