import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Navbar = () => {
  const [darkMode] = useDarkMode();
  const [storedValue, setValue] = useLocalStorage();

  const toggleMode = e => {
    e.preventDefault();
    darkMode();
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
