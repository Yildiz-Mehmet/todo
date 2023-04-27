import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoItems: [
      {
        id: 1,
        text: "Bugün doktordan randevum var",
        completed: false,
      },
    ],
    completed: false,
  },
  reducers: {
    addTodo: (state, { payload }) => {},
    editTodo: (state, { payload }) => {},
    deleteTodo: (state, { payload }) => {},
  },
});
export const todoActions = todoSlice.actions;
export default todoSlice;
