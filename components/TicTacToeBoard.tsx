import {ReactNode, useEffect} from 'react';


export type TTTSymbol = '✕' | '◯' | '';
export type TTTBoard = [
    TTTSymbol, TTTSymbol, TTTSymbol,
    TTTSymbol, TTTSymbol, TTTSymbol,
    TTTSymbol, TTTSymbol, TTTSymbol
];
export const defaultTTTBoard: TTTBoard = [
    '', '', '',
    '', '', '',
    '', '', ''
];

export enum BoardStatus {
    PLAYING, TIED, X_VICTORY, O_VICTORY
}

type TicTacToeBoardProps = {
    boardState: TTTBoard,
    playerSymbol: TTTSymbol,
    setSquare: (square: number, symbol: TTTSymbol) => void,
    setBoardStatus: (status: BoardStatus) => void,
    small?: boolean,
    disabled: boolean
};
export default function TicTacToeBoard(props: TicTacToeBoardProps) {
    const {boardState, setBoardStatus, small, disabled} = props;

    useEffect(() => {
        setBoardStatus(checkBoardStatus(boardState));
    }, [boardState]);

    return (
        <TicTacToeGrid disabled={disabled} small={small}>
            {TTTIndices.map(row => (
                <TicTacToeRow small={small} key={row.join()}>
                    {row.map(id => (
                        <TicTacToeCell {...props} id={id} key={id} />
                    ))}
                </TicTacToeRow>
            ))}
        </TicTacToeGrid>
    )
}

export function TicTacToeGrid(props: {children: ReactNode, small?: boolean, disabled: boolean}) {
    return (
        <div className={'flex flex-col divide-white/30 transition-opacity duration-500 ' + (props.small ? 'divide-y-4' : 'divide-y-8') + (props.disabled ? ' opacity-30' : '')}>
            {props.children}
        </div>
    )
}

export function TicTacToeRow(props: {children: ReactNode, small?: boolean,}) {
    return (
        <div className={'flex divide-white/30 ' + (props.small ? 'divide-x-4' : 'divide-x-8')}>
            {props.children}
        </div>
    )
}

function TicTacToeCell(props: TicTacToeBoardProps & {id: number}) {
    const {boardState, playerSymbol, setSquare, small, disabled, id} = props;

    const symbol = boardState[id]; // The actual state of the cell
    const displaySymbol = symbol || playerSymbol; // The symbol to display in the <span>

    return (
        <button
            className={'group font-bold text-center box-content ' + (small ? 'w-16 h-16 text-3xl ' : 'w-36 h-36 text-7xl ') + (displaySymbol === '✕' ? 'text-red-400' : 'text-blue-400')}
            disabled={disabled || !!symbol} // TODO: disable the button if it's not the player's move
            onClick={() => setSquare(id, playerSymbol)}
        >
            <span className={(small ? 'p-4' : 'p-8') + (!symbol ? ' opacity-0 hover:opacity-50 group-disabled:opacity-0' : '')}>
                {displaySymbol}
            </span>
        </button>
    )
}

// Checks a board for whether someone has won or the game has tied.
// TODO: make this prettier
export function checkBoardStatus(boardState: TTTBoard) {
    // Rows
    for (const row of TTTIndices) {
        const [left, middle, right] = row.map(i => boardState[i]);
        if (left && left === middle && left === right)
            return left === '✕' ? BoardStatus.X_VICTORY : BoardStatus.O_VICTORY;
    }

    // Columns
    for (const i in TTTIndices[0]) {
        const [top, middle, bottom] = TTTIndices.map(row => row[i]).map(i => boardState[i]);
        if (top && top === middle && top === bottom)
            return top === '✕' ? BoardStatus.X_VICTORY : BoardStatus.O_VICTORY;
    }

    // Diagonals
    if (boardState[0] && boardState[0] === boardState[4] && boardState[0] === boardState[8])
        return boardState[0] === '✕' ? BoardStatus.X_VICTORY : BoardStatus.O_VICTORY;
    if (boardState[2] && boardState[2] === boardState[4] && boardState[2] === boardState[6])
        return boardState[2] === '✕' ? BoardStatus.X_VICTORY : BoardStatus.O_VICTORY;

    // If the board is full and no one has won, it's a tie
    if (boardState.every(x => x)) return BoardStatus.TIED;

    return BoardStatus.PLAYING;
}

export const TTTIndices = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
