import styled from 'styled-components';
import { Form, Field } from 'formik';
// import Switch from '@mui/material/Switch';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const AddTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  color: #fbfbfb;

  @media (min-width: 768px) {
    margin-bottom: 41px;
    font-size: 30px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SwitcherWrapper = styled.label``;

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;

  ${Field} {
    @media (min-width: 768px) {
      /* padding-left: 20px; */
      /* text-align: left; */
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  &:not(:last-child) {
  }
`;

export const StyledSum = styled(Field)`
  &::placeholder {
  }

  &:focus {
  }
`;

export const StyledDatePicker = styled(DatePicker)``;

export const StyledLabel = styled.label``;

export const StyledComment = styled(Field)`
  &::placeholder {
  }

  &:focus {
  }
`;

export const AddBtn = styled.button``;



export const StyledCategory = styled(Field)``;








