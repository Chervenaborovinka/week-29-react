import React, { useState, useContext } from 'react';
import WordContext from '../WordContext/WordContext';

const WordCard = () => {
    const [newWord, setNewWord] = useState({ word: '', translation: '' });
    const { addWord } = useContext(WordContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewWord((prevWord) => ({
            ...prevWord,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addWord(newWord);
        setNewWord({ word: '', translation: '' });
    };

    return (
        <div>
            <h2>Add New Word:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="word" value={newWord.word} onChange={handleChange} placeholder="Enter Word" />
                <input type="text" name="translation" value={newWord.translation} onChange={handleChange} placeholder="Enter Translation" />
                <button type="submit">Add Word</button>
            </form>
        </div>
    );
};

export default WordCard;
