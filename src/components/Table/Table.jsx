import React, { useContext } from 'react';
import WordContext from '../WordContext/WordContext';

const Table = () => {
    const { words, updateWord, deleteWord } = useContext(WordContext);

    const handleUpdate = (updatedWord) => {
        updateWord(updatedWord);
    };

    const handleDelete = (wordId) => {
        deleteWord(wordId);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Word</th>
                    <th>Translation</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {words.map((word) => (
                    <tr key={word.id}>
                        <td>{word.id}</td>
                        <td>{word.word}</td>
                        <td>{word.translation}</td>
                        <td>
                            <button onClick={() => handleUpdate({ id: word.id, word: 'Updated Word', translation: 'Updated Translation' })}>Update</button>
                            <button onClick={() => handleDelete(word.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
