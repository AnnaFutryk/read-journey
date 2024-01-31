import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authOperations } from "../auth/authOperations";

axios.defaults.baseURL = "https://readjourney.b.goit.study/api";

export const getAllBooks = createAsyncThunk(
  "books/recommend",
  async (_, thunkAPI) => {
    await thunkAPI.dispatch(authOperations.refreshAccessToken());
    const token = thunkAPI.getState().auth.token;

    try {
      const response = await axios.get("/books/recommend", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async ({ page = 1, limit = 10 }, thunkAPI) => {
    console.log("Page in action:", page);
    await thunkAPI.dispatch(authOperations.refreshAccessToken());
    const token = thunkAPI.getState().auth.token;

    try {
      const response = await axios.get("/books/recommend", {
        params: { page, limit },
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
