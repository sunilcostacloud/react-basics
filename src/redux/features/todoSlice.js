import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    updateTodo: (state, action) => {
        const {selectedItem, eidtText} = action.payload
        const updatedList = state.list.map(item => item.id === selectedItem.id ? {...item, text: eidtText}: item)
        state.list = updatedList
    },
    deleteTodo: (state, action) => {
        state.list = state.list.filter(todo => todo.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
