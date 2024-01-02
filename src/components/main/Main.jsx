import React, { useContext } from 'react';
import styles from './Main.module.css';
import TitleList from './titleList/TitleList';
import { DarkModeContext } from '../../context/DarkModeContext';
import { TodoListContext } from '../../context/TodoListContext';

export default function Main() {
  const { darkMode } = useContext(DarkModeContext);
  const [todo, setTodo] = useContext(TodoListContext);

  return (
    <main className={darkMode ? styles['main-darkMode'] : styles['main-basic']}>
      {todo.map((list, index) => (
        <TitleList
          title={list.title}
          key={index}
          setTodo={setTodo}
          darkMode={darkMode}
        ></TitleList>
      ))}
    </main>
  );
}
