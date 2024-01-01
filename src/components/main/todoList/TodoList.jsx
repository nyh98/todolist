import React from 'react';
import { MdDelete } from 'react-icons/md';
import styles from './TodoList.module.css';

export default function TodoList({ title }) {
  return (
    <nav className={styles.todoList}>
      <div>
        <input type="checkBox" />
        <label htmlFor="test" className={styles['text-style']}>
          {title}
        </label>
      </div>
      <button className={styles['deleted-button']}>
        <MdDelete />
      </button>
    </nav>
  );
}
