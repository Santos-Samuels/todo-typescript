import React, { useReducer } from "react";
import { todoReducer, ActionsType } from "@store/reducer/index";

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

interface IAppContext {
  todos: ITodo[],
  addTodo: (todo: ITodo) => void,
  completeTodo: (todo: ITodo) => void,
  removeTodos: (todo: ITodo) => void
}

export const TodoContext = React.createContext({} as IAppContext)
const initialState: ITodo[] = []

export const TodoProvider: React.FC = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState)
  
  const addTodo = (todo: ITodo) => {
    dispatch({ type: ActionsType.ADD, payload: todo })
  }
  
  const completeTodo = (todo: ITodo) => {
    dispatch({ type: ActionsType.COMPLETE, payload: todo })
  }
  
  const removeTodos = (todo: ITodo) => {
    dispatch({ type: ActionsType.REMOVE, payload: todo })
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, completeTodo, removeTodos }}>
      { children }
    </TodoContext.Provider>
  )
}