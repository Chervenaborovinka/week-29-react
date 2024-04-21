import { useState, useEffect, } from 'react';

const WordContext = (url) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            fetch(url)
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
        };

    fetchData();
        }, [url]);

        return {words, loading, error};
    };
    
    export default WordContext;

    
