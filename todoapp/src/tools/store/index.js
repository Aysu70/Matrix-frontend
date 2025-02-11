
import { configureStore } from '@reduxjs/toolkit'
import todoslices from '../slices/todoslices';

const store = configureStore({
  reducer:{
    todo:todoslices
  }
})

export default store;