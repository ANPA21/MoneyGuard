import { createSlice } from '@reduxjs/toolkit';
import { addTransaction } from './operations';

const initialState = {
  transactions: [
    {
      type: null,
      category: null,
      value: null,
      comment: null,
    },
  ],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(addTransaction.pending, handlePending)
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactions.push(action.payload);
      })
      .addCase(addTransaction.rejected, handleRejected),
  // .addCase(fetchCategories.pending, pendingReducer)
  // .addCase(fetchCategories.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.items = action.payload;
  // })
  // .addCase(fetchCategories.rejected, rejectedReducer),

  // reducers: {
  //   addTransaction: {
  //     reducer(state, action) {
  //       state.transactions.push(action.payload);
  //     },
  //     prepare(type, category, value, date, comment) {
  //       return {
  //         payload: {
  //           type,
  //           category,
  //           value,
  //           comment,
  //         },
  //       };
  //     },
  //   },
  // },
});

export const transactionReducer = transactionSlice.reducer;

// export const { addTransaction } = transactionSlice.actions;
