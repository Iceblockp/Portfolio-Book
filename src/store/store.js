import { configureStore } from '@reduxjs/toolkit'
import dialogReducer from "./slice/dialogSlice"

export const store = configureStore({
  reducer: {
    dialoger: dialogReducer,
  },
})