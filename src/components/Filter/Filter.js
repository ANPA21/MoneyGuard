import { FilerInput, FilterText, Title, Wrapper } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onInputChange = event => {
    dispatch(addFilter(event.target.value));
  };
  return (
    <Wrapper>
      <Title>Contacts</Title>
      <FilterText> Filter contacts by name</FilterText>
      <FilerInput type="text" onChange={onInputChange} />
    </Wrapper>
  );
};
