import type { Metadata } from 'next';
import { SectionHeading } from '../../../components/Section';
import ObfuscationContent from './ObfuscationContent';


export const metadata: Metadata = {
    title: 'C Obfuscation',
    description: 'Generator for C programs obfuscated from the given corpus.'
}

export default function CodeforcesHacks() {
    return (
        <>
            <SectionHeading>Corpus Obfuscator</SectionHeading>

            <p className="mb-3">
                ...
            </p>

            <ObfuscationContent />
        </>
    )
}
