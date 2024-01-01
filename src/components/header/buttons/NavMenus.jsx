import React from 'react';
import CustomButton from './CustomButton';
import styles from './buttons.module.css';

export default function NavMenus() {
  return (
    <nav>
      <CustomButton style={styles['All-button']} text={'All'}></CustomButton>
      <CustomButton
        style={styles['Action-button']}
        text={'Action'}
      ></CustomButton>
      <CustomButton
        style={styles['Completed-button']}
        text={'Completed'}
      ></CustomButton>
    </nav>
  );
}
