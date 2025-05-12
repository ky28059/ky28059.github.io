import { ctfs } from '../ctfs';
import Markdown from 'react-markdown';

// Components
import CopyCodeBlock from '../../../components/CopyCodeBlock';
import LinkHeading from '../../../components/LinkHeading';


export default async function WriteupPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const raw = await (await fetch(`https://gist.githubusercontent.com/ky28059/${id}/raw/`)).text();

    return (
        <div>
            <main className="max-w-5xl mx-auto text-sm [&_h1]:text-5xl [&_h1]:font-semibold [&_h1]:mb-8 [&_blockquote]:text-secondary [&_blockquote]:space-y-3 [&_blockquote]:border-l-4 [&_blockquote]:border-secondary [&_blockquote]:pl-5 [&_blockquote]:mb-5 [&>_p]:my-3 [&_img]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [&>p>code]:bg-black/20 [&>p>code]:text-primary [&>p>code]:px-2 [&>p>code]:py-1 [&>p>code]:rounded [&_img]:rounded [&_li]:my-2">
                <Markdown
                    components={{
                        pre(props) {
                            const { children, node, ...rest } = props;
                            if (children && typeof children === 'object' && 'props' in children) {
                                const { children: grandChildren, className } = children.props;

                                const match = /language-(\w+)/.exec(className || '')
                                return (
                                    <CopyCodeBlock
                                        className="my-4"
                                        children={String(grandChildren).replace(/\n$/, '')}
                                        language={match?.[1]}
                                    />
                                )
                            }

                            return (
                                <pre {...rest}>
                                    {children}
                                </pre>
                            );
                        },
                        h3(props) {
                            const { children, className } = props;
                            const id = String(children).toLowerCase().replaceAll(' ', '-');

                            return (
                                <LinkHeading id={id} className={'text-3xl font-bold mt-10 mb-4 ' + (className || '')}>
                                    {children}
                                </LinkHeading>
                            )
                        }
                    }}
                >
                    {raw}
                </Markdown>
            </main>
        </div>
    )
}

export async function generateStaticParams() {
    return ctfs.flatMap((c) => c.writeups).map((writeup) => ({
        id: writeup.href.match(/https:\/\/gist\.github\.com\/ky28059\/(.+)/)![1], // TODO
    }))
}
