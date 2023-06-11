import { createSlice } from '@reduxjs/toolkit';
import { checkExistingContacts } from 'components/utils/checkExistingContact';

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

export const contactsReducer = contactsSlice.reducer;
export const { add, remove } = contactsSlice.actions;
