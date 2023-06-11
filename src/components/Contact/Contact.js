import PropTypes from 'prop-types';
import { Button, ContactItem } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/contactsSlice';

export const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <span>Name: {name}</span>
      <span>Number: {number}</span>
      <Button type="submit" onClick={() => dispatch(remove(id))}>
        Remove contact
      </Button>
    </ContactItem>
  );
};
Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
