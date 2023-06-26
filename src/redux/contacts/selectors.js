import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selectors';

export const selectContacts = state => state.contacts.items;

export const selectCombinedContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
