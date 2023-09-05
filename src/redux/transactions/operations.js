import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://moneyguardbackend.onrender.com/';

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async ({ type, category, value, date, comment = '' }, thunkAPI) => {
    try {
      const response = await axios.post('/transactions', {
        type,
        category,
        value,
        date,
        comment,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
