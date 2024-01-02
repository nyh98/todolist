import React from 'react';
import styles from './Main.module.css';
import TitleList from './titleList/TitleList';

export default function Main({ todo }) {
  return (
    <main className={styles['main-text']}>
      {todo.map(title => (
        <TitleList title={title} key={title[0]}></TitleList>
      ))}
    </main>
  );
}
