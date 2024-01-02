import React, { useContext } from 'react';
import CustomButton from './CustomButton';
import { IoSunny } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
import styles from './buttons.module.css';
import { DarkModeContext } from '../../../context/DarkModeContext';

export default function DarkModeButton() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <CustomButton clickEvent={toggleDarkMode}>
      {darkMode ? (
        <FaMoon className={styles['darkMode-img']} />
      ) : (
        <IoSunny className={styles['whiteMode-img']} />
      )}
    </CustomButton>
  );
}
