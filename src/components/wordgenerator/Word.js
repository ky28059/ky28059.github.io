import React from 'react';

const Word = (props) => {
    let {name} = props;

    return (
        <li
            onClick={() => {navigator.clipboard.writeText(name)}}
            className="word"
        >{name}</li>
    )
}

export default Word;