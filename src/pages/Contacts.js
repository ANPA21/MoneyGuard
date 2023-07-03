import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectCombinedContacts } from 'redux/contacts/selectors';
import { Notification } from 'components/Notification/Notification';
import { Filter } from 'components/Filter/Filter';
import { Wrapper } from '../components/utils/Contacts.styled';
import { ContactForm } from 'components/Form/Form';
import { ContactsList } from 'components/ContactList/ContactList';
import { Helmet } from 'react-helmet';
import { selectFilter } from 'redux/filter/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectCombinedContacts);
  const filter = useSelector(selectFilter);
  return (
    <Wrapper>
      <Helmet>
        <title>My Contacts</title>
      </Helmet>
      <ContactForm />
      <Filter />
      {contacts.length > 0 && <ContactsList />}
      {contacts.length === 0 && filter !== '' && <Notification />}
    </Wrapper>
  );
};

export default Contacts;
