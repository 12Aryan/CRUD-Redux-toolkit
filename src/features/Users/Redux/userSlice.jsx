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
    updateUser: (state, action) => {
       state.users.map((user)=>{
        if(user.id===action.payload.id){
          user.id =  action.payload.id
          user.name =  action.payload.newName
          user.username =  action.payload.newUserName
         
        }
      })
    },
    deleteUser: (state, action) => {
      //one method to delete

      // let copyData = state.users;
      // copyData.splice(action.payload, 1);
      // state.users = [...copyData];

      state.users = state.users.filter((users) => action.payload !== users.id); //another method to delete
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
