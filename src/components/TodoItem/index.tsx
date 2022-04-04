import { ITodo } from '@context/index';
import { useTodo } from "@hooks/usetodo";
import { Todo } from './styled'

const TodoItem: React.FC<{
  todo: ITodo;
}> = (props) => {
  const {completeTodo, removeTodos} = useTodo()

  return (
    <Todo
      completed={props.todo.completed}
    >
      <li>{props.todo.text}</li>
      
      <div>
        <span onClick={() => completeTodo(props.todo)}>{props.todo.completed ? 'uncheck' : 'check'}</span>
        <span onClick={() => removeTodos(props.todo)}>delete</span>
      </div>
    </Todo>
  );
};

export default TodoItem;
