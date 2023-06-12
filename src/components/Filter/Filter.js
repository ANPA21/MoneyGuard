import { Wrapper } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onInputChange = event => {
    dispatch(addFilter(event.target.value));
  };
  return (
    <Wrapper>
      Filter contacts by name
      <input type="text" onChange={onInputChange} />
    </Wrapper>
  );
};
