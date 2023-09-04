import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { currencyReducer } from './currencyRedux/currencySlice';
import { transactionReducer } from './transactionsRedux/transactionsSlice';

const persistConfig = {
  key: 'currency',
  storage,
  whitelist: ['data', 'transactions'],
}


//! Для редюсеров два варианта, или вписать сюда настройки для persist, или экспортировать из самого редюсера уже с настройками.
// const authPersistConfig = {
//   key: 'user',
//   storage,
//   whitelist: ['token'],
// };
// тоже самое можно сделать в файлике  самого редюсера, export const persistedAuthReducer = persistReducer(persistConfig, <сам редюсер>);

export const store = configureStore({
  reducer: {
    // auth: редюсер аутентификации, пример persistReducer(authPersistConfig, <сам редюсер>) или persistedAuthReducer если экспортировали уже с конфигом
    transactions: persistReducer(persistConfig, transactionReducer),
    currency: persistReducer(persistConfig, currencyReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const peristor = persistStore(store);
