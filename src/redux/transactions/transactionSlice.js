import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { addTransaction } from './operations';

const initialState = {
  transactions: [
    {
      id: 'id-1',
      type: 'income',
      category: '',
      sum: 123,
      date: '07/02/23',
      comment: '',
    },
    // isLoading: false,
    // error: null,
  ],
};

// const pendingReducer = state => {
//   state.isLoading = true;
// };

// const rejectedReducer = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  // extraReducers: builder =>
  //   builder
  // .addCase(addTransaction.pending, pendingReducer)
  // .addCase(addTransaction.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.transactions.push(action.payload);
  //   }).addCase(addTransaction.rejected, rejectedReducer)
  // .addCase(fetchCategories.pending, pendingReducer)
  //     .addCase(fetchCategories.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items = action.payload;
  //     })
  //     .addCase(fetchCategories.rejected, rejectedReducer)
  reducers: {
    addTransaction: {
      reducer(state, action) {
        state.transactions.push(action.payload);
      },
      prepare(type, category, sum, date, comment) {
        return {
          payload: {
            id: nanoid(),
            type,
            category,
            sum,
            date,
            comment,
          },
        };
      },
    },
  },
});

export const transactionReducer = transactionSlice.reducer;

export const { addTransaction } = transactionSlice.actions;
