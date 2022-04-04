import { ITodo } from "@context/index";

export enum ActionsType {
  ADD = 'ADD',
  COMPLETE = 'COMPLETE',
  REMOVE = 'REMOVE'
}

export interface ReducerActions {
  type: ActionsType,
  payload: ITodo
}


export const todoReducer = (state: ITodo[], action: ReducerActions) => {
  if (action.type === ActionsType.ADD) {
    const newTodo = action.payload
    return [newTodo, ...state]
  }

  if (action.type === ActionsType.COMPLETE) {
    const updatedTodos = state.map(todo => { 
      if (todo.id === action.payload.id) return { ...todo, completed: !todo.completed }
      
      return todo
    })
  
    return updatedTodos
  }

  if (action.type === ActionsType.REMOVE) {
    const updatedTodos = state.filter(todo => {
      if (todo.id !== action.payload.id) return todo
        
      return
    })
  
    return updatedTodos
  }

  return state
}