import {useState, useEffect} from 'react';
import Head from 'next/head';
import {DateTime} from 'luxon';
import {useIsMounted} from '../util/useIsMounted';


export default function Drought() {
    const [time, setTime] = useState(DateTime.now());
    const lastCommitTimestamp = DateTime.fromISO('2021-02-06T21:11:19Z');

    const mounted = useIsMounted();

    useEffect(() => {
        const timerID = setInterval(() => setTime(DateTime.now()), 1000);
        return () => clearInterval(timerID);
    }, [])

    const parseTime = () => {
        const diff = time.diff(lastCommitTimestamp, ['days', 'hours', 'minutes', 'seconds']);
        return diff.toFormat('d:hh:mm:ss');
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <Head>
                <title>Drought | ky28059.github.io</title>
                <meta name="description" content="Countdown of days since Obi Wan's last commit to WATT." />
            </Head>

            <img
                src="/desert.png"
                alt="desert"
                className="fixed inset-0 w-full h-full object-cover object-center"
            />

            <div className="fixed inset-0 bg-black/20" />
            <main className="relative text-white text-center">
                <h1 className="text-5xl md:text-8xl lg:text-9xl mb-2 md:mb-4 font-mono font-semibold">
                    {mounted ? parseTime() : '000:00:00:00'}
                </h1>
                <h2 className="text-xl md:text-4xl lg:text-5xl font-medium">since Obi-Wan's last commit to WATT.</h2>
            </main>
        </div>
    )
}
