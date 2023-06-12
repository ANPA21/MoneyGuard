import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { Notification } from 'components/Notification/Notification';
import { contactsSelector, filterSelector } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {filteredContacts.length > 0 ? (
        <List>
          {filteredContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      ) : (
        <Notification />
      )}
    </>
  );
};
