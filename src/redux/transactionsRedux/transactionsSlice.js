import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import {
  fetchTransactions,
  deleteItem,
  addItem,
  editItem,
} from './transactionsOperations';

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTransactions.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteItem.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.transactions.findIndex(
          item => item.id === action.payload.id
        );
        state.item.splice(index, 1);
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addItem.pending, state => {
        state.isLoading = true;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactions.push(action.payload);
      })
      .addCase(addItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editItem.pending, state => {
        state.isLoading = true;
      })
      .addCase(editItem.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

const persistConfig = {
  key: 'transactions',
  storage,
  whitelist: ['data', 'transactions'],
};

const transactionReducer = transactionSlice.reducer;
export const PersistedTransactionReducer = persistReducer(
  persistConfig,
  transactionReducer
);
