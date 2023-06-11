import PropTypes from 'prop-types';

import { Contact } from '../Contact/Contact';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactsList = ({ removeContactById }) => {
  const contacts = useSelector(state => state.contacts);
  return (
    <List>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          removeContactById={removeContactById}
        />
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  removeContactById: PropTypes.func.isRequired,
};
