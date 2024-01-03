import React, { useContext } from 'react';
import styles from './Main.module.css';
import TitleList from './titleList/TitleList';
import { DarkModeContext } from '../../context/DarkModeContext';
import { TodoListContext } from '../../context/TodoListContext';
import { CurrentViewContext } from '../../context/CurrentViewContext';

export default function Main() {
  const { darkMode } = useContext(DarkModeContext);
  const [todo] = useContext(TodoListContext);
  const { currentView } = useContext(CurrentViewContext);

  if (currentView.current === 'All') {
    return (
      <main
        className={darkMode ? styles['main-darkMode'] : styles['main-basic']}
      >
        {todo.map((list, index) => (
          <TitleList
            title={list.title}
            key={index}
            darkMode={darkMode}
          ></TitleList>
        ))}
      </main>
    );
  }

  if (currentView.current === 'Action') {
    return (
      <main
        className={darkMode ? styles['main-darkMode'] : styles['main-basic']}
      >
        {todo.map((list, index) => {
          if (list.checked === false) {
            return (
              <TitleList
                title={list.title}
                key={index}
                darkMode={darkMode}
              ></TitleList>
            );
          }
          return null;
        })}
      </main>
    );
  }

  if (currentView.current === 'Completed') {
    return (
      <main
        className={darkMode ? styles['main-darkMode'] : styles['main-basic']}
      >
        {todo.map((list, index) => {
          if (list.checked === true) {
            return (
              <TitleList
                title={list.title}
                key={index}
                darkMode={darkMode}
              ></TitleList>
            );
          }
          return null;
        })}
      </main>
    );
  }
}
