import type { Metadata } from 'next';

// Components
import MessagesByDayHeatmap from '@/app/egrass/MessagesByDayHeatmap';
import MessagesByHourHeatmap from '@/app/egrass/MessagesByHourHeatmap';


export const metadata: Metadata = {
    title: 'egrass 2025 wrapped?',
    description: '(not really)'
}

export default function EgrassWrapped() {
    return (
        <div className="container pt-24 pb-20">
            <h1 className="text-8xl font-bold mb-10 pr-28">
                egrass 2025 wrapped?
                <span className="text-primary font-normal text-5xl"> *(preview)</span>
            </h1>
            <p className="text-sm text-secondary mb-8">
                Data last fetched on <span className="bg-tertiary text-xs text-primary px-1 py-0.5 rounded">2025-12-24</span>.
            </p>

            <p className="mb-4 text-pretty">
                Here's some analytics about server message frequencies in egrass (repurposed from{' '}
                <span className="font-jetbrains">b01lers</span> :)). If you want to add more visualizations, submit a PR!
            </p>
            <MessagesByDayHeatmap />
            <MessagesByHourHeatmap />
        </div>
    )
}
