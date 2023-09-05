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
// import { PersistedTransactionReducer } from './transactionsRedux/transactionsSlice';
import { modalReducer } from './modal/ModalSlice';
import { PersistedCurrencyReducer } from './currencyReducer/currencySlice';
import { PersistedAuthReducer } from './authReducer/slice';
import { transactionReducer } from './transactions/transactionSlice';

export const store = configureStore({
  reducer: {
    auth: PersistedAuthReducer,
    // transactions: PersistedTransactionReducer,
    modal: modalReducer,
    currency: PersistedCurrencyReducer,
    transactions: transactionReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const peristor = persistStore(store);
