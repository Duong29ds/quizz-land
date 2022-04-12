import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Users } from "./interface";
const initialState: Users = {
  users: [
    {
      name: "Dương",
      userRes: 0,
    },
    {
      name: "Cường",
      userRes: 3,
    },
    {
      name: "Nguyệt",
      userRes: 3,
    },
    {
      name: "Thế Anh",
      userRes: 3,
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<{ name: string; userRes: number }>) {
      const newUser = action.payload;
      state.users.push(newUser);
    },
    addUserResults(state, action) {
      const userName = localStorage.getItem("user");
      console.log(userName);
      state.users = state.users.map((user) => {
        if (user.name === userName) {
          console.log({ ...user, userRes: user.userRes + action.payload });
          return { ...user, userRes: user.userRes + action.payload };
        }
        return user;
      });
      console.log(state.users);
    },
  },
});

export const { addUser, addUserResults } = userSlice.actions;

export default userSlice;
