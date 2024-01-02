import React, { useState } from 'react';
import Header from './header/Header';
import styles from './Container.module.css';
import Main from './main/Main';
import InputText from './inputText/InputText';

export default function Container() {
  const [todoList, setTodo] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={styles.container}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
      <Main darkMode={darkMode} todo={todoList} setTodo={setTodo}></Main>
      <InputText darkMode={darkMode} setTodo={setTodo}></InputText>
    </div>
  );
}
