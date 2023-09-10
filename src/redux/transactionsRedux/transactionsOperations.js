import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://moneyguardbackend.onrender.com/';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/transactions');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteItem = createAsyncThunk(
  'transactions/deleteItem',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/transactions/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

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
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const editItem = createAsyncThunk(
  'transactions/editItem',
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const response = await axios.put(`/transactions/${id}`, updatedData);
      return response.data;
    } catch (e) {
      toast.error(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
