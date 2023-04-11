// Displays a score indicator for offline games. Scores are represented as a tuple of [number, number] for
// [x wins, o wins].
// https://github.com/SVWEFSBRWHWBCOTSEID/game-website/blob/main/components/TicTacToeScoreIndicator.tsx
export type TTTScores = [x: number, o: number];
export default function TicTacToeScoreIndicator(props: {scores: TTTScores}) {
    return (
        <section className="flex gap-3 items-center text-3xl font-medium">
            <div className="h-6 w-6 rounded-full bg-red-400" />
            <span className="pb-0.5">{props.scores.join(' - ')}</span>
            <div className="h-6 w-6 rounded-full bg-blue-400" />
        </section>
    )
}
