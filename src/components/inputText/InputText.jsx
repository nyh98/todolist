import React, { useContext } from 'react';
import styles from './InputText.module.css';
import { DarkModeContext } from '../../context/DarkModeContext';
import { TodoListContext } from '../../context/TodoListContext';

export default function InputText() {
  const { darkMode } = useContext(DarkModeContext);
  const [todo, setTodo] = useContext(TodoListContext);
  let text = '';
  return (
    <nav
      className={
        darkMode ? styles['inputText-darkMode'] : styles['inputText-basic']
      }
    >
      <input
        id="list-input-box"
        type="text"
        placeholder="Add Todo"
        onInput={e => (text = e.target.value)}
        className={styles['input-box']}
      />
      <button
        className={styles['input-button']}
        onClick={e => {
          if (text) {
            setTodo(prev => [...prev, { title: text, checked: false }]);
            document.getElementById('list-input-box').value = '';
          }
        }}
      >
        Add
      </button>
    </nav>
  );
}
