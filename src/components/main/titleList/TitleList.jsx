import React from 'react';
import { MdDelete } from 'react-icons/md';
import styles from './TitleList.module.css';

export default function TitleList({ title, setTodo, darkMode }) {
  return (
    <nav className={styles.todoList}>
      <div className="checkList">
        <input type="checkBox" />
        <label
          htmlFor="checkBox"
          className={
            darkMode
              ? styles['text-style-darkMode']
              : styles['text-style-basic']
          }
        >
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
