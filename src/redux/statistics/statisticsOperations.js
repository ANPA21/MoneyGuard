import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import 'url-search-params-polyfill';

axios.defaults.baseURL = 'https://moneyguardbackend.onrender.com/';

export const getStatistics = createAsyncThunk(
  'statistics/getStatistics',
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/transactions/statistics?${query}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  'statistics/getCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('transactions/categories');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
