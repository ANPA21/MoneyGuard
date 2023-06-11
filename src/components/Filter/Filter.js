import PropTypes from 'prop-types';
import { Wrapper } from './Filter.styled';

export const Filter = ({ addFilterQuery, filter }) => {
  const onInputChange = event => {
    addFilterQuery(event.target.value);
  };
  return (
    <Wrapper>
      Filter contacts by name
      <input type="text" value={filter} onChange={onInputChange} />
    </Wrapper>
  );
};

Filter.propTypes = {
  addFilterQuery: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
