import React, { useState } from "react";
import { useTodo } from "@hooks/usetodo";
import { Form } from './styled'

const TodoForm: React.FC = () => {
  const {addTodo} = useTodo()
  const [enteredTodo, setEnteredTodo] = useState("");
  const [validationTodo, setValidationTodo] = useState(true)

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enteredTodo.trim()) {
      addTodo({
        id: Date.now(),
        text: enteredTodo,
        completed: false,
      });

      setEnteredTodo("");
      setValidationTodo(true)

      return
    }

    setValidationTodo(false)
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

      { (!validationTodo && !enteredTodo) && <p>Can't add empety todo!</p> }
    </Form>
  );
};

export default TodoForm;
