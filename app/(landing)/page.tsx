import type { Metadata } from 'next';
import Link from 'next/link';

// Components
import LandingHeader from './LandingHeader';
import Section, { SectionHeading } from '../../components/Section';
import CodeBlock from '../../components/CodeBlock';
import Projects from './Projects';
import MockPage from './MockPage';

// Icons
import { BsGithub } from 'react-icons/bs';
import { PiFlagPennantFill } from 'react-icons/pi';


export const metadata: Metadata = {
    title: 'Home',
    description: 'Personal portfolio website and technology testing chamber.'
}

export default function Home() {
    return (
        <div>
            <LandingHeader />

            <Section secondary className="flex gap-12 justify-center">
                <MockPage />
                <div className="max-w-prose">
                    <SectionHeading>About this website</SectionHeading>
                    <p className="mb-4">
                        This website was originally created to experiment with (at the time) new web technologies to me
                        like Next.js and TailwindCSS. Since then, it has become a personal portfolio site and host for
                        various miscellaneous web tinkering.
                    </p>
                    <p className="mb-4">
                        The structure and function of this website was largely inspired by{' '}
                        <a href="https://sheeptester.github.io/" target="_blank" rel="noopener noreferrer">sheeptester.github.io</a>.
                        View the source code for this website on GitHub, or a directory of all pages <Link href="/all">here</Link>.
                    </p>
                    <div className="flex gap-2">
                        <a className="text-2xl text-inherit hover:no-underline" href="https://github.com/ky28059/ky28059.github.io" target="_blank" rel="noopener noreferrer">
                            <BsGithub />
                        </a>
                    </div>
                </div>
            </Section>

            <Projects />

            <Section secondary className="flex gap-6 justify-center">
                <PiFlagPennantFill className="text-grapefruit text-5xl" />
                <div>
                    <SectionHeading>CTFs</SectionHeading>
                    <p className="mb-0.5">
                        I participate in Capture the Flag (CTF) competitions as part of Purdue's CTF team{' '}
                        <a href="https://ctftime.org/team/11464" target="_blank" rel="noopener noreferrer" className="font-mono">b01lers</a>!
                    </p>
                    <p className="mb-4">
                        View an incomplete collection of challenge writeups here:
                    </p>
                    <Link href="/writeups" className="font-medium text-inherit w-max mx-auto">
                        CTF writeups →
                    </Link>
                </div>
            </Section>

            <Section className="flex flex-wrap-reverse lg:flex-nowrap gap-12 justify-center">
                <CodeBlock
                    sources={[
                        'https://raw.githubusercontent.com/ky28059/competitive-programming-club/master/src/USACO2020/ABCs.java',
                        'https://raw.githubusercontent.com/ky28059/competitive-programming-club/master/src/ProCo2021/War.kt',
                        'https://raw.githubusercontent.com/ky28059/competitive-programming-club/master/src/HPI/MusicTraining.kt',
                        'https://raw.githubusercontent.com/ky28059/competitive-programming-club/master/src/CompetitiveProgrammingClub/EraseTheEnd.hs',
                        'https://raw.githubusercontent.com/ky28059/competitive-programming-club/master/src/CompetitiveProgrammingClub/GivenSomeQueries.hs'
                    ]}
                />
                <div className="max-w-prose">
                    <SectionHeading>Competitive programming</SectionHeading>
                    <p className="mb-4">
                        My brief foray into competitive programming can be found on GitHub under <a href="https://github.com/ky28059/competitive-programming-club" target="_blank" rel="noopener noreferrer"><code>competitive-programming-club</code></a>,
                        after the club at Gunn that inspired me to try CP.
                    </p>
                    <p className="mb-4">
                        My Codeforces profile can be found <a href="https://codeforces.com/profile/ky28059" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
                    <div className="flex gap-2">
                        <a className="text-2xl text-inherit hover:no-underline" href="https://github.com/ky28059/competitive-programming-club" target="_blank" rel="noopener noreferrer">
                            <BsGithub />
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    )
}
