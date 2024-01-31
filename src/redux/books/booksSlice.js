import { createSlice } from "@reduxjs/toolkit";
import { getAllBooks, getBooks } from "./booksOperations";

const pending = (state) => {
  state.isLoading = true;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  results: [],
  totalPages: "",
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(getAllBooks.pending, pending)
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.results = action.payload.results;
        console.log("slice", state.results);
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllBooks.rejected, rejected)
      .addCase(getBooks.pending, pending)
      .addCase(getBooks.fulfilled, (state, action) => {
        state.results = action.payload.results;
        console.log("slice", state.results);
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBooks.rejected, rejected),
});

export const booksReducer = booksSlice.reducer;
