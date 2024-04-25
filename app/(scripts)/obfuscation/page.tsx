import type { Metadata } from 'next';
import { SectionHeading } from '../../../components/Section';
import CorpusObfuscatorContent from './CorpusObfuscatorContent';


export const metadata: Metadata = {
    title: 'Corpus Obfuscator',
    description: 'Generator for C programs obfuscated from a given text corpus.'
}

export default function CodeforcesHacks() {
    return (
        <>
            <SectionHeading>Corpus Obfuscator</SectionHeading>
            <CorpusObfuscatorContent />
        </>
    )
}
