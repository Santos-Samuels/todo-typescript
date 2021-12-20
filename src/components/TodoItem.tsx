import styled from "styled-components";

interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

const Todo = styled.article<{ completed: boolean }>`
  border: solid 1px rgba(5, 4, 4, 0.1);
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px;
  margin: 8px 0;
  display: flex;
  justify-content: space-between;

  & li {
    list-style: none;
    text-decoration: ${(props) => (props.completed ? "line-through" : "")};
    opacity: ${(props) => (props.completed ? "0.4" : "")};
  }

  & div span:nth-child(1) {
    color: #86DC3D;
    margin-right: 10px;
    cursor: pointer;
  }

  & div span:nth-child(2) {
    color: red;
    cursor: pointer;
  }
`;

const TodoItem: React.FC<{
  todo: ITodo;
  completedHandler: (id: number) => void;
  deleteTodo: (id: number) => void;
}> = (props) => {
  return (
    <Todo
      completed={props.todo.completed}
    >
      <li>{props.todo.text}</li>
      
      <div>
        <span onClick={() => props.completedHandler(props.todo.id)}>{props.todo.completed ? 'uncheck' : 'check'}</span>
        <span onClick={() => props.deleteTodo(props.todo.id)}>delete</span>
      </div>
    </Todo>
  );
};

export default TodoItem;
