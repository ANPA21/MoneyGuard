import { createAction, createSlice } from '@reduxjs/toolkit';
import { checkExistingContacts } from 'components/utils/checkExistingContact';

const initialState = [];
export const add = createAction('contacts/add', contact => {
  return {
    payload: contact,
  };
});
export const remove = createAction('contacts/remove');

// export const contactsReducer = createReducer(initialState, builder =>
//   builder.addCase(add, (state, action) => {
//     state.contacts.push(action.payload);
//   })
// );
// .addCase(remove, (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     })
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add(state, action) {
      const name = action.payload.name;
      if (checkExistingContacts(state, name)) {
        alert(`${name} is already in contacts!`);
        return;
      }
      state.push(action.payload);
    },
    remove(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const contactsReducer = contactSlice.reducer;
