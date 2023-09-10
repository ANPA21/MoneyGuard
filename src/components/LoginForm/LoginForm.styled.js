import { Field, Form } from 'formik';
import styled from 'styled-components';
import { MdEmail, MdHttps } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

export const FormStyled = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 0;
`;

export const LabelStyled = styled(`label`)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
`;

export const EmailIcon = styled(MdEmail)`
  color: var(--your-color, rgba(255, 255, 255, 0.6));
`;

export const PasswordIcon = styled(MdHttps)`
  color: var(--your-color, rgba(255, 255, 255, 0.6));
`;

export const UserIcon = styled(FaUser)`
  color: var(--your-color, rgba(255, 255, 255, 0.6));
`;

export const IconInInput = styled.div`
display: flex;
align-items: center;
`;

export const IconContainer = styled.div`
  position: absolute;
`;

export const IconStyled = styled.div`
  position: absolute;
  left: 5px;
  fill: rgba(255, 255, 255, 0.6);
`;

export const ErrorMessageStyled = styled.span`
  color: #cb1a1a; 
  font-size: 14px;
  margin-top: 2px; 
`;

export const InputStyled = styled(Field)`
  width: 100%;
  background-color: transparent !important;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding-left: 25px; 
  position: relative;

  &::placeholder {
    padding: 0 8px;
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus,
  &:hover,
  &:active,
  &:visited {
    outline: none;
  }

  &:focus::placeholder,
  &:active::placeholder {
    transform: translateY(-100%);
    opacity: 1;
  }
`;

export const ErrorContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 8px;
`


