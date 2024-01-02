import React from 'react';
import { MdDelete } from 'react-icons/md';
import styles from './TitleList.module.css';

export default function TitleList({ title, darkMode, setTodo }) {
  return (
    <nav className={styles.todoList}>
      <div className="checkList">
        <input
          type="checkBox"
          onClick={e => {
            setTodo(prev => {
              const index = prev.findIndex(list => list.title === title);
              prev[index].checked = e.target.checked;
              return [...prev];
            });
          }}
        />
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
            const index = prev.findIndex(list => list.title === title);
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
