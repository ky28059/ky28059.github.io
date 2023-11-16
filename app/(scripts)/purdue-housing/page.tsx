import {Metadata} from 'next';
import {SectionHeading} from '../../../components/Section';
import PurdueHousingContent from './PurdueHousingContent';


export const metadata: Metadata = {
    title: 'Purdue Housing',
    description: 'Generator for a script to automatically reserve a Purdue dorm.'
}

export default function PurdueHousing() {
    return (
        <>
            <SectionHeading>Purdue Housing</SectionHeading>

            <p className="mb-3">
                This is a script to automatically search for open housing spots on the Purdue housing portal.
                To use this script, input the target <code>contestId</code>, <code>problem</code>, <code>testCase</code>,
                and <code>count</code>, then paste the generated javascript into console on codeforces.com.
            </p>
            <p className="font-medium">Notes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1.5">
                <li>
                    <code>Lower room rate</code> should be the minimum rate of the room (default: $1,000).
                </li>
                <li><code>Upper room rate</code> should be the maximum rate of the room (default: $20,000).</li>
                <li>
                    <code>Delay</code> should be the delay, in milliseconds, the script waits before attempting to look
                    for rooms again. Please keep this number reasonable; too many requests will crash the server and{' '}
                    <em>no one</em> will get rooms.
                </li>
                <li>
                    Check the corresponding boxes for the buildings and room types you want to filter for. The script
                    will indiscriminately attempt to add the first room it sees that matches the selected criteria to
                    your cart, so make sure to only filter for rooms you would be OK with living in.
                </li>
            </ul>
            <p className="mb-6">
                Using this script is a bit more complicated than just pasting it into the console in the housing portal;
                see the <a href="#using">Using</a> section for more details on how it works.
            </p>

            <PurdueHousingContent />

            <div>
                {/* TODO: table */}
            </div>
        </>
    )
}
