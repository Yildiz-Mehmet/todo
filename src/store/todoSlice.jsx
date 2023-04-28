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
    addTodo: (state, { payload }) => {
      const newTodo = {
        id: Date.now(),
        text: payload?.text,
        completed: false,
      };
      state.todoItems.push(newTodo);
    },
    editTodo: (state, { payload }) => {},
    deleteTodo: (state, { payload }) => {
      state.todoItems = state.todoItems.filter(
        (item) => item.id !== payload?.id
      );
    },
  },
});
export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
