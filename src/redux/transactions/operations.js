import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://moneyguardbackend.onrender.com/';

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (data, { rejectWithValue }) => {
    try {
      if (data.type === 'income') {
        const { category, ...incomeData } = data;
        const response = await axios.post('/transactions', incomeData);
        return response.data;
      } else {
        const response = await axios.post('/transactions', data);
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
