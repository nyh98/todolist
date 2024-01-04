import React, { useContext } from 'react';
import styles from './Header.module.css';
import DarkModeButton from './buttons/DarkModeButton';
import NavMenus from './buttons/NavMenus';

export default function Header() {
  return (
    <nav className={styles['top-basic']}>
      <DarkModeButton></DarkModeButton>
      <NavMenus></NavMenus>
    </nav>
  );
}
