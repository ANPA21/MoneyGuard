import { createSlice } from '@reduxjs/toolkit';
import { checkExistingContacts } from 'components/utils/checkExistingContact';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add(state, action) {
      const name = action.payload.name;
      if (checkExistingContacts(state.contacts, name)) {
        alert(`${name} is already in contacts!`);
        return;
      }
      state.contacts.push(action.payload);
    },
    remove(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};
const contactsReducer = contactsSlice.reducer;
const persistedContactReducer = persistReducer(persistConfig, contactsReducer);

export const { add, remove } = contactsSlice.actions;
export { persistedContactReducer };
