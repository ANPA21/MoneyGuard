import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './operations';

const initialState = {
  category: [],
  isLoading: false,
  error: null,
};

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchCategories.pending, pendingReducer)
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.category = action.payload;
      })
      .addCase(fetchCategories.rejected, rejectedReducer),
});

export const categoryReducer = categorySlice.reducer;
