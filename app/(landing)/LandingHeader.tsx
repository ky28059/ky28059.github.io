import type { ReactNode } from 'react';

// Components
import ThemeToggle from '@/components/ThemeToggle';
import GithubContributionChart from './GithubContributionChart';

// Icons
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa6';
import { SiNpm } from 'react-icons/si';


export default function LandingHeader() {
    // TODO: responsive design
    return (
        <header className="bg-white dark:bg-midnight h-screen flex flex-col">
            <div className="container relative pl-36 sm:pl-56 pt-24 pb-10 pr-4 grow flex justify-between items-center">
                <ThemeToggle className="absolute top-8 right-8 text-xl" />

                <div className="relative pt-6">
                    <img
                        src="/pfp.png"
                        alt="Profile picture"
                        className="absolute -left-32 sm:-left-40 -top-10 size-28 sm:size-32 rounded-full"
                    />
                    <h1 className="font-bold text-7xl sm:text-8xl underline decoration-grapefruit mb-5">
                        kevin yu.
                    </h1>

                    <p className="mb-3 max-w-3xl text-primary">
                        Gunn High School graduate and third-year student studying Computer Science @ Purdue
                        University. Interested in art, photography, web development, and robotics.
                    </p>
                    <p className="mb-3.5 text-primary">
                        My resume can be found <a href="/Resume.pdf">here</a>.
                    </p>
                    <div className="text-2xl flex gap-4">
                        <a href="https://github.com/ky28059" target="_blank" rel="noopener noreferrer" className="text-inherit">
                            <BsGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/~kevin-yu/" target="_blank" rel="noopener noreferrer" className="text-inherit">
                            <BsLinkedin />
                        </a>
                        <a href="mailto:kevinyu567+website@gmail.com" className="text-inherit">
                            <FaEnvelope />
                        </a>
                        <a href="https://www.npmjs.com/~ky28059" target="_blank" rel="noopener noreferrer" className="text-inherit">
                            <SiNpm />
                        </a>
                    </div>
                </div>

                <div className="hidden lg:block text-pretty ml-6 flex-none">
                    <p className="text-tertiary text-sm">
                        You may know me from:
                    </p>
                    <ul className="text-secondary mb-4">
                        <li>President @ b01lers <AffiliationDate>2025-p.</AffiliationDate></li>
                        <li>Webmaster @ b01lers <AffiliationDate>2024-25</AffiliationDate></li>
                    </ul>
                    <ul className="text-secondary">
                        <li>Controls, webmaster @ GRT <AffiliationDate>2021-23</AffiliationDate></li>
                        <li>VP @ United Computations <AffiliationDate>2021-23</AffiliationDate></li>
                        <li>Lead Org. @ GunnHacks <AffiliationDate>2020-23</AffiliationDate></li>
                        <li>WATT <AffiliationDate>2020-23</AffiliationDate></li>
                    </ul>

                    <p className="text-tertiary text-sm mt-6">
                        Other affiliations:
                    </p>
                    <ul className="text-secondary">
                        <li>Contractor @ CAIS <AffiliationDate>2025</AffiliationDate></li>
                        <li>UTA @ Purdue CS <AffiliationDate>2025</AffiliationDate></li>
                        <li>Dev @ Jumpseat <AffiliationDate>2024</AffiliationDate></li>
                        <li>TA @ MIT BWSI <AffiliationDate>2024</AffiliationDate></li>
                        <li>Intern @ Stanford GLAM <AffiliationDate>2023</AffiliationDate></li>
                    </ul>
                </div>
            </div>

            <GithubContributionChart />
        </header>
    )
}

function AffiliationDate(props: { children: ReactNode }) {
    return (
        <span className="text-xs rounded-sm bg-white/10 px-1 py-0.5 text-primary">
            {props.children}
        </span>
    )
}
