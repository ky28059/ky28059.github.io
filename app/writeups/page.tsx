import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import {SectionHeading} from '../../components/Section';
import {PiFlagPennantFill} from 'react-icons/pi';


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
            </section>
        </>
    )
}

function CTF(props: {name: string, children: ReactNode}) {
    return (
        <div className="relative">
            <PiFlagPennantFill className="absolute -left-6 text-grapefruit mt-0.5" />
            <h3>{props.name}</h3>
            <ol className="flex flex-col list-disc list-outside pl-6">
                {props.children}
            </ol>
        </div>
    )
}

type ChallType = 'misc' | 'web' | 'crypto' | 'pwn' | 'rev' | 'osint' | 'apk'
function Writeup(props: {href: string, type?: ChallType, children: ReactNode}) {
    return (
        <li className="font-mono">
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                {props.children}
            </a>
            {props.type && (
                <span className="ml-1.5 select-none px-1.5 py-0.5 text-xs rounded-full bg-grapefruit/30 text-grapefruit font-semibold hover:no-underline">
                    {props.type}
                </span>
            )}
        </li>
    )
}
