import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { Notification } from 'components/Notification/Notification';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
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
