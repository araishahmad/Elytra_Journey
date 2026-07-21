import { useState, useEffect } from 'react';

function useDebounce (value, delay){
    const [debounceValue, setdebounceValue] = useState(value);

    useEffect (() => {
        const timeOut = setTimeout (() => {
            setdebounceValue(value);
        }, delay);

        return () => clearTimeout(timeOut);
    }, [value, delay]);

    return debounceValue;
}

export default useDebounce;