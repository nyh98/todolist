import React from 'react';
import styles from './Main.module.css';
import TodoList from './todoList/TodoList';

export default function Main({ todoTitles }) {
  return (
    <main className={styles['main-text']}>
      {todoTitles.map(title => (
        <TodoList title={title} key={title[0]}></TodoList>
      ))}
    </main>
  );
}
