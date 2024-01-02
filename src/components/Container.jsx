import React, { useState } from 'react';
import Header from './header/Header';
import styles from './Container.module.css';
import Main from './main/Main';
import InputText from './inputText/InputText';
import { DarkModeProvider } from '../context/DarkModeContext';
import { TodoListProvider } from '../context/TodoListContext';

export default function Container() {
  return (
    <div className={styles.container}>
      <DarkModeProvider>
        <TodoListProvider>
          <Header></Header>
          <Main></Main>
          <InputText></InputText>
        </TodoListProvider>
      </DarkModeProvider>
    </div>
  );
}
