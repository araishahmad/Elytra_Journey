import { useState, useEffect } from 'react';

function useDebounce (value, delay){
    const [debounceValue, setDebounce] = useState(value);

    useEffect (() => {
        const timeOut = setTimeout (() => {
            setDebounce(value);
        }, delay)

        return () => clearTimeout(timeOut);
    }, [value, delay]);

    return debounceValue;
}

export default useDebounce;