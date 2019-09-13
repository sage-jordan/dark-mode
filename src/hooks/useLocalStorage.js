import { useState } from 'react';

export const useLocalStorage = (key, initValue) => {
    const item = JSON.parse(window.localStorage.getItem(key));

  const [storedValue, setStoredValue] = useState(item || initValue);

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};;