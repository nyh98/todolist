import React, { useContext } from 'react';
import styles from './Main.module.css';
import TitleList from './titleList/TitleList';
import { DarkModeContext } from '../../context/DarkModeContext';

export default function Main({ todo, setTodo }) {
  const { darkMode } = useContext(DarkModeContext);

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
