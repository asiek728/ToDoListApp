import React, { useState, useContext, createContext } from "react"

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext)


const TodoFilterContext = createContext()

export const TodoFilterProvider = ({ children }) => {
  const [filteredTodos, setFilteredTodos] = useState([]);

  return (
    <TodoFilterContext.Provider value={{ filteredTodos, setFilteredTodos }}>
      {children}
    </TodoFilterContext.Provider>
  );
};

export const useTodoFilter = () => useContext(TodoFilterContext)
