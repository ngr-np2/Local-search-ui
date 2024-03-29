import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: null,
    userName: null,
    token: null,
    role: null,

  },
  reducers: {
    setCredentials: (state, action) => {
      const { userName, accessToken } = action.payload;
      const decode = jwtDecode(accessToken);
      const role = decode?.role;
      const email = decode?.email;
      state.email = email;
      state.userName = userName;
      state.token = accessToken;
      state.role = role;
    },
    logOut: (state, action) => {
      state.email = null;
      state.userName = null;
      state.token = null;
      state.role = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
export const selectCurrentEmail = (state) => state.auth.email;
export const selectCurrentuserName = (state) => state.auth.userName;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentRole = (state) => state.auth.role;
