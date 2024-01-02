import React from 'react';
import styles from './Main.module.css';
import TitleList from './titleList/TitleList';

export default function Main({ todo, setTodo, darkMode }) {
  return (
    <main className={darkMode ? styles['main-darkMode'] : styles['main-basic']}>
      {todo.map(title => (
        <TitleList
          title={title}
          key={title[0]}
          setTodo={setTodo}
          darkMode={darkMode}
        ></TitleList>
      ))}
    </main>
  );
}
