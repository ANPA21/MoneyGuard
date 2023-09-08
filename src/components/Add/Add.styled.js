import styled from 'styled-components';
import { Form, Field } from 'formik';
// import Switch from '@mui/material/Switch';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

export const AddTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  color: #fbfbfb;

  @media (min-width: 540px) {
    font-size: 30px;
  }
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  padding: 12px 68px;
  margin-bottom: 20px;
  background: linear-gradient(
    97deg,
    rgba(255, 199, 39, 1) -16.42%,
    rgba(158, 64, 186, 1) 97.04%,
    rgba(112, 0, 255, 1) 150.71%
  );
  border: none;
  border-radius: 20px;
  line-height: 1.5;
  font-size: 18px;
  color: rgba(251, 251, 251, 1);
  text-transform: uppercase;
  letter-spacing: 1.8px;
  cursor: pointer;
`;
export const StyledLabel = styled.label`
  margin-bottom: 40px;
  width: 100%;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .Select {
    width: 100%;
    margin-bottom: 42px;
  }
`;

export const StyledSum = styled(Field)`
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);

  text-align: center;

  line-height: 1.5;
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  width: 181px;
  // padding-bottom: 8px;

  &::placeholder {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
    padding: 0 8px;
  }

  &:focus {
    outline: 0;
  }
`;

export const StyledSelect = styled(Select)`
  font-size: 18px;
  width: 100%;

  .Select__control {
    background-color: transparent;
    height: 35px;
    width: 100%;
    border: 0;
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    cursor: pointer;
    color: rgba(251, 251, 251, 1);
  }

  .Select__placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  .Select__single-value {
    color: rgba(251, 251, 251, 1);
  }

  .Select__control:hover {
    border: 0;
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .Select__control--is-focused {
    border: 0;
    box-shadow: none;
    outline: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__indicator {
    color: rgba(255, 255, 255, 0.1);
    width: auto;
  }

  .Select__menu {
    background: linear-gradient(
      0deg,
      rgba(83, 61, 186, 1) 0%,
      rgba(80, 48, 154, 1) 43.14%,
      rgba(106, 70, 165, 1) 73.27%,
      rgba(133, 93, 175, 0.9) 120.03%
    );
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    color: rgba(251, 251, 251, 1);
    font-size: 16px;
    border-radius: 8px;
    max-height: 352px;
  }

  .Select__menu-list {
    height: 100%;
    overflow: hidden;
  }

  .Select__option--is-focused {
    color: rgba(255, 134, 141, 1);
    background-color: rgba(255, 255, 255, 0.1);
  }

  .Select__dropdown-indicator {
    color: rgba(251, 251, 251, 1);

    &:hover {
      color: rgba(251, 251, 251, 1);
    }
  }
`;

export const StyledComment = styled(Field)`
  display: inherit;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);

  &::placeholder {
    padding: 0 8px;
    padding: 0 8px;
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: 0;
  }
`;

export const SwitcherWrapper = styled.label`
  width: 254px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 42px;
`;
export const Label = styled.label`
  width: 181px;
  &:not(:last-child) {
    margin-right: 32px;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: baseline;
  width: 100%;

  ${Field} {
    @media (min-width: 540px) {
      padding-left: 20px;
      text-align: left;
    }
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  display: inherit;
  width: 181px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  font-family: 'Poppins';
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding: 0 8px;
`;
