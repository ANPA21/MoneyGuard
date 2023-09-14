import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://moneyguardbackend.onrender.com/';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/transactions');
      const data = response.data;

      localStorage.setItem('transactions', JSON.stringify(data));

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteItem = createAsyncThunk(
  'transactions/deleteItem',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/transactions/${id}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
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
  async ({ id, values }, thunkAPI) => {
    try {
      if (values.type === 'income') {
        const { category, ...changedData } = values;
        const response = await axios.put(`/transactions/${id}`, changedData);
        return response.data;
      } else {
        const response = await axios.put(`/transactions/${id}`, values);
        return response.data;
      }
    } catch (e) {
      toast.error(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
