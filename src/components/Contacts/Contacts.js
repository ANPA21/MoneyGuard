import { ContactsList } from '../ContactList/ContactList';
import { Title, Wrapper } from './Contacts.styled';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../Form/Form';
import { Notification } from '../Notification/Notification';
import { useGetInitContacts } from '../Hooks/useGetInitContacts';

const { useState, useEffect } = require('react');
const LS_KEY = 'contacts';

export const Contacts = () => {
  const [contacts, setContacts] = useGetInitContacts(LS_KEY);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (checkExistingContact(newContact.name)) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const addFilterQuery = filterQuery => {
    setFilter(filterQuery);
  };
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const checkExistingContact = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };
  const removeContactById = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  let noResultsNotification = null;
  if (filter !== '' && getFilteredContacts().length === 0) {
    noResultsNotification = <Notification />;
  }
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm onAdd={addContact} />
      <Title>Contacts</Title>
      <Filter addFilterQuery={addFilterQuery} filter={filter} />
      <ContactsList
        contacts={getFilteredContacts()}
        removeContactById={removeContactById}
      />
      {noResultsNotification}
    </Wrapper>
  );
};

export default Contacts;
