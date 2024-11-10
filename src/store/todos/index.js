import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoId: 0,
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    _setTodoId: (state, action) => {
      state.todoId = action.payload;
    },
  },
});

export const { _setTodoId } = todos.actions;
export default todos.reducer;
