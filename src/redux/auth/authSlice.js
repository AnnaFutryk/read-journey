import { createSlice } from "@reduxjs/toolkit";

import { authOperations } from "./authOperations";

const initialState = {
  user: { name: "", email: "", avatar: "" },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
  userAuth: null,
  //   userFavorite: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(authOperations.signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        console.log(payload);
      })
      .addCase(authOperations.signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.signOut.fulfilled, (state) => {
        state.user = { name: "", email: "" };
        state.token = "";
        state.isLoggedIn = false;
      })
      .addCase(authOperations.signOut.rejected, (state) => {
        state.user = { name: "", email: "" };
        state.token = "";
        state.isLoggedIn = false;
      })
      .addCase(authOperations.currentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.currentUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.userAuth = payload.user.userAuth;
        // state.userFavorite = payload.user.userFavorite;
      })
      .addCase(authOperations.currentUser.rejected, (state) => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
