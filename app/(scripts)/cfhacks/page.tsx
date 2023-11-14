import {Metadata} from 'next';
import {SectionHeading} from '../../../components/Section';
import CfHacksContent from './CfHacksContent';


export const metadata: Metadata = {
    title: 'Codeforces Hacks',
    description: 'Generator for a script to hack all AC submissions in a Codeforces contest.'
}

// TODO: not with this page specifically, but really consider making a `secondary` color in the theme to standardize
// that across pages.
export default function CodeforcesHacks() {
    return (
        <>
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

            <CfHacksContent />
        </>
    )
}
