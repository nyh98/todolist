import React from 'react';
import styles from './Header.module.css';

import CustomButton from './buttons/CustomButton';
import DarkModeButton from './buttons/DarkModeButton';
import NavMenus from './buttons/NavMenus';

export default function Header() {
  return (
    <nav className={styles.top}>
      <DarkModeButton></DarkModeButton>
      <NavMenus></NavMenus>
    </nav>
  );
}
