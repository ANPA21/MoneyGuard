import PropTypes from 'prop-types';
import { Wrapper } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = ({ filter }) => {
  const dispatch = useDispatch();
  const onInputChange = event => {
    dispatch(addFilter(event.target.value));
  };
  return (
    <Wrapper>
      Filter contacts by name
      <input type="text" value={filter} onChange={onInputChange} />
    </Wrapper>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
