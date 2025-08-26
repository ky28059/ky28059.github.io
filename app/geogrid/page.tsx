import type { Metadata } from 'next';
import GeoGridContent from '@/app/geogrid/GeoGridContent';


export const metadata: Metadata = {
    title: 'GeoGrid Review',
    description: 'A simple review table for Teuteuf\'s GeoGrid.'
}

export default function GeoGridReview() {
    return (
        <main className="flex flex-col h-screen">
            <section className="container pt-12 pb-8 flex-none">
                <h1 className="text-3xl font-bold">GeoGrid data sheet</h1>
            </section>

            <GeoGridContent />
        </main>
    )
}
