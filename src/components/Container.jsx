import React, { useState } from 'react';
import Header from './header/Header';
import styles from './Container.module.css';
import Main from './main/Main';
import InputText from './inputText/InputText';
import { DarkModeProvider } from '../context/DarkModeContext';

export default function Container() {
  return (
    <div className={styles.container}>
      <DarkModeProvider>
        <Header></Header>
        <Main></Main>
        <InputText></InputText>
      </DarkModeProvider>
    </div>
  );
}
