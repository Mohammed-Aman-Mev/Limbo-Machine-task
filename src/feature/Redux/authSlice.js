import { createSlice } from "@reduxjs/toolkit";

const user_OK = JSON.parse(localStorage.getItem("myUser"));

const initialState = {
  currentUser: user_OK ? user_OK : null,
  users: [
    { username: "aman1", password: "12345" },
    { username: "aman2", password: "67890" },
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
          localStorage.setItem("myUser", JSON.stringify(action.payload));

          return;
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
