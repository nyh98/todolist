import React from 'react';
import CustomButton from './CustomButton';
import { IoSunny } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
import styles from './buttons.module.css';

export default function DarkModeButton({ darkMode, setDarkMode }) {
  const chageMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <CustomButton clickEvent={chageMode}>
      {darkMode ? (
        <FaMoon className={styles['darkMode-img']} />
      ) : (
        <IoSunny className={styles['whiteMode-img']} />
      )}
    </CustomButton>
  );
}
