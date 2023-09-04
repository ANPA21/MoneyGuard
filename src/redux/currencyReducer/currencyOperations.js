import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrency = createAsyncThunk(
  'currency/fetchCurrency',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('https://api.monobank.ua/bank/currency');
      const fetchedCurrency = res.data
        .slice(0, 2)
        .reduce((result, currency) => {
          if (currency.currencyCodeA === 840) {
            result.USD = currency.rateBuy;
          } else {
            result.EUR = currency.rateBuy;
          }
          return result;
        }, {});
      return fetchedCurrency;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
