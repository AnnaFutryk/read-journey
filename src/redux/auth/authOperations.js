import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://readjourney.b.goit.study/api";

const authHeaderToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const signUp = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("users/signup", credentials);
      authHeaderToken.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const signIn = createAsyncThunk(
  "auth/signin",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signin", credentials);
      authHeaderToken.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const signOut = createAsyncThunk("auth/signout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/signout");
    authHeaderToken.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const currentUser = createAsyncThunk("auth/current", async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;

  if (!token) {
    return thunkAPI.rejectWithValue("Unable to fetch User");
  }

  authHeaderToken.set(token);

  try {
    const res = await axios.get("/users/current");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const refreshAccessToken = createAsyncThunk(
  "auth/refreshAccessToken",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.refreshToken;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("Unable to refresh access token");
    }

    authHeaderToken.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current/refresh");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authOperations = {
  signUp,
  signIn,
  signOut,
  currentUser,
  refreshAccessToken,
};
