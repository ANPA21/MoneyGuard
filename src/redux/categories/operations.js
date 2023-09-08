import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://moneyguardbackend.onrender.com';

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/categories');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
