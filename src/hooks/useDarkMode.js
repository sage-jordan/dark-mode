import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (initial) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initial);
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkMode]);
    return [darkMode, setDarkMode];
}