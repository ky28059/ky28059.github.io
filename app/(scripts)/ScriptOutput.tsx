import {SyntaxHighlighter} from '../../components/CodeBlock';


export default function ScriptOutput(props: {children: string}) {
    return (
        <>
            <p className="text-sm mb-1 text-gray-400 dark:text-gray-100/40">
                Generated:{' '}
                {/* TODO: animate this with a popup or something */}
                <button onClick={() => navigator.clipboard.writeText(props.children)} className="hover:underline">
                    (copy)
                </button>
            </p>
            <div className="rounded-lg overflow-hidden text-xs">
                <SyntaxHighlighter language="javascript">
                    {props.children}
                </SyntaxHighlighter>
            </div>
        </>
    )
}
