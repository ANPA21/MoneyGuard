import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { fetchCurrency } from './currencyOperations';
import { handlePending, handleRejected } from './currencyHandlers';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  fetchingTime: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchCurrency.pending, handlePending)
      .addCase(fetchCurrency.rejected, handleRejected)
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload.data;
        state.fetchingTime = action.payload.fetchingTime;
      }),
});

const authPersistConfig = {
  key: 'currency',
  storage,
  whitelist: ['data', 'fetchingTime'],
};
const currencyReducer = currencySlice.reducer;

export const PersistedCurrencyReducer = persistReducer(
  authPersistConfig,
  currencyReducer
);
