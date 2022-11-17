import TicTacToeBoard, {
    BoardStatus,
    defaultTTTBoard,
    TicTacToeGrid,
    TicTacToeRow,
    TTTBoard, TTTIndices,
    TTTSymbol
} from './TicTacToeBoard';


export const ANY_BOARD = -1;

export type UTTTBoard = [
    TTTBoard, TTTBoard, TTTBoard,
    TTTBoard, TTTBoard, TTTBoard,
    TTTBoard, TTTBoard, TTTBoard
];
export const defaultUTTTBoard: UTTTBoard = [
    defaultTTTBoard, defaultTTTBoard, defaultTTTBoard,
    defaultTTTBoard, defaultTTTBoard, defaultTTTBoard,
    defaultTTTBoard, defaultTTTBoard, defaultTTTBoard
];

export type UTTTBoardStatuses = [
    BoardStatus, BoardStatus, BoardStatus,
    BoardStatus, BoardStatus, BoardStatus,
    BoardStatus, BoardStatus, BoardStatus
];
export const defaultUTTTBoardStatuses: UTTTBoardStatuses = [
    BoardStatus.PLAYING, BoardStatus.PLAYING, BoardStatus.PLAYING,
    BoardStatus.PLAYING, BoardStatus.PLAYING, BoardStatus.PLAYING,
    BoardStatus.PLAYING, BoardStatus.PLAYING, BoardStatus.PLAYING
];

export type UltimateTicTacToeBoardProps = {
    gameState: UTTTBoard,
    gameStatuses: UTTTBoardStatuses,
    playerSymbol: TTTSymbol,
    activeBoard: number,
    setSquare: (board: number, square: number, symbol: TTTSymbol) => void,
    setBoardStatus: (board: number, status: BoardStatus) => void,
    disabled: boolean
};
export default function UltimateTicTacToeBoard(props: UltimateTicTacToeBoardProps) {
    return (
        <TicTacToeGrid disabled={props.disabled}>
            {TTTIndices.map(row => (
                <TicTacToeRow key={row.join()}>
                    {row.map(id => (
                        <UltimateTicTacToeCell {...props} id={id} key={id} />
                    ))}
                </TicTacToeRow>
            ))}
        </TicTacToeGrid>
    )
}

function UltimateTicTacToeCell(props: UltimateTicTacToeBoardProps & {id: number}) {
    const {gameState, gameStatuses, playerSymbol, activeBoard, setSquare, setBoardStatus, disabled, id} = props;

    const boardState = gameState[id];
    const boardStatus = gameStatuses[id];

    const symbol = boardStatus === BoardStatus.X_VICTORY ? '✕'
        : boardStatus === BoardStatus.O_VICTORY ? '◯'
        : '';

    return (
        <div className="relative p-4">
            {symbol && (
                <span className={'absolute inset-0 flex items-center justify-center z-10 text-9xl font-bold' + (symbol === '✕' ? ' text-red-400' : ' text-blue-400')}>
                    {symbol}
                </span>
            )}
            <TicTacToeBoard
                small
                boardState={boardState}
                playerSymbol={playerSymbol}
                setSquare={(square, symbol) => setSquare(id, square, symbol)}
                setBoardStatus={(status) => setBoardStatus(id, status)}
                disabled={disabled || boardStatus !== BoardStatus.PLAYING || (activeBoard !== ANY_BOARD && id !== activeBoard)}
            />
        </div>
    )
}
