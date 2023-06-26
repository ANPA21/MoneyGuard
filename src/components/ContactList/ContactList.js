import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { selectCombinedContacts } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectCombinedContacts);
  return (
    <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
