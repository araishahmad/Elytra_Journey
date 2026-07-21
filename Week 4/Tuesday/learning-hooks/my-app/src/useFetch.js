import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect (() => {
        fetch(url)
        .then (res => {
            if (!res.ok) throw new Error('Failed to fetch data');
            return res.json();
        })
        .then(result => setData(result.products))
        .catch(err => setError(err.message))
    }, [url]);

    return [data, error]; 
}

export default useFetch;