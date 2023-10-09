import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../Data/data";

const initialState = {
  users: UsersData,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    updateUser: (state, action) => {},
    deleteUser: (state, action) => {
      let copyData = state.users;
      copyData.splice(action.payload, 1);
      state.users = [...copyData];
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
