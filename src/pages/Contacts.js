import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectCombinedContacts } from 'redux/selectors';
import { Notification } from 'components/Notification/Notification';
import { Filter } from 'components/Filter/Filter';
import { Title, Wrapper } from '../components/utils/Contacts.styled';
import { ContactForm } from 'components/Form/Form';
import { ContactsList } from 'components/ContactList/ContactList';
import { Helmet } from 'react-helmet';

export const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectCombinedContacts);
  return (
    <Wrapper>
      <Helmet>
        <title>My Contacts</title>
      </Helmet>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {contacts.length > 0 ? <ContactsList /> : <Notification />}
    </Wrapper>
  );
};
