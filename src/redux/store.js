import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { modalReducer } from './modal/ModalSlice';
import { PersistedCurrencyReducer } from './currencyReducer/currencySlice';
import { PersistedAuthReducer } from './authReducer/slice';
import balanceReducer from './balance/balance.Slice';
import { PersistedTransactionReducer } from './transactionsRedux/transactionsSlice';
import { PersistedStatisticsReducer } from './statistics/statisticsSlice';

export const store = configureStore({
  reducer: {
    auth: PersistedAuthReducer,
    modal: modalReducer,
    currency: PersistedCurrencyReducer,
    balance: balanceReducer,
    transactions: PersistedTransactionReducer,
    statistics: PersistedStatisticsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const peristor = persistStore(store);
