'use client'

import { useState } from 'react';

// Components
import AutoResizingTextArea from '../../../components/AutoResizingTextArea';
import CopyCodeBlock from '../../../components/CopyCodeBlock';
import LabelledInput from '../LabelledInput';


export default function CfHacksContent() {
    const [contest, setContest] = useState(1701);
    const [problem, setProblem] = useState('A');
    const [testCase, setTestCase] = useState('');
    const [count, setCount] = useState(1000);

    return (
        <>
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
            <AutoResizingTextArea
                placeholder="Test case"
                value={testCase}
                onChange={(e) => setTestCase(e.target.value)}
                className="rounded px-3 py-1 dark:bg-[#2b2b2b] mb-3 w-full border border-secondary/40 placeholder:text-secondary"
            />

            <CopyCodeBlock>
                {script(contest, problem, testCase, count)}
            </CopyCodeBlock>
        </>
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
