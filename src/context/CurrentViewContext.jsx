import { createContext, useState } from 'react';

export const CurrentViewContext = createContext();

export function CurrentViewProvider({ children }) {
  const [currentView, setCurrentView] = useState({ current: 'All' });
  return (
    <CurrentViewContext.Provider value={{ currentView, setCurrentView }}>
      {children}
    </CurrentViewContext.Provider>
  );
}
