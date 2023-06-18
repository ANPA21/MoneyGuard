import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const Axios = axios.create({
  baseURL: 'https://648ed99e75a96b6644445c67.mockapi.io/Phonebook',
  responseType: 'json',
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const r = await Axios.get('/contacts');
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
      const r = await Axios.post('/contacts', { ...contact });
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
      const r = await Axios.delete(`/contacts/${id}`);
      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
