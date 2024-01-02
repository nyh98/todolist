import React from 'react';
import styles from './InputText.module.css';

export default function InputText({ setDataFuction }) {
  let text = '';
  return (
    <nav className={styles.inputText}>
      <input id="input" type="text" onInput={ev => (text = ev.target.value)} />
      <button
        className={styles['input-button']}
        onClick={e => {
          if (text) {
            setDataFuction(prev => [...prev, text]);
          }
          document.getElementById('input').value = '';
        }}
      >
        Add
      </button>
    </nav>
  );
}
