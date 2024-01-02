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
        onClick={() =>
          setTodo(prev => {
            const index = prev.indexOf(title);
            prev.splice(index, 1);
            return [...prev];
          })
        }
      >
        <MdDelete />
      </button>
    </nav>
  );
}
