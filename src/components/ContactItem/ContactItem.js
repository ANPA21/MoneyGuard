import PropTypes from 'prop-types';
import {
  ButtonStyled,
  ContactItemStyled,
  ContactMainText,
  ContactSecondaryText,
  ContactTextWrapper,
} from './Contact.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/operations';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <ContactItemStyled>
      <ContactTextWrapper>
        <ContactMainText>
          Name: <ContactSecondaryText>{name}</ContactSecondaryText>
        </ContactMainText>
        <ContactMainText>
          Number: <ContactSecondaryText>{number}</ContactSecondaryText>
        </ContactMainText>
      </ContactTextWrapper>
      <ButtonStyled
        variant="outlined"
        color="error"
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
