import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("dark");
    useEffect(() => {
        const body = document.querySelector("body");
        if(darkMode){
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    },[]);

    return [storedValue, setValue];
};