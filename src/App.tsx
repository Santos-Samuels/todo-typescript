import { TodoItem, TodoForm } from './components';
import { ITodo } from './context'
import { useTodo } from './hooks/usetodo';


function App() {
  const {todos, setTodos} = useTodo() 

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
