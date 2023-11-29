import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import financeReducer from "./financeSlice";
// import messageReducer from "./messageSlice";
// import lessonsReducer from "./lessonsSlice";
// import appReducer from "./appSlice";
// import analyticsReducer from "./analyticsSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    finance: financeReducer,
    // message: messageReducer,
    // lessons: lessonsReducer,
    // app: appReducer,
    // analytics: analyticsReducer,
  },
});
