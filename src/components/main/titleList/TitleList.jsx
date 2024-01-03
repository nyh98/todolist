import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import styles from './TitleList.module.css';
import { TodoListContext } from '../../../context/TodoListContext';

export default function TitleList({ title, darkMode }) {
  const [todo, setTodo] = useContext(TodoListContext);
  const index = todo.findIndex(list => list.title === title);
  return (
    <nav className={styles.todoList}>
      <div className="checkList">
        <input
          id="check"
          type="checkbox"
          onChange={e => {
            setTodo(prev => {
              prev[index].checked = e.target.checked;
              return [...prev];
            });
          }}
          checked={todo[index].checked}
        />
        <label
          htmlFor="check"
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
