import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BooksDataService from "../services/booksDataService";

export const fetchSearch = createAsyncThunk<string[], string, { rejectValue: string }>(
  "books/fetchSearch",
  async (text, _api) => {
    try {
      const response = await BooksDataService.search(text);
      return response.data;
    } catch (error) {
      return _api.rejectWithValue('Failed to get search results.');
    }
  }
);
interface SearchState {
  data: string[];
  loading: boolean;
  error: string | null;
}
const initialState: SearchState = {
  data: [],
  loading: false,
  error: null,
};
export const searchSlice = createSlice({
  name: 'search_books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});
export default searchSlice.reducer;