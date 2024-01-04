import React, { useContext, useState } from 'react';
import styles from './InputText.module.css';
import { v4 as uuidv4 } from 'uuid';
import { DarkModeContext } from '../../context/DarkModeContext';
import { TodoListContext } from '../../context/TodoListContext';

export default function InputText() {
  const { darkMode } = useContext(DarkModeContext);
  const [todo, setTodo] = useContext(TodoListContext);
  const [text, setText] = useState('');

  function updateTodo() {
    // const validateText = text.replace(/^\s+|\s+$/g, ''); 문자열 시작과 끝 공백 여부 정규표현식 검증
    const validateText = text.trim(); //String 객체 trim 메서드(문자열 시작과 끝 공백 제거)
    if (validateText) {
      setTodo(prev => [
        ...prev,
        { title: validateText, checked: false, id: uuidv4() },
      ]);
    }
    setText('');
  }

  function enterkey(e) {
    if (e.keyCode === 13 && text) {
      updateTodo();
    }
  }

  return (
    <section
      className={
        darkMode ? styles['inputText-darkMode'] : styles['inputText-basic']
      }
    >
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onInput={e => setText(e.target.value)}
        className={styles['input-box']}
        onKeyDown={enterkey}
      />
      <button
        className={styles['input-button']}
        onClick={() => {
          if (text) {
            updateTodo();
          }
        }}
      >
        Add
      </button>
    </section>
  );
}
