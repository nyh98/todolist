import React, { useContext } from 'react';
import CustomButton from './CustomButton';
import styles from './buttons.module.css';
import { CurrentViewContext } from '../../../context/CurrentViewContext';

export default function NavMenus() {
  const { currentView, setCurrentView } = useContext(CurrentViewContext);

  const menuNames = {
    All: 'All',
    Action: 'Action',
    Completed: 'Completed',
  };

  function checkCurrentMenuStyle(menuName) {
    return currentView.current === menuName ? styles['curren-view-menu'] : null;
  }

  return (
    <nav>
      <CustomButton
        style={styles['button-style']}
        clickEvent={() =>
          setCurrentView(prev => ({ ...prev, current: menuNames.All }))
        }
      >
        {menuNames.All}
        <div className={checkCurrentMenuStyle(menuNames.All)}></div>
      </CustomButton>
      <CustomButton
        style={styles['button-style']}
        clickEvent={() =>
          setCurrentView(prev => ({ ...prev, current: menuNames.Action }))
        }
      >
        {menuNames.Action}
        <div className={checkCurrentMenuStyle(menuNames.Action)}></div>
      </CustomButton>
      <CustomButton
        style={styles['button-style']}
        clickEvent={() =>
          setCurrentView(prev => ({ ...prev, current: menuNames.Completed }))
        }
      >
        {menuNames.Completed}
        <div className={checkCurrentMenuStyle(menuNames.Completed)}></div>
      </CustomButton>
    </nav>
  );
}
