import { createSlice } from "@reduxjs/toolkit";

import { authOperations } from "./authOperations";

const initialState = {
  name: "",
  email: "",
  avatar: "",
  token: "",
  refreshToken: "",
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
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
        console.log(payload);
      })
      .addCase(authOperations.signIn.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.avatar = payload.avatar;
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.signOut.fulfilled, (state) => {
        state.name = "";
        state.email = "";
        state.token = "";
        state.refreshToken = "";
        state.isLoggedIn = false;
      })
      .addCase(authOperations.signOut.rejected, (state) => {
        state.name = "";
        state.email = "";
        state.token = "";
        state.refreshToken = "";
        state.isLoggedIn = false;
      })
      .addCase(authOperations.currentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.currentUser.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.avatar = payload.avatar;
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(authOperations.currentUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(
        authOperations.refreshAccessToken.fulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.refreshToken = payload.refreshToken;
          state.isLoggedIn = true;
          state.isRefreshing = false;
          console.log("Access token refreshed:", payload);
        }
      )
      .addCase(authOperations.refreshAccessToken.rejected, (state, action) => {
        state.isRefreshing = false;
        console.error("Failed to refresh access token", action.error.message);
      }),
});

export const authReducer = authSlice.reducer;
