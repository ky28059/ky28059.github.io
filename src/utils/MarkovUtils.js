import raw from './dictionary';

// Alphabets, some other things
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const endchar = "#"
const validchars = alphabet + endchar;


// Find valid words, end them with the endchar
export const words = raw
    .split('\n')
    .map(word => word.toLowerCase())
    .filter(word => [...word].every(char => alphabet.includes(char)))
    .map(word => word + endchar);

/**
 * @param {number} num
 * @returns {Set<string>}
 * @description Generate all combinations of num length, e.g. for num=2 it'd be "aa","ab", ..etc
 */
export function combinations(num) {
    if (num === 0 ) {
        let empty = new Set();
        empty.add("");
        return empty;
    }

    let combos = new Set();

    let possible = num === 1 ? validchars : alphabet;
    for (const char of possible) {
        for (const combo of combinations(num - 1)) {
            combos.add(combo + char);
        }
    }
    return combos;
}

/**
 * @class
 * @classdesc A class for what comes after a combo. For example, after "abc", this class would keep track of how many times "a","b","c"...etc. occur after "abc"
 */
export class MarkovObj {
    constructor() {
        /**
         * @type {Map<string,number>}
         */
        this.chars = new Map();
        this.alphabet = validchars;

        for (const char of this.alphabet) {
            this.chars.set(char, 0);
        }
    }

    add(a) {
        if (this.chars.has(a)) {
            this.chars.set(a, this.chars.get(a) + 1);
            return true;
        }
        return false;
    }

    total() {
        return [0, ...this.chars].reduce((init,curr) => init + curr[1]);
    }

    random() {
        if (this.total() === 0) return validchars.charAt(Math.floor(Math.random() * validchars.length));

        let chararray = [...this.chars];
        const total = this.total();
        chararray = chararray.map(a => [a[0], a[1] / total]);

        let rand = Math.random();

        for (let i = 0; i < chararray.length; i++) {
            rand -= chararray[i][1];
            if (rand <= 0) {
                return chararray[i][0];
            }
        }
    }

    toObj() {
        let obj = Object.create(null);
        for (const char of this.alphabet) {
            obj[char] = this.chars.get(char);
        }
        return obj;
    }
}

export function generate(prefix, combolength, generateNum, brain) {
    let output = new Set();

    for (let i = 0; i < generateNum; i++) {
        // We don't like words < 5 chars in length
        // So while true, generate a new word and only end if that word is over or equal to 5 chars
        while (true) {
            let newword;
            newword = prefix;

            while (!newword.includes(endchar)) {
                const combo = newword.slice(-combolength);
                const nextchar = brain.get(combo).random();

                newword += nextchar;
            }

            newword = newword.slice(0, -1);

            if (newword.length >= 5) {
                output.add(newword);
                break;
            }
        }
    }

    return output;
}