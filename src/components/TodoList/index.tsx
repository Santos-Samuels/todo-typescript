import { useTodo } from '@hooks/usetodo';
import TodoItem from '../TodoItem';


const TodoList: React.FC = () => {
  const { todos } = useTodo()

  if (todos.length === 0) {
    return <h3 style={{textAlign: 'center'}}>Nothing to do yet.</h3>
  }

  return (
    <>
      { todos.map(todo => <TodoItem key={todo.id} todo={todo} />) }
    </>
  );
};

export default TodoList;
