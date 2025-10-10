import Section, { SectionHeading } from "@/components/Section";
import Highlight from '@/app/(landing)/Highlight';
import { InlineCode } from '@/components/InlineCode';


export default function Highlights() {
    return (
        <Section type="dark">
            {/* <SectionHeading>Highlights</SectionHeading> */}

            <Highlight
                name="Jumpseat"
                date="2024"
                tags={['nextjs', 'tailwindcss', 'prisma', 'aws-rds']}
                langs={['ts', 'css']}
                gh="https://github.com/ky28059/jumpseat-lite"
                content={jumpseatContent}
            >
                <p className="mb-4">
                    Jumpseat is a travel engine for college students that pairs flights with airport shuttles
                    to find the optimal travel itinerary to and from Purdue, UIUC, and more.
                </p>
                <p className="mb-4">
                    Originally a student startup, a lightweight fork of Jumpseat is now hosted and maintained by me at{' '}
                    <a href="https://jumpseat.kevin.fish/" target="_blank" rel="noopener noreferrer">jumpseat.kevin.fish</a>.
                </p>
                <p>
                    Jumpseat is built using TypeScript, Tailwind CSS, and Next.js, and stores user preferences
                    / breaks via Prisma + Postgres.
                </p>
            </Highlight>

            <Highlight
                flipped
                name="Photo host"
                date="2025"
                tags={['nextjs', 'tailwindcss', 'sharp', 'aws-s3']}
                langs={['ts', 'css']}
                gh="https://github.com/ky28059/image-utils"
                content={photosContent}
            >
                <p className="mb-4">
                    <InlineCode>image-utils</InlineCode> is a custom photo host built to address usability / cost
                    issues with Microsoft OneDrive and other photo sites.
                </p>
                <p className="mb-4">
                    Along with a Next.js frontend, the repository contains several scripts to manage image conversion
                    (<InlineCode>HEIC</InlineCode> {'->'} <InlineCode>WEBP</InlineCode> with minimal color loss),
                    optimization, and S3 uploading. The project supports grouping photos into albums, linking /
                    embedding images, and more.
                </p>
            </Highlight>

            <Highlight
                name="Scrape bot (Tom Scott)"
                date="2024-2025"
                tags={['discord.js', 'express', 'slack-bolt']}
                langs={['ts']}
                gh="https://github.com/Purdue-eCTF/scrape-bot"
                content={scrapeBotContent}
            >
                <p className="mb-4">
                    <InlineCode>scrape-bot</InlineCode>, affectionately called Tom Scott, is the central system
                    coordinating the attack/dev pipeline for the Purdue team @ MITRE eCTF 2025.
                </p>
                <p>Tom consists of a Discord / Slack bot that, during dev phase</p>
                <ul className="list-disc list-outside pl-6 text-sm mt-1">
                    <li>tracks and summarizes the eCTF scoreboard into daily reports,</li>
                    <li>integrates with the build CI to maintain the current build status and alert on build failures.</li>
                </ul>
                <p className="mt-2">and during attack phase</p>
                <ul className="list-disc list-outside pl-6 text-sm mt-1">
                    <li>listens on the Slack <InlineCode>#targets</InlineCode> channel to detect teams entering attack phase,</li>
                    <li>unzips and pushes new targets to the targets GitHub repository,</li>
                    <li>
                        distributes new targets to the build server / attack queueing system to run automated attacks
                        (incl. dispatching the special "pesky neighbor" attack via Slack userbot),
                    </li>
                    <li>logs attack script output in Discord,</li>
                    <li>and automatically submits any flags found to the CTFd backend.</li>
                </ul>
                <p className="mt-3">
                    See Tom Scott at the eCTF awards ceremony{' '}
                    <a href="https://www.youtube.com/watch?v=eRyhWwiq71M&t=4627s" target="_blank" rel="noopener noreferrer">here</a>!
                </p>
            </Highlight>
        </Section>
    )
}

const jumpseatContent = (
    <>
        <img
            src="/assets/projects/jumpseat.jpg"
            className="relative -ml-2 w-md shadow-lg rounded-lg -rotate-6"
        />
        <img
            src="/assets/projects/jumpseat2.jpg"
            className="relative ml-20 -mt-16 w-md shadow-lg rounded-lg rotate-3"
        />
    </>
)

const photosContent = (
    <>
        <img
            src="https://ky-photos-preview.s3.us-east-1.amazonaws.com/2025-05-20@23+Carlsbad,+UCSD,+La+Jolla/IMG_E5688-preview.webp"
            className="relative -ml-2 mt-12 w-56 shadow-xl rounded-md -rotate-12"
        />
        <img
            src="https://ky-photos-preview.s3.us-east-1.amazonaws.com/2025-04-10@14+Pwnme,+Paris/IMG_E5234-preview.webp"
            className="absolute ml-32 top-0 w-[16rem] shadow-xl rounded-lg rotate-3"
        />
        <img
            src="https://ky-photos-preview.s3.us-east-1.amazonaws.com/2025-07-09@12+Dice+Finals,+NYC/IMG_E6389-preview.webp"
            className="absolute ml-80 top-20 w-56 shadow-xl rounded-lg rotate-12"
        />
    </>
)

const scrapeBotContent = (
    <>
        <img
            src="/assets/projects/scrape-bot-2.jpg"
            className="rounded-lg shadow-xl"
        />
    </>
)
