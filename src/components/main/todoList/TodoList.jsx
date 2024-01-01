import React from 'react';
import { MdDelete } from 'react-icons/md';
import styles from './TodoList.module.css';

export default function TodoList() {
  return (
    <nav className={styles.todoList}>
      <div>
        <input type="checkBox" />
        <label htmlFor="test"></label>
      </div>
      <button className={styles['deleted-button']}>
        <MdDelete />
      </button>
    </nav>
  );
}
