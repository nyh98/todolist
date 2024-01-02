import React, { useState } from 'react';
import Header from './header/Header';
import styles from './Container.module.css';
import Main from './main/Main';
import InputText from './inputText/InputText';

export default function Container() {
  const [todoList, setTodo] = useState([]);

  return (
    <div className={styles.container}>
      <Header></Header>
      <Main todo={todoList}></Main>
      <InputText setTodo={setTodo}></InputText>
    </div>
  );
}
