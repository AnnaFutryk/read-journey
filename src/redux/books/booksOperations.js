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
