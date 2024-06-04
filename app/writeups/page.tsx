import type { Metadata } from 'next';

// Components
import { SectionHeading } from '../../components/Section';
import CTF, { Writeup } from './CTF';


export const metadata: Metadata = {
    title: 'CTF Writeups',
    description: 'An incomplete list of challenge writeups for CTFs I participated in on team b01lers at Purdue.'
}

export default async function All() {
    return (
        <>
            <SectionHeading>CTF Writeups</SectionHeading>

            <section className="flex flex-col gap-4 pl-4">
                <CTF name="BuckeyeCTF 2023">
                    <Writeup type="misc" href="https://gist.github.com/ky28059/a851fdabc90d887a61af81c071f6f0ce">
                        typescrip
                    </Writeup>
                </CTF>
                <CTF name="iCTF 2023">
                    <Writeup href="https://gist.github.com/ky28059/e63c6d26f19301f2024b6231677b4bbd">
                        escape_from_markov
                    </Writeup>
                    <Writeup href="https://gist.github.com/ky28059/e7fed465703f2943e482cd2d6618ceb4">
                        IslandParty
                    </Writeup>
                    <Writeup href="https://gist.github.com/ky28059/86cd4a8f5da44c495fd8109a82c94626">
                        CI Ninja
                    </Writeup>
                    <Writeup href="https://gist.github.com/ky28059/a6dae8a017d440c08ad7514c0312557d">
                        Mystical Castle
                    </Writeup>
                    <Writeup href="https://gist.github.com/ky28059/968252b99245abcc823ca1a77e610ef5">
                        CI Ninja 2
                    </Writeup>
                    <Writeup href="https://gist.github.com/ky28059/2f74ca229358e1d7ef508cfa76379d35">
                        Stop the model thief!
                    </Writeup>
                </CTF>
                <CTF name="TetCTF 2024">
                    <Writeup type="misc" href="https://gist.github.com/ky28059/9822d07004862c228a90ca0da00166b6">
                        Stress Release Service
                    </Writeup>
                </CTF>
                <CTF name="DiceCTF Quals 2024">
                    <Writeup type="misc" href="https://gist.github.com/ky28059/0510cb86a449925d38dc9a0c6a312b35">
                        zshfuck
                    </Writeup>
                </CTF>
                <CTF name="0xL4ugh CTF 2024">
                    <Writeup type="apk" href="https://gist.github.com/ky28059/cec9f7e8071b52e890c6a2469360be48">
                        MyVault
                    </Writeup>
                    <Writeup type="osint" href="https://gist.github.com/ky28059/68631ca4de137e7fd855ab08b75531be">
                        Cheater
                    </Writeup>
                </CTF>
                <CTF name="BITSCTF 2024">
                    <Writeup type="web" href="https://gist.github.com/ky28059/80491a6f0250146511a945a0f8bb49c2">
                        Just Wierd Things
                    </Writeup>
                </CTF>
                <CTF name="LA CTF 2024">
                    <Writeup type="misc" href="https://gist.github.com/ky28059/11bd9429d863a3f0e1e9f86579cfdc28">
                        gacha
                    </Writeup>
                    <Writeup type="misc" href="https://gist.github.com/ky28059/e3c2664e7fab9a91d2fb20abebe9fc6f">
                        jsfudge
                    </Writeup>
                    <Writeup type="misc" href="https://gist.github.com/ky28059/75ac9eafe11fe7645efe6edc414971e8">
                        my poor git
                    </Writeup>
                </CTF>
                <CTF name="bi0sCTF 2024">
                    <Writeup type="misc" href="https://gist.github.com/ky28059/c193b08a07a433be4fac60426c47e92c">
                        A Block and a Hard Place
                    </Writeup>
                </CTF>
                <CTF name="UMass CTF 2024">
                    <Writeup type="misc" href="https://gist.github.com/ky28059/fd0ed1fb606c13ba6d686bcf07e6809d">
                        Krusty Katering
                    </Writeup>
                    <Writeup type="misc" href="https://gist.github.com/ky28059/6c7d64b108118ddb29d4d919b6635f2f">
                        100 degrees
                    </Writeup>
                    <Writeup type="misc" href="https://gist.github.com/ky28059/e1d26ae6652bc6f4c25535555034ca4b">
                        Stop the voices
                    </Writeup>
                </CTF>
                <CTF name="San Diego CTF 2024">
                    <Writeup type="misc" href="https://gist.github.com/ky28059/dcd9fcad9f92264d79708255e6f15e70">
                        impossible-golf
                    </Writeup>
                    <Writeup type="osint" href="https://gist.github.com/ky28059/9b5dc250b9b0ddb51e05b9e690a82432">
                        Chill Beats
                    </Writeup>
                    <Writeup type="web" href="https://gist.github.com/ky28059/e8fc98d5b0be999b1409cc80a9077c54">
                        calculator
                    </Writeup>
                    <Writeup type="crypto" href="https://gist.github.com/ky28059/e9d0957313af0d38811e6e845dab7a41">
                        Raccoon Run
                    </Writeup>
                </CTF>
                <CTF name="GPN CTF 2024">
                    <Writeup type="web" href="https://gist.github.com/ky28059/0c4ecb3e46bccbd295151d6d30c110d4">
                        Letter to the editor
                    </Writeup>
                </CTF>
            </section>
        </>
    )
}
