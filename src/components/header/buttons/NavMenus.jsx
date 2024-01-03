import React, { useContext } from 'react';
import CustomButton from './CustomButton';
import styles from './buttons.module.css';
import { CurrentViewContext } from '../../../context/CurrentViewContext';
import { DarkModeContext } from '../../../context/DarkModeContext';

export default function NavMenus() {
  const { currentView, setCurrentView } = useContext(CurrentViewContext);
  const { darkMode } = useContext(DarkModeContext);
  const menuNames = {
    All: 'All',
    Action: 'Action',
    Completed: 'Completed',
  };

  function checkCurrentMenu(menuName) {
    const style =
      currentView.current === menuName
        ? darkMode
          ? styles['curren-view-menu-darkMode']
          : styles['curren-view-menu']
        : null;

    return style;
  }

  return (
    <nav>
      <CustomButton
        style={styles['button-style']}
        clickEvent={() => setCurrentView(prev => ({ ...prev, current: 'All' }))}
      >
        {menuNames.All}
        <div className={checkCurrentMenu(menuNames.All)}></div>
      </CustomButton>
      <CustomButton
        style={styles['button-style']}
        clickEvent={() =>
          setCurrentView(prev => ({ ...prev, current: 'Action' }))
        }
      >
        {menuNames.Action}
        <div className={checkCurrentMenu(menuNames.Action)}></div>
      </CustomButton>
      <CustomButton
        style={styles['button-style']}
        clickEvent={() =>
          setCurrentView(prev => ({ ...prev, current: 'Completed' }))
        }
      >
        {menuNames.Completed}
        <div className={checkCurrentMenu(menuNames.Completed)}></div>
      </CustomButton>
    </nav>
  );
}
