import { createSlice } from "@reduxjs/toolkit";

import { authOperations } from "./authOperations";

const initialState = {
  name: "",
  email: "",
  avatar: "",
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(authOperations.signUp.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.avatar = payload.avatar;
        state.token = payload.token;
        state.isLoggedIn = true;
        console.log(payload);
      })
      .addCase(authOperations.signIn.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.avatar = payload.avatar;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.signOut.fulfilled, (state) => {
        state.name = "";
        state.email = "";
        state.token = "";
        state.isLoggedIn = false;
      })
      .addCase(authOperations.signOut.rejected, (state) => {
        state.name = "";
        state.email = "";
        state.token = "";
        state.isLoggedIn = false;
      })
      .addCase(authOperations.currentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.currentUser.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.avatar = payload.avatar;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(authOperations.currentUser.rejected, (state) => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
