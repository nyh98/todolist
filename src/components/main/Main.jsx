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

  function cratedTitleList(list, index) {
    return <TitleList id={list.id} key={index}></TitleList>;
  }

  function viewItems() {
    switch (currentView.current) {
      case 'All':
        return todo.map((list, index) => cratedTitleList(list, index));
      case 'Action':
        return todo.map((list, index) => {
          if (list.checked === false) {
            return cratedTitleList(list, index);
          }
          return null;
        });
      case 'Completed':
        return todo.map((list, index) => {
          if (list.checked === true) {
            return cratedTitleList(list, index);
          }
          return null;
        });
      default:
        throw new Error(`알수없는 current : ${currentView.current}`);
    }
  }

  return (
    <main className={darkMode ? styles['main-darkMode'] : styles['main-basic']}>
      {viewItems()}
    </main>
  );
}
