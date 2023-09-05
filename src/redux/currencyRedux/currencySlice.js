import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './currencyOperations';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    data: [],
    isLoading: false,
    error: null
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchCurrency.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
})

export const currencyReducer = currencySlice.reducer;

