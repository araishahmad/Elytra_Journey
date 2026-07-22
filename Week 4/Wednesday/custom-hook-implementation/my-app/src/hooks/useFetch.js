import { useState, useEffect } from 'react';

function useFetch(fetchFn) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchFn()
            .then((res) => setData(res))
            .catch((err) => setError(err.message))
                .finally(() => setLoading(false))
    }, [fetchFn]);

    return {data, loading, error};
}

export default useFetch;