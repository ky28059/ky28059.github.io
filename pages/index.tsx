import {ReactNode} from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Components
import Section, {SectionHeader} from '../components/Section';
import Project, {ProjectTag} from '../components/Project';
import Gist from '../components/Gist';
import Projects from '../components/Projects';
import ConceptsCard from '../components/ConceptsCard';

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
                        <img src="pfp.png" alt="Profile picture" className="absolute -left-32 -top-10 h-24 w-24 rounded-full" />
                        <h1 className="font-bold text-7xl mb-4 underline decoration-grapefruit">kevin yu.</h1>
                        <p className="text-lg">
                            Teenager that goes to Gunn High School. Interested in art, web development, and robotics.
                        </p>
                    </div>
                </div>
            </header>

            <Section secondary>
                <div className="flex gap-8 justify-center">
                    <div className="hidden sm:flex flex-col gap-3 basis-60">
                        <ConceptsCard />
                        <ConceptsCard />
                        <ConceptsCard />
                    </div>
                    <div>
                        <SectionHeader className="mb-4">Concepts</SectionHeader>
                        <p className="mb-4">Design concepts I've made for other websites. ___.</p>
                        <Link href="/concepts">
                            <a className="text-lg font-medium hover:underline w-max mx-auto">
                                Explore concepts →
                            </a>
                        </Link>
                    </div>
                </div>
            </Section>

            <Projects />

            </Section>

            </Section>
        </div>
    )
}
