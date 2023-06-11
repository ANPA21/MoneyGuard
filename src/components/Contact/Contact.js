import PropTypes from 'prop-types';
import { Button, ContactItem } from './Contact.styled';

export const Contact = ({
  contact: { name, number, id },
  removeContactById,
}) => {
  return (
    <ContactItem>
      <span>Name: {name}</span>
      <span>Number: {number}</span>
      <Button type="submit" onClick={() => removeContactById(id)}>
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
  removeContactById: PropTypes.func.isRequired,
};
