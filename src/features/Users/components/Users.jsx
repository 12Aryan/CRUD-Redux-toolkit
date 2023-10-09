import React, { useState } from "react";
import { UsersData } from "../Data/data";
import "../css/User.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../Redux/userSlice";

const Users = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.users);

  const [user, setUser] = useState({
    name: "",
    username: "",
  });

  const getName = (e) => {
    const data = e.target.value;
    setUser((prevState) => ({ ...prevState, name: data }));
  };
  const getUserName = (e) => {
    const data = e.target.value;
    setUser((prevState) => ({ ...prevState, username: data }));
  };
  const addUserData = () => {
    dispatch(addUser(user));
    setUser({
      name: "",
      username: "",
    });
  };
  const deleteUserData = (i) => {
    dispatch(deleteUser(i));
  };
  return (
    <div className="App">
      <div className="addUsers">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={user.name}
          onChange={(e) => getName(e)}
        />
        <input
          type="text"
          placeholder="Enter Your UserName"
          value={user.username}
          onChange={(e) => getUserName(e)}
        />
        <button onClick={addUserData}>Add User</button>
      </div>

      <div className="displayUsers">
        {userList.map((user, i) => {
          return (
            <div key={i}>
            <span>{user.id}</span>
              <h1>{user.name}</h1>
              <h4> {user.username} </h4>
              <button onClick={()=>deleteUserData(i)}>Delete user</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
