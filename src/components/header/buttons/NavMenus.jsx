import React from 'react';
import CustomButton from './CustomButton';
import styles from './buttons.module.css';

export default function NavMenus() {
  return (
    <nav>
      <CustomButton style={styles['button-style']}>All</CustomButton>
      <CustomButton style={styles['button-style']}>Action</CustomButton>
      <CustomButton style={styles['button-style']}>Completed</CustomButton>
    </nav>
  );
}
