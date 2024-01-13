'use client'

import {useEffect, useState} from 'react';
import {DateTime} from 'luxon';
import {useIsMounted} from '../../hooks/useIsMounted';

export default function DroughtCounter() {
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
        <h1 className="text-5xl md:text-8xl lg:text-9xl mb-2 md:mb-4 font-mono font-semibold">
            {mounted ? parseTime() : '000:00:00:00'}
        </h1>
    )
}
