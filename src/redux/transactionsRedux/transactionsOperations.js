import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://64f608582b07270f705e08d0.mockapi.io/";

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/transactions");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });

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

export const addItem = createAsyncThunk(
  'transactions/addItem',
  async (item, thunkAPI) => {
    try {
      const response = await axios.post("/transactions", item);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
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
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);