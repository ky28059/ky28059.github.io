import {Metadata} from 'next';
import Link from 'next/link';

// Components
import PageHeading from '../../components/PageHeading';
import Section, {SectionHeading} from '../../components/Section';
import CodeBlock from '../../components/CodeBlock';
import ThemeToggle from '../../components/ThemeToggle';
import Projects from './Projects';
import MockPage from './MockPage';
import ConceptsCard from './ConceptsCard';

// Icons
import {BiArrowToRight} from 'react-icons/bi';
import {GoMarkGithub} from 'react-icons/go';
import {BsEnvelope, BsDiscord} from 'react-icons/bs';


export const metadata: Metadata = {
    title: 'Home',
    description: 'Personal portfolio website and technology testing chamber.'
}

export default function Home() {
    return (
        <div>
            {/* TODO: responsive design */}
            <header className="bg-white dark:bg-midnight">
                <div className="container relative pl-44 pt-24 pb-12 pr-4">
                    <ThemeToggle className="absolute top-8 right-8 cursor-pointer text-xl" />
                    <div className="relative">
                        <img src="/pfp.png" alt="Profile picture" className="absolute -left-32 -top-10 h-24 w-24 rounded-full" />
                        <PageHeading className="mb-5">kevin yu.</PageHeading>
                        <p className="text-lg mb-3.5">
                            Teenager that goes to Gunn High School. Interested in art, web development, and robotics.
                        </p>
                        <div className="text-2xl flex gap-4">
                            <a href="https://github.com/ky28059" target="_blank" rel="noopener noreferrer" className="text-inherit">
                                <GoMarkGithub />
                            </a>
                            <a href="mailto:kevinyu567+website@gmail.com" className="text-inherit">
                                <BsEnvelope />
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
                        The structure and function of this website was largely inspired by Sean's website,{' '}
                        <a href="https://sheeptester.github.io/" target="_blank" rel="noopener noreferrer">sheeptester.github.io</a>.
                        View the source code for this website on GitHub, or a directory of all pages <Link href="/all">here</Link>.
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
                    <SectionHeading>Concepts</SectionHeading>
                    <p className="mb-4">Design concepts I've made for other websites. ___.</p>
                    <Link href="/app/page.tsx" className="text-lg font-medium text-inherit w-max mx-auto">
                        Explore concepts →
                    </Link>
                </div>
            </Section>

            <Section className="flex flex-wrap-reverse lg:flex-nowrap gap-12 justify-center">
                <CodeBlock
                    sources={[
                        'https://raw.githubusercontent.com/ky28059/competitive-programming-club/master/src/USACO2020/ABCs.java',
                        'https://raw.githubusercontent.com/ky28059/competitive-programming-club/master/src/ProCo2021/War.kt',
                        'https://raw.githubusercontent.com/ky28059/competitive-programming-club/master/src/HPI/MusicTraining.kt'
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
                            <GoMarkGithub />
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    )
}
