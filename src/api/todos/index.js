import axiosClient from "../axiosClient";
import API_ENDPOINTS from "../endpoint";

export const getTodos = async () => {
  return await axiosClient.get(API_ENDPOINTS.TODO);
};

export const getTodoItem = async (id) => {
  return await axiosClient.get(`${API_ENDPOINTS.TODO}/${id}`);
};

export const createTodo = async (data) => {
  return await axiosClient.post(API_ENDPOINTS.TODO, data);
};

export const editTodo = async (id, data) => {
  return await axiosClient.put(`${API_ENDPOINTS.TODO}/${id}`, data);
};

export const deleteTodo = async (id) => {
  return await axiosClient.delete(`${API_ENDPOINTS.TODO}/${id}`);
};
