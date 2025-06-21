import type { Metadata } from 'next';
import { SectionHeading } from '@/components/Section';
import CorpusObfuscatorContent from './CorpusObfuscatorContent';


export const metadata: Metadata = {
    title: 'Corpus Obfuscator',
    description: 'Generator for C programs obfuscated from a given text corpus.'
}

export default function CorpusObfuscator() {
    return (
        <>
            <SectionHeading>Simple Corpus Obfuscator</SectionHeading>
            <CorpusObfuscatorContent />
        </>
    )
}
