import React from 'react';
import { MdDelete } from 'react-icons/md';
import styles from './TitleList.module.css';

export default function TitleList({ title }) {
  return (
    <nav className={styles.todoList}>
      <div>
        <input type="checkBox" onClick={e => console.log(e.target.checked)} />
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
