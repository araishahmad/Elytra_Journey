import { useState,useEffect } from 'react';

export const useDebounce = (value, delay) => {
    const [deBounceValue, setdeBounceValue] = useState('');

    useEffect (() => {
        const timeoutId = setTimeout (() => {
            setdeBounceValue(value);
        }, delay);

        return () => clearTimeout(timeoutId);
    });

    return deBounceValue.toLowerCase();
}