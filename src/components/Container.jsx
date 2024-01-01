import React from 'react';
import Header from './header/Header';
import styles from './Container.module.css';
import Main from './main/Main';
import InputText from './inputText/InputText';

export default function Container() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Main></Main>
      <InputText></InputText>
    </div>
  );
}
