import { createContext, useEffect, useState } from 'react';

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem('todo') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  return (
    <TodoListContext.Provider value={[todo, setTodo]}>
      {children}
    </TodoListContext.Provider>
  );
}
