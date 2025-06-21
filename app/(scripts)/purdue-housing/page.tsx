import type { ReactNode } from 'react';
import type { Metadata } from 'next';

// Components
import { SectionHeading } from '@/components/Section';
import PurdueHousingContent from './PurdueHousingContent';
import CopyCodeBlock from '@/components/CopyCodeBlock';
import LinkHeading from '@/components/LinkHeading';


export const metadata: Metadata = {
    title: 'Purdue Housing',
    description: 'Generator for a script to automatically reserve a Purdue dorm.'
}

export default function PurdueHousing() {
    return (
        <>
            <SectionHeading>Purdue Housing 2023</SectionHeading>

            <p className="mb-3">
                This is a script to automatically search for open housing spots on the Purdue housing portal.
            </p>
            <p className="font-medium">Notes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1.5">
                <li>
                    <code>Lower room rate</code> should be the minimum rate of the room (default: $1,000).
                </li>
                <li>
                    <code>Upper room rate</code> should be the maximum rate of the room (default: $20,000).
                </li>
                <li>
                    <code>Delay</code> should be the delay, in milliseconds, the script waits before attempting to look
                    for rooms again. Please keep this number reasonable; too many requests will crash the server
                    and <em>no one</em> will get rooms.
                </li>
                <li>
                    Check the corresponding boxes for the buildings and room types you want to filter for. The script
                    will indiscriminately attempt to add the first room it sees that matches the selected criteria to
                    your cart, so make sure to only filter for rooms you would be OK with living in.
                </li>
            </ul>
            <p className="mb-6">
                Using this script is a bit more complicated than just pasting it into the console in the housing portal;
                see the <a href="#using-this-script">Using this script</a> section for more details on how it works.
            </p>

            <PurdueHousingContent />

            <LinkHeading className="text-2xl font-bold mb-3" id="using-this-script">
                Using this script
            </LinkHeading>
            <p className="mb-3">
                Because of how the housing portal's request hashes and dynamic routes work,
                this script only works on the <strong>List Rooms</strong> page (ie. the page that looks like the image
                on the right):
            </p>

            <div className="flex gap-2 mb-1">
                <img
                    src="/assets/scripts/initial-selection.png"
                    alt="List rooms page"
                    className="rounded min-w-0 object-cover object-center"
                />
                <img
                    src="/assets/scripts/list-rooms.png"
                    alt="List rooms page"
                    className="rounded min-w-0 object-cover object-center"
                />
            </div>
            <p className="text-secondary text-sm italic mb-3 text-center">
                <strong className="font-semibold">Left:</strong> Initial Selection page with no rooms available;{' '}
                <strong className="font-semibold">Right:</strong> List Rooms page
            </p>

            <p className="mb-4">
                If you have navigated to the <strong>Initial Selection</strong> page (left) but cannot go further due to
                there being no available rooms, run the following code in the console to jump to the next page:
            </p>
            <CopyCodeBlock language="js" className="mb-4">
                {nextPageScript}
            </CopyCodeBlock>

            <p className="mb-4">
                Once you're at the list rooms page, copying the original script into your console should start
                the room search process.
            </p>

            <p className="mb-8">
                The script sends a lot of logs in the console, mostly for debugging purposes. You'll know the script
                has found a room when it starts opening a bunch of tabs (an imperfect solution, but one that works
                given the time constraints and limited opportunities to test it). These tabs will be the bed assignment
                pages for the room the script has just added to your cart; wait for one to load, fill it out as normal,
                and pray that the request goes through. Remember to hit confirm as normal on the proceeding page as
                well.
            </p>

            <LinkHeading className="text-2xl font-bold mb-3" id="other-notes">
                Other things to note
            </LinkHeading>
            <p className="mb-4">
                During execution, the script makes a request to the filter rooms endpoint (the same one the list rooms
                webpage uses) every <code>delay</code> milliseconds. If, for whatever reason, you want to stop sending
                new requests, you can clear the interval with
            </p>
            <CopyCodeBlock language="js" className="mb-4">
                clearInterval(id)
            </CopyCodeBlock>

            <p className="mb-4">
                Note that at peak times, response times from the API will greatly exceed the rate at which the
                script makes new fetches to it (the worst I've seen were response times of almost 3 minutes). Clearing
                the interval <strong>does not prevent fetches that are still pending from resolving, only the creation
                of new ones.</strong> The list of pending requests can easily range in the thousands during peak times;
                to clear all requests immediately, reload the page or close the tab.
            </p>

            <p className="mb-4">
                If, during execution, you want to add or remove buildings or room types from your filter,
                simply mutate the <code>roomTypeIds</code> and <code>buildingIds</code> arrays directly:
            </p>
            <CopyCodeBlock language="js" className="mb-4">
                buildingIds.push(1) // Add Cary to the building id filter
            </CopyCodeBlock>
            <CopyCodeBlock language="js" className="mb-4">
                roomTypeIds.splice(i, 1) // Remove one id from the room type filter, where `i` is the index of the element to remove
            </CopyCodeBlock>

            <p className="mb-4">
                The full list of IDs corresponding to buildings and rooms can be referenced here:
            </p>

            <div className="flex flex-wrap gap-6">
                <table>
                    <tbody>
                    <tr>
                        <IdTableHeaderCell>Building name</IdTableHeaderCell>
                        <IdTableHeaderCell>Building ID</IdTableHeaderCell>
                    </tr>
                    <tr>
                        <IdTableCell>Cary Quadrangle</IdTableCell>
                        <IdTableCell>1</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Earhart</IdTableCell>
                        <IdTableCell>2</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>First Street Towers</IdTableCell>
                        <IdTableCell>3</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Frieda Parker</IdTableCell>
                        <IdTableCell>34</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Harrison</IdTableCell>
                        <IdTableCell>4</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Hawkins</IdTableCell>
                        <IdTableCell>5</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Hillenbrand</IdTableCell>
                        <IdTableCell>6</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Honors</IdTableCell>
                        <IdTableCell>17</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>McCutcheon</IdTableCell>
                        <IdTableCell>8</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Meredith</IdTableCell>
                        <IdTableCell>9</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Meredith South</IdTableCell>
                        <IdTableCell>33</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Owen</IdTableCell>
                        <IdTableCell>10</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Shreve</IdTableCell>
                        <IdTableCell>12</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Tarkington</IdTableCell>
                        <IdTableCell>13</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Wiley</IdTableCell>
                        <IdTableCell>14</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Windsor</IdTableCell>
                        <IdTableCell>15</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Winifred Parker</IdTableCell>
                        <IdTableCell>16</IdTableCell>
                    </tr>
                    </tbody>
                </table>

                <table className="h-max">
                    <tbody>
                    <tr>
                        <IdTableHeaderCell>Room type</IdTableHeaderCell>
                        <IdTableHeaderCell>Room type ID</IdTableHeaderCell>
                    </tr>
                    <tr>
                        <IdTableCell>Apartment</IdTableCell>
                        <IdTableCell>166</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Double</IdTableCell>
                        <IdTableCell>165</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Quad</IdTableCell>
                        <IdTableCell>198</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Single</IdTableCell>
                        <IdTableCell>169</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Suite</IdTableCell>
                        <IdTableCell>167</IdTableCell>
                    </tr>
                    <tr>
                        <IdTableCell>Triple</IdTableCell>
                        <IdTableCell>168</IdTableCell>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

function IdTableCell(props: { children: ReactNode }) {
    return (
        <td className="px-4 py-2 text-sm text-primary border border-tertiary">
            {props.children}
        </td>
    )
}

function IdTableHeaderCell(props: { children: ReactNode }) {
    return (
        <th className="text-sm text-left font-medium px-4 py-2 border border-tertiary bg-gray-100 dark:bg-dark">
            {props.children}
        </th>
    )
}

const nextPageScript = `const rawUrl = await (await fetch(window.location.href, {
    method: 'POST',
    body: JSON.stringify({PageWidgetData: []})
})).text()

window.location = rawUrl.slice(1, -1).replaceAll('\\\\u0026', '&');`
