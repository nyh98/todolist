import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import styles from './TitleList.module.css';
import { TodoListContext } from '../../../context/TodoListContext';
import { DarkModeContext } from '../../../context/DarkModeContext';

export default function TitleList({ id }) {
  const { darkMode } = useContext(DarkModeContext);
  const [todo, setTodo] = useContext(TodoListContext);
  const index = todo.findIndex(list => list.id === id);

  function checkedItem(e) {
    setTodo(prev => {
      prev[index].checked = e.target.checked;
      return [...prev];
    });
  }

  function deletedItem() {
    setTodo(prev => {
      prev.splice(index, 1);
      return [...prev];
    });
  }
  return (
    <nav className={styles.todoList}>
      <div className="checkList">
        <input
          id="check"
          type="checkbox"
          onChange={checkedItem}
          checked={todo[index].checked}
        />
        <label
          htmlFor="check"
          className={
            darkMode
              ? styles['text-style-darkMode']
              : styles['text-style-basic']
          }
          style={
            todo[index].checked ? { textDecoration: 'line-through' } : null
          }
        >
          {todo[index].title}
        </label>
      </div>
      <button className={styles['deleted-button']} onClick={deletedItem}>
        <MdDelete />
      </button>
    </nav>
  );
}
