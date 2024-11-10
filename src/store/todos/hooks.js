import { useSelector } from "react-redux";

export const useTodos = () => useSelector((state) => state.todos.todoId);
