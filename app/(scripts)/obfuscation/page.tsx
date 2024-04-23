import type { Metadata } from 'next';
import { SectionHeading } from '../../../components/Section';
import ObfuscationContent from './ObfuscationContent';


export const metadata: Metadata = {
    title: 'Corpus Obfuscation',
    description: 'Generator for C programs obfuscated from a given text corpus.'
}

export default function CodeforcesHacks() {
    return (
        <>
            <SectionHeading>Corpus Obfuscator</SectionHeading>
            <ObfuscationContent />
        </>
    )
}
