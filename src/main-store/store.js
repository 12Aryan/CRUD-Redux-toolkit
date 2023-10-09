import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Users/Redux/userSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
