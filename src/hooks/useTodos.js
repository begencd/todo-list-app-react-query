import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getTodoItem,
  getTodos,
} from "../api/todos";
import { queryClient } from "../main";

export const useTodos = () =>
  useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
  });

export const useTodoItem = (id) =>
  useQuery({
    queryKey: ["todosItem", id],
    queryFn: () => getTodoItem(id),
  });

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: (data) => createTodo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      console.log("success");
    },
    onError: (error) => {
      console.log(error, "error");
    },
  });
};

export const useTodoEdit = () => {
  return useMutation({
    mutationFn: async (data) => await editTodo(data.id, data.value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      console.log("success");
    },
    onError: (error) => {
      console.log(error, "error");
    },
  });
};

export const useTodoDelete = () => {
  return useMutation({
    mutationFn: async (id) => await deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      console.log("success");
    },
    onError: (error) => {
      console.log(error, "error");
    },
  });
};
