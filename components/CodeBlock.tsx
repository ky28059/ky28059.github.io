import {useEffect, useState} from 'react';
import {Prism} from 'react-syntax-highlighter';


// A multi-page code block component. `props.sources` should be an array of GitHub raw file URLs, which will be
// fetched on mount and rendered in the block.
// TODO: light mode
// TODO: responsive design
type CodeBlockProps = {sources: string[]};
export default function CodeBlock(props: CodeBlockProps) {
    const {sources} = props;

    const [active, setActive] = useState(0);

    const [raw, setRaw] = useState<string[]>([]);
    useEffect(() => {
        Promise.all(sources.map(src => fetch(src).then(res => res.text())))
            .then(res => setRaw(res))
    }, [])

    return (
        <div className="flex flex-col rounded-lg overflow-hidden w-[36rem] h-[36rem] max-w-full flex-none text-xs bg-[#2b2b2b] border border-gray-100/20">
            <div className="flex bg-[#484a4a]/50">
                {sources.map((source, i) => (
                    <button
                        className={'px-3.5 py-1.5 font-[Consolas,_Monaco,_\'Andale_Mono\',_monospace] text-[#a9b7c6]' + (active === i ? ' bg-[#2b2b2b]' : '')}
                        onClick={() => setActive(i)}
                        key={source}
                    >
                        {source.match(/.+\/(.+)/)?.[1]}
                    </button>
                ))}
            </div>
            <SyntaxHighlighter language={parseFileEnding(sources[active].match(/.+\.(.+)/)?.[1]) ?? 'java'}>
                {raw[active]}
            </SyntaxHighlighter>
        </div>
    )
}

type SyntaxHighlighterProps = {language: string, children: string | string[]};
export function SyntaxHighlighter(props: SyntaxHighlighterProps) {
    return (
        <Prism language={props.language} codeTagProps={{style: {}}} showLineNumbers useInlineStyles={false}>
            {props.children}
        </Prism>
    )
}

// Returns the name of the language for syntax highlighting given the file ending of the source file.
// This is used to generate the language supplied to the syntax highlighter from the GitHub URL supplied as
// props to `CodeBlock`, which contains the filename.
function parseFileEnding(ending: string | undefined) {
    switch (ending) {
        case 'kt': return 'kotlin';
        default: return ending;
    }
}
