import { ContactsList } from '../ContactList/ContactList';
import { Title, Wrapper } from './Contacts.styled';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../Form/Form';
import { Notification } from '../Notification/Notification';
import { useSelector } from 'react-redux';

export const Contacts = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  let noResultsNotification = null;
  if (filter !== '' && getFilteredContacts().length === 0) {
    noResultsNotification = <Notification />;
  }
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter filter={filter} />
      <ContactsList contacts={getFilteredContacts()} />
      {noResultsNotification}
    </Wrapper>
  );
};

export default Contacts;
