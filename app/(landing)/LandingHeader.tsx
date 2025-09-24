import ThemeToggle from '../../components/ThemeToggle';
import GithubContributionChart from './GithubContributionChart';

// Icons
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa6';
import { SiNpm } from 'react-icons/si';


export default function LandingHeader() {
    // TODO: responsive design
    return (
        <header className="bg-white dark:bg-midnight h-screen flex flex-col">
            <div className="container relative pl-56 pt-24 pb-10 pr-4 grow flex justify-between items-center">
                <ThemeToggle className="absolute top-8 right-8 text-xl" />

                <div className="relative pt-6">
                    <img
                        src="/pfp.png"
                        alt="Profile picture"
                        className="absolute -left-40 -top-10 size-32 rounded-full"
                    />
                    <h1 className="font-bold text-8xl underline decoration-grapefruit mb-5">
                        kevin yu.
                    </h1>

                    <p className="mb-3 max-w-3xl text-primary">
                        Gunn High School graduate and second-year student studying Computer Science @ Purdue
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

                <div className="hidden lg:block">
                    <p className="text-tertiary text-sm">
                        You may know me from:
                    </p>
                    <ul className="text-secondary mb-4">
                        <li>President @ b01lers (2025-p.)</li>
                        <li>Webmaster @ b01lers (2024-25)</li>
                    </ul>
                    <ul className="text-secondary">
                        <li>Controls, webmaster @ GRT (2021-23)</li>
                        <li>VP @ United Computations (2021-23)</li>
                        <li>Lead Org. @ GunnHacks (2020-23)</li>
                        <li>WATT (2020-23)</li>
                    </ul>

                    <p className="text-tertiary text-sm mt-6">
                        Other affiliations:
                    </p>
                    <ul className="text-secondary">
                        <li>Contractor @ CAIS (2025)</li>
                        <li>UTA @ Purdue CS (2025)</li>
                        <li>TA @ MIT BWSI (2024)</li>
                        <li>Intern @ Stanford GLAM (2023)</li>
                    </ul>
                </div>
            </div>

            <GithubContributionChart />
        </header>
    )
}
