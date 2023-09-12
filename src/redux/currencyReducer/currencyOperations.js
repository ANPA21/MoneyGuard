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
            result.USD = {
              buy: currency.rateBuy,
              sale: currency.rateSell,
            };
          } else if (currency.currencyCodeA === 978) {
            result.EUR = {
              buy: currency.rateBuy,
              sale: currency.rateSell,
            };
          }
          return result;
        }, {});
      const fetchingTime = new Date().toString();
      return { data: fetchedCurrency, fetchingTime };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
