import { createSlice } from "@reduxjs/toolkit";
import { user_login, user_password } from "../config";

const initialState = {
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      if (
        action.payload.username === user_login &&
        action.payload.password === user_password
      ) {
        state.isLogged = true;
      } else {
        //or any other way to notify the user about the error
        console.log("Incorrect login or password!");
      }
    },
    logOut: (state) => {
      state.isLogged = false;
    },
  },
});

const { reducer, actions } = userSlice;

export const { logIn, logOut } = actions;
export default reducer;
