import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { getCategories, getStatistics } from './statisticsOperations';

const initialState = {
  statisticsData: null,
  categories: null,
  isLoading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getStatistics.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getStatistics.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.statisticsData = action.payload;
        state.isLoading = false;
      })
      .addCase(getCategories.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      });
  },
});

const statisticsPersistConfig = {
  key: 'statistics',
  storage,
  whitelist: ['statisticsData'],
};

const statisticsReducer = statisticsSlice.reducer;

export const PersistedStatisticsReducer = persistReducer(
  statisticsPersistConfig,
  statisticsReducer
);
