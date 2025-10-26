import type { WriteupData } from './Writeup';


type CTFData = {
    name: string,
    writeups: WriteupData[]
}

export const ctfs: CTFData[] = [
    {
        name: 'm0leCon Teaser CTf 2025',
        writeups: [{
            href: 'https://gist.github.com/ky28059/3e798b904548e506707607d0012b2c11',
            name: 'Precipice',
            type: 'misc',
            tags: ['highlight', 'scripting'],
            src: '/assets/writeups/precipice.jpg'
        }]
    },
    {
        name: 'UIUCTF 2025',
        writeups: [{
            href: 'https://gist.github.com/ky28059/8096bd32165fc11285468e3ee1a3997c',
            name: 'Upload, Upload, and Away!',
            type: 'web',
            tags: ['highlight', 'typescript'],
            src: '/assets/writeups/uploads_and_away.svg'
        }]
    },
    {
        name: 'SDCTF 2025',
        writeups: [{
            href: 'https://gist.github.com/ky28059/5ffffe2d75240def2e2d77c7e8243229',
            name: 'triglot',
            type: 'misc',
            tags: ['highlight', 'polyglot'],
            src: '/assets/writeups/triglot.webp'
        }]
    },
    {
        name: 'Hack the Madness CTF Round 2 (Purdue vs. KSU)',
        writeups: [{
            href: 'https://gist.github.com/ky28059/55b783ecf750b20dfd3d58cf58530ecd',
            name: 'broken production',
            type: 'web',
            tags: ['lfi'],
            src: '/assets/writeups/htb-logo.jpg'
        }]
    },
    {
        name: 'PwnMe CTF Quals 2025',
        writeups: [{
            href: 'https://gist.github.com/ky28059/0d9af500fb0b9923022eaad055fc7b7c',
            name: 'Hack the bot 1',
            type: 'web',
            tags: ['xss'],
            src: '/assets/writeups/hackthebot1.jpg'
        }]
    }, /*
    {
        name: 'm0leCon Beginner CTF 2024',
        writeups: [{
            href: 'https://gist.github.com/ky28059/fdf7379fc3c90ee601f38bff211ab8eb',
            name: 'PIETcture',
            type: 'misc',
            tags: ['esolang'],
            src: '/assets/writeups/pietcture.png'
        }]
    }, */
    {
        name: 'LakeCTF \'24-\'25 Quals',
        writeups: [{
            href: 'https://gist.github.com/ky28059/b99b68a576fef8f91fcb950aa5c394bb',
            name: 'VerySusOrganization',
            type: 'misc',
            src: '/assets/writeups/verysusorganization2.jpg',
            tags: ['github', 'npm']
        }]
    },
    {
        name: '1337UP LIVE CTF 2024',
        writeups: [{
            href: 'https://gist.github.com/ky28059/e2d24c379eb5a10b44adfc4427030d28',
            name: 'Trackdown',
            type: 'osint',
            src: '/assets/writeups/trackdown.jpg'
        }, {
            href: 'https://gist.github.com/ky28059/2ccccf62b9b38a941154026e5dbc6f5b',
            name: 'Trackdown 2',
            type: 'osint',
            src: '/assets/writeups/trackdown2.jpg'
        }, /* {
            href: 'https://gist.github.com/ky28059/91df12b57366ef5ab356fb09239eb4d8',
            name: 'Pizza Paradise',
            type: 'web',
            src: '/assets/writeups/pizza-paradise.jpg'
        }, */ {
            href: 'https://gist.github.com/ky28059/1eef81c26836b44b96856b2c564067ff',
            name: 'Private Github Repository',
            type: 'osint',
            src: '/assets/writeups/private-git-repo.jpg',
            tags: ['github']
        }]
    },
    {
        name: 'DEADFACE CTF 2024',
        writeups: [{
            href: 'https://gist.github.com/ky28059/7420e657c833bbe586c56a77aabf223d',
            name: 'Target List 1',
            type: 'web',
            src: '/assets/writeups/targetlist.jpg'
        }]
    },
    {
        name: 'BuckeyeCTF 2024',
        writeups: [{
            href: 'https://gist.github.com/ky28059/b5f47ad77ea136d07cfaf15980fedf4c',
            name: 'dojo',
            type: 'web',
            tags: ['highlight'],
            src: 'https://gist.github.com/user-attachments/assets/1f28d421-8fe1-45a5-9271-4fad8c6897bb'
        }]
    },
    {
        name: 'PatriotCTF 2024',
        writeups: [{
            href: 'https://gist.github.com/ky28059/f18c4f60f000b3f94c5aef427ce8b9aa',
            name: 'Really Only Echo',
            type: 'misc',
            src: 'https://gist.github.com/user-attachments/assets/a08452a5-fcd9-4849-af40-8979f678f55e'
        }, {
            href: 'https://gist.github.com/ky28059/d539294051afa549eb303b832c7a5826',
            name: 'Blob',
            type: 'web',
            src: '/assets/writeups/blob.jpg',
            tags: ['ssti']
        }, {
            href: 'https://gist.github.com/ky28059/747618991296df76fa586bb2cf24d7ec',
            name: 'Let\'s Play [steg]Hide & Seek',
            type: 'misc',
            src: 'https://gist.github.com/user-attachments/assets/1cd54f3b-de05-4e5c-969a-4e1b2c1ffe66',
            tags: ['imgproc']
        }]
    },
    {
        name: 'jailCTF 2024',
        writeups: [{
            href: 'https://gist.github.com/ky28059/e9170fdb1df865a9811ef434c097e781',
            name: 'jellyjail',
            // src: 'https://gist.github.com/user-attachments/assets/39b2cd25-132a-43bf-84a4-a7b29b78a38a'
            // src: '/assets/writeups/jellyjail.jpg'
            tags: ['esolang'],
            src: 'https://gist.github.com/user-attachments/assets/c76f30bc-7abd-46fc-ae5b-bb5b697e2515'
        }]
    },
    {
        name: 'CSAW\'24 Quals',
        writeups: [{
            type: 'forensics',
            href: 'https://gist.github.com/ky28059/6c2437fd2e120bad3af82c8fcd36e5a5',
            name: 'I like it RAW',
            src: 'https://gist.github.com/user-attachments/assets/b33fa93a-d7bd-49b5-bbe7-98e4b7ecb1ab'
        }]
    },
    {
        name: 'CyberSpace CTF 2024',
        writeups: [{
            type: 'misc',
            href: 'https://gist.github.com/ky28059/467d31ff2f536b79f517da4f85229be4',
            name: 'SKK?',
            src: 'https://gist.github.com/user-attachments/assets/c2bc1f12-ce89-4805-bd88-a3902e539636',
            tags: ['imgproc']
        }, {
            type: 'misc',
            href: 'https://gist.github.com/ky28059/c7e3e83bb501755bda31683f0d359578',
            name: 'Game with Rin',
            src: '/assets/writeups/game-with-rin.jpg',
            tags: ['scripting']
        }, {
            type: 'web',
            href: 'https://gist.github.com/ky28059/5af97a38d168d540bda2e5b3ae1324bf',
            name: 'trendz(zz)?',
            tags: ['htmx', 'xss'],
            src: '/assets/writeups/trendz.jpg'
        }]
    },
    {
        name: 'LITCTF 2024',
        writeups: [{
            type: 'pwn',
            href: 'https://gist.github.com/ky28059/850fe47a2d02422cae230ff311db4b84',
            name: 'recurse',
            src: 'https://hackaday.com/wp-content/uploads/2017/05/gnu-contract-featured.jpg',
            tags: ['highlight']
        }]
    },
    {
        name: 'corCTF 2024',
        writeups: [{
            type: 'misc',
            href: 'https://gist.github.com/ky28059/2f279fff831a5be3d6b5fbb8a6d86057',
            name: 'msfrogofwar3',
            src: '/assets/writeups/msfrogofwar3.jpg',
            tags: ['highlight', 'stockfish', 'ssti']
        }]
    },
    {
        name: 'UIUCTF 2024',
        writeups: [{
            type: 'osint',
            href: 'https://gist.github.com/ky28059/d6b13cd067d6b9d9fbc695080f9f7f7e',
            name: 'Hip With the Youth',
            src: 'https://gist.github.com/assets/60120929/28971e5d-31ec-4265-a0f0-8d05e3ca4a53'
        }, {
            type: 'osint',
            href: 'https://gist.github.com/ky28059/4e755cf1ba9a791899af3d4120c4a7d3',
            name: 'An Unlikely Partnership',
            src: 'https://gist.github.com/assets/60120929/a2e67ffd-5ced-4710-8a2b-bd42413ecedc'
        }, {
            type: 'osint',
            href: 'https://gist.github.com/ky28059/11ade1fe6eaaf1a864f60291a6ca3764',
            name: 'The Weakest Link',
            src: '/assets/writeups/weakest-link.jpg'
        }, {
            type: 'osint',
            href: 'https://gist.github.com/ky28059/f55af843f32868e72f3fcb0bc9b732a2',
            name: 'Night',
            src: 'https://gist.github.com/assets/60120929/f2e780a0-8aa8-4e8f-bc5f-920d2123116a'
        }, {
            type: 'web',
            href: 'https://gist.github.com/ky28059/6f7ef0a073b142a9ed5d460a930a9d1c',
            name: 'Log Action',
            src: '/assets/writeups/log-action.jpg',
            tags: ['next']
        }]
    },
    {
        name: 'GPN CTF 2024',
        writeups: [{
            type: 'web',
            href: 'https://gist.github.com/ky28059/0c4ecb3e46bccbd295151d6d30c110d4',
            name: 'Letter to the editor',
            src: '/assets/writeups/letter-to-the-editor-2.png'
            // src: 'https://gist.github.com/assets/60120929/baae2b59-e268-4aaa-af1e-fcfb460a0537'
        }]
    },
    {
        name: 'TJCTF 2024',
        writeups: [{
            type: 'misc',
            href: 'https://gist.github.com/ky28059/c5cdfd92faf2b3938497dfcf6bb219dd',
            name: 'golf-hard',
            tags: ['highlight', 'regex']
        }]
    },
    {
        name: "SDCTF 2024",
        writeups: [/* {
            name: "impossible-golf",
            type: "misc",
            href: "https://gist.github.com/ky28059/dcd9fcad9f92264d79708255e6f15e70"
        }, */ {
            name: "Chill Beats",
            type: "osint",
            href: "https://gist.github.com/ky28059/9b5dc250b9b0ddb51e05b9e690a82432",
            src: "https://gist.github.com/assets/60120929/27ef132d-9b5b-440c-8afc-d5d63869a800"
        }, {
            name: "calculator",
            type: "web",
            href: "https://gist.github.com/ky28059/e8fc98d5b0be999b1409cc80a9077c54",
            src: "https://gist.github.com/assets/60120929/95c7d910-8738-45a5-a338-a74ec3ad3eab"
        }, {
            name: "Raccoon Run",
            type: "crypto",
            href: "https://gist.github.com/ky28059/e9d0957313af0d38811e6e845dab7a41",
            src: '/assets/writeups/raccoon-run.gif',
            tags: ['randcrack', 'scripting']
        }]
    },
    {
        name: "UMass CTF 2024",
        writeups: [{
            name: "Krusty Katering",
            type: "misc",
            href: "https://gist.github.com/ky28059/fd0ed1fb606c13ba6d686bcf07e6809d",
            src: "https://gist.github.com/assets/60120929/58a78bb3-8459-4bb1-a0cd-68f1e4491451",
            tags: ['scripting']
        }, {
            name: "100 degrees",
            type: "misc",
            href: "https://gist.github.com/ky28059/6c7d64b108118ddb29d4d919b6635f2f",
            src: '/assets/writeups/100-degrees.jpg'
        }, {
            name: "Stop the voices",
            type: "misc",
            href: "https://gist.github.com/ky28059/e1d26ae6652bc6f4c25535555034ca4b",
            src: 'https://gist.github.com/assets/60120929/38a486f2-e626-4f74-8059-e9efcdac027a',
            tags: ['imgproc']
        }]
    },
    {
        name: "bi0sCTF 2024",
        writeups: [{
            name: "A Block and a Hard Place",
            type: "misc",
            href: "https://gist.github.com/ky28059/c193b08a07a433be4fac60426c47e92c",
            src: 'https://gist.github.com/assets/60120929/e9d7885e-0836-4e5e-958b-653ec5ae846d',
            tags: ['scripting']
        }]
    },
    {
        name: "LA CTF 2024",
        writeups: [{
            name: "gacha",
            type: "misc",
            href: "https://gist.github.com/ky28059/11bd9429d863a3f0e1e9f86579cfdc28",
            src: 'https://gist.github.com/assets/60120929/7b8dd2a2-0d32-4f4d-86a1-4bf6d90b0844',
            tags: ['imgproc']
        }, {
            name: "jsfudge",
            type: "misc",
            href: "https://gist.github.com/ky28059/e3c2664e7fab9a91d2fb20abebe9fc6f",
            src: 'https://jsfuck.com/preview.png',
            tags: ['charset']
        }, {
            name: "my poor git",
            type: "misc",
            href: "https://gist.github.com/ky28059/75ac9eafe11fe7645efe6edc414971e8",
            src: 'https://avatars.githubusercontent.com/u/18133?s=200&v=4'
        }]
    },
    {
        name: "BITSCTF 2024",
        writeups: [{
            name: "Just Wierd Things",
            type: "web",
            href: "https://gist.github.com/ky28059/80491a6f0250146511a945a0f8bb49c2",
            tags: ['ssti']
        }]
    },
    {
        name: "0xL4ugh CTF 2024",
        writeups: [{
            name: "MyVault",
            type: "apk",
            href: "https://gist.github.com/ky28059/cec9f7e8071b52e890c6a2469360be48",
            src: '/assets/writeups/myvault.jpg'
        }, {
            name: "Cheater",
            type: "osint",
            href: "https://gist.github.com/ky28059/68631ca4de137e7fd855ab08b75531be",
            src: 'https://gist.github.com/assets/60120929/a9c4a805-d97a-49d5-90db-c41ab3c3d68c'
        }]
    },
    {
        name: "DiceCTF Quals 2024",
        writeups: [{
            name: "zshfuck",
            type: "misc",
            href: "https://gist.github.com/ky28059/0510cb86a449925d38dc9a0c6a312b35",
            src: 'https://gist.github.com/assets/60120929/db124457-8412-460a-bc46-85ba7ccd0f4c',
            tags: ['charset']
        }]
    },
    {
        name: "TetCTF 2024",
        writeups: [{
            name: "Stress Release Service",
            type: "misc",
            href: "https://gist.github.com/ky28059/9822d07004862c228a90ca0da00166b6",
            src: '/assets/writeups/stress-release-service.jpg',
            tags: ['charset']
        }]
    },
    {
        name: "iCTF 2023",
        writeups: [{
            name: "escape_from_markov",
            href: "https://gist.github.com/ky28059/e63c6d26f19301f2024b6231677b4bbd",
            src: 'https://gist.github.com/assets/60120929/8cf8fab8-aaee-4d26-a65e-1eac9beb6834'
        }, {
            name: "IslandParty",
            href: "https://gist.github.com/ky28059/e7fed465703f2943e482cd2d6618ceb4",
            src: 'https://gist.github.com/assets/60120929/498dea08-696d-4f31-ad8c-387738aec7f4',
            tags: ['imgproc']
        }, {
            name: "CI Ninja",
            href: "https://gist.github.com/ky28059/86cd4a8f5da44c495fd8109a82c94626",
            src: 'https://gist.github.com/assets/60120929/3bfa6bd3-1e80-45f5-8a63-0dffb448d422',
            tags: ['prompt engineering']
        }, {
            name: "Mystical Castle",
            href: "https://gist.github.com/ky28059/a6dae8a017d440c08ad7514c0312557d",
            src: 'https://gist.github.com/assets/60120929/5bbb480a-7174-45fe-b0c9-261e521f8e5a',
            tags: ['pddl']
        }, {
            name: "CI Ninja 2",
            href: "https://gist.github.com/ky28059/968252b99245abcc823ca1a77e610ef5",
            src: 'https://gist.github.com/assets/60120929/d48ccd62-af7a-4b1a-a92b-1b4f0552f165',
            tags: ['prompt engineering']
        }, {
            name: "Stop the model thief!",
            href: "https://gist.github.com/ky28059/2f74ca229358e1d7ef508cfa76379d35",
            // src: '/assets/writeups/model-thief.jpg'
        }]
    },
    {
        name: "BuckeyeCTF 2023",
        writeups: [{
            name: "typescrip",
            type: "misc",
            href: "https://gist.github.com/ky28059/a851fdabc90d887a61af81c071f6f0ce",
            src: 'https://user-images.githubusercontent.com/60120929/271787201-15c1a765-7c83-4eb0-b2de-f48a37f15e57.png',
            tags: ['typescript']
        }]
    }
]
