import React from 'react';
import CustomButton from './CustomButton';
import { IoSunny } from 'react-icons/io5';
import styles from './buttons.module.css';

export default function DarkModeButton({ setDarkMode }) {
  const chageMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <CustomButton clickEvent={chageMode}>
      <IoSunny className={styles['darkMode-img']} />
    </CustomButton>
  );
}
