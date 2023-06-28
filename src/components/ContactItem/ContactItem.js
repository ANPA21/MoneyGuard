import PropTypes from 'prop-types';
import { ButtonStyled, ContactItemStyled } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/operations';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <ContactItemStyled>
      <span>Name: {name}</span>
      <span>Number: {number}</span>
      <ButtonStyled
        variant="outlined"
        color="secondary"
        type="submit"
        onClick={() => dispatch(removeContact(id))}
      >
        Remove contact
      </ButtonStyled>
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
