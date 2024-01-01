import React from 'react';
import styles from './Header.module.css';
import { IoSunny } from 'react-icons/io5';

export default function Header() {
  return (
    <nav className={styles.top}>
      <button className={styles['darkMode-button']}>
        <IoSunny className={styles['darkMode-img']} />
      </button>
    </nav>
  );
}
