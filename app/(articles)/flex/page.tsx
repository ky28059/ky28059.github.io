import type { ReactNode } from 'react';
import type { Metadata } from 'next';

// Components
import CopyCodeBlock from '../../../components/CopyCodeBlock';
import { InlineCode } from '../../../components/InlineCode';
import LinkHeading from '../../../components/LinkHeading';
import { BsGithub } from 'react-icons/bs';


export const metadata: Metadata = {
    title: 'Flexbox',
    description: 'Quick tutorial for flexbox, CSS\'s greatest invention since z-index.'
}

export default function Flex() {
    return (
        <>
            <div className="bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 fixed inset-0 -z-10" />

            <TextSection>
                <h1 className="text-5xl font-bold mb-4">Flex(box)</h1>
                <CopyCodeBlock language="css">
                    {'.container {\n    display: flex;\n}'}
                </CopyCodeBlock>
                <p className="my-4">
                    Flexbox, or the "flexible box" layout in CSS, is the greatest (CSS) invention
                    since <InlineCode>z-index</InlineCode>. A flex container is easy to specify, and is useful in a
                    huge range of CSS applications.
                </p>
                <p className="mb-4">
                    As always, while the examples on this page are touched-up a bit for visuals, you can always open
                    inspect element and poke around or view this page's source code on GitHub.
                </p>
                <div className="flex gap-2">
                    <a className="text-2xl text-inherit hover:no-underline" href="https://github.com/ky28059/ky28059.github.io/blob/main/app/flex/page.tsx" target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                </div>
            </TextSection>
            <section className="my-12 flex justify-center">
                <FlexDemoContainer className="flex" label="display: flex">
                    <div className="w-24 sm:w-48 h-24 bg-blue-400/50 flex items-center justify-center">1</div>
                    <div className="w-24 sm:w-48 h-24 bg-blue-400/35 flex items-center justify-center">2</div>
                    <div className="w-24 sm:w-48 h-24 bg-blue-400/20 flex items-center justify-center">3</div>
                </FlexDemoContainer>
            </section>

            <TextSection>
                <LinkHeading className="text-3xl font-bold mb-4" id="intro">
                    The basics
                </LinkHeading>
                <p className="mb-4">
                    Conceptually, a flex container aligns its children along a certain axis (horizontal, by default,
                    or vertical). This is controlled by the <InlineCode>flex-direction</InlineCode> property.
                </p>
                <CopyCodeBlock language="css">
                    {'.container {\n    flex-direction: column;\n}'}
                </CopyCodeBlock>
                <p className="mt-4">
                    Flex direction can be set to <InlineCode>row</InlineCode>, to set the axis to horizontal (the
                    default), or <InlineCode>column</InlineCode>, to set the axis to vertical. While less commonly
                    used, there is also <InlineCode>row-reverse</InlineCode> and{' '}
                    <InlineCode>column-reverse</InlineCode>, which function like row and column but with the order
                    of elements reversed.
                </p>
            </TextSection>
            <section className="my-12 px-12 flex flex-wrap gap-12 justify-center">
                <FlexDemoContainer className="flex flex-col" label="flex-direction: column">
                    <div className="w-[80vw] sm:w-96 h-20 bg-blue-400/50 flex items-center justify-center">1</div>
                    <div className="w-[80vw] sm:w-96 h-20 bg-blue-400/35 flex items-center justify-center">2</div>
                    <div className="w-[80vw] sm:w-96 h-20 bg-blue-400/20 flex items-center justify-center">3</div>
                </FlexDemoContainer>

                <FlexDemoContainer className="flex flex-col-reverse" label="flex-direction: column-reverse">
                    <div className="w-[80vw] sm:w-96 h-20 bg-blue-400/50 flex items-center justify-center">1</div>
                    <div className="w-[80vw] sm:w-96 h-20 bg-blue-400/35 flex items-center justify-center">2</div>
                    <div className="w-[80vw] sm:w-96 h-20 bg-blue-400/20 flex items-center justify-center">3</div>
                </FlexDemoContainer>
            </section>

            <TextSection>
                <LinkHeading className="text-3xl font-bold mb-4" id="wrapping">
                    Wrapping
                </LinkHeading>
                <p className="mb-4">
                    By default, a flex container will force its children to remain on its specified axis. If the
                    children are too wide (or tall, for <InlineCode>flex-col</InlineCode>), they will overflow.
                </p>
                <p className="mb-4">
                    If you want overflowing elements to wrap around instead, use
                    the <InlineCode>flex-wrap</InlineCode> property.
                </p>
                <CopyCodeBlock language="css">
                    {'.container {\n    flex-wrap: wrap;\n}'}
                </CopyCodeBlock>
                <p className="mt-4">
                    <InlineCode>flex-wrap</InlineCode> can be set to <InlineCode>nowrap</InlineCode> (the default),
                    which forces elements onto a single row / column, or <InlineCode>wrap</InlineCode> to allow
                    wrapping.
                </p>
            </TextSection>
            <section className="my-12 flex justify-center">
                <FlexDemoContainer className="flex flex-wrap w-[80%] max-w-2xl" label="flex-wrap: wrap">
                    {Array(6).fill(0).map((_, i) => (
                        <div
                            className="w-28 sm:w-48 h-28 bg-blue-400 flex items-center justify-center"
                            // @ts-ignore
                            style={{ '--tw-bg-opacity': (8 - i) / 12 }}
                            key={i}
                        >
                            {i + 1}
                        </div>
                    ))}
                </FlexDemoContainer>
            </section>

            <TextSection>
                <LinkHeading className="text-3xl font-bold mb-4" id="gap">
                    Gap
                </LinkHeading>
                <p className="my-4">
                    If you wanted to add even spacing between elements using <InlineCode>margin</InlineCode>, you'd have
                    to be careful to specify <InlineCode>:not(:first-child)</InlineCode> so as to avoid accidentally
                    adding left or top margin to the first element and shifting the entire container. Plus, for a
                    wrapped flex container, calculating which elements should receive top margin is incredibly complex.
                </p>
                <p className="mb-4">
                    Instead, to add even spacing between elements in a flexbox, use the{' '}
                    <InlineCode>gap</InlineCode> property. <InlineCode>gap</InlineCode> simplifies all the
                    aforementioned logic into a single, concise statement:
                </p>
                <CopyCodeBlock language="css">
                    {'.container {\n    gap: 1rem;\n}'}
                </CopyCodeBlock>
            </TextSection>
            <section className="my-12 flex justify-center">
                <FlexWhitespaceDemoContainer className="flex flex-wrap gap-4 w-[80%] max-w-2xl" label="gap: 1rem">
                    {Array(6).fill(0).map((_, i) => (
                        <div
                            className="w-20 sm:w-48 h-20 bg-violet-700 rounded-md text-xl font-semibold text-white/70 flex items-center justify-center"
                            key={i}
                        >
                            {i + 1}
                        </div>
                    ))}
                </FlexWhitespaceDemoContainer>
            </section>

            <TextSection>
                <p className="mb-4">
                    Indeed, <InlineCode>gap</InlineCode> is actually a shorthand for two properties,{' '}
                    <InlineCode>column-gap</InlineCode> and <InlineCode>row-gap</InlineCode>. To specify different gap
                    widths for the x and y axes, you can set these directly:
                </p>
                <CopyCodeBlock language="css">
                    {'.container {\n    column-gap: 1rem;\n    row-gap: 0.5rem;\n}'}
                </CopyCodeBlock>
            </TextSection>
            <section className="my-12 flex justify-center">
                <FlexWhitespaceDemoContainer
                    className="flex flex-wrap gap-x-4 gap-y-2 w-[80%] max-w-2xl"
                    label="column-gap: 1rem; row-gap: 0.5rem"
                >
                    {Array(6).fill(0).map((_, i) => (
                        <div
                            className="w-20 sm:w-48 h-20 bg-violet-700 rounded-md text-xl font-semibold text-white/70 flex items-center justify-center"
                            key={i}
                        >
                            {i + 1}
                        </div>
                    ))}
                </FlexWhitespaceDemoContainer>
            </section>

            <TextSection>
                <LinkHeading className="text-3xl font-bold mb-4" id="align-items">
                    Alignment (perpendicular axis)
                </LinkHeading>
                <p className="mb-4">
                    Wrapping is great, but how do we deal with the excess whitespace in the container?
                </p>
                <p className="mb-4">
                    To align elements <em>along the perpendicular (cross) axis of the flex container</em>, use
                    the <InlineCode>align-items</InlineCode> property.
                </p>
                <CopyCodeBlock language="css">
                    {'.container {\n    align-items: center;\n}'}
                </CopyCodeBlock>
                <p className="mt-4">
                    To center items <em>vertically</em> when the flex direction is row, for example, use{' '}
                    <InlineCode>align-items: center</InlineCode>:
                </p>
            </TextSection>
            <section className="container my-12 flex flex-col gap-12 items-center">
                <FlexWhitespaceDemoContainer className="flex items-center h-52 gap-1.5 sm:gap-3" label="align-items: center">
                    <div className="w-16 sm:w-24 lg:w-40 h-24 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">1</div>
                    <div className="w-16 sm:w-24 lg:w-40 h-32 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">2</div>
                    <div className="w-16 sm:w-24 lg:w-40 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">3</div>
                    <div className="w-16 sm:w-24 lg:w-40 h-44 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">4</div>
                    <div className="w-16 sm:w-24 lg:w-40 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">5</div>
                </FlexWhitespaceDemoContainer>
            </section>

            <TextSection>
                <p className="mb-4">
                    <InlineCode>align-items</InlineCode> takes the following values:
                </p>
                <table className="mb-4 border border-tertiary w-full text-sm">
                    <tbody>
                    <tr>
                        <td className="p-2 border-r border-t border-tertiary">
                            <InlineCode>stretch</InlineCode> (default)
                        </td>
                        <td className="p-2 border-t border-tertiary">
                            Stretch each element to fill the entire height or width of the container. If this is
                            confusing, see the example below.
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 border-r border-t border-tertiary"><InlineCode>start</InlineCode></td>
                        <td className="p-2 border-t border-tertiary">
                            Align elements to the <em>start</em> of the perpendicular axis e.g. to the top (row) or
                            left (column).
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 border-r border-t border-tertiary"><InlineCode>end</InlineCode></td>
                        <td className="p-2 border-t border-tertiary">
                            Align elements to the <em>end</em> of the perpendicular axis e.g. to the bottom (row) or
                            right (column).
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 border-r border-t border-tertiary"><InlineCode>center</InlineCode></td>
                        <td className="p-2 border-t border-tertiary">
                            Center elements vertically (row) or horizontally (column).
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p className="mt-4">
                    There are some 10+ other values for <InlineCode>align-items</InlineCode>, but in 99% of cases
                    the above 4 will suffice; the curious can read about them <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items" target="_blank"
                    rel="noopener noreferrer">here</a>.
                    For some more examples,
                </p>
            </TextSection>
            <section className="container my-12 flex flex-col gap-12 items-center">
                <FlexWhitespaceDemoContainer className="flex h-48 gap-1.5 sm:gap-3" label="align-items: stretch">
                    <div className="bg-violet-700/35">
                        <div className="w-16 sm:w-24 lg:w-40 h-24 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">1</div>
                    </div>
                    <div className="bg-violet-700/35">
                        <div className="w-16 sm:w-24 lg:w-40 h-32 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">2</div>
                    </div>
                    <div className="bg-violet-700/35">
                        <div className="w-16 sm:w-24 lg:w-40 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">3</div>
                    </div>
                    <div className="bg-violet-700/35">
                        <div className="w-16 sm:w-24 lg:w-40 h-44 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">4</div>
                    </div>
                    <div className="bg-violet-700/35">
                        <div className="w-16 sm:w-24 lg:w-40 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">5</div>
                    </div>
                </FlexWhitespaceDemoContainer>

                <FlexWhitespaceDemoContainer className="flex items-start h-48 gap-1.5 sm:gap-3" label="align-items: start">
                    <div className="w-16 sm:w-24 lg:w-40 h-24 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">1</div>
                    <div className="w-16 sm:w-24 lg:w-40 h-32 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">2</div>
                    <div className="w-16 sm:w-24 lg:w-40 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">3</div>
                    <div className="w-16 sm:w-24 lg:w-40 h-44 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">4</div>
                    <div className="w-16 sm:w-24 lg:w-40 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">5</div>
                </FlexWhitespaceDemoContainer>

                <FlexWhitespaceDemoContainer className="flex items-end h-48 gap-1.5 sm:gap-3" label="align-items: end">
                    <div className="w-16 sm:w-24 lg:w-40 h-24 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">1</div>
                    <div className="w-16 sm:w-24 lg:w-40 h-32 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">2</div>
                    <div className="w-16 sm:w-24 lg:w-40 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">3</div>
                    <div className="w-16 sm:w-24 lg:w-40 h-44 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">4</div>
                    <div className="w-16 sm:w-24 lg:w-40 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">5</div>
                </FlexWhitespaceDemoContainer>
            </section>

            <TextSection>
                <LinkHeading className="text-3xl font-bold mb-4" id="justify-content">
                    Alignment (parallel axis)
                </LinkHeading>
                <p className="mb-4">
                    To align elements <em>along the parallel (main) axis of the flex container</em>, use
                    the <InlineCode>justify-content</InlineCode> property.
                </p>
                <CopyCodeBlock language="css">
                    {'.container {\n    justify-content: center;\n}'}
                </CopyCodeBlock>
                <p className="mt-4">
                    To center items <em>horizontally</em> when the flex direction is row, for example, use{' '}
                    <InlineCode>justify-content: center</InlineCode>:
                </p>
            </TextSection>
            <section className="container my-12 flex flex-col gap-12 items-center">
                <FlexWhitespaceDemoContainer
                    className="flex justify-center w-full gap-4"
                    label="justify-content: center"
                >
                    <div className="w-[20%] lg:w-48 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">1</div>
                    <div className="w-[20%] lg:w-48 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">2</div>
                    <div className="w-[20%] lg:w-48 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">3</div>
                </FlexWhitespaceDemoContainer>
            </section>

            <TextSection>
                <p className="mb-4">
                    While it suffices to think of <InlineCode>justify-content</InlineCode> as aligning elements along
                    the container's parallel axis, what <InlineCode>justify-content</InlineCode> actually controls
                    is the distribution of <em>whitespace</em> within the container.
                </p>
                <p className="mb-4">
                    Then, <InlineCode>justify-content</InlineCode> takes the following values:
                </p>
                <table className="mb-4 border border-tertiary w-full text-sm">
                    <tbody>
                    <tr>
                        <td className="p-2 border-r border-t border-tertiary">
                            <InlineCode>start</InlineCode> (default)
                        </td>
                        <td className="p-2 border-t border-tertiary">
                            Place whitespace at the end of the container e.g. the right (row) or bottom (column);
                            this results in elements being pushed to the left (row) or top (column).
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 border-r border-t border-tertiary"><InlineCode>end</InlineCode></td>
                        <td className="p-2 border-t border-tertiary">
                            Place whitespace at the start of the container e.g. the left (row) or top (column);
                            this results in elements being pushed to the right (row) or bottom (column).
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 border-r border-t border-tertiary"><InlineCode>center</InlineCode></td>
                        <td className="p-2 border-t border-tertiary">
                            Distribute whitespace evenly between the start and end of the container.
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 border-r border-t border-tertiary">
                            <InlineCode>space-between</InlineCode>
                        </td>
                        <td className="p-2 border-t border-tertiary">
                            Distribute whitespace evenly between each element.
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2 border-r border-t border-tertiary">
                            <InlineCode>space-evenly</InlineCode>
                        </td>
                        <td className="p-2 border-t border-tertiary">
                            Distribute whitespace evenly between the start and end of the container, as well as
                            each element.
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p className="mt-4">
                    There are also a few more values for <InlineCode>justify-content</InlineCode>, but in 99% of
                    cases the above will suffice; the curious can read about them <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content" target="_blank"
                    rel="noopener noreferrer">here</a>.
                    For some more examples,
                </p>
            </TextSection>
            <section className="container my-12 flex flex-col gap-12 items-center">
                <FlexWhitespaceDemoContainer
                    className="flex w-full gap-4"
                    label="justify-content: start"
                >
                    <div className="w-[20%] lg:w-48 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">1</div>
                    <div className="w-[20%] lg:w-48 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">2</div>
                    <div className="w-[20%] lg:w-48 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">3</div>
                </FlexWhitespaceDemoContainer>

                <FlexWhitespaceDemoContainer
                    className="flex justify-end w-full gap-4"
                    label="justify-content: end"
                >
                    <div className="w-[20%] lg:w-48 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">1</div>
                    <div className="w-[20%] lg:w-48 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">2</div>
                    <div className="w-[20%] lg:w-48 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">3</div>
                </FlexWhitespaceDemoContainer>

                <FlexWhitespaceDemoContainer
                    className="flex justify-between w-full gap-4"
                    label="justify-content: space-between"
                >
                    <div className="w-[20%] lg:w-48 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">1</div>
                    <div className="w-[20%] lg:w-48 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">2</div>
                    <div className="w-[20%] lg:w-48 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">3</div>
                </FlexWhitespaceDemoContainer>

                <FlexWhitespaceDemoContainer
                    className="flex justify-evenly w-full gap-4"
                    label="justify-content: space-evenly"
                >
                    <div className="w-[20%] lg:w-48 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">1</div>
                    <div className="w-[20%] lg:w-48 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">2</div>
                    <div className="w-[20%] lg:w-48 h-20 bg-violet-700 text-xl font-semibold text-white/70 flex items-center justify-center rounded-md">3</div>
                </FlexWhitespaceDemoContainer>
            </section>

            <TextSection>
                <LinkHeading className="text-3xl font-bold mb-4" id="applications">
                    Centering a div
                </LinkHeading>
                <p className="mb-4">
                    So now that you know flexbox, what can you do with it?
                </p>
                <p className="mb-4">
                    There's an oft-repeated joke about how centering a div proves to be a monumental task in CSS.
                    But this joke is outdated; using flexbox, we can center a div in 3 lines of code:
                </p>
                <CopyCodeBlock language="css">
                    {'.container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}'}
                </CopyCodeBlock>
            </TextSection>
            <section className="container my-12 flex flex-col gap-12 items-center">
                <FlexWhitespaceDemoContainer className="flex items-center justify-center w-full h-72">
                    <div className="rounded-lg bg-white shadow-lg w-64 overflow-clip">
                        <img
                            className="w-full h-36 object-cover object-center"
                            src="/assets/flex/1.jpg"
                        />
                        <div className="px-6 pt-3 pb-4">
                            <h3 className="font-semibold text-black text-sm">Some filler title ...</h3>
                            <p className="text-secondary text-xs">Some filler text ...</p>
                        </div>
                    </div>
                </FlexWhitespaceDemoContainer>
            </section>

            <TextSection>
                <p className="mb-4">
                    Indeed, flex is great for anything you need to display together in a row, like cards
                    in a section,
                </p>
                <CopyCodeBlock language="css">
                    {'.wrapper {\n    display: flex;\n    gap: 2rem;\n    justify-content: center;\n}'}
                </CopyCodeBlock>
            </TextSection>
            <section className="container my-12 flex flex-col gap-12 items-center">
                <FlexWhitespaceDemoContainer className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
                    <div className="rounded-lg bg-white shadow-lg w-64 overflow-clip">
                        <img
                            className="w-full h-36 object-cover object-center"
                            src="/assets/flex/2.jpg"
                        />
                        <div className="px-6 pt-3 pb-4">
                            <h3 className="font-semibold text-black text-sm">Card title A ...</h3>
                            <p className="text-secondary text-xs">Some filler text ...</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white shadow-lg w-64 overflow-clip">
                        <img
                            className="w-full h-36 object-cover object-center"
                            src="/assets/flex/3.jpg"
                        />
                        <div className="px-6 pt-3 pb-4">
                            <h3 className="font-semibold text-black text-sm">Card title B ...</h3>
                            <p className="text-secondary text-xs">Some filler text ...</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white shadow-lg w-64 overflow-clip">
                        <img
                            className="w-full h-36 object-cover object-center"
                            src="/assets/flex/4.jpg"
                        />
                        <div className="px-6 pt-3 pb-4">
                            <h3 className="font-semibold text-black text-sm">Card title C ...</h3>
                            <p className="text-secondary text-xs">Some filler text ...</p>
                        </div>
                    </div>
                </FlexWhitespaceDemoContainer>
            </section>

            <TextSection>
                <p className="mb-4">elements in a navbar,</p>
                <CopyCodeBlock language="css">
                    {'.nav {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.nav > .right {\n    display: flex;\n    gap: 1rem;\n}'}
                </CopyCodeBlock>
            </TextSection>
            <section className="container my-12 flex flex-col gap-12 items-center">
                <nav className="bg-white px-3.5 py-2 rounded shadow-lg w-full max-w-2xl">
                    <FlexWhitespaceDemoContainer className="flex items-center justify-between [&>*]:bg-white [&>*]:border [&>*]:border-blue-500/50">
                        <img src="/pfp.png" className="rounded-full size-12" />

                        <div className="flex text-black/70 font-medium gap-4">
                            <p>About</p>
                            <p>Account</p>
                            <p>Sign in</p>
                        </div>
                    </FlexWhitespaceDemoContainer>
                </nav>
            </section>

            <TextSection>
                <p className="mb-4">any time you have stacked elements ever,</p>
                <CopyCodeBlock language="css">
                    {'.list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}'}
                </CopyCodeBlock>
            </TextSection>
            <section className="container my-12 flex flex-col gap-12 items-center">
                <div className="bg-white px-8 py-6 rounded shadow-lg w-full max-w-xl text-black">
                    <h3 className="text-lg font-bold mb-1">Shopping list:</h3>
                    <FlexWhitespaceDemoContainer className="text-sm flex flex-col gap-2 border-y-white [&>*]:bg-white [&>*]:border-y [&>*]:border-blue-500/50">
                        <li>Roma tomatoes</li>
                        <li>Sourdough bread</li>
                        <li>13.75mm (1/2") ThunderHex 0.875" OD x 0.280" WD Flanged Bearing</li>
                        <li>Mozzarella balls</li>
                    </FlexWhitespaceDemoContainer>
                </div>
            </section>

            <TextSection>
                and just about anything in between. {/* [...] */}
            </TextSection>
        </>
    )
}

function TextSection(props: { children: ReactNode }) {
    return (
        <div className="bg-midnight py-16">
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

function FlexDemoContainer(props: { children: ReactNode, className: string, label?: string }) {
    return (
        <div className={`relative ${props.className} border border-white/50 text-xl font-semibold`}>
            {props.children}

            {props.label && (
                <code className="text-xs text-white text-left absolute -bottom-5 left-0 font-normal">
                {props.label}
                </code>
            )}
        </div>
    )
}

function FlexWhitespaceDemoContainer(props: { children: ReactNode, className: string, label?: string }) {
    return (
        <div className={`relative ${props.className} border border-blue-500/50 bg-[linear-gradient(135deg,#0ea5e980_10%,#0000_0,#0000_50%,#0ea5e980_0,#0ea5e980_60%,#0000_0,#0000)] bg-[length:7.07px_7.07px]`}>
            {props.children}

            {props.label && (
                <code className="text-xs text-white text-left absolute -bottom-5 left-0 font-normal">
                    {props.label}
                </code>
            )}
        </div>
    )
}
