import { Metadata } from 'next';
import { SectionHeading } from '@/components/Section';
import ConvertorInputs from './ConvertorInputs';


export const metadata: Metadata = {
    title: 'Convertors',
    description: 'Text convertors for commonly used patterns.'
}

export default function Convertors() {
    return (
        <main className="container py-24">
            <SectionHeading>Convertors</SectionHeading>

            <p className="mb-6">
                Type your text into the input box on the left, and copy the desired output from the corresponding output
                box on the right.
            </p>

            <ConvertorInputs />
        </main>
    )
}
