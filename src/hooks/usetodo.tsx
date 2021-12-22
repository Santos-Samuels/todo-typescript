import { useContext } from "react";
import { TodoContext } from "@context/index";

export const useTodo = () => useContext(TodoContext)