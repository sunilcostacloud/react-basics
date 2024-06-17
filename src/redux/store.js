import { configureStore } from '@reduxjs/toolkit'
import todoReduer from './features/todoSlice'

export const store = configureStore({
  reducer: {
    todo: todoReduer
  },
})