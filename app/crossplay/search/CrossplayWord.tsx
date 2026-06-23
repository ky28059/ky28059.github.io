import { CROSSPLAY_LETTER_VALUES, crossplayScore } from '@/app/crossplay/utils';


type CrossplayWordProps = {
    word: string
}

export default function CrossplayWord(props: CrossplayWordProps) {
    return (
        <div className="flex gap-2 items-center">
            <div className="flex rounded-tl rounded-br overflow-hidden divide-x divide-white/10">
                {[...props.word].map((c, i) => (
                    <div key={props.word + i} className="relative bg-[#3F75C6] text-white size-8 flex items-center justify-center">
                        <span className="font-semibold -ml-0.5 -mb-0.5">
                            {c}
                        </span>
                        <span className="absolute opacity-75 top-0.5 right-0.5 text-[0.6rem] font-jetbrains">
                            {CROSSPLAY_LETTER_VALUES[c]}
                        </span>
                    </div>
                ))}
            </div>

            <span className="text-secondary text-sm">
                = {crossplayScore(props.word)} ({props.word.length})
            </span>
        </div>
    )
}
