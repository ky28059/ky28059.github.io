import type { Metadata } from 'next';
import Link from 'next/link';

// Components
import PageHeading from '../../components/PageHeading';
import Section, { SectionHeading } from '../../components/Section';
import CodeBlock from '../../components/CodeBlock';
import ThemeToggle from '../../components/ThemeToggle';
import Projects from './Projects';
import MockPage from './MockPage';
import ConceptsCard from './ConceptsCard';
import GithubContributionChart from './GithubContributionChart';

// Icons
import { BsDiscord, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa6';
import { PiFlagPennantFill } from 'react-icons/pi';


export const metadata: Metadata = {
    title: 'Home',
    description: 'Personal portfolio website and technology testing chamber.'
}

export default function Home() {
    return (
        <div>
            {/* TODO: responsive design */}
            <header className="bg-white dark:bg-midnight">
                <div className="container relative pl-48 pt-24 pb-10 pr-4">
                    <ThemeToggle className="absolute top-8 right-8 text-xl" />

                    <div className="relative">
                        <img src="/ky28059/www/pfp.png" alt="Profile picture" className="absolute -left-32 -top-10 h-24 w-24 rounded-full" />
                        <PageHeading className="mb-5">kevin yu.</PageHeading>
                        <p className="mb-3 max-w-3xl text-primary dark:text-primary-dark">
                            Gunn High School graduate and first-year student studying Computer Science at Purdue University.
                            Interested in art, web development, and robotics.
                        </p>
                        <p className="mb-3.5 text-primary dark:text-primary-dark">
                            My resume can be found <a href="/ky28059/www/Resume.pdf">here</a>.
                        </p>
                        <div className="text-2xl flex gap-4">
                            <a href="https://github.com/ky28059" target="_blank" rel="noopener noreferrer" className="text-inherit">
                                <BsGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/kevin-yu-66198128b/" target="_blank" rel="noopener noreferrer" className="text-inherit">
                                <BsLinkedin />
                            </a>
                            <a href="mailto:kevinyu567+website@gmail.com" className="text-inherit">
                                <FaEnvelope />
                            </a>
                            {/*
                            <a href="..." target="_blank" rel="noopener noreferrer" className="text-inherit">
                                <BsDiscord />
                            </a>
                            */}
                        </div>
                    </div>
                </div>
            </header>

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

            <GithubContributionChart />

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
