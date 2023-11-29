import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import financeReducer from "./financeSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    finance: financeReducer,
  },
});
