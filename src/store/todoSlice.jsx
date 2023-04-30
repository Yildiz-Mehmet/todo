import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoItems: [],
    editItem: [],
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
    editTodo: (state, { payload }) => {
      const edit = state.todoItems.find((item) => item.id === payload?.id);
      state.editItem.push(edit);
    },
    deleteTodo: (state, { payload }) => {
      state.todoItems = state.todoItems.filter(
        (item) => item.id !== payload?.id
      );
    },
  },
});
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
