import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  users: [
    { username: "aman1", password: "amanpassword1" },
    { username: "aman2", password: "amanpassword2" },
  ],
};

const authSlice = createSlice({
  name: "useAuth",
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.users.map((data) => {
        if (action.payload.username === data.username) {
          state.currentUser = true;
          return;
        } else {
        }
      });
    },
    logOut: (state) => {
      state.currentUser = null;
    },
  },
});
export const { authUser, logOut } = authSlice.actions;
export default authSlice.reducer;
