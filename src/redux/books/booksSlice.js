// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const booksApi = createApi({
//   reducerPath: "books",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://readjourney.b.goit.study/api",
//   }),
//   tagTypes: ["Books"],
//   endpoints: (builder) => ({
//     getBooks: builder.query({
//       query: (page = 1, limit = 12) =>
//         `/books/recommended?page=${page}&limit=${limit}`,
//       providesTags: ["Recommended"],
//     }),
//     getAllBooks: builder.query({
//       query: () => "/books/recommended", // <-- Making it consistent
//       providesTags: ["Books"],
//     }),
//   }),
// });

// export const { useGetBooksQuery, useGetAllBooksQuery } = booksApi;

import { createSlice } from "@reduxjs/toolkit";
import { getAllBooks } from "./booksOperations";

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
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllBooks.rejected, rejected),
});

export const booksReducer = booksSlice.reducer;
