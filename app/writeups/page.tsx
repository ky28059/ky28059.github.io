import type { Metadata } from 'next';

// Components
import { SectionHeading } from '../../components/Section';
import CTF, { Writeup, WriteupData } from './CTF';


export const metadata: Metadata = {
    title: 'CTF Writeups',
    description: 'An incomplete list of challenge writeups for CTFs I participated in on team b01lers at Purdue.'
}

export default async function Writeups() {
    const categoryCounts: { [c: string]: number } = {};
    for (const w of ctfs.flatMap(c => c.writeups)) {
        if (!w.type) continue;
        if (!categoryCounts[w.type]) categoryCounts[w.type] = 0;
        categoryCounts[w.type]++;
    }

    return (
        <>
            <SectionHeading>CTF Writeups</SectionHeading>

            <div className="flex gap-8">
                <section className="flex-grow flex flex-col gap-4 pl-4">
                    {ctfs.map((c) => (
                        <CTF name={c.name} key={c.name}>
                            {c.writeups.map((w) => (
                                <Writeup {...w} key={w.name} />
                            ))}
                        </CTF>
                    ))}
                </section>

                <section className="px-6 py-4 rounded h-max sticky top-8 w-72 bg-black/5 dark:bg-white/5">
                    <h2 className="font-semibold mb-2 text-sm">Categories</h2>

                    {Object.entries(categoryCounts).sort(([a, ], [b, ]) => a.localeCompare(b)).map(([name, count]) => (
                        <div className="flex gap-2 items-center">
                            <p className="text-primary dark:text-primary-dark">{name}</p>
                            <span className="text-xs font-semibold text-grapefruit bg-grapefruit/30 rounded-full px-1.5 py-0.5">
                                {count}
                            </span>
                        </div>
                    ))}
                </section>
            </div>
        </>
    )
}

type CTFData = {
    name: string,
    writeups: WriteupData[]
}

