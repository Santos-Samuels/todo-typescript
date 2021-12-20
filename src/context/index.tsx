import React, { Dispatch, SetStateAction, useState } from "react";

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

interface IAppContext {
  todos: ITodo[]
  setTodos: Dispatch<SetStateAction<ITodo[]>>
}


export const TodoContext = React.createContext({} as IAppContext)

export const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([])
  
  // const updateTodos = (array: ITodo[]) => {
  //   setTodos(array)
  // }

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      { children }
    </TodoContext.Provider>
  )
}