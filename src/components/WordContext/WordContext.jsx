import React, { useState, useEffect, createContext } from 'react';
import WordCard from '../WordCard/WordCard';
import Table from "../Table/Table";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const Context = createContext();

const WordContext = ({ children }) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://itgirlschool.justmakeit.ru/api/words')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => {
                setWords(response)
                setLoading(false)
            })
            .catch(error => setError(error));
    }, []);

    const addWord = (newWord) => {
        fetch('http://itgirlschool.justmakeit.ru/api/words', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newWord),
        })
        .then(response => response.json())
        .then(data => {
            setWords([...words, data]);
        })
        .catch(error => setError(error));
    };

    const updateWord = (updatedWord) => {
        fetch('http://itgirlschool.justmakeit.ru/api/words', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedWord),
    })
        .then(response => response.json())
        .then(data => {
            const updatedWords = words.map((word) => word.id === data.id ? data : word);
            setWords(updatedWords);
        })
        .catch(error => setError(error));
    };

    const deleteWord = (wordId) => {
        fetch('http://itgirlschool.justmakeit.ru/api/words', {
            method: 'DELETE',
        })
        .then(() => {
            const updatedWords = words.filter((word) => word.id !== wordId);
            setWords(updatedWords);
        })
        .catch(error => setError(error));
    };
    

    return (
        <Context.Provider value={{ words, addWord, updateWord, deleteWord }}>
            {loading ? (<p>Loading...</p>
            ) : error ? (
                <ErrorComponent message={error} />
            ) : (
                <>
                    <Table />
                    <WordCard />
                    {children}
                </>
            )}
        </Context.Provider>
    );

};


export default WordContext;
