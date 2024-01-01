import React from 'react';
import styles from './Main.module.css';
import TodoList from './todoList/TodoList';

export default function Main() {
  return (
    <main className={styles['main-text']}>
      <TodoList></TodoList>
      <TodoList></TodoList>
      <TodoList></TodoList>
    </main>
  );
}
