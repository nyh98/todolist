import React, { useContext } from 'react';
import CustomButton from './CustomButton';
import styles from './buttons.module.css';
import { CurrentViewContext } from '../../../context/CurrentViewContext';

export default function NavMenus() {
  const { setCurrentView } = useContext(CurrentViewContext);
  return (
    <nav>
      <CustomButton
        style={styles['button-style']}
        clickEvent={() => setCurrentView(prev => ({ ...prev, current: 'All' }))}
      >
        All
      </CustomButton>
      <CustomButton
        style={styles['button-style']}
        clickEvent={() =>
          setCurrentView(prev => ({ ...prev, current: 'Action' }))
        }
      >
        Action
      </CustomButton>
      <CustomButton
        style={styles['button-style']}
        clickEvent={() =>
          setCurrentView(prev => ({ ...prev, current: 'Completed' }))
        }
      >
        Completed
      </CustomButton>
    </nav>
  );
}
