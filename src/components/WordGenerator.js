import React, {useState, useEffect} from 'react';

// Components
import Word from './wordgenerator/Word';

// Word generation tools
import {combinations, MarkovObj, generate, words} from '../utils/MarkovUtils';
const combolength = 3; // Number of chars it reads to decide the next letter


const WordGenerator = (props) => {
    const [markov] = useState(new Map()); // Markov model
    const [content, setContent] = useState(null); // Displayed output

    // User input
    const [prefix, setPrefix] = useState(null);
    const [generateNum, setGenerateNum] = useState(0);


    // Initialize markov model
    useEffect(() => {
        // For each combo, initialize the markov model and the start map
        for (const combo of combinations(combolength)) {
            markov.set(combo, new MarkovObj());
        }

        // Just go through words and do the markov model /shrug
        for (const word of words) {
            for (let i = 0; i < word.length - combolength; i++) {
                let prevcombo = word.slice(i, i + combolength);
                markov.get(prevcombo).add(word.charAt(i + combolength));
            }
        }
    }, []);


    // Generate words from prefix
    const generateWords = () => {
        if (!prefix || prefix.length < combolength) return setContent(<span>Prefix must be a set of chars greater than or equal to {combolength}</span>);
        if (generateNum < 1) return setContent(<span>You must choose a positive number of words to generate!</span>)

        setContent(parseGenerated(generate(prefix, combolength, generateNum, markov)))
    }

    // Display generated words
    const parseGenerated = (result) => {
        let content = [...result].map(word => <Word name={word}/>)

        return (
            <ul className="word-gen-results">
                {content}
            </ul>
        )
    }


    return (
        <div>
            <h1>Roger Fan Markov Chain word generation</h1>

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
                    onChange={e => setGenerateNum(e.target.value)}
                />
            </div>

            <button onClick={generateWords}>Generate</button>

            {/* Displayed content */}
            {content}
        </div>
    )
}

export default WordGenerator;