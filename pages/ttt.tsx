import {useState} from 'react';
import Head from 'next/head';

// Components
import TicTacToeBoard, {defaultTTTBoard, BoardStatus, TTTBoard, TTTSymbol} from '../components/TicTacToeBoard';
import TicTacToeScoreIndicator, {TTTScores} from '../components/TicTacToeScoreIndicator';


export default function TicTacToe() {
    const [gameState, setGameState] = useState<TTTBoard>(defaultTTTBoard);
    const [gameStatus, setGameStatus] = useState(BoardStatus.PLAYING);

    const [scores, setScores] = useState<TTTScores>([0, 0]);

    const [playerSymbol, setPlayerSymbol] = useState<TTTSymbol>('✕');
    const [nextStartSymbol, setNextStartSymbol] = useState<TTTSymbol>('◯');

    // Makes a move by checking the given square, alternating the player's symbol after each move.
    function setSquare(square: number, symbol: TTTSymbol) {
        const newGameState: TTTBoard = [...gameState]
        newGameState[square] = symbol;
        setGameState(newGameState);
        setPlayerSymbol(playerSymbol === '✕' ? '◯' : '✕');
    }

    // Handles a game status change by incrementing the player scores.
    function handleGameStatusChange(status: BoardStatus) {
        // Wins are +1 for the winner, ties are +0.5 for both players
        switch (status) {
            case BoardStatus.TIED: setScores([scores[0] + 0.5, scores[1] + 0.5]); break;
            case BoardStatus.X_VICTORY: setScores([scores[0] + 1, scores[1]]); break;
            case BoardStatus.O_VICTORY: setScores([scores[0], scores[1] + 1]); break;
        }
        setGameStatus(status);
    }

    // Starts a new game, resetting the board, status, and symbol, alternating start symbols;
    // if X started the last game, O starts the next game.
    function resetBoard() {
        setGameState(defaultTTTBoard);
        setGameStatus(BoardStatus.PLAYING);
        setPlayerSymbol(nextStartSymbol);
        setNextStartSymbol(nextStartSymbol === '✕' ? '◯' : '✕');
    }

    return (
        <main className="h-screen flex flex-col gap-8 items-center justify-center">
            <Head>
                <title>Offline Tic-Tac-Toe | ky28059.github.io</title>
                <meta name="description" content="Offline Tic-Tac-Toe for single-device games." />
            </Head>

            <TicTacToeScoreIndicator scores={scores} />

            <TicTacToeBoard
                boardState={gameState}
                playerSymbol={playerSymbol}
                setSquare={setSquare}
                setBoardStatus={handleGameStatusChange}
                disabled={gameStatus !== BoardStatus.PLAYING}
            />

            <section className="relative">
                {gameStatus === BoardStatus.PLAYING ? (
                    <p className="font-light">You are playing as <strong>{playerSymbol}</strong>. It is your move.</p>
                ) : gameStatus === BoardStatus.TIED ? (
                    <p className="font-light">The game has tied.</p>
                ) : gameStatus === BoardStatus.X_VICTORY ? (
                    <p className="font-light"><strong>✕</strong> has won!</p>
                ) : (
                    <p className="font-light"><strong>◯</strong> has won!</p>
                )}
                {gameStatus !== BoardStatus.PLAYING && (
                    <button className="absolute top-8 inset-x-0" onClick={resetBoard}>
                        Play again
                    </button>
                )}
            </section>
        </main>
    )
}
