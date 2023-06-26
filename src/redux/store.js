import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterSlice';

import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
