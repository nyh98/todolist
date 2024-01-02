import React from 'react';
import { MdDelete } from 'react-icons/md';
import styles from './TitleList.module.css';

export default function TitleList({ title, setTodo }) {
  return (
    <nav className={styles.todoList}>
      <div>
        <input type="checkBox" />
        <label htmlFor="test" className={styles['text-style']}>
          {title}
        </label>
      </div>
      <button
        className={styles['deleted-button']}
        onClick={() => setTodo(prev => prev.filter(list => title !== list))}
      >
        <MdDelete />
      </button>
    </nav>
  );
}