const ctfs: CTFData[] = [
    {
        name: 'CyberSpace CTF 2024',
        writeups: [{
            type: 'misc',
            href: 'https://gist.github.com/ky28059/467d31ff2f536b79f517da4f85229be4',
            name: 'SKK?'
        }, {
            type: 'misc',
            href: 'https://gist.github.com/ky28059/c7e3e83bb501755bda31683f0d359578',
            name: 'Game with Rin'
        }, {
            type: 'web',
            href: 'https://gist.github.com/ky28059/5af97a38d168d540bda2e5b3ae1324bf',
            name: 'trendz(zz)?'
        }]
    },
    {
        name: 'LITCTF 2024',
        writeups: [{
            type: 'pwn',
            href: 'https://gist.github.com/ky28059/850fe47a2d02422cae230ff311db4b84',
            name: 'recurse'
        }]
    },
    {
        name: 'corCTF 2024',
        writeups: [{
            type: 'misc',
            href: 'https://gist.github.com/ky28059/2f279fff831a5be3d6b5fbb8a6d86057',
            name: 'msfrogofwar3'
        }]
    },
    {
        name: 'UIUCTF 2024',
        writeups: [{
            type: 'osint',
            href: 'https://gist.github.com/ky28059/d6b13cd067d6b9d9fbc695080f9f7f7e',
            name: 'Hip With the Youth'
        }, {
            type: 'osint',
            href: 'https://gist.github.com/ky28059/4e755cf1ba9a791899af3d4120c4a7d3',
            name: 'An Unlikely Partnership'
        }, {
            type: 'osint',
            href: 'https://gist.github.com/ky28059/11ade1fe6eaaf1a864f60291a6ca3764',
            name: 'The Weakest Link'
        }, {
            type: 'osint',
            href: 'https://gist.github.com/ky28059/f55af843f32868e72f3fcb0bc9b732a2',
            name: 'Night'
        }, {
            type: 'web',
            href: 'https://gist.github.com/ky28059/6f7ef0a073b142a9ed5d460a930a9d1c',
            name: 'Log Action'
        }]
    },
    {
        name: 'GPN CTF 2024',
        writeups: [{
            type: 'web',
            href: 'https://gist.github.com/ky28059/0c4ecb3e46bccbd295151d6d30c110d4',
            name: 'Letter to the editor'
        }]
    },
    {
        name: "San Diego CTF 2024",
        writeups: [{
            name: "impossible-golf",
            type: "misc",
            href: "https://gist.github.com/ky28059/dcd9fcad9f92264d79708255e6f15e70"
        },
        {
            name: "Chill Beats",
            type: "osint",
            href: "https://gist.github.com/ky28059/9b5dc250b9b0ddb51e05b9e690a82432"
        },
        {
            name: "calculator",
            type: "web",
            href: "https://gist.github.com/ky28059/e8fc98d5b0be999b1409cc80a9077c54"
        },
        {
            name: "Raccoon Run",
            type: "crypto",
            href: "https://gist.github.com/ky28059/e9d0957313af0d38811e6e845dab7a41"
        }]
    },
    {
        name: "UMass CTF 2024",
        writeups: [{
            name: "Krusty Katering",
            type: "misc",
            href: "https://gist.github.com/ky28059/fd0ed1fb606c13ba6d686bcf07e6809d"
        },
        {
            name: "100 degrees",
            type: "misc",
            href: "https://gist.github.com/ky28059/6c7d64b108118ddb29d4d919b6635f2f"
        },
        {
            name: "Stop the voices",
            type: "misc",
            href: "https://gist.github.com/ky28059/e1d26ae6652bc6f4c25535555034ca4b"
        }]
    },
    {
        name: "bi0sCTF 2024",
        writeups: [{
            name: "A Block and a Hard Place",
            type: "misc",
            href: "https://gist.github.com/ky28059/c193b08a07a433be4fac60426c47e92c"
        }]
    },
    {
        name: "LA CTF 2024",
        writeups: [{
            name: "gacha",
            type: "misc",
            href: "https://gist.github.com/ky28059/11bd9429d863a3f0e1e9f86579cfdc28"
        }, {
            name: "jsfudge",
            type: "misc",
            href: "https://gist.github.com/ky28059/e3c2664e7fab9a91d2fb20abebe9fc6f"
        }, {
            name: "my poor git",
            type: "misc",
            href: "https://gist.github.com/ky28059/75ac9eafe11fe7645efe6edc414971e8"
        }]
    },
    {
        name: "BITSCTF 2024",
        writeups: [{
            name: "Just Wierd Things",
            type: "web",
            href: "https://gist.github.com/ky28059/80491a6f0250146511a945a0f8bb49c2"
        }]
    },
    {
        name: "0xL4ugh CTF 2024",
        writeups: [{
            name: "MyVault",
            type: "apk",
            href: "https://gist.github.com/ky28059/cec9f7e8071b52e890c6a2469360be48"
        }, {
            name: "Cheater",
            type: "osint",
            href: "https://gist.github.com/ky28059/68631ca4de137e7fd855ab08b75531be"
        }]
    },
    {
        name: "DiceCTF Quals 2024",
        writeups: [{
            name: "zshfuck",
            type: "misc",
            href: "https://gist.github.com/ky28059/0510cb86a449925d38dc9a0c6a312b35"
        }]
    },
    {
        name: "TetCTF 2024",
        writeups: [{
            name: "Stress Release Service",
            type: "misc",
            href: "https://gist.github.com/ky28059/9822d07004862c228a90ca0da00166b6"
        }]
    },
    {
        name: "iCTF 2023",
        writeups: [{
            name: "escape_from_markov",
            href: "https://gist.github.com/ky28059/e63c6d26f19301f2024b6231677b4bbd"
        }, {
            name: "IslandParty",
            href: "https://gist.github.com/ky28059/e7fed465703f2943e482cd2d6618ceb4"
        }, {
            name: "CI Ninja",
            href: "https://gist.github.com/ky28059/86cd4a8f5da44c495fd8109a82c94626"
        }, {
            name: "Mystical Castle",
            href: "https://gist.github.com/ky28059/a6dae8a017d440c08ad7514c0312557d"
        }, {
            name: "CI Ninja 2",
            href: "https://gist.github.com/ky28059/968252b99245abcc823ca1a77e610ef5"
        }, {
            name: "Stop the model thief!",
            href: "https://gist.github.com/ky28059/2f74ca229358e1d7ef508cfa76379d35"
        }]
    },
    {
        name: "BuckeyeCTF 2023",
        writeups: [{
            name: "typescrip",
            type: "misc",
            href: "https://gist.github.com/ky28059/a851fdabc90d887a61af81c071f6f0ce"
        }]
    }
]
