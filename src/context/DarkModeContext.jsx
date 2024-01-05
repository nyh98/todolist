import { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(fetchDarkModeFromLocalStorage);

  const toggleDarkMode = () => {
    setDarkMode(mode => !mode);
    updateDarkMode(darkMode);
  };

  function fetchDarkModeFromLocalStorage() {
    const localTodo = localStorage.getItem('darkMode');
    return localTodo ? JSON.parse(localTodo) : false;
  }

  function updateDarkMode(darkMode) {
    if (darkMode) {
      document.documentElement.classList.add('darkMode');
    } else {
      document.documentElement.classList.remove('darkMode');
    }
  }

  updateDarkMode(darkMode); //처음 렌더링시 다크모드 설정

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
