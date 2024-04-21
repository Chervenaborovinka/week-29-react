import React from "react";
import WordContext from '../WordContext/WordContext';

const WordList = () => {
    const {
        response: words,
        loading,
        error,
    } = WordContext('http://itgirlschool.justmakeit.ru/api/words');
    
    return(
        <div>
            {loading ? (<p>Loading...</p>
            ) : error ? (<p>

            {error.message}</p>
            ) : (
                <ul>
                {words.map((word) => (
                    <li>
                    <span>{word.english}</span>
                    <span>{word.transcription}</span>
                    <span>{word.russian}</span>
                    </li>
                ))}
                </ul>
            )}
        </div> 
    );
};

export default WordList;