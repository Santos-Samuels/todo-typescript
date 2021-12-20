import React, { useState } from "react";
import styled from "styled-components";
import { ITodo } from '../context';

const Form = styled.form`
  margin: 20px 0 40px 0;

  & input {
    border: solid 1px rgba(5, 4, 4, 0.1);
    border-radius: 8px;
    padding: 8px;
    width: 80%;
    margin-right: 10px;
  }

  & button {
    border: solid 1px rgba(4, 160, 17, 0.1);
    border-radius: 8px;
    padding: 8px;
    width: 15%;
    background-color: #86dc3d;
    color: #ffff;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
  }

  & button:hover {
    background-color: #76c530;
  }
`;

const TodoForm: React.FC<{ addTodo: (todo: ITodo) => void }> = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enteredTodo.trim()) {
      props.addTodo({
        id: Date.now(),
        text: enteredTodo,
        completed: false,
      });

      setEnteredTodo("");
    }
  };

  return (
    <Form onSubmit={(e) => formHandler(e)}>
      <input
        type="text"
        value={enteredTodo}
        onChange={(e) => setEnteredTodo(e.target.value)}
        name="new-todo"
        id="new-todo"
        placeholder="Enter a new todo"
      />
      <button>Add</button>
    </Form>
  );
};

export default TodoForm;
