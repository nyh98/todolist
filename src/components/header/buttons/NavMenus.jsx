import React from 'react';
import CustomButton from './CustomButton';
import styles from './buttons.module.css';

export default function NavMenus() {
  return (
    <nav>
      <CustomButton style={styles['All-button']}>All</CustomButton>
      <CustomButton style={styles['Action-button']}>Action</CustomButton>
      <CustomButton style={styles['Completed-button']}>Completed</CustomButton>
    </nav>
  );
}
