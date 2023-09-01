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
import { PersistedCurrencyReducer } from './currencyReducer/currencySlice';

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
    // transactions: тут редюсер для транзакций
    currency: PersistedCurrencyReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const peristor = persistStore(store);
