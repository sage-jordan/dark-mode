import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("dark");
    useEffect(() => {
        if(darkMode){
            const body = document.querySelector("body");
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    },[]);

    return [storedValue, setValue];
};