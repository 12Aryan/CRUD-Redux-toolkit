import { createSlice } from "@reduxjs/toolkit";
import {UsersData} from '../Data/data'

const initialState = {
  users: UsersData,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
        console.log('payload', action.payload);
        state.users= [...state.users,action.payload]
    },
    updateUser: (state, action) => {},
    deleteUser: (state, action) => {},
  },
});

export const  {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;
