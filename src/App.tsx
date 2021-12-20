import { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm'

interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

const DUMMY_TODOS: ITodo[] = [
  {id: 1, text: 'Hello TypeScript', completed: false},
  {id: 2, text: 'Testing TypeScript', completed: true}
]

function App() {
  const [todos, setTodos] = useState<ITodo[]>(DUMMY_TODOS)

  const completedHandler = (id: number) => {
    const updatedTodos = todos.map(todo => { 
      if (todo.id === id) return { ...todo, completed: !todo.completed }
      
      return todo
    })

    setTodos(updatedTodos)
  }

  const addTodoHandler = (todo: ITodo) => {
    setTodos(prevTodos => {
      return [todo, ...prevTodos]
    })
  }

  const deleteTodoHandler = (id: number) => {
    const updatedTodos = todos.filter(todo => {
      if (todo.id !== id) return todo
      
      return
    })

    setTodos(updatedTodos)
  }

  return (
    <div>
      <TodoForm addTodo={addTodoHandler} />

      { todos.length > 0 ? todos.map(todo => <TodoItem key={todo.id} todo={todo} completedHandler={completedHandler} deleteTodo={deleteTodoHandler} />) : <h3 style={{textAlign: 'center'}}>Nothing to do yet.</h3> }
    </div>
  );
}

export default App;
