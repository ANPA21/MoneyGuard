import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const r = await axios.get('/contacts');
      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const r = await axios.post('/contacts', { ...contact });
      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contact/removeContact',
  async (id, thunkAPI) => {
    try {
      const r = await axios.delete(`/contacts/${id}`);
      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contact/removeContact',
  async (id, contact, thunkAPI) => {
    try {
      const r = await axios.patch(`/contacts/${id}`, { ...contact });
      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
