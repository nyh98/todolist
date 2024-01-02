import React, { useContext } from 'react';
import styles from './Header.module.css';
import DarkModeButton from './buttons/DarkModeButton';
import NavMenus from './buttons/NavMenus';
import { DarkModeContext } from '../../context/DarkModeContext';

//darkMode, setDarkMode
export default function Header() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <nav className={darkMode ? styles['top-darkMode'] : styles['top-basic']}>
      <DarkModeButton></DarkModeButton>
      <NavMenus></NavMenus>
    </nav>
  );
}
