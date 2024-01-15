import { configureStore } from "@reduxjs/toolkit";
import userdata from "./UserSlice";
import userAuthReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    userReducer: userdata,
    userAuth: userAuthReducer,
  },
});
