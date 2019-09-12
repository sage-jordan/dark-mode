import { useState } from 'react';
import JSDOMEnvironment from 'jest-environment-jsdom';

export const useLocalStorage = (key, initValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSDOMEnvironment.parse(item) : initValue;
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};;