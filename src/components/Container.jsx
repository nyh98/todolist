import React from 'react';
import Header from './header/Header';
import styles from './Container.module.css';
import Main from './main/Main';
import InputText from './inputText/InputText';
import { DarkModeProvider } from '../context/DarkModeContext';
import { TodoListProvider } from '../context/TodoListContext';
import { CurrentViewProvider } from '../context/CurrentViewContext';

export default function Container() {
  return (
    <div className={styles.container}>
      <DarkModeProvider>
        <TodoListProvider>
          <CurrentViewProvider>
            <Header></Header>
            <Main></Main>
          </CurrentViewProvider>
          <InputText></InputText>
        </TodoListProvider>
      </DarkModeProvider>
    </div>
  );
}
