import type { Metadata } from 'next';
import GeoGridContent from '@/app/geogrid/GeoGridContent';


export const metadata: Metadata = {
    title: 'GeoGrid Review',
    description: 'A simple review table for Teutuef\'s GeoGrid.'
}

export default function GeoGridReview() {
    return (
        <GeoGridContent />
    )
}
