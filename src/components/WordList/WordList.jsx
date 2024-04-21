import React from "react";
import WordContext from '../WordContext/WordContext';
import styles from './WordList.module.css';

const WordList = () => {
    const {
        words,
        loading,
        error,
    } = WordContext('http://itgirlschool.justmakeit.ru/api/words');
    
    return(
        <div className={styles.table}>
            {loading ? (<p>Loading...</p>
            ) : error ? (<p>

            {error.message}</p>
            ) : (
                <ul className={styles.wordcolumn}>
                {words.map((word) => (
                    <li className={styles.wordrow}>
                    <div >{word.english}</div>
                    <div>{word.transcription}</div>
                    <div>{word.russian}</div>
                    </li>
                ))}
                </ul>
            )}
        </div> 
    );
};

export default WordList;