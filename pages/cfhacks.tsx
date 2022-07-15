import {useRef, useState} from 'react';
import Head from 'next/head';
import {SectionHeading} from '../components/Section';
import {SyntaxHighlighter} from '../components/CodeBlock';


// TODO: not with this page specifically, but really consider making a `secondary` color in the theme to standardize
// that across pages.
export default function CodeforcesHacks() {
    const [contest, setContest] = useState(1701);
    const [problem, setProblem] = useState('A');
    const [testCase, setTestCase] = useState('');
    const [count, setCount] = useState(1000);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    return (
        <div>
            <Head>
                <title>Codeforces Hacks | ky28059.github.io</title>
                <meta name="description" content="Generator for a script to hack all AC submissions in a Codeforces contest." />
            </Head>

            <main className="container py-24">
                <SectionHeading>Hack everyone!</SectionHeading>

                <p className="mb-3">
                    This is a script for automatically hacking AC submissions to a given problem in a given contest.
                    To use this script, input the target <code>contestId</code>, <code>problem</code>, <code>testCase</code>,
                    and <code>count</code>, then paste the generated javascript into console on codeforces.com.
                </p>
                <p className="font-medium">Notes:</p>
                <ul className="list-disc pl-6 mb-6 max-w-5xl">
                    <li>
                        <code>Contest</code> should be the ID of the contest (eg.{' '}
                        <code>https://codeforces.com/contest/1701</code> has an ID of 1701).
                    </li>
                    <li><code>Problem</code> should be the index (letter) of the problem (eg. A, B, C, etc.).</li>
                    <li>
                        <code>Count</code> should be the number of submissions you want to parse. Note that this corresponds
                        to the total number of submissions <em>before</em> filtering for AC or problem.
                    </li>
                    <li><code>Test case</code> should be the test case you want to submit as a hack.</li>
                </ul>

                <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-6 md:mb-2.5">
                    <LabelledInput
                        label="Contest"
                        value={contest}
                        setValue={(value) => !isNaN(Number(value)) && setContest(Number(value))}
                    />
                    <LabelledInput
                        label="Problem"
                        value={problem}
                        setValue={setProblem}
                    />
                    <LabelledInput
                        label="Count"
                        value={count}
                        setValue={(value) => !isNaN(Number(value)) && setCount(Number(value))}
                    />
                </div>
                <textarea
                    ref={textAreaRef}
                    placeholder="Test case"
                    value={testCase}
                    onChange={(e) => {
                        setTestCase(e.target.value);

                        // <textarea> auto-resizing
                        // https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
                        const textArea = textAreaRef.current;
                        if (!textArea) return;
                        textArea.style.height = 'auto';
                        textArea.style.height = textArea.scrollHeight + 8 + 'px';
                    }}
                    className="rounded px-3 py-1 dark:bg-[#2b2b2b] mb-3 w-full border border-gray-400/50 dark:border-gray-100/10 placeholder:text-gray-400 placeholder:dark:text-gray-100/40"
                />

                <p className="text-sm mb-1 text-gray-400 dark:text-gray-100/40">
                    Generated:{' '}
                    {/* TODO: animate this with a popup or something */}
                    <button onClick={() => navigator.clipboard.writeText(script(contest, problem, testCase, count))} className="hover:underline">
                        (copy)
                    </button>
                </p>
                <div className="rounded-lg overflow-hidden text-xs">
                    <SyntaxHighlighter language="javascript">
                        {script(contest, problem, testCase, count)}
                    </SyntaxHighlighter>
                </div>
            </main>
        </div>
    )
}

type LabelledInputProps = {
    value: string | number, setValue: (value: string) => void,
    label: string
};
function LabelledInput(props: LabelledInputProps) {
    const {value, setValue, label} = props;
    return (
        <div className="flex flex-col gap-1 flex-grow">
            <label className="text-xs text-gray-400 dark:text-gray-100/40">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="rounded px-3 py-1 dark:bg-[#2b2b2b] border border-gray-400/50 dark:border-gray-100/10"
            />
        </div>
    )
}

const script = (contestId: number, problem: string, testCase: string, count: number) => `const contestId = ${contestId};
const problem = '${problem.replaceAll(/['\\]/g, '\\$&')}';
const testCase = \`${testCase.replaceAll(/[`\\$]/g, '\\$&')}\`;
const count = ${count};

;(async () => {
    const submissions = (await (await fetch(\`https://codeforces.com/api/contest.status?contestId=\${contestId}&from=1&count=\${count}\`)).json()).result
        .filter((submission) => submission.verdict === 'OK' && submission.problem.index === problem);

    for (const submission of submissions) {
        const raw = await (await fetch(\`https://codeforces.com/contest/1701/challenge/\${submission.id}\`)).text();
        const [, csrf, body] = raw.match(/<form class="challenge-form".+?action="\\/data\\/challenge\\?csrf_token=(.+?)".*?>([^]+)<\\/form>/);

        const formData = new FormData();

        // Add all hidden fields
        [...body.matchAll(/<input type="hidden".+?name="(\\w+)".+?value="(\\w+)"\\/>/g)]
            .forEach(([, name, value]) => formData.append(name, value));

        formData.append('testcase', testCase);

        await fetch(\`https://codeforces.com/data/challenge?csrf_token=\${csrf}\`, {
            body: formData,
            method: 'POST'
        });
    }
})();`
