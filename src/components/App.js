import { Title, Wrapper } from './App.styled';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectCombinedContacts } from 'redux/selectors';
import { Notification } from './Notification/Notification';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectCombinedContacts);
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {contacts.length > 0 ? <ContactsList /> : <Notification />}
    </Wrapper>
  );
};
