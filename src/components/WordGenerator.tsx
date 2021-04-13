import React, {useState, useEffect} from 'react';

// Components
import Word from './wordgenerator/Word';

// Word generation tools
import {combinations, MarkovObj, generate, words, alphabet} from '../utils/MarkovUtils';
const combolength = 3; // Number of chars it reads to decide the next letter


const WordGenerator = () => {
    const [markov] = useState<Map<string, MarkovObj>>(new Map()); // Markov model
    const [content, setContent] = useState<null | React.ReactNode>(null); // Displayed output

    // User input
    const [prefix, setPrefix] = useState<null | string>(null);
    const [generateNum, setGenerateNum] = useState(0);


    // Initialize markov model
    useEffect(() => {
        // For each combo, initialize the markov model and the start map
        // @ts-ignore
        for (const combo of combinations(combolength)) {
            markov.set(combo, new MarkovObj());
        }

        // Just go through words and do the markov model /shrug
        for (const word of words) {
            for (let i = 0; i < word.length - combolength; i++) {
                let prevcombo = word.slice(i, i + combolength);
                markov.get(prevcombo)?.add(word.charAt(i + combolength));
            }
        }
    }, []);


    // Generate words from prefix
    const generateWords = () => {
        // If prefix is lower than the combo length
        if (!prefix || prefix.length < combolength)
            return setContent(<p className="center">Prefix must be a string longer than or equal to {combolength} characters.</p>);
        // If prefix contains illegal characters
        if ([...prefix].some(char => !alphabet.includes(char)))
            return setContent(<p className="center">Prefix must only contain letters.</p>)
        // If generateNum is not a valid integer
        if (isNaN(generateNum) || generateNum % 1 !== 0)
            return setContent(<p className="center">Word count must be a valid integer.</p>);
        // If generateNum is negative
        if (generateNum < 1)
            return setContent(<p className="center">Word count must be positive.</p>);

        setContent(parseGenerated(generate(prefix, combolength, generateNum, markov)));
    }

    // Display generated words
    const parseGenerated = (result: Set<string>) => {
        let content = [...result].map(word => <Word name={word}/>)

        return (
            <ul className="word-gen-results">
                {content}
            </ul>
        )
    }


    return (
        <div>
            <h1 className="center">Roger Fan Markov Chain word generation</h1>

            {/* User Input */}
            <div className="inputs">
                <input
                    type="text"
                    id="prefix"
                    placeholder="Prefix"
                    onChange={e => setPrefix(e.target.value)}
                />
                <input
                    type="text"
                    id="word-count"
                    placeholder="Number of words"
                    onChange={e => setGenerateNum(Number(e.target.value))}
                />
                <button onClick={generateWords}>Generate</button>
            </div>

            {/* Displayed content */}
            {content}
        </div>
    )
}

export default WordGenerator;