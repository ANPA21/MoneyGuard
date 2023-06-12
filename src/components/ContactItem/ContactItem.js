import PropTypes from 'prop-types';
import { Button, ContactItemStyled } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/contactsSlice';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <ContactItemStyled>
      <span>Name: {name}</span>
      <span>Number: {number}</span>
      <Button type="submit" onClick={() => dispatch(remove(id))}>
        Remove contact
      </Button>
    </ContactItemStyled>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
