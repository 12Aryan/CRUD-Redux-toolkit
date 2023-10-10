import React, { useState } from "react";
import { UsersData } from "../Data/data";
import "../css/User.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../Redux/userSlice";

const Users = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.users);
  const [userData, setUserData] = useState("");

  const [user, setUser] = useState({
    id: "",
    name: "",
    username: "",
  });
  const [updatedUser, setUpdatedUser] = useState({
    id: "",
    newName: "",
    newUserName: "",
  });

  const getUserData = (e) => {
    console.log("-->>", e.target.value);

    const userData = e.target.value;
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: userData,
      id: userList.length + 1,
    }));
  };
  const addUserData = () => {
    dispatch(addUser(user));
    setUser({
      id: "",
      name: "",
      username: "",
    });
  };
  const deleteUserData = (userID) => {
    dispatch(deleteUser(userID));
  };
  const getUpdatedData = (event, userId) => {
    console.log("-->>", event.target.value);
    const updatedUserData = event.target.value;
    setUpdatedUser((prevState) => ({
      ...prevState,
      id: userId,
      [event.target.name]: updatedUserData,
    }));
  };
  const updateUserData = () => {
    dispatch(updateUser(updatedUser));
    setUpdatedUser({
      id: "",
      newName: "",
      newUserName: "",
    });
  };
  console.log("updateUser-->>", updatedUser);
  return (
    <div className="App">
      <div className="addUsers">
        <input
          name="name"
          type="text"
          placeholder="Enter Your Name"
          value={user.name}
          onChange={(e) => getUserData(e)}
        />
        <input
          name="username"
          type="text"
          placeholder="Enter Your UserName"
          value={user.username}
          onChange={(e) => getUserData(e)}
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
              <input
                name="newName"
                type="text"
                placeholder="update name"
                // value={user.name}
                onChange={(e) => getUpdatedData(e, user.id)}
              />
              <input
                name="newUserName"
                type="text"
                placeholder="update user_name"
                // value={user.username}
                onChange={(e) => getUpdatedData(e, user.id)}
              />
              <button onClick={updateUserData}>Update user</button>
              <button onClick={() => deleteUserData(user.id)}>
                Delete user
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
