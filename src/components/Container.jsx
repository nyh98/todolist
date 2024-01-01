import React, { useState } from 'react';
import Header from './header/Header';
import styles from './Container.module.css';
import Main from './main/Main';
import InputText from './inputText/InputText';

export default function Container() {
  const [todoTitles, setTodoTitles] = useState([]);

  return (
    <div className={styles.container}>
      <Header></Header>
      <Main todoTitles={todoTitles}></Main>
      <InputText setDataFuction={setTodoTitles}></InputText>
    </div>
  );
}
