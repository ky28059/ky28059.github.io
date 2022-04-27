import {useState, useEffect} from 'react';
import Head from 'next/head';
import {DateTime} from 'luxon';


export default function Drought() {
    const [time, setTime] = useState(DateTime.now());
    const lastCommitTimestamp = DateTime.fromISO('2021-02-06T21:11:19Z');

    useEffect(() => {
        const timerID = setInterval(() => setTime(DateTime.now()), 1000);
        return () => clearInterval(timerID);
    }, [])

    const parseTime = () => {
        const diff = time.diff(lastCommitTimestamp, ['days', 'hours', 'minutes', 'seconds']);
        return diff.toFormat('d:hh:mm:ss');
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
