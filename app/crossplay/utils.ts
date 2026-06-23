export const CROSSPLAY_LETTER_VALUES: Record<string, number> = {
    A: 1,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 4,
    H: 3,
    I: 1,
    J: 10,
    K: 6,
    L: 2,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 2,
    V: 6,
    W: 5,
    X: 8,
    Y: 4,
    Z: 10
}

export function crossplayScore(word: string) {
    return word
        .toUpperCase()
        .split('')
        .reduce((score, letter) => score + (CROSSPLAY_LETTER_VALUES[letter] ?? 0), 0);
}
