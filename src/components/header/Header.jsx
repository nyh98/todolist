import React from 'react';
import styles from './Header.module.css';
import DarkModeButton from './buttons/DarkModeButton';
import NavMenus from './buttons/NavMenus';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <nav className={darkMode ? styles['top-darkMode'] : styles['top-basic']}>
      <DarkModeButton
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      ></DarkModeButton>
      <NavMenus></NavMenus>
    </nav>
  );
}
