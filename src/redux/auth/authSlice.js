import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: null,
    fullName: null,
    token: null,
    role: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { fullName, accessToken } = action.payload;
      const decode = jwtDecode(accessToken);
      const role = decode?.role;
      const email = decode?.email;
      state.email = email;
      state.fullName = fullName;
      state.token = accessToken;
      state.role = role;
    },
    logOut: (state, action) => {
      state.email = null;
      state.fullName = null;
      state.token = null;
      state.role = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
export const selectCurrentEmail = (state) => state.auth.email;
export const selectCurrentfullName = (state) => state.auth.fullName;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentRole = (state) => state.auth.role;
