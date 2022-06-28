import Head from 'next/head';
import Link from 'next/link';

// Components
import Section, {SectionHeader} from '../components/Section';
import Projects from '../components/Projects';
import MockPage from '../components/MockPage';
import ConceptsCard from '../components/ConceptsCard';
import CodeBlock from '../components/CodeBlock';

// Icons
import {BiArrowToRight, BiSun} from 'react-icons/bi';
import {GoMarkGithub} from 'react-icons/go';


export default function Home() {
    const toggleTheme = () => document.documentElement.classList.toggle('dark');

    return (
        <div>
            <Head>
                <title>Home | ky28059.github.io</title>
                <meta name="description" content="Personal portfolio website and technology testing chamber." />
            </Head>

            {/* TODO: responsive design */}
            <header className="bg-white dark:bg-midnight">
                <div className="container relative pl-44 pt-24 pb-12 pr-4">
                    <BiSun className="absolute top-8 right-8 cursor-pointer text-xl" onClick={toggleTheme}/>
                    <div className="relative">
                        <img src="/pfp.png" alt="Profile picture" className="absolute -left-32 -top-10 h-24 w-24 rounded-full" />
                        <h1 className="font-bold text-7xl mb-4 underline decoration-grapefruit">kevin yu.</h1>
                        <p className="text-lg">
                            Teenager that goes to Gunn High School. Interested in art, web development, and robotics.
                        </p>
                    </div>
                </div>
            </header>

            <Section secondary className="flex gap-12 justify-center">
                <MockPage />
                <div className="max-w-prose">
                    <SectionHeader>About this website</SectionHeader>
                    <p className="mb-4">
                        This website was originally created to experiment with (at the time) new web technologies to me
                        like Next.js and TailwindCSS. Since then, it has become a personal portfolio site and host for
                        various miscellaneous web tinkering.
                    </p>
                    <p className="mb-4">
                        The structure and function of this website was largely inspired by Sean's website,{' '}
                        <a href="https://sheeptester.github.io/" target="_blank" rel="noopener noreferrer">sheeptester.github.io</a>.
                        View the source code for this website on GitHub, or a directory of all pages <Link href="/all"><a>here</a></Link>.
                    </p>
                    <div className="flex gap-2">
                        <a className="text-2xl text-inherit hover:no-underline" href="https://github.com/ky28059/ky28059.github.io" target="_blank" rel="noopener noreferrer">
                            <GoMarkGithub />
                        </a>
                    </div>
                </div>
            </Section>

            <Projects />

            <Section secondary className="flex gap-12 justify-center">
                <div className="hidden sm:flex flex-col gap-3 basis-60">
                    <ConceptsCard />
                    <ConceptsCard />
                    <ConceptsCard />
                </div>
                <div>
                    <SectionHeader>Concepts</SectionHeader>
                    <p className="mb-4">Design concepts I've made for other websites. ___.</p>
                    <Link href="/concepts">
                        <a className="text-lg font-medium text-inherit w-max mx-auto">
                            Explore concepts →
                        </a>
                    </Link>
                </div>
            </Section>

            <Section className="flex gap-12 justify-center">
                <CodeBlock
                    sources={[
                        'https://raw.githubusercontent.com/ky28059/competitive-programming-club/master/src/USACO2020/ABCs.java',
                        'https://raw.githubusercontent.com/ky28059/competitive-programming-club/master/src/ProCo2021/War.kt',
                        'https://raw.githubusercontent.com/ky28059/competitive-programming-club/master/src/HPI/MusicTraining.kt'
                    ]}
                />
                <div>
                    <SectionHeader>Competitive programming</SectionHeader>
                    <p className="mb-4">
                        My brief foray into competitive programming can be found on GitHub under <code>competitive-programming-club</code>,
                        after the club at Gunn that inspired me to try CP.
                    </p>
                    <p className="mb-4">
                        My Codeforces profile can be found <a href="https://codeforces.com/profile/ky28059" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
                    <div className="flex gap-2">
                        <a className="text-2xl text-inherit hover:no-underline" href="https://github.com/ky28059/competitive-programming-club" target="_blank" rel="noopener noreferrer">
                            <GoMarkGithub />
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    )
}
