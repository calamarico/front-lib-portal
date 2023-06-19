import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BooksDataService from "../services/booksDataService";

const initialState = [];

export const searchBooks = createAsyncThunk(
  "books/search",
  async ({ text }) => {
    const res = await BooksDataService.search(text);
    return res.data;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: {
    [searchBooks.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = booksSlice;
export default reducer;