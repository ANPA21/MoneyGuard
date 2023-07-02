import {
  FilterInput,
  FilterText,
  InputWrapper,
  SearchIconSt,
  Title,
  Wrapper,
} from './Filter.styled';
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
      <InputWrapper>
        <FilterInput type="text" onChange={onInputChange} />
        <SearchIconSt />
      </InputWrapper>
    </Wrapper>
  );
};
