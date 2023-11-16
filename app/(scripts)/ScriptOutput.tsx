import {SyntaxHighlighter} from '../../components/CodeBlock';


export default function ScriptOutput(props: {className?: string, children: string}) {
    return (
        <>
            <p className="text-sm mb-1 text-secondary dark:text-secondary-dark">
                Code:{' '}
                {/* TODO: animate this with a popup or something */}
                <button onClick={() => navigator.clipboard.writeText(props.children)} className="hover:underline">
                    (copy)
                </button>
            </p>
            <div className={'rounded-lg overflow-hidden text-xs' + (props.className ? ` ${props.className}` : '')}>
                <SyntaxHighlighter language="javascript">
                    {props.children}
                </SyntaxHighlighter>
            </div>
        </>
    )
}
