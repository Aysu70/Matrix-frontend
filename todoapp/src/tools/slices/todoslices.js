
import { createSlice } from '@reduxjs/toolkit';


const initialState = []
const todoSlice = createSlice({
  name:"todo",
  initialState,
  reducers:{
    add:(state,action)=>{
      const newTodo = {id:crypto.randomUUID(),title:action.payload, checked:false};
      state.push(newTodo);
    },
    remove:(state,action)=>{
        const index = state.findIndex(item => item.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
    },
    togglecheck:(state,action)=>{
        const item = state.find(item => item.id === action.payload);
        item.checked = !item.checked;
        console.log(JSON.parse(JSON.stringify(state)));
    },
    edit:(state,action)=>{
        const {id, newValue} = action.payload
        const item = state.find(item=> item.id === id);
        item.title = newValue;
    },
    clear:(state,action)=>{
      state = state.splice(0, state.length)
    },
    paste:(state,action)=>{
      const {id, title, checked} = action.payload;
      const todo = {id:id, title: title, checked: checked};
      state.push(todo);
    }
  }
})

export const {add, remove, togglecheck, edit, clear, paste} = todoSlice.actions;
export default todoSlice.reducer;

